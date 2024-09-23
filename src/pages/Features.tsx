import {
  PiGhost,
  PiPuzzlePieceDuotone,
  PiReadCvLogoDuotone,
  PiSwatchesDuotone,
} from "react-icons/pi";
import TiltCard from "@site/src/pages/TiltCard";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <PiReadCvLogoDuotone size={28} />,
      title: "情节",

      desc: (
        <span>
          你故事中的情节片段，随时记录你的<strong>灵光一现</strong>
          ，每当你需要，AI可以帮你编写进故事，让写作像搭建积木一般。
        </span>
      ),
    },
    {
      icon: <PiGhost size={28} />,
      title: "对象",
      desc: (
        <span>
          所有与你故事相关的内容，包括<strong>角色、地点、或物品</strong>
          等内容，AI将基于对象内容为你写作。
        </span>
      ),
    },
    {
      icon: <PiSwatchesDuotone size={28} />,
      title: "设定",
      desc: (
        <span>
          用来丰富你的<strong>世界观设定</strong>
          ，无论是能力、性格、技能、称号、职业，规则、任你设置。
        </span>
      ),
    },
    {
      icon: <PiPuzzlePieceDuotone size={28} />,
      title: "插件",
      desc: (
        <span>
          更多有趣的功能，节点式编排，聊天机器人、地图工具、角色关系、创意工坊，让创作玩出
          <strong>新花样</strong>。
        </span>
      ),
    },
  ];

  return (
    <div className="lg:px-32 ">
      <div id="features" className="">
        <div className="flex flex-col max-w-2xl mx-auto space-y-3 items-center text-center mb-10 ">
          <h2 className="text-gray-800 sm:text-5xl font-semibold text-4xl pb-3">
            介子空间
          </h2>

          <div className="text-gray-600 text-lg">
            <strong>介子空间</strong>
            是记录你所创造的世界观的地方，AI会始终遵循你所创建的规则。
          </div>
        </div>
        <div className="flex flex-col lg:flex-row p-3 items-center">
          <motion.div
            initial={{ y: -120, opacity: 0, scale: 0.6 }}
            whileInView={{ y: -20, opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
          >
            <div className="lg:basis-1/3">
              <TiltCard>
                <img
                  src={"img/magic.png"} // 替换成你图片的路径
                  alt="描述图片的内容" // 添加图片的替代文本
                  className="col-span-1 w-80 mx-auto rounded-xl"
                />
              </TiltCard>
            </div>
          </motion.div>

          <ul className="lg:basis-2/3 grid grid-cols-1 gap-y-10 py-10  sm:grid-cols-2 lg:px-16   items-start">
            {features.map((item, idx) => (
              <motion.div
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.75,
                  delay: idx / 20,
                }}
                className="mb-9 flex items-center justify-between px-3 pb-9"
              >
                <li key={idx} className="flex flex-col space-y-4  items-start">
                  <div className="sm:text-l  bg-zinc-900 rounded-2xl px-4 md:px-8 py-2 md:py-3 inline-flex items-center justify-center text-zinc-50 font-semibold  tracking-wide transition hover:-translate-y-2 ease-out hover:shadow-xl">
                    <div className="flex gap-3 items-center">
                      {item.icon}
                      {item.title}
                    </div>
                  </div>
                  <p className={"text-base"}>{item.desc}</p>
                </li>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
