var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifycss = require("gulp-minify-css");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var livereload = require("gulp-livereload");
var base64 = require("gulp-base64");

gulp.task("css",function(){
	return gulp
		.src("public/css/*.css")
		.pipe(autoprefixer('last 2 version'))
		.pipe(minifycss())
		.pipe(rename({suffix: '.min'} ))
		.pipe(gulp.dest("public/build/css"));
})

gulp.task("default",function(){
	gulp.run("css");
	gulp.run("watch");

});

gulp.task("watch",function(){
	gulp.watch("public/css/*.css",["css"]);

	var sever = livereload();
	gulp.watch(["public/build/css/*.css"]).on("change",function(file){
		sever.changed(file.path);
	});
})