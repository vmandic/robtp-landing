// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('less', function() {
    gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});

gulp.task('default', ['less'], function() {
    gulp.watch('*.less', ['less']);
    console.log("Lessifyed...");
    
    gulp.watch('*.css', ['minify-css']);
    console.log("CSS minified...");
});

gulp.task('minify-css', function() {
  return gulp.src('../styles.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('..'));
});