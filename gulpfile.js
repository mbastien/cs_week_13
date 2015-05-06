var gulp = require('gulp');

gulp.task("task1", function(done){
    setTimeout(function(){
        console.log("task 1 really done");
        done();
    }, 2000);
    console.log("one");
});

gulp.task("task2", function(){
    console.log("two");
});

gulp.task("default", ["task1", "task2"], function(){
    console.log("boo");
});

gulp.task("js", function(){
    console.log("two");
});