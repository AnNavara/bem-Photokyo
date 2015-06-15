module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		less: {
			style: {
				files:{
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

		csscomb: {
			style: {
				expand: true,
				src: ["css/style.css"]
			}
		},

		watch: {
			less: {
				files: "**/*.less",
				tasks: ["less"],
				option: {
					livereload: true,
				},
			},
		},

		imagemin: {
			images: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					src: ["img/**/*.{jpg, png, svg}"]
				}]
			}
		},

		cssmin: {
			style: {
				options: {
					keepSpecialCommnets: 0,
					report: "gzip"
				},
				files: {
					"css/style.min.css": ["css/style.css"]
				}
			}
		},

		webp: {
			files: {
				expand: true,
				src: "img/source/**/*.png",
				dest: ""
			},
			options: {
				binpath: require("cwebp").path,
				preset: "photo",
				verbose: true,
				quality: 80,
				alphaQuality: 85,
				compressionMethod: 6,
				segments: 4,
				psnr: 46,
				sns: 50,
				filterStrength: 60,
				filterSharpness: 3,
				simpleFilter: true,
				partitionLimit: 50,
				analysisPass: 10,
				multiThreading: true,
				lowMemory: false,
				alphaMethod: 0,
				alphaFilter: "best",
				alphaCleanup: true,
				noAlpha: true,
				lossless: false
			}
		}

	});

		grunt.registerTask("build", [
			"less",
			"autoprefixer",
			"cmq",
			"csscomb",
			"cssmin"
		]);
};
