import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite configurations...

  // Define the base path for your project
  base: './',

  resolve: {
    alias: {
      // Define aliases to your image paths to refer to the correct folder
      // This makes sure your imports point to the correct paths during development
      '@images': '/src/images', // Adjust this to match your image directory
    },
  },

  // Define Vite plugins or rules to handle image files if necessary
  // Vite often handles assets like images out of the box
});