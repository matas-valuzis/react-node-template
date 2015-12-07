var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');

gulp.task('browserify', function() {
	return browserify('./app.jsx')
		.transform(babelify, {presets: ["react"]})
		.bundle()
		.pipe(fs.createWriteStream("../scripts/app.js"));
});

gulp.task('watch', function(){
	gulp.watch('./components/*.jsx', ['browserify']);
});