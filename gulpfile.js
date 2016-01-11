var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var ghPages = require('gulp-gh-pages');
var plumber = require('gulp-plumber');

function swallowError(error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('swf', function() {
  return gulp.src('./bower_components/zeroclipboard/ZeroClipboard.swf')
    .pipe(gulp.dest('./dist/swf'));
});

gulp.task('js', function() {
  return gulp.src([
     './bower_components/zeroclipboard/ZeroClipboard.min.js',
      './bower_components/googleflog/dist/googleflog.min.js',
      './src/js/script.js'
    ])
    .pipe(plumber())
    .pipe(uglify('app.js', {
      compress: false
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', function() {
  return gulp.src('./src/style/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./dist/style'));
});

gulp.task('clean_images', function() {
  return gulp.src('./dist/images').pipe(clean());
});

gulp.task('images', ['clean_images'], function() {
  return gulp.src(['./src/images/**/*'])
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('jade', function() {
  return gulp.src('./src/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
  gulp.watch('src/style/*.scss', ['css']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/*.jade', ['jade']);
  gulp.watch('src/images/**/*', ['images']);
});

gulp.task('default', ['js', 'swf', 'css', 'images', 'jade']);
gulp.task('deploy', ['default'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({ push: false }));
});
