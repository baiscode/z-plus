"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withInstall = void 0;
function withInstall(c) {
    const com = c;
    com.install = function (app) {
        app.component(com.name, com);
    };
    return com;
}
exports.withInstall = withInstall;
