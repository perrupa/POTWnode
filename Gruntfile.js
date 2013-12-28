module.exports = function(grunt) {

	// Grunt's Task Configs
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: [
				'Gruntfile.js', // This file
				'src/**/*.js' // All other JS
			],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		}

	});

	// Load Tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');


	// Register Compound Tasks
	grunt.registerTask('test', ['jshint']);

};
