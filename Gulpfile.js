var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('app/sass/**/*.scss',['styles']);
});