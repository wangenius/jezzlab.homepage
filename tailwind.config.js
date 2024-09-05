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
        primary: "#cc785c",
        "primary-lighter-1": "#da876b",
        "primary-lighter-2": "#e49277",
        "primary-lighter-3": "#eca48c",
        "primary-darker-1": "#c36e52",
        background: "#fafaf8",
        "background-darker-1": "#f4f4f0",
        "background-darker-2": "#efefea",
        "background-darker-3": "#e6e6e0",
        "background-darker-4": "#dcdcd7",
        "background-darker-5": "#d1d1cb",
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', "sans-serif"], // 设置默认无衬线字体
      },
    },
  },
  plugins: [],
};
