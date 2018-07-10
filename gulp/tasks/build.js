let gulp     = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del      = require('del'),
    cssnano  = require('gulp-cssnano'),
    uglify   = require('gulp-uglify');

gulp.task('deleteDistFolder', function(){
    return del("./dist");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
  
  let pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/img/**',
    '!./app/assets/styles/**',
    '!./app/assets/js/**',
    '!./app/temp',
    '!./app/temp/**'
  ];

  return gulp.src(pathsToCopy)
             .pipe(gulp.dest("./dist"));

});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
  
  let pathsToOptimize = [
    './app/assets/img/**/*',
    '!./app/assets/img/icons',
    '!./app/assets/img/icons/**/*'
  ];

  return gulp.src(pathsToOptimize)
             .pipe(imagemin({
                    progressive: true, //For JPG
                    interlaced: true, //For GIF
                    multipass: true //For SVG
              }))
             .pipe(gulp.dest("./dist/assets/images"));

});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages']);