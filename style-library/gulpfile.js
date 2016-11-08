let gulp = require('gulp');
let less = require('gulp-less');

gulp.task('button', () => {
    return gulp.src('./button/*.less')
        .pipe(less())
        .pipe(gulp.dest('./button/'));
});

gulp.task("watch", () => {
    gulp.watch('./button/*.less', ['button']);
});