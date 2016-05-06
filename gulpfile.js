var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('css', ['css:sass', 'css:minify', 'css:fonts']);

gulp.task('css:minify', ['css:sass'], function() {
    return gulp.src([
            './Resources/Private/SCSS/rtehtmlarea.scss',
            './Resources/Private/SCSS/frontend.scss'
        ])
        .pipe(cleanCSS({
            compatibility: 'ie8',
            processImport: false
        }))
        .pipe(rename(function (path) {
            path.extname = ".min.css"
        }))
        .pipe(gulp.dest('./Resources/Public/CSS/'));
});

gulp.task('css:fonts', ['css:fonts:glyphicons-halflings-regular']);
gulp.task('css:fonts:glyphicons-halflings-regular', function() {
    return gulp.src([
        './node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.*'
    ])
    .pipe(gulp.dest('./Resources/Public/Fonts/'));
});

gulp.task('css:sass', function () {
    return gulp.src([
            './Resources/Private/SCSS/rtehtmlarea.scss',
            './Resources/Private/SCSS/frontend.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./Resources/Public/CSS/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./Resources/Public/CSS/*.scss', ['css::sass']);
});