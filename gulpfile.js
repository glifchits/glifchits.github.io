var gulp = require('gulp'),
	jade = require('gulp-jade'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	refresh = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr(),
	embedlr = require('gulp-embedlr');

gulp.task('styles', function() {
	gulp.src('stylesheets/*.less')
		.pipe(less())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('stylesheets'))
		.pipe(refresh(server));
});

gulp.task('html', function() {
	gulp.src('index.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(embedlr())
		.pipe(gulp.dest('.'))
		.pipe(refresh(server));
});

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});

gulp.task('default', ['styles', 'html'], function() {
	gulp.watch('stylesheets/*.less', function(event) {
		gulp.run('styles');
	});
	gulp.watch('*.jade', function(event) {
		gulp.run('html');
	});
})
