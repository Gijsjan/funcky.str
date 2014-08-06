gulp = require 'gulp'
uglify = require 'gulp-uglify'
streamify = require 'gulp-streamify'
rename = require 'gulp-rename'
coffee = require 'gulp-coffee'

gulp.task 'build', ->
  gulp.src('./src/**/*')
    .pipe(coffee())
    .pipe(rename(basename: 'index'))
    .pipe(gulp.dest("./dist"))
    .pipe(streamify(uglify()))
    .pipe(rename(extname: '.min.js'))
    .pipe(gulp.dest("./dist"))

gulp.task 'watch', ->
	gulp.watch ['./src/str.coffee'], ['build']

gulp.task 'default', ['watch']