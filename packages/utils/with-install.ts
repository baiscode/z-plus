import type { App, Plugin } from 'vue';

// 类型必需导出，否则无法生成 .d.ts 文件
export type SFCWithInstall<T> = T & Plugin;

export function withInstall<T>(c: T) {
    const com = c as SFCWithInstall<T>;
    com.install = function(app: App) {
        app.component((com as any).name, com);
    }
    return com;
}