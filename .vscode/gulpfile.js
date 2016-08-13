var gulp = require("gulp"),
    less = require("gulp-less"),
    cleanCSS = require("gulp-clean-css"),
    rename = require("gulp-rename");

gulp.task("lessAndMinify", function() {
    gulp.src("../source/css/*.less")
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});

gulp.task("toPublic", function() {
    gulp.src(["../source/*.html"]).pipe(gulp.dest("../public"));
    gulp.src(["../source/css/styles.min.css"]).pipe(gulp.dest("../public"));
    gulp.src(["../source/img/*"]).pipe(gulp.dest("../public/img"));
});

gulp.task("watch", function() {
    gulp.watch("../source/css/*.less", ["lessAndMinify"]);
    gulp.watch("../source/**/*.*", ["toPublic"]);
});