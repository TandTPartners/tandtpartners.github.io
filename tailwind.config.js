/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#020617',
        midnight: '#040b2a',
        electric: '#22d3ee',
        glow: '#38bdf8',
      },
      backgroundImage: {
        'brand-radial':
          'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.14), transparent 35%), radial-gradient(circle at 50% 80%, rgba(59,130,246,0.12), transparent 45%)',
      },
      boxShadow: {
        glow: '0 0 32px rgba(34, 211, 238, 0.22)',
        glass: '0 10px 50px rgba(2, 6, 23, 0.45)',
      },
      maxWidth: {
        shell: '74rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

