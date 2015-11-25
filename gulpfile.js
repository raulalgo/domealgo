var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
/*
gulp.task('styles', function() {
	gulp.src('sass/**//*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

gulp.task('default', function() {
	gulp.watch('sass/**//*.scss',['styles']);
});*/

gulp.task('styles', function () {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('serve',['sass'], function() {

	browserSync.init({
		server: "./"
	});

	gulp.watch("sass/**/*.scss", ['styles']);
	gulp.watch("./css/*.css").on('change', browserSync.reload);
	gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
	return gulp.src('./scss/*scss')
		.pipe(sass())
		.pipe(gulp.dest("./css"))
		.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);