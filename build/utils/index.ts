import { spawn } from 'child_process';
import { projectRoot } from './paths';
export const withTashName = (name: string, fn: () => Promise<any>) => {
    return Object.assign(fn, { displayName: name });
}

// 在node中使用子进程来运行脚本
export const run = async (command: string) => {
    return new Promise((resolve) => {
        const [cmd, ...args] = command.split(' ');
        // child_process.spawn 使用指定的命令行参数创建新进程
        const app = spawn(cmd, args, {
            cwd: projectRoot,
            stdio: 'inherit', // 直接将这个子进程结果输出
        })
        app.on('close', resolve)
    })
}