import Avatar from "boring-avatars";
import { motion } from "framer-motion";

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
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              key={idx}
              className="bg-white border p-4 rounded-xl"
            >
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
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
