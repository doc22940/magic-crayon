module.exports = function(grunt) {
	
	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					baseUrl: "js",
					mainConfigFile: "build.js",
					include: "app/Application",
					name: "lib/almond",
					out: "build/app.js"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['requirejs']);

};