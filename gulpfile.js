const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const includeHTML = require('gulp-file-include');
const beautify = require('gulp-html-beautify');
const browserSync = require('browser-sync').create();
const once = require('gulp-once');
// Include HTML files
function includeHtml() {
    return gulp
        .src(['src/views/pages/*.html'])
        .pipe(
            includeHTML({
                prefix: '@@',
                basepath: '@file',
            }),
        )
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
}
// Beautify HTML
function beautifyHtml() {
    return gulp
        .src('dist/**/*.html')
        .pipe(beautify({ indent_size: 4 }))
        .pipe(gulp.dest('dist'));
}
// Copy other resource files
function copyAssets() {
    return gulp
        .src(
            [
                'src/assets/css/**/*',
                'src/assets/fonts/**/*',
                'src/assets/images/**/*',
                'src/assets/js/**/*',
            ],
            { 
                base: 'src/assets',
                buffer: false,  // Disable buffering for binary files
                allowEmpty: true
            }
        )
        .pipe(gulp.dest('dist/assets'));
}

function copyAssetsChanged() {
    return gulp
        .src(
            [
                'src/assets/css/**/*',
                'src/assets/fonts/**/*',
                'src/assets/images/**/*',
                'src/assets/js/**/*'
            ],
            { 
                base: 'src/assets',
                buffer: false,  // Disable buffering for binary files
                allowEmpty: true
            }
        )
        .pipe(once())
        .pipe(gulp.dest('dist/assets'))
        .pipe(browserSync.stream());
}
// Sass
function buildStyles() {
    return gulp
        .src('src/assets/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/assets/css/'))
        .pipe(browserSync.stream());
}
// Build task
gulp.task('build', gulp.series(includeHtml, beautifyHtml, buildStyles, copyAssets));
// Initialize BrowserSync and track changes
gulp.task(
    'dev',
    gulp.series('build', function () {        
        // Watch tasks
        gulp.watch('src/views/**/*.html', gulp.series(includeHtml));
        gulp.watch('src/assets/scss/**/**/*', gulp.series(buildStyles));
        gulp.watch(
            [
                'src/assets/css/**/*',
                'src/assets/fonts/**/*',
                'src/assets/images/**/*',
                'src/assets/js/**/*'
            ],
            copyAssetsChanged
        );
        browserSync.init({
            server: {
                baseDir: 'dist',
            },
            hot: true,
        });
    }),
);
// Default action
gulp.task('default', gulp.series('dev'));
