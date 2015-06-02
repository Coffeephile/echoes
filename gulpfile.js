var gulp = require('gulp');
var karma = require('karma').server;
var isTravis = process.env.TRAVIS || false;
var pathToKarmaConf = __dirname;

gulp.task('test', function (done) {
  karma.start({
    configFile: pathToKarmaConf + '/karma.conf.js',
    singleRun: isTravis
  }, done);
});

gulp.task('copy:dist', function () {
  return gulp.src([
    'dist/*/**.*',
    'dist/*.*'
  ])
  .pipe(gulp.dest('./'));
})