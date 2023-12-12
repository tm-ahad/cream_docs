export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      margin: {
        '4p': '4%',
        '2p': '2%',
        'opsp': '1.7%'
      },
      colors: {
        code: '#f3f4f6', // Background color for code blocks
        'code-text': '#1f2937', // Text color for code blocks
      }
    },
  },
  plugins: []
};
