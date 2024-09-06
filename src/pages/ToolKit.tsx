import { motion } from "framer-motion";

const ToolKit = () => {
  const features = [
    {
      title: (
        <h2>
          <span className="text-gradient">AI</span>构思情节
        </h2>
      ),

      desc: (
        <p className="text-gray-900 text-l">
          在芥子中，你可以随时用AI创建情节，AI将会基于你创建的世界观为你提供灵感
        </p>
      ),
      img: (
        <div className=" p-2 ">
          <div className=" object-none ">
            <img
              className="  "
              loading="lazy"
              decoding="async"
              src={"img/create_scene.png"}
              alt="AI构思情节"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <h2>
          <span className="text-gradient">AI</span>生成章节
        </h2>
      ),
      desc: (
        <p className="text-gray-900 text-l">
          不喜欢AI一键生成的情节？
          芥子通过AI帮助你把精心设计的情节、角色转为章节大纲及正文，让你的灵感落地
        </p>
      ),
      img: (
        <div className=" relative z-20">
          <div className="  p-2 ">
            <img
              className=" "
              loading="lazy"
              decoding="async"
              src={"img/chapterlize.png"}
              alt="AI生成章节"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <h2>
          <span className="text-gradient">AI</span>续写正文
        </h2>
      ),
      desc: (
        <p className="text-gray-900 text-l">
          在芥子中，你可以选择你喜欢的文字风格进行写作或续写，我们提供所有的基础需求，你可以直观地控制AI
        </p>
      ),
      img: (
        <div>
          <div className=" p-2 ">
            <img
              className=" rounded-lg shadow-xl ring-2 ring-zinc-800/5 "
              src={"img/countwrite.png"}
              alt="AI续写正文"
            />
          </div>
        </div>
      ),
    },

    {
      title: (
        <h2>
          <span className="text-gradient">AI</span>创建对象
        </h2>
      ),
      desc: (
        <p className="text-gray-900 text-l relative">
          任何时候你都可以使用AI创建角色、物品、世界观设定，AI将基于现有的所有内容为你提供灵感
        </p>
      ),
      img: (
        <div className=" ">
          <div className=" p-2 ">
            <img
              className=" "
              loading="lazy"
              decoding="async"
              src={"img/create_target.png"}
              alt="AI创建角色"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div
      id="toolkit"
      className="pb-0 space-y-5 max-w-4xl mx-auto px-10 lg:px-0"
    >
      <div className="max-w-2xl mx-auto space-y-3 sm:text-center mt-10 ">
        <h2 className="text-gray-800 sm:text-5xl font-semibold text-4xl pb-3">
          随时<span className="text-gradient">迸发</span>，无畏瓶颈
        </h2>

        <p className={"text-gray-600 text-lg"}>
          芥子的AI可以介入创作中的任何一个环节，无论是人物设定、情节构思、章节生成、章节大纲生成、风格化续写，芥子可以为你任何阶段的灵感提供AI协助。
        </p>
      </div>
      <div id="toolkits" className=" relative pt-6 sm:pd-0">
        <ul className="">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="  max-w-2xl lg:max-w-6xl grid lg:grid-cols-5 gap-8 lg:gap-16 my-6 sm:my-16 lg:my-10 items-center"
            >
              <div className="col-span-2  ">
                <h2 className=" font-semibold text-xl md:text-2xl  ">
                  {item.title}
                </h2>
                <p className="text-gray-600  mt-6">{item.desc}</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx / 10 }}
                className="col-span-3  md:p-6 relative overflow-hidden  rounded-lg "
                style={{ backgroundColor: "#F0EEE5" }}
              >
                {item.img}
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ToolKit;
