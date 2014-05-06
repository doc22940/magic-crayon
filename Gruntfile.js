module.exports = function(grunt) {

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					baseUrl: "js",
					mainConfigFile: "build.js",
					include: "app/Application",
					name: "lib/almond-0.2.9",
					out: "build/app.js"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['requirejs']);

};
