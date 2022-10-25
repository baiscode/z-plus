// 专门打包util、指令、hook
import { series, parallel, src, dest } from "gulp";
import { buildConfig } from "./utils/config";
import path from 'path';
import { outDir, projectRoot } from "./utils/paths";
import ts from 'gulp-typescript';
import { withTashName } from "./utils";

const buildPackages = (dirname: string, name: string) => {
    const tasks = Object.entries(buildConfig).map(([module, config]) => {
        return series(
            withTashName(`builld:${module}`, async () => {
                const tsConfig = path.resolve(projectRoot, 'tsconfig.json');
                // 不包含gulpfile.ts和node_modules
                const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules'];
                const output = path.resolve(dirname, config.output.name)
                return src(inputs).pipe(ts.createProject(tsConfig, {
                    declaration: true,  // 需要生成声明文件
                    strict: false,
                    module: config.module,
                })()).pipe(dest(output))
            }),
            withTashName(`copy:${dirname}`, async () => {
                const output = path.resolve(dirname, config.output.name);
                return src(`${output}/**`).pipe(dest(path.resolve(outDir, config.output.name, dirname)))
            })      
        );
    })

    return parallel(tasks);
}

export {
    buildPackages
}