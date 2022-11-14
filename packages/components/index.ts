import ZIcon from "./icon";

const components = [
    ZIcon
]

function install(app) {
    components.forEach(comp => {
        app.use(comp);
    })
    app.globalProperties.$message = null;
}


const ZPlus = {
    version: '0.0.1',
    install
}

// @ts-ignore
if (typeof window !== undefined && window.Vue) {
    // @ts-ignore
    install(window.Vue);
}

export {
    install,
    ZIcon
}

export default ZPlus;