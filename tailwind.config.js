/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 指定 Tailwind 应该扫描哪些文件
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#07f",
        primary_darker: "#2b6cec",
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', "sans-serif"], // 设置默认无衬线字体
      },
    },
  },
  plugins: [],
};
