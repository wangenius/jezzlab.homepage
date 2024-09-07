import { IoLogoChrome } from "react-icons/io";
import { BiLogoWindows } from "react-icons/bi";
import { SiMacos } from "react-icons/si";
import { motion } from "framer-motion";

const ProductionDownload = () => {
  const handleDownload = async () => {
    try {
      // 发起请求获取文件
      const response = await fetch("/file/Jezz.exe"); // 文件在 public 目录中的相对路径
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
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      id={"production_download"}
      className=" bg-gray-900"
    >
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

          <div className="flex flex-col mx-8 md:mx-0 gap-6 md:flex-row justify-center my-10">
            <div
              onClick={() => {
                window.open("http://120.77.220.248");
              }}
              className="cursor-pointer w-auto flex items-center border rounded-lg px-4 py-2  mx-2"
            >
              <IoLogoChrome size={25} />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">推荐chrome</p>
                <p className="text-sm md:text-base">网页端直接访问</p>
              </div>
            </div>
            <div
              onClick={handleDownload}
              className="cursor-pointer flex items-center w-auto border  rounded-lg px-4 py-2 mx-2"
            >
              <BiLogoWindows size={25} />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">下载PC端应用(preview)</p>
                <p className="text-sm md:text-base">WINDOWS 10/11(x64)</p>
              </div>
            </div>

            <div className="cursor-pointer flex w-auto items-center border rounded-lg px-4 py-2  mx-2">
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
    </motion.div>
  );
};

export default ProductionDownload;
