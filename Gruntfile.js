module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		less: {
			style: {
				file: {
					"css/style.css": ["less/style.less"]
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ["last 2 version", "ie 10"]
			},
			style: {
				src: "css/style.css"
			}
		},
		cmq: {
			style: {
				files: {
					"css/style.css": ["css/style.css"]
				}
			}
		},
		cssmin: {
			style: {
				options: {
					keepSpecialComments: 0,
					report: "gzip"
				},
				files: {
					"css/style-min.css": ["css/style.css"]
				}
			}
		},
		csscomb: {
			style: {
				expand: true,
				src: ["css/style.css"]
			}
		},
		watch: {
			style: {
				files: "less/**/*.less",
				tasks: ["less"],
				options: {
					livereload: true
				}
			}
		}

	});

	grunt.registerTask ("build", [
		"less",
		"autoprefixer",
		"cmq",
		"csscomb",
		"cssmin"
	]);

};
