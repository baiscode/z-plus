export function withInstall(c) {
    const com = c;
    com.install = function (app) {
        app.component(com.name, com);
    };
    return com;
}
