// gulp流程控制
import { series, parallel } from 'gulp';
import { run, withTashName } from './utils/index';

// 1、打包样式 2、打包工具方法 3、打包所有组件 4、打包每个组件 5、生成一个组件库 6、发布组件
export default series(
    withTashName('clean', async () => run('rm -rf ./dist')),
    // filter：过滤，允许将命令限制于包的子集
    // pnpm --filter <package_selector> <command> 
    withTashName('buildPackages', () => run('pnpm run --filter ./packages/** --parallel build'))
)
