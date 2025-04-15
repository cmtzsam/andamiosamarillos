const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// Imagemin desde Node
// const imagemin = require('imagemin');
// const imageminMozjpeg = require('imagemin-mozjpeg');
// const imageminPngquant = require('imagemin-pngquant');
// const imageminSvgo = require('imagemin-svgo');
const path = require('path');

const globby = require('globby').globby;


// Paths
const paths = {
  styles: {
    src: 'assets/sass/**/*.scss',
    dest: 'assets/css/'
  },
  scripts: {
    src: 'assets/js/**/*.js',
    dest: 'assets/js/min/'
  },
  // images: {
  //   src: 'assets/images/**/*.{jpg,jpeg,png,svg}',
  //   dest: 'assets/images/compressed/'
  // },
  html: {
    src: 'index.html'
  }
};

// Compile and minify SCSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Minify and bundle JS
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}



// Live reload server
function serve() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  // gulp.watch(paths.images.src, images);
  gulp.watch(paths.html.src).on('change', browserSync.reload);
}

// Default task
exports.default = gulp.series(
  gulp.parallel(styles, scripts),
  serve
);
