const gulp = require("gulp");

//拷贝html页面
gulp.task("copy-html", function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

//拷贝图片
gulp.task("images", function(){
	return gulp.src("vancl_files/*.{jpg, png}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

gulp.task("data", function(){
	return gulp.src(["*.json", "!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

gulp.task("build", ["copy-html", "images", "data"], function(){
	console.log("编译完成");
})

//处理scss文件
const scss = require("gulp-scss");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss", function(){
	return gulp.src("stylesheet/*.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename(function(path){
		path.basename += ".min";
		path.extname = ".css";
	}))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

//拷贝js文件
gulp.task("scripts", function(){
	return gulp.src(["*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//添加监听
gulp.task("watch", function(){
	gulp.watch("*.html", ["copy-html"]);
	gulp.watch("vancl_files/*.{jpg, png}", ["images"]);
	gulp.watch(["*.json", "!package.json"], ["data"]);
	gulp.watch("stylesheet/*.scss", ["scss"]);
	gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
})
//启动服务，实时刷新
const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist",
		port: 8800,
		livereload: true
	})
})

//设置默认任务
gulp.task("default", ["watch", "server"]);