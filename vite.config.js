import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    headers: {
      // remove COEP/COOP for dev
    }
  }
});
