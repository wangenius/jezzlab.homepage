import { motion } from "framer-motion";
import TiltCard from "@site/src/pages/TiltCard";
import { ReactTyped } from "react-typed";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import { useState } from "react";
import { PiPlayFill } from "react-icons/pi";

const BubbleText = () => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <h2 className="text-center mb-6 mt-12 text-6xl sm:text-6xl flex flex-col gap-2 md:text-7xl lg:text-9xl font-thin text-gray-800">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
            className={"inline"}
          >
            <span className={"font-extrabold select-none text-gradient"}>
              全新
            </span>
          </motion.div>
          {"定义写作".split("").map((child, idx) => (
            <span className={"font-extrabold select-none"} key={idx}>
              {child}
            </span>
          ))}
        </div>
        <div>
          {"创造你的".split("").map((child, idx) => (
            <span className={"font-extrabold select-none"} key={idx}>
              {child}
            </span>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.7 }}
            className={"inline"}
          >
            <span className={"font-extrabold select-none text-gradient2"}>
              世界
            </span>
          </motion.div>
        </div>
      </h2>
    </motion.div>
  );
};

const Hero = () => {
  const { siteConfig } = useDocusaurusContext();
  const api = siteConfig.customFields.apiUrl;
  const [video, setVideo] = useState(false);

  return (
    <div className="flex m-w-full min-h-full relative grow flex-col">
      <motion.div
        initial={{ y: 0, opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className={
          "flex px-2 sm:px-6 flex-col  pt-32 pb-12 md:px-24 lg:px-28 justify-between items-center w-full h-[100vh]"
        }
      >
        <BubbleText />

        <ReactTyped
          className={
            "text-[1.5rem] md:text-[1.2rem] text-gray-400 text-center px-5 font-medium"
          }
          style={{
            lineHeight: "36px",
          }}
          backSpeed={50}
          strings={[
            "介子是集成生成式AI技术打造的全新交互的内容创作平台。\n" +
              "致力于为每一位创作者、艺术家或每一个团队提供更先进的创作环境。\n" +
              "从概念到表达，构建充满想象的世界，让创作变得轻而易举",
          ]}
          typeSpeed={45}
        />
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="flex flex-col items-center"
        >
          <div className="flex gap-x-3 flex-row items-center text-sm">
            <button
              onClick={() => {
                window.open("https://jezzlab.com/");
              }}
              className="rounded-lg text-base border-2 border-dashed border-primary bg-primary-darker-1 text-white px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              开始创作
            </button>
            <button
              onClick={() => {
                window.open(`${api}/docs/start`);
              }}
              className={
                "px-5 py-3 hover:underline text-base font-semibold text-primary rounded-lg"
              }
            >
              探索更多
            </button>
          </div>
        </motion.div>
      </motion.div>

      <div
        className="my-20 px-6 rounded-xl mx-2 md:mx-10 lg:mx-24 flex-col flex md:flex-row-reverse items-center justify-center"
        style={{ backgroundColor: "#F0EEE5" }}
      >
        <div className="flex flex-none flex-wrap md:flex-nowrap flex-row text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:writing-mode-vertical-rl text-center font-thin text-gray-400">
          <div className={"flex flex-row md:flex-col"}>
            {"身如介子，".split("").map((child, idx) => (
              <span className={"hoverBlack"} key={idx}>
                {child}
              </span>
            ))}
          </div>
          <div className={"flex flex-row md:flex-col"}>
            {"心藏须弥".split("").map((child, idx) => (
              <span className={"hoverBlack"} key={idx}>
                {child}
              </span>
            ))}
          </div>
        </div>
        {video ? (
          <div className="flex-1 justify-center flex h-full">
            <video
              className="flex py-5 md:py-12 gap-4 sm:gap-6 md:px-12"
              controls
              autoPlay
            >
              <source src="/des.mp4" type="video/mp4" />
              您的浏览器不支持 HTML5 视频标签。
            </video>
          </div>
        ) : (
          <motion.div
            initial={{ y: 200, opacity: 0.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            className="flex-1 relative justify-center flex h-full "
          >
            <div
              onClick={() => {
                setVideo(true);
              }}
              style={{
                top: "calc(50% - 40px)",
              }}
              className={
                "absolute z-[1] cursor-pointer bg-background-darker-1" +
                " hover:bg-background-darker-2 p-6" +
                " rounded-full"
              }
            >
              <PiPlayFill className={"w-20 h-20"} />
            </div>
            <div className="flex py-5 md:py-12 gap-4 sm:gap-6 md:px-12">
              <TiltCard
                children={
                  <img
                    src={"img/homepage copy.png"}
                    alt="a home page"
                    loading="eager"
                    className="  rounded-lg shadow-xl  "
                  />
                }
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;
