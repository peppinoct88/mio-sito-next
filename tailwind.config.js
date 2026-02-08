/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./{app,components,libs,pages,hooks}/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
          extend: {
                  colors: {
                            primary: '#0f0f0f',
                            accent: '#6C63FF',
                            'accent-light': '#8B83FF',
                            'accent-dark': '#4A42CC',
                            neon: '#00F0FF',
                            surface: '#1a1a2e',
                            'surface-light': '#16213e',
                  },
                  fontFamily: {
                            sans: ['Inter', 'system-ui', 'sans-serif'],
                            display: ['Space Grotesk', 'sans-serif'],
                            mono: ['JetBrains Mono', 'monospace'],
                  },
                  animation: {
                            'float': 'float 6s ease-in-out infinite',
                            'glow': 'glow 2s ease-in-out infinite alternate',
                            'slide-up': 'slideUp 0.8s ease-out',
                            'fade-in': 'fadeIn 1s ease-out',
                            'spin-slow': 'spin 20s linear infinite',
                            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                            'gradient': 'gradient 8s ease infinite',
                  },
                  keyframes: {
                            float: {
                                        '0%, 100%': { transform: 'translateY(0px)' },
                                        '50%': { transform: 'translateY(-20px)' },
                            },
                            glow: {
                                        '0%': { boxShadow: '0 0 5px #6C63FF, 0 0 10px #6C63FF' },
                                        '100%': { boxShadow: '0 0 20px #6C63FF, 0 0 40px #6C63FF' },
                            },
                            slideUp: {
                                        '0%': { transform: 'translateY(60px)', opacity: '0' },
                                        '100%': { transform: 'translateY(0)', opacity: '1' },
                            },
                            fadeIn: {
                                        '0%': { opacity: '0' },
                                        '100%': { opacity: '1' },
                            },
                            gradient: {
                                        '0%, 100%': { backgroundPosition: '0% 50%' },
                                        '50%': { backgroundPosition: '100% 50%' },
                            },
                  },
                  backgroundImage: {
                            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                            'hero-gradient': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #0f0f0f 100%)',
                  },
          },
    },
    plugins: [],
}
