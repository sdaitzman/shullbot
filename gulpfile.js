var gulp = require('gulp')
var standard = require('gulp-standard')
var mocha = require('gulp-mocha')
var notify = require('gulp-notify')
var watch = require('gulp-watch')
var plumber = require('gulp-plumber')

gulp.task('standard-style-check', function () {
	return gulp.src(['./gulpfile.js', './lib/**/*.js', './index.js', './test/**/*.js'])
		.pipe(standard())
	  .pipe(standard.reporter('default', {breakOnError: true}))
})

gulp.task('tests', function() {
  return gulp.src('./test/**/*.js')
    .pipe(mocha({reporter: 'nyan'}))
})

gulp.task('default', function() {
  gulp.start('standard-style-check')
})
