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
		},

		nodemon: {
			dev: {
				options: {
					file: 'app.js',
					nodeArgs: ['--debug'],
					env: {
						PORT: '3000'
					}
				}
			}
		}

	});

	// Load Tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-nodemon');


	// Register Compound Tasks
	grunt.registerTask('test', ['jshint']);

	grunt.registerTask('debug', 'Start Node.js and node-inspector.', function() {
		var done = this.async(),
			nodeConfig = {
				cmd: 'node',
				args: ['--debug', 'app.js'],
				opts: {
					//cwd: current workin directory
				}
			},
			nodeInspectorConfig = {
				cmd: 'node-inspector',
				args: ['&'],
				opts: {
					//cwd: current workin directory
				}
			},
			doneFunction = function (msg) {
				grunt.log.writeln(msg);

				return function (error, result, code) {
					if (error) {
						grunt.log.write (result);
						grunt.fail.fatal(error);
					}
					done();
				}
			};

		grunt.util.spawn(nodeConfig, doneFunction("Node.js Server started"));
		grunt.util.spawn(nodeInspectorConfig, doneFunction("node-inspector started"));
	});

};
