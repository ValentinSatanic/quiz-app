import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


const REPO_NAME = '/quiz-app/'; 

export default defineConfig({
  base: REPO_NAME,
  plugins: [react()],
});
