var gulp = require('gulp'),
	sass   = require('gulp-sass');

gulp.task('sass',function(){
	return gulp.src('./style/scss/*.scss')
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest('./style/css/'));
}); 

gulp.task('watch',function(){
	gulp.watch('./style//scss/*.scss',['sass']);
});

gulp.task('default',['sass','watch']);