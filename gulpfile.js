var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function () {
    gulp
        .src(['./www/js/controllers/*.js','!./www/js/controllers/controllers-all.js'])
        .pipe(concat('controllers-all.js'))
        .pipe(gulp.dest('./www/js/'));


    gulp
        .src(['./www/js/directives/*.js','!./www/js/directives/directives-all.js'])
        .pipe(concat('directives-all.js'))
        .pipe(gulp.dest('./www/js/'));



});