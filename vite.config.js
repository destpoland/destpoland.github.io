import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // bind to all network interfaces so other devices can connect
    port: 5173       // or any free port you wan
  },
  plugins: [
    {
      name: 'psp-cors-isolation',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Only apply headers to the PSP emulator folder
          if (req.url.startsWith('/emulators/pspemu')) {
            res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
          }
          next();
        });
      }
    }
  ]
});
