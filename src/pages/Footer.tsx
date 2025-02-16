import {
  SiBilibili,
  SiSinaweibo,
  SiTencentqq,
  SiTiktok,
  SiWechat,
  SiXiaohongshu,
} from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";

export const useNav = () => {
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

const Footer = () => {
  const { nav } = useNav();
  return (
    <footer id="footer" className="pt-32 p-5 sm:pt-44 sm:px-0 lg:px-20">
      <div className="custom-screen text-gray-600">
        <div className="flex flex-wrap gap-y-10 items-center justify-between">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
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
                <SiTiktok
                  onClick={() => { }}
                  className="w-6 h-6 hover:text-gray-500 duration-150 cursor-pointer"
                />

                <SiBilibili
                  onClick={() => {
                    window.open(
                      "https://space.bilibili.com/3546665296333720?spm_id_from=333.337.0.0",
                    );
                  }}
                  className="w-6 h-6 hover:text-gray-500 duration-150 cursor-pointer"
                />

                <SiTencentqq
                  onClick={() => {
                    window.open("https://qm.qq.com/q/72Ff13c6vC");
                  }}
                  className="w-6 h-6 hover:text-gray-500 duration-150 cursor-pointer"
                />

                <SiWechat
                  onClick={() => {
                    window.open("https://qm.qq.com/q/72Ff13c6vC");
                  }}
                  className="w-6 h-6 hover:text-gray-500 duration-150 cursor-pointer"
                />

                <SiSinaweibo
                  onClick={() => { }}
                  className="w-6 h-6 hover:text-gray-500 duration-150 cursor-pointer"
                />

                <SiXiaohongshu
                  onClick={() => {
                    window.open(
                      "https://www.xiaohongshu.com/user/profile/661e4abc0000000007005eee",
                    );
                  }}
                  className="w-6 h-6 hover:text-gray-500 duration-150 cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
          <Newsletter />
        </div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.5 }}
          className="mt-10 py-10 border-t flex-row-reverse items-center justify-between sm:flex"
        >
          <ul className="flex flex-wrap items-center gap-4 sm:text-sm">
            {nav.map((item, idx) => (
              <li
                key={idx}
                className="font-medium text-gray-700 hover:text-gray-900 duration-150"
              >
                <a className={"hover:text-primary"} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <p className="mt-6 text-sm sm:mt-0">
              © 2024 创生语宙 Inc. All rights reserved.
            </p>
            <p className="mt-6 text-sm sm:mt-0">粤ICP备2024309407号 </p>
          </div>
        </motion.div>
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

export default Footer;
