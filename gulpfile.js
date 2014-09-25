var gulp = require('gulp'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(8000);
});

gulp.task('styles', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});


gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['styles']);
  gulp.watch('./js/**/*.js', livereload.changed);
  gulp.watch('*.html', livereload.changed);
  gulp.watch('./css/*.css', livereload.changed);
});

gulp.task('default', ['styles', 'express', 'watch'], function() {

});