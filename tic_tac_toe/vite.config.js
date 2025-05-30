import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['vscode-internal-446-beta.beta01.cloud.kavia.ai'],
  },
});