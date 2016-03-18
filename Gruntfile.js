module.exports = function(grunt){
	//加载插件
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
		'grunt-exec',
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});
	//配置插件
	grunt.initConfig({
		cafemocha:{
			all:{ src:'qa/tests-*.js', options: { ui: 'tdd'},}
		},
		jshint:{
			app:[ 'index.js', 'public/js/**/*.js', 'lib/**/*.js']
		},
		exec: {
	//		linkchecker: { cmd: 'linkchecker http://localhost:3000'}
		},
	});
	//注册任务
	grunt.registerTask('default', ['cafemocha','jshint','exec']);
};
