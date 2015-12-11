var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function(){
	return gulp.src('./sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../css'));
});

gulp.task('hot-edit', function(){
	console.log("Starting hot edit server...");
	nodemon({
		script: 'hot-edit-server/server.js'
	});	
});

gulp.task('browserify', function() {
	return browserify('./app.jsx')		
		.transform(babelify, {presets: ["react"]})		
		.bundle()
		.on("error", function(err){
			console.log(err.message);
			this.emit("end");
		})
		.pipe(fs.createWriteStream("../scripts/app.js"));
});

gulp.task('browserify-prod', function() {
	return browserify('./app.jsx')
		.on('error', console.log)
		.transform(babelify, {presets: ["react"]})
		.bundle()
		.on("error", function(err){
			console.log(err.message);
			this.emit("end");
		})
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(uglify())		
		.pipe(gulp.dest("../scripts"));
});

gulp.task('watch', function(){
	
	watch('./components/*.jsx', function(){
		gulp.start('browserify');
	});
	
	watch('./sass/*.scss', function(){
		gulp.start('sass');
	});
});