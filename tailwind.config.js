// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // for Next.js app directory
      "./pages/**/*.{js,ts,jsx,tsx}", // for traditional pages
      "./components/**/*.{js,ts,jsx,tsx}", // for your components
    ],
    theme: {
        extend: {
            fontFamily: {
              'sans': ["Philosopher"],
              'sanss': ["Quicksand"],
            },
            screens:{
              xxl: { max: "1535px" },
              // => @media (max-width: 1535px) { ... }
          
              lx: { max: "1279px" },
              // => @media (max-width: 1279px) { ... }
          
              gl: { max: "1023px" },
              // => @media (max-width: 1023px) { ... }
          
              dm: { max: "767px" },
              // => @media (max-width: 767px) { ... }
          
              ms: { max: "639px" },
              // => @media (max-width: 639px) { ... }
          
              sx: { max: "479px" },
              // => @media (max-width: 479px) { ... }
          },
          },
    },
    plugins: [],
  }
  