import {
  CSSProperties,
  forwardRef,
  Fragment,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export interface PopoverPropsBase {
  panel: ReactNode;
  children: ReactNode;
  className?: string;
  position?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top left"
    | "top right"
    | "bottom left"
    | "bottom right";
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
  trigger?: "hover" | "click" | "contextMenu";
  disabled?: boolean;
  popClassName?: string;
  popStyle?: CSSProperties;
}

export type PopoverProps = HTMLAttributes<HTMLDivElement> & PopoverPropsBase;

/** 弹出框 */
export const Popover = forwardRef((props: PopoverProps, ref) => {
  const {
    children,
    trigger = "click",
    position = "bottom left",
    panel,
    visible,
    setVisible,
    onClick,
    popClassName,
    onContextMenu,
    popStyle,
    ...rest
  } = props;
  /** 是否展示面板*/
  const [isOpen, setIsOpen] = useState(visible !== undefined ? visible : false);

  const [positionStyle, setPositionStyle] = useState<CSSProperties>({
    top: -1000,
    left: -1000,
  });
  /** 弹出面板的Ref*/
  const popRef = useRef<HTMLDivElement | null>(null);
  /** 激活Pop的item*/
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visible !== undefined) setIsOpen(visible);
  }, [setVisible, visible]);

  useImperativeHandle(ref, () => itemRef.current);

  /** 关闭弹出面板 */
  const closePopover = () => {
    setVisible?.(false);
    setIsOpen(false);
  };

  /** 监听外部点击, 如果符合条件,则关闭面板*/
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !popRef.current?.contains(event.target as Node) &&
        !itemRef.current?.contains(event.target as Node)
      ) {
        closePopover();
      }
    };
    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible, popRef, closePopover]);
  /** Toggle popover visibility */
  const togglePopover = () => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    setVisible?.(!visible);
    setIsOpen((prev) => !prev);
    setTimeout(() => {
      if (popRef.current) {
        const dropdownPositionStyle = calculatePosition(rect, position);
        setPositionStyle(dropdownPositionStyle);
      }
    }, 0);
  };

  /** Calculate position of popover */
  const calculatePosition = (
    rect: DOMRect,
    position: PopoverProps["position"],
  ) => {
    const styles: CSSProperties = {};
    const scrollY = window.scrollY || 0;
    const scrollX = window.scrollX || 0;

    const dropdownWidth = popRef.current?.offsetWidth || 0;
    const dropdownHeight = popRef.current?.offsetHeight || 0;
    const to_bottom = -(
      rect.bottom +
      scrollY +
      dropdownHeight -
      window.innerHeight
    );
    const to_left = rect.right + scrollX - dropdownWidth;
    const to_right = -(rect.left + scrollX + dropdownWidth - window.innerWidth);
    const to_top = rect.top - dropdownHeight;

    switch (position) {
      case "top":
        styles.top =
          to_top > 0
            ? rect.top + scrollY - dropdownHeight
            : rect.bottom + scrollY;
        styles.left = rect.left + scrollX + rect.width / 2 - dropdownWidth / 2;
        break;
      case "top left":
        styles.top =
          to_top > 0
            ? rect.top + scrollY - dropdownHeight
            : rect.bottom + scrollY;
        styles.left =
          to_right > 0
            ? rect.left + scrollX
            : rect.right + scrollX - dropdownWidth;
        break;
      case "top right":
        styles.top =
          to_top > 0
            ? rect.top + scrollY - dropdownHeight
            : rect.bottom + scrollY;
        styles.left =
          to_left > 0
            ? rect.right + scrollX - dropdownWidth
            : rect.left + scrollX;
        break;
      case "bottom":
        styles.top = rect.bottom + scrollY + 2;
        styles.left = rect.left + scrollX + rect.width / 2 - dropdownWidth / 2;
        break;
      case "bottom left":
        styles.top =
          to_bottom > 0
            ? rect.bottom + scrollY
            : rect.top + scrollY - dropdownHeight;
        styles.left =
          to_right > 0
            ? rect.left + scrollX
            : rect.right + scrollX - dropdownWidth;
        break;
      case "bottom right":
        styles.top =
          to_bottom > 0
            ? rect.bottom + scrollY
            : rect.top + scrollY - dropdownHeight;
        styles.left =
          to_left > 0
            ? rect.right + scrollX - dropdownWidth
            : rect.left + scrollX;
        break;
      case "left":
        styles.top = rect.top + scrollY + rect.height / 2 - dropdownHeight / 2;
        styles.left = rect.left + scrollX - dropdownWidth - 2;
        break;
      case "right":
        styles.top =
          to_top > 0 && to_bottom > 0
            ? rect.top + scrollY + rect.height / 2 - dropdownHeight / 2
            : to_top < 0
              ? 0
              : rect.top + scrollY + rect.height - dropdownHeight;
        styles.left = rect.left + rect.width + scrollX;
        break;
      default:
        break;
    }
    return styles;
  };
  return (
    <Fragment>
      <div
        ref={itemRef}
        onContextMenu={(e) => {
          e.preventDefault();
          onContextMenu?.(e);
          if (trigger === "contextMenu") {
            togglePopover();
          }
        }}
        onClick={(e) => {
          onClick?.(e);
          if (trigger !== "contextMenu") togglePopover();
        }}
        {...rest}
      >
        {children}
      </div>

      {!props.disabled &&
        ReactDOM.createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={popRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                style={{
                  ...positionStyle,
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  style={popStyle}
                  className={
                    "bg-white w-full shadow-lg border border-neutral-content rounded-2xl p-2 gap-1 flex flex-col" +
                    " max-h-[100vh]" +
                    ` overflow-hidden ${props.popClassName}`
                  }
                >
                  {panel}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </Fragment>
  );
});
