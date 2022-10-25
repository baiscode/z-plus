// 放置组件的props，以及一些公共的方法
import { ExtractPropTypes } from 'vue';
export const iconProps = {
    size: {
        type: Number
    },
    color: {
        type: String
    }
}

// 使用 vue 的 ExtractPropTypes 工具类型抽离类型
export type IconProps = ExtractPropTypes<typeof iconProps>;