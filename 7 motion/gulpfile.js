//npm i browser-sync --save-dev
//npm i gulp-less --save-dev

var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');

var notify = require("gulp-notify");

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'	//папка нашего корневика c сайтом, иначе '' если gulp там же
    },
    notify: false
  });
});

gulp.task('less', function(){
  return gulp.src('app/css/*.less')
    .pipe(less())
    .on('error', notify.onError(function(err){
      return {
        title: 'Styles',
        message: err.message
      };
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});


gulp.task('default', ['browserSync', 'less'], function (){
  gulp.watch('app/css/**/*.less', ['less']);
  
  // Обновляем браузер при любых изменениях в HTML или JS
  gulp.watch('app/*.html', browserSync.reload);
});