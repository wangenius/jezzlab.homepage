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
import  Text from "./components"
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
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
            和芥子一起开始今天的工作
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
const useNav = () => {
  const { siteConfig } = useDocusaurusContext();
  const apiUrl = siteConfig.customFields.apiUrl;

  const navigation = [
    { name: "特性", href: "#features" },
    { name: "产品下载", href: "#production_download" },
    { name: "文档", href: `${apiUrl}/docs/start` },
    { name: "资源", href: `${apiUrl}/blog` },
  ];

  return {
    api: apiUrl,
    nav: navigation,
  };
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { nav } = useNav();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={"lg:px-20 mt-2"}>
      <nav className="relative px-10  py-4 lg:px-4 flex justify-between items-center bg-white">
        <div className={"flex-1 flex gap-10 justify-between"}>
          <img src={"img/icon.svg"} className={"w-12"} alt={""} />
          <ul className="hidden items-center lg:flex lg:w-auto lg:space-x-6">
            {nav.map((item) => {
              return (
                <li>
                  <a
                    className="text-sm hover:no-underline text-gray-600 hover:text-primary"
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
              {nav.map((item) => {
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
  const { api } = useNav();
  return (
    <div className="  mx-auto px-4 md:px-10 flex w-full grow flex-col lg:px-32 ">
      <div className=" flex flex-col gap-10 h-full  justify-center items-center ">
        <div className="flex px-6 flex-col pt-24 md:px-24 lg:px-0 lg:w-[75%] justify-center items-start  w-full ">
          <h1 className="text-gray-900 text-4xl sm:text-5xl  font-bold  lg:text-5xl   ">
            重新定义<span className="text-gradient">写作</span>
            <br />
            创造你的<span className="text-gradient">世界</span>
          </h1>
          <Text>
            芥子集成先进的<strong>AI技术</strong>为每一个人，每一个团队，提供优秀的内容创作平台、打开创作的思路，构建充满想象的世界，让创作变得<strong>轻而易举</strong>
          </Text>
          <div className="mt-6 flex gap-x-3 flex-row items-center text-sm">
            <button
              onClick={() => {
                window.open("http://120.77.220.248/login");
              }}
              className={
                "px-5 py-3 bg-primary font-semibold hover:bg-primary_darker text-white rounded-lg text-"
              }
            >
              开始创作
            </button>
            <button
              onClick={() => {
                window.open(`${api}/docs`);
              }}
              className={
                "px-5 py-3 bg-gray-100 font-semibold hover:bg-gray-200 text-primary rounded-lg text-sm "
              }
            >
              学习更多
            </button>
          </div>
        </div>
        <div className="  justify-center">
          <div
            className="rounded-xl  flex items-center overflow-hidden justify-center lg:bg-transparent"
            style={{ backgroundColor: "#F0EEE5" }}
          >
            <div className="flex flex-col-reverse pl-6  py-10 gap-4   -mr-16  sm:gap-6 md:px-20 md:-mr-0 lg:px-0 xl:flex-row lg:w-[75%] xl:gap-6">
              <div className="">
                <img
                  src={"img/homepage copy.png"}
                  alt="a home page"
                  loading="eager"
                  className="lg:hero-image  w-full  rounded-lg shadow-xl ring-2 ring-zinc-800/5 transform-gpu "
                />
              </div >
              <div className="flex flex-row text-4xl sm:text-6xl   lg:text-6xl  xl:writing-mode-vertical-rl xl:-mr-32">

                <p className="font-black text-gray-400 opacity-15">
                  身如芥子,
                </p>
                <p className="font-black text-gray-400 opacity-15">
                  心藏须弥
                </p>
              </div>

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
    <SectionWrapper className="lg:px-32">
     <div
    id="features"
    className=""
   
  >
        <div className="flex flex-col max-w-2xl mx-auto space-y-3 items-center text-center mb-10 ">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl pb-3">
            <span className="text-gradient">芥子空间</span>
          </h2>

          <Text> 
            <strong>芥子空间</strong>是记录你所创造的世界观的地方，AI会始终遵循你所创建的规则。
          </Text>
        </div>
        <div className="flex flex-col lg:flex-row p-3 items-center">
          <div className="lg:basis-1/3">
            <img
              src={"img/magic.png"} // 替换成你图片的路径
              alt="描述图片的内容" // 添加图片的替代文本
              className="col-span-1 w-80 mx-auto rounded-xl"
            />
          </div>

          <ul className="lg:basis-2/3 grid grid-cols-1 px-20 gap-y-10 py-10  sm:grid-cols-2 lg:px-16   items-start gap-x-12 mt-5 ">
            {features.map((item, idx) => (
              <li key={idx} className="flex flex-col space-y-4  items-start">
                <div className="sm:text-l  bg-zinc-900 rounded-2xl px-4 md:px-8 py-2 md:py-3 inline-flex items-center justify-center text-zinc-50 font-semibold  tracking-wide transition hover:-translate-y-2 ease-out hover:shadow-xl">
                  <div className="flex gap-3 items-center">
                    {item.icon}
                    {item.title}
                  </div>
                </div>
                <Text> {item.desc}</Text> 
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
        <div className="pb-16 max-w-2xl px-16 flex flex-col justify-center items-center mx-auto space-y-3 sm:text-center ">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl ">
            用<span className="text-gradient">芥子</span>，让你的创意成为现实
          </h2>

          <Text> 
            <strong>芥子</strong>
            用前沿的AI技术，为你预先解决了基础的文本生成需求，你可以迅速构建作品的独特
            <strong>宏大世界观</strong>
            ，芥子帮你将创意转化为现实，使作品从核心创意到具体文本的过程如搭积木般简单明了。
          </Text> 
        </div>
        <div className="custom-screen  max-w-4xl pb-16 lx:pb-0 xl:max-w-[75%] mx-auto  text-gray-300 ">
          
            <ul className="space-y-8 gap-x-6 px-0 sm:px-24 md:px-0 lg:px-12 md:flex md:space-y-0  ">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="flex-1 flex flex-col overflow-hidden justify-between rounded-xl aspect-[3/4] md:aspect-[2/3] h-auto   "
                  style={{ backgroundColor: "#F0EEE5" }}
                >
                  <div className="p-6 ">
                    <h2 className=" text-gray-900 mb-4 text-base font-bold ">
                      {item.title}
                    </h2>
                    <p className="text-gray-900 text-sm sm:text-base  max-w-xl mt-6 ">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pl-6 relative overflow-hidden -mr-6 ">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover shadow-2xl "
                      style={{ objectPosition: "top left" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          
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
          <span className="text-gradient">Ai构思</span>情节
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
          <span className="text-gradient">AI生成</span>章节
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
          <span className="text-gradient">AI续写</span>正文
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
          <span className="text-gradient">AI创建</span>对象
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
                <div
                  className="col-span-3  md:p-6 relative overflow-hidden  rounded-lg "
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
      name: "用芥子写作的作者",
      title: "AI辅助创作这一点非常 ",
      quote:
        "我使用AI工具，但我并不信任AI一键生成的作品，AI始终只能是辅助作者进行创作，芥子提供的方法在这一点上做得非常好。",
    },
    {
      name: "一个很P的野生作者",
      title: "完美契合我编写世界观的需求",
      quote:
        "芥子提供的世界观的构建工具，包括剧情大纲、和人物、设定，可以直接参考进ai的上下文中，真的非常有用。",
    },
    {
      name: "阅读爱好者",
      title: "特别适合二创",
      quote:
        "我没系统的写过小说，但是我也用用芥子进行二创，一些无厘头的奇思妙想在这里很快就能写出来。",
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

const Footer = () => {
  const { nav } = useNav();
  return (
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
            {nav.map((item, idx) => (
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
};

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
