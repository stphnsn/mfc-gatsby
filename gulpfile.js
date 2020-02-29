const gulp = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')

gulp.task('sass', () => {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/assets/css'))
})

gulp.task('sass:watch', () => {
  gulp.watch('./src/scss/**/*.scss', gulp.series(['sass']))
})
