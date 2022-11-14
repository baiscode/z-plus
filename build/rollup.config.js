
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import PluginVue from 'rollup-plugin-vue';
const path = require('path');

export default {
    input: path.resolve(__dirname, '../packages/components/index.ts'),
    output: {
        format: 'esm',
        file: path.resolve(__dirname, '../dist/lib/index.esm.js'),
        globals: ['vue']
    },
    plugins: [
        terser(),
        PluginVue({
            target: 'browser',
            exposeFilename: false
        }),
        commonjs({
            include: /node_modules/
        }),
        resolve(),
        typescript({
            tsconfigOverride: {
                'include': [
                    'packages/**/*',
                    'typings/vue-shim.d.ts'
                ],
                'exclude': [
                    'node_modules',
                    'packages/**/__tests__/*'
                ]
            }
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true
        })
    ]
}