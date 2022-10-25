// 打包样式
import { series, src, dest } from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import path from 'path';

// 将scss编译成css，并将其放入dist目录中
function compile() {
    const sass = gulpSass(dartSass);
    return src(path.resolve(__dirname, './src/*.scss'))
            .pipe(sass.sync())    
            .pipe(autoPrefixer())
            .pipe(cleanCss())
            .pipe(dest('./dist/css'));
}

// 拷贝字体
function copyfont() {
    return src(path.resolve(__dirname, './src/font/**'))
        .pipe(cleanCss())
        .pipe(dest('./dist/fonts'))
}

// 将dist文件夹中所有内容拷贝到最外层的dist文件夹下
function copyfullStyle() {
    return src(path.resolve(__dirname, './dist/**'))
    .pipe(dest(path.resolve(__dirname, '../../dist/theme-chalk')))
}

export default series(
    compile,
    copyfont,
    copyfullStyle
)