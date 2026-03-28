import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        visualizer({ filename: 'dist/stats.html', gzipSize: true }),
    ],
    base: '/coding-train/',
    resolve: {
        alias: {
            '@study-ui/components': path.resolve(__dirname, 'lib/study-ui-lib/packages/ui/src/index.ts'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('challenges/')) {
                        return 'challenge-data'
                    }
                },
            },
        },
    },
})
