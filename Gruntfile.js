module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				esversion: 6
			},
			files: ['tasks/diff.js']
		}
	});
	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task(s).
	grunt.registerTask('test', ['jshint']);
};