/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat"],
      },
    },
  },
  plugins: [],
  // Add the following line to enable Tailwind CSS
  // Make sure it's the last item in your configuration
  // and before any other CSS or PostCSS plugins
  corePlugins: {
    preflight: false, // If you're not using the Preflight plugin
  },
};
