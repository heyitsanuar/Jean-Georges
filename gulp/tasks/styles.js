let gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourceMaps   = require('gulp-sourcemaps');

gulp.task('styles', function(){

  return gulp.src('./app/assets/css/styles.scss')
      .pipe(sourceMaps.init())
      .pipe(autoprefixer())
      .pipe(sass({
        outputStyle: 'expanded' //SASS styles expanded
      }))
      .pipe(sourceMaps.write())
      .on('error', function(errorInfo) {
	      console.log(errorInfo.toString());
	      this.emit('end');
      })
      .pipe(gulp.dest('./app/temp/css'));

});