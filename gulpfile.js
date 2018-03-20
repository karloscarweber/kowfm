var gulp = require('gulp');

// gulp plugins and utils
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var zip = require('gulp-zip');
var gulp_concat = require('gulp-concat');

// postcss plugins
var autoprefixer = require('autoprefixer');

var swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
};

var nodemonServerInit = function () {
    livereload.listen(1234);
};

gulp.task('build', ['css'], function (/* cb */) {
    return nodemonServerInit();
});

gulp.task('css', function () {
    return gulp.src('assets/css/*.css')
        // .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/built/'))
        .pipe(gulp_concat('everything.css'))
        .pipe(gulp.dest('assets/built/'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['css']);
});

gulp.task('zip', ['css'], function() {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
});

gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
