/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        stars: "url('/images/bg-stars.svg')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      blur: {
        full: '194px',
      },
      boxShadow: {
        light: '0 2px 9px 0 rgba(255, 255, 255, 0.04)',
      },
      animation: {
        'wave-animation': 'wave-animation 9s ease-in-out infinite',
      },
      keyframes: {
        'wave-animation': {
          '0%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '40% 60% 70% 30%/40% 70% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
        },
      },
    },
  },
  plugins: [],
};
