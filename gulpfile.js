var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var cleanCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var colors = require('colors');

gulp.task('css', function() {
	return sass('scss/css-icon.scss', {
		style: 'expanded'
	})
	.on('error', sass.logError)
	.pipe(autoprefixer())
	.pipe(gulp.dest('css'))
	.pipe(cleanCss())
	.pipe(rename('css-icon.min.css'))
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	var watcher = gulp.watch('scss/*.scss', ['css']);
	watcher.on('change', function(event) {
		console.log('[SCSS]'.green + ' File ' + event.path.yellow + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('default', ['css', 'watch']);