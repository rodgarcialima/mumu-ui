import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.mjs';

import packageJson from "./package.json" assert { type: "json" };

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            external(),
            resolve(), 
            commonjs(), 
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({ 
                config: { 
                    path: './postcss.config.mjs',
                },
                extensions: ['.css'],
                minimize: true,
                inject: {
                    insertAt: 'top',
                },
                plugins: [tailwindcss(tailwindConfig)],
            }),
            terser(),
        ],
        external: ['react-dom']
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'esm',
        },
        plugins: [dts()],
        external: [/\.css$/]
    },
];