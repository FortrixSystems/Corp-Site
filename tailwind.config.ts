import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'fortrix-charcoal': '#0F1316',
        'fortrix-navy': '#14222F',        // Keep existing (darker navy)
        'fortrix-blue': '#203B4C',        // New blue from logo guidelines
        'fortrix-teal': '#6AA7A6',       // Updated from #6FA8A5
        'fortrix-amber': '#FFB340',
        'fortrix-crimson': '#D64541',
        'fortrix-cool-grey': '#D4DEE3',  // New cool grey from guidelines
        'fortrix-grey-900': '#1C1F22',
        'fortrix-grey-700': '#2A2F33',
        'fortrix-grey-500': '#5D6368',
        'fortrix-grey-300': '#AEB4B8',
        'fortrix-grey-100': '#F1F3F4',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', 'sans-serif'],
        heading: ['"Segoe UI Semibold"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
      },
      spacing: {
        'section-sm': '60px',
        'section-md': '80px',
        'section-lg': '100px',
        'section-xl': '120px',
      },
    },
  },
  plugins: [],
};
export default config;

