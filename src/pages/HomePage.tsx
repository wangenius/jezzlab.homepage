import { useState } from "react";
import {
  PiGhost,
  PiPuzzlePieceDuotone,
  PiReadCvLogoDuotone,
  PiSwatchesDuotone,
} from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import {
  SiBilibili,
  SiMacos,
  SiSinaweibo,
  SiTencentqq,
  SiTiktok,
  SiWechat,
  SiXiaohongshu,
} from "react-icons/si";
import { BiLogoWindows, BiMenu } from "react-icons/bi";
import { IoLogoChrome } from "react-icons/io";
import GradientWrapper from "@site/src/pages/GradientWrapper";
import SectionWrapper from "@site/src/pages/SectionWrapper";
import Avatar from "boring-avatars";

const ROOT_URL = "https://doc.jezzlab.com";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <ToolKit />

      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <ProductionDownload />
      <Footer />
    </div>
  );
};
export default HomePage;

const ProductionDownload = () => {
  const handleDownload = async () => {
    try {
      // 发起请求获取文件
      const response = await fetch("/Jezz.exe"); // 文件在 public 目录中的相对路径
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // 创建一个临时的 <a> 元素
      const link = document.createElement("a");
      link.href = url;
      link.download = "Jezz.exe"; // 设置下载的文件名

      // 触发点击事件
      document.body.appendChild(link);
      link.click();

      // 清理临时的 <a> 元素
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };
  return (
    <div id={"production_download"} className=" bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center"></div>
          </div>
          <h2 className="text-gray-100 text-3xl font-semibold sm:text-4xl">
            和介子一起开始今天的工作
          </h2>
          <p className="mt-3 text-gray-100">
            一个专家为您的下一个想法创建，遵循最佳实践，删除障碍，按时交付。
          </p>

          <div className="flex justify-center my-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
              <IoLogoChrome size={25} />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">推荐chrome</p>
                <p className="text-sm md:text-base">网页端直接访问</p>
              </div>
            </div>
            <div
              onClick={handleDownload}
              className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2"
            >
              <BiLogoWindows size={25} />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">下载PC端应用</p>
                <p className="text-sm md:text-base">WINDOWS 10/11</p>
              </div>
            </div>

            <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
              <SiMacos size={25} />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">正在开发....</p>
                <p className="text-sm md:text-base">MAC OS</p>
              </div>
            </div>
          </div>
          <small className={"text-gray-50"}>更多途径正在开发...</small>
        </div>
      </div>
    </div>
  );
};

const navigation = [
  { name: "特性", href: "#features" },
  { name: "产品下载", href: "#production_download" },
  { name: "文档", href: `${ROOT_URL}/docs/start` },
  { name: "资源", href: `${ROOT_URL}/blog` },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={"lg:px-20 mt-2"}>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <div className={"flex-1 flex gap-10 justify-between"}>
          <img src={"img/icon.svg"} className={"w-12"} alt={""} />
          <ul className="hidden items-center lg:flex lg:w-auto lg:space-x-6">
            {navigation.map((item) => {
              return (
                <li>
                  <a
                    className="text-sm text-gray-600 hover:text-gray-800"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            onClick={handleMenuToggle}
            className="navbar-burger flex items-center text-blue-600 p-3"
          >
            <BiMenu />
          </button>
        </div>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div
          onClick={() => {
            setIsMenuOpen(false);
          }}
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <img src={"img/icon.png"} className={"w-32"} alt={""} />
            <button
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="navbar-close"
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {navigation.map((item) => {
                return (
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2024</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};
const Hero = () => {
  return (
    <div className=" font-styrene mx-auto flex w-full grow flex-col p-5 justify-center">
      <div className=" flex grow max-h-[80vh] flex-col  gap-4 h-full md:flex-row ">
        <div className="flex basis-2/5 flex-col lg:px-16 md:px-0 md:pl-16 justify-center items-start pt-2 w-full [@media(min-height:900px)]:pt-10">
          <h1 className="text-gray-900 text-4xl font-semibold  lg:text-5xl ">
            重新定义<span className="text-gradient">写作</span>，
            <br />
            创造你的<span className="text-gradient">世界</span>，
          </h1>
          <p className="items-star max-w-xl text-gray-600 text-sm mt-6">
            介子集成先进的AI技术为每一个人，每一个团队，提供优秀的内容创作平台、打开创作的思路，构建充满想象的世界，让创作变得轻而易举
          </p>
          <div className="mt-6 flex gap-x-3 flex-row items-center text-sm">
            <button
              onClick={() => {
                window.open("https://jezzlab.com/login");
              }}
              className={
                "px-5 py-3 bg-primary hover:bg-primary_darker text-white rounded-lg text-sm"
              }
            >
              开始创作
            </button>
            <button
              onClick={() => {
                window.open("https://doc.jezzlab.com/docs");
              }}
              className={
                "px-5 py-3 bg-gray-100 hover:bg-gray-200 text-primary rounded-lg text-sm"
              }
            >
              学习更多
            </button>
          </div>
        </div>
        <div className="md:flex min-h-[80vh] basis-3/5 justify-center">
          <div
            className="md:rounded-xl  flex items-center overflow-hidden "
            style={{ backgroundColor: "#F0EEE5" }}
          >
            <div className="ml-20 -mr-6">
              <div className="">
                <img
                  src={"img/homepage.png"}
                  alt="a home page"
                  loading="eager"
                  className="lg:hero-image w-[40rem] md:w-full max-w-4xl rounded-lg shadow-xl ring-2 ring-zinc-800/5 transform-gpu xl:-ml-4"
                />
              </div>
              <p className="text-6xl font-black text-gray-400 opacity-25">
                身如芥子，心藏须弥
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <PiReadCvLogoDuotone size={28} />,
      title: "情节",

      desc: (
        <span>
          你的每一个情节片段 随时记录你的<strong>灵光一现</strong>
          ，每当你需要，AI可以帮你编写进你的故事，让写作像搭建积木一般
        </span>
      ),
    },
    {
      icon: <PiGhost size={28} />,
      title: "对象",
      desc: (
        <span>
          所有与你故事相关的内容，包括<strong>角色、地点、传说或物品</strong>
          等信息，AI会根据你的需要需要知道什么，它就会在这里查找。
        </span>
      ),
    },
    {
      icon: <PiSwatchesDuotone size={28} />,
      title: "设定",
      desc: (
        <span>
          用来丰富你的<strong>世界观设定</strong>
          ，无论是能力、性格、技能、称号、职业，规则、任你设置{" "}
        </span>
      ),
    },
    {
      icon: <PiPuzzlePieceDuotone size={28} />,
      title: "插件",
      desc: (
        <span>
          更多有趣的功能，聊天机器人、地图工具、角色关系、创意工坊，让创作玩出
          <strong>新花样</strong>
        </span>
      ),
    },
  ];

  return (
    <SectionWrapper>
      <div id={"features"}>
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center px-20 pt-16">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl ">
            用<span className="text-gradient">介子</span>，让你的创意成为现实
          </h2>

          <p className=" mt-6 pb-16 ">
            <strong>介子</strong>
            用前沿的AI技术，为你预先解决了基础的文本生成需求，你可以迅速构建作品的独特
            <strong>宏大世界观</strong>
            ，介子帮你将创意转化为现实，使作品从核心创意到具体文本的过程如搭积木般简单明了。
          </p>
        </div>
        <div className="flex flex-col lg:flex-row p-3 lg:p-20 gap-x-20">
          <div className={"flex-1"}>
            <img
              src={"img/codex2.jpg"} // 替换成你图片的路径
              alt="描述图片的内容" // 添加图片的替代文本
              className="col-span-1 w-80 mx-auto rounded-xl"
            />
          </div>

          <ul className="flex-1 grid items-center gap-x-12 mt-5 lg:mt-0 gap-y-8 grid-cols-2 p-2 lg:p-10">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="ext-l sm:text-l bg-zinc-900 rounded-2xl px-4 md:px-8 py-2 md:py-3 inline-flex items-center justify-center text-zinc-50 font-semibold  tracking-wide transition hover:-translate-y-2 ease-out hover:shadow-xl">
                  <div className={"flex gap-2 items-center"}>
                    {item.icon}
                    {item.title}
                  </div>
                </div>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

const CTA = () => {
  const features = [
    {
      title: "AI参考跟踪",
      desc: "在情节中添加对象，它将不断跟踪您所有的剧情，您可以随时知道故事和角色的进展",
      img: "img/ref.png",
      name: "参考跟踪",
    },
    {
      title: "跨项目共享",
      desc: "可以借用不同作品，甚至其他作者的作品中的对象，不必反复输入同样的内容，让写作更加有趣",
      img: "img/share.png",
      name: "跨项目共享",
    },
    {
      title: "动态变化",
      desc: "所有对象都可以随着剧情进展而变化，无论是形象还是设定，让你的角色更立体",
      img: "img/dynamic.png",
      name: "动态变化",
    },
  ];
  return (
    <SectionWrapper
      id="cta"
      className="pb-0  "
      style={{ backgroundColor: "#F5F4EE" }}
    >
      <div className="flex flex-col justify-center items-center h-full px-10 lg:px-0">
        <div className="py-10 max-w-2xl flex flex-col justify-center items-center mx-auto space-y-3 sm:text-center ">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl ">
            用<span className="text-gradient">介子</span>，让你的创意成为现实
          </h2>

          <p className=" mt-6  ">
            <strong>介子</strong>
            用前沿的AI技术，为你预先解决了基础的文本生成需求，你可以迅速构建作品的独特
            <strong>宏大世界观</strong>
            ，介子帮你将创意转化为现实，使作品从核心创意到具体文本的过程如搭积木般简单明了。
          </p>
        </div>
        <div className="custom-screen  max-w-4xl mx-auto  text-gray-300">
          <div className="mt-12">
            <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="flex-1 flex flex-col  overflow-hidden justify-between rounded-xl h-[400px] "
                  style={{ backgroundColor: "#F0EEE5" }}
                >
                  <div className="p-6 ">
                    <h2 className=" text-gray-900 mb-4 ext-l font-bold sm:text-l">
                      {item.title}
                    </h2>
                    <p className="text-gray-900  text-l font-light ">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pl-6 relative overflow-hidden ">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover shadow-2xl"
                      style={{ objectPosition: "top left" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ToolKit = () => {
  const features = [
    {
      title: (
        <h2>
          情节<span className="text-gradient">构思</span>
        </h2>
      ),

      desc: (
        <p className="text-gray-600 text-l">
          在介子中，你可以随时用AI创建情节，AI将会基于你创建的世界观为你提供灵感
        </p>
      ),
      img: (
        <div className=" relative z-20">
          <div className=" object-none ">
            <img
              className=" w-3/5 mt-6  mr-6 ml-auto  rounded-lg shadow-xl ring-2 ring-zinc-800/5 "
              loading="lazy"
              decoding="async"
              src={"img/create_scene.png"}
              alt="章节化"
            />
          </div>
          <div className="-mt-24 ">
            <img
              className=" w-1/3 mb-6 ml-6 rounded-lg shadow-xl ring-2 ring-zinc-800/5"
              loading="lazy"
              decoding="async"
              src={"img/ai_story.png"}
              alt="章节化"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <h2>
          章节<span className="text-gradient">生成</span>
        </h2>
      ),
      desc: (
        <p className="text-gray-600 text-l">
          不喜欢AI一键生成的情节？
          介子通过AI帮助你把精心设计的情节、角色转为章节大纲及正文，让你的灵感落地
        </p>
      ),
      img: (
        <div className=" relative z-20">
          <div className="  ">
            <img
              className=" w-2/5 mt-6 ml-48 rounded-lg shadow-xl ring-2 ring-zinc-800/5"
              loading="lazy"
              decoding="async"
              src={"img/chapter2.png"}
              alt="章节化"
            />
          </div>
          <div className=" relative object-none z-10">
            <img
              className="w-1/3 ml-6 rounded-lg shadow-xl ring-2 ring-zinc-800/5 -mt-12 "
              loading="lazy"
              decoding="async"
              src={"img/chapter1.png"}
              alt="章节化"
            />
          </div>
          <div className=" object-none ">
            <img
              className=" w-2/5 -mt-44 mb-6 mr-16 ml-auto  rounded-lg shadow-xl ring-2 ring-zinc-800/5 "
              loading="lazy"
              decoding="async"
              src={"img/chapter3.png"}
              alt="章节化"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <h2>
          风格化<span className="text-gradient">正文写作</span>
        </h2>
      ),
      desc: (
        <p className="text-gray-600 text-l">
          在介子中，你可以选择你喜欢的文字风格进行写作或续写，我们提供所有的基础需求，你可以直观地控制AI
        </p>
      ),
      img: (
        <div>
          <div className="  ">
            <img
              className=" mt-6 ml-auto -mr-6 rounded-lg -mb-6 shadow-xl ring-2 ring-zinc-800/5 "
              src={"img/countwrite.png"}
              alt="风格化续写"
            />
          </div>
        </div>
      ),
    },

    {
      title: "对象创建",
      desc: (
        <p className="text-gray-600 text-l relative">
          任何时候你都可以使用AI创建角色、物品、世界观设定，AI将基于现有的所有内容为你提供灵感
        </p>
      ),
      img: (
        <div className=" ">
          <div className=" ">
            <img
              className=" w-1/3 ml-auto mr-10
             rounded-lg shadow-xl ring-2 ring-zinc-800/5"
              loading="lazy"
              decoding="async"
              src={"img/ai_char.png"}
              alt="章节化"
            />
          </div>

          <div className="">
            <img
              className=" w-1/3 ml-40 -mt-72 rounded-lg shadow-xl ring-2 ring-zinc-800/5"
              loading="lazy"
              decoding="async"
              src={"img/ai_conf.png"}
              alt="章节化"
            />
          </div>
          <div className="  ">
            <img
              className=" w-1/3 ml-16 -mt-72  rounded-lg shadow-xl ring-2 ring-zinc-800/5 "
              loading="lazy"
              decoding="async"
              src={"img/ai_target.png"}
              alt="章节化"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <SectionWrapper>
      <div
        id="toolkit"
        className="pb-0 space-y-5 max-w-4xl mx-auto px-10 lg:px-0"
      >
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center mt-10 ">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            随时<span className="text-gradient">迸发</span>，无畏瓶颈
          </h2>

          <p>
            介子的AI可以介入创作中的任何一个环节，无论是人物设定、情节构思、章节生成、章节大纲生成、风格化续写，介子可以为你任何阶段的灵感提供AI协助。
          </p>
        </div>
        <div id="toolkits" className=" relative ">
          <ul className="">
            {features.map((item, idx) => (
              <li
                key={idx}
                className=" container max-w-2xl lg:max-w-6xl grid lg:grid-cols-5 gap-8 lg:gap-16 my-6 sm:my-24 lg:my-32 items-center"
              >
                <div className="col-span-2  ">
                  <h2 className=" font-semibold text-2l md:text-2xl [text-wrap:balance] tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-gray-600  mt-6">{item.desc}</p>
                </div>
                <div
                  className="col-span-3  p-6 relative overflow-hidden  rounded-lg "
                  style={{ backgroundColor: "#F0EEE5" }}
                >
                  {item.img}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "用介子写作的作者",
      title: "AI辅助创作这一点非常 ",
      quote:
        "我使用AI工具，但我并不信任AI一键生成的作品，AI始终只能是辅助作者进行创作，介子提供的方法在这一点上做得非常好。",
    },
    {
      name: "一个很P的野生作者",
      title: "完美契合我编写世界观的需求",
      quote:
        "介子提供的世界观的构建工具，包括剧情大纲、和人物、设定，可以直接参考进ai的上下文中，真的非常有用。",
    },
    {
      name: "阅读爱好者",
      title: "特别适合二创",
      quote:
        "我没系统的写过小说，但是我也用用介子进行二创，一些无厘头的奇思妙想在这里很快就能写出来。",
    },
  ];

  return (
    <SectionWrapper className="pb-0">
      <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className=" max-w-2xl sm:text-center md:mx-auto ">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            看看用户们怎么说
          </h2>
          <p className="mt-3 text-gray-600 hidden">
            Listen to what the experts around the world are saying about us.
          </p>
        </div>
        <div className="my-12">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-white border p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <Avatar name={item.name + "xxx"} variant="beam" />
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote className={"mt-2"}>
                    <p className="mt-6 text-gray-600">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

const Footer = () => (
  <footer className="pt-32 sm:pt-44 sm:px-0 lg:px-20">
    <div className="custom-screen text-gray-600">
      <div className="flex flex-wrap gap-y-10 items-center justify-between">
        <div className="space-y-4">
          <img src={"img/icon.svg"} alt={""} style={{ width: 60 }} />
          <h2 className="text-gray-800 text-lg font-semibold sm:text-2xl">
            基于AI的IP架构设计和创作工具
          </h2>
          <small>The Innovation Engine for IP Creation</small>
          <p className="max-w-md">
            我们帮助所有创作者实现他们脑海中创作的快速落地
          </p>
          <div className="pt-2 flex items-center gap-x-6 text-gray-400">
            <SiTiktok className="w-6 h-6 hover:text-gray-500 duration-150" />
            <SiBilibili className="w-6 h-6 hover:text-gray-500 duration-150" />
            <SiTencentqq className="w-6 h-6 hover:text-gray-500 duration-150" />
            <SiWechat className="w-6 h-6 hover:text-gray-500 duration-150" />
            <SiSinaweibo className="w-6 h-6 hover:text-gray-500 duration-150" />
            <SiXiaohongshu className="w-6 h-6 hover:text-gray-500 duration-150" />
          </div>
        </div>
        <Newsletter />
      </div>
      <div className="mt-10 py-10 border-t flex-row-reverse items-center justify-between sm:flex">
        <ul className="flex flex-wrap items-center gap-4 sm:text-sm">
          {navigation.map((item, idx) => (
            <li
              key={idx}
              className="font-medium text-gray-700 hover:text-gray-900 duration-150"
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <p className="mt-6 sm:mt-0">
          © 2024 创生语宙 Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

const Newsletter = () => {
  return (
    <div className="mt-6 md:mt-0">
      <h2 className="text-gray-800 text-xl font-semibold sm:text-2xl">
        订阅我们的新闻
      </h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-6 flex items-center gap-x-3"
      >
        <div className="relative">
          <CiMail className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" />
          <input
            type="email"
            required
            placeholder="输入你的邮箱"
            className="w-full outline-none bg-neutral-100 py-2 rounded-lg border border-transparent pl-12 pr-3 focus:border-blue-600"
          />
        </div>
        <button className="block px-4 py-2 w-auto text-white bg-blue-600 hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg">
          订阅
        </button>
      </form>
    </div>
  );
};
