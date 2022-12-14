import path from 'path';
import { outDir } from './paths';

export const buildConfig = {
    esm: {
        module: 'ESNext',   // tsconfig输出的结果es6模块
        format: 'esm',  // 需配置格式化后的模块规范
        output: {
            name: 'es', // 打包到dist目录下的es目录
            path: path.resolve(outDir, 'es')
        },
        bundle: {
            path: 'z-plus/es'
        }
    },
    cjs: {
        module: 'CommonJs',
        format: 'cjs',
        output: {
            name: 'lib',
            path: path.resolve(outDir, 'lib'),
        },
        bundle: {
            path: 'z-plus/lib'
        }
    },
}