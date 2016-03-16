var gulp        = require("gulp"),
    source      = require('vinyl-source-stream'),
    browserify  = require('browserify'),
    watchify    = require('watchify'),
    reactify    = require('reactify');
    connect     = require('gulp-connect'),
    open        = require('gulp-open'),
    port        = (process.env.port||5000);

var paths = {
   scripts: "src/**/*.js",
   tests: "__tests__"
};
gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./src/main.js'],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () {
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/build/'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/build/'));
});
gulp.task("serve", ["browserify"])
