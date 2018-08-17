'use strict';

var gulp = require('gulp'),//gulp
    //实时刷新
    livereload = require('gulp-livereload'),
    //浏览器实时刷新
    browserSync = require('browser-sync').create(),
    //编译es6
    babel = require('gulp-babel'),
    //本地服务器
    webserver = require('gulp-webserver'),
    //删除文件
    del = require('del'),
    //监听文件
    watch = require("gulp-watch"),
    webpack = require("gulp-webpack");

var isProEnv = true; //是否生产环境，生成不同环境的文件时要更改此项

/********************* 部署开发环境 *********************/
// 注册任务
gulp.task('webserver', function() {
    gulp.src('./') // 服务器目录（./代表根目录）
        .pipe(webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            open: false // 服务器启动时自动打开网页
        }));
});

/********************* 浏览器同步实时刷新 *********************/
gulp.task('browserSync', function() {
    browserSync.init({
        files: "**",
        server: {
            baseDir: "./"
        }
    });
});

//清空dist文件夹
gulp.task('del',function() {
    del.sync(['./dist']);
});

//babel任务
gulp.task('babel', function() {
    return gulp.src(['./*.js', './js/**/*.*', '!./gulpfile.js'], {
        base: '.'
    }).pipe(babel()).pipe(gulp.dest('./dist')).pipe(webpack({
        output: {
            filename: "game.js",
        },
        stats: {
            colors: true
        }
    })).pipe(gulp.dest('./dist'));
});

// 监听任务
gulp.task('watch', function() {
    gulp.watch('./*.*',['babel']);
    gulp.watch('./js/*.*',['babel']);
    gulp.watch('./js/**/*.*',['babel']);
});

// 启动开发环境
gulp.task('dev', ['del','babel', 'webserver', 'watch']);