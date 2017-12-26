var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
	return gulp.src('test/*.test.js', { read: false }).pipe(
		mocha({
			reporter: 'spec'
		})
	);
});

gulp.task('lint', function() {
	return gulp
		.src(['**/*.js', '!node_modules/**'])
		.pipe(eslint())
		.pipe(eslint.formatEach('compact', process.stderr));
});

gulp.task('javascript', ['lint'], function() {
	return gulp
		.src('src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'javascript'], function() {});
