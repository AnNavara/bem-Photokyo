module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		less: {
			style: {
				files:{
					"build/css/style.css": ["source/less/style.less"]
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ["last 2 version", "ie 10"]
			},
			style: {
				src: "build/css/style.css"
			}
		},

		cmq: {
			style: {
				files: {
					"build/css/style.css": ["build/css/style.css"]
				}
			}
		},

		csscomb: {
			style: {
				expand: true,
				src: ["build/css/style.css"]
			}
		},

		cssmin: {
			style: {
				options: {
					keepSpecialCommnets: 0,
					report: "gzip"
				},
				files: {
					"build/css/style.min.css": ["build/css/style.css"]
				}
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

		webp: {
			files: {
				expand: true,
				src: "_img-source/**/*.png",
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
				psnr: 44,
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
		},

		copy: {
			build: {
				files: [{
					expand: true,
					cwd: "source",
					src: [
						"img/**",
						"js/**",
						"*.html"
					],
					dest: "build"
				}]
			}
		},

		clean: {
			build: ["build"]
		},

		replace: {
			build: {
				options: {
					patterns: [{
						match: /[\"\']img\//g,
						replacement: '"/img/'
					}, {
						match: /[\"\']css\//g,
						replacement: '"/css/'
					}, {
						match: /[\"\']js\//g,
						replacement: '"/js/'
					}]
				},
				files: [{
					expand: true,
					src: [
						"build/css/style*.css",
						"build/*.html"
					]
				}]
			}
		}

	});

		grunt.registerTask("build", [
			"clean",
			"copy",
			"less",
			"autoprefixer",
			"cmq",
			"csscomb",
			"cssmin"
		]);
};
