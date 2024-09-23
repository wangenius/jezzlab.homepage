import { motion } from "framer-motion";
import TiltCard from "@site/src/pages/TiltCard";

const CTA = () => {
  const features = [
    {
      title: "AI参考跟踪",
      desc: "在情节中添加对象，它将不断跟踪您所有的剧情，您可以随时知道故事和角色的进展",
      img: "img/ref.png",
      name: "参考跟踪",
    },

    {
      title: "动态变化",
      desc: "所有对象都可以随着剧情进展而变化，无论是形象还是设定，让你的角色更立体",
      img: "img/dynamic.png",
      name: "动态变化",
    },
    {
      title: "跨项目共享",
      desc: "可以借用不同作品，甚至其他作者的作品中的对象，不必反复输入同样的内容，让写作更加有趣",
      img: "img/share.png",
      name: "跨项目共享",
    },
  ];
  return (
    <div id="cta" className="pb-0" style={{ backgroundColor: "#F5F4EE" }}>
      <div className="flex flex-col justify-center items-center h-full px-10 lg:px-0">
        <div className="pb-16 mt-12 max-w-2xl px-3 md:px-16 flex flex-col justify-center items-center mx-auto space-y-3 sm:text-center ">
          <h2 className="text-gray-800 sm:text-5xl font-semibold text-4xl pb-3">
            <span className="text-gradient">介子</span>：从创意到现实
          </h2>
          <div className={"text-gray-600 text-lg"}>
            <strong>介子</strong>
            用前沿的AI技术，为你预先解决了基础的文本生成需求，你可以迅速构建作品的独特
            <strong>宏大世界观</strong>
            ，介子帮你将创意转化为现实，使作品从核心创意到具体文本的过程如搭积木般简单明了。
          </div>
        </div>
        <div className="custom-screen  max-w-4xl pb-16 lx:pb-0 xl:max-w-[75%] mx-auto  text-gray-300 ">
          <ul className="space-y-8 gap-x-3 lg:gap-x-8 px-0 sm:px-24 md:px-0 lg:px-12 md:flex md:space-y-0  ">
            {features.map((item, idx) => (
              <TiltCard
                className={
                  "flex-1 flex bg-[#F0EEE5] flex-col overflow-hidden justify-between rounded-xl aspect-[3/4] md:aspect-[2/3] h-auto"
                }
              >
                <div className="flex-1 flex flex-col overflow-hidden justify-between rounded-xl aspect-[3/4] md:aspect-[2/3] h-auto">
                  <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.75,
                      delay: idx / 5,
                    }}
                    key={idx}
                  >
                    <div className="p-6">
                      <h2 className=" text-gray-900 mb-4 text-[1.2rem] font-bold ">
                        {item.title}
                      </h2>
                      <p className="text-gray-900 text-sm sm:text-base  max-w-xl mt-6 ">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pl-6 relative overflow-hidden -mr-12 ">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover shadow-2xl "
                        style={{ objectPosition: "top left" }}
                      />
                    </div>
                  </motion.div>
                </div>
              </TiltCard>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CTA;
