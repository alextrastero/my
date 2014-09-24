var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('html', function() {
  return gulp.src([
    './index.html'
  ])
});

gulp.task('default', ['webserver'], function(){
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./index.html', ['html']);
});