module.exports = function(grunt) {
    grunt.initConfig({
            jshint: {
                dist: {
                    src: ['assets/js/*.js']
                }
            },
            uglify: {
                scripts: {
                    src: ['assets/js/materialize.js'],
                    dest: 'assets/js/materialize.min.js'
                }
            },
            cssmin: {
                style: {
                    src: ['assets/css/materialize.css', 'assets/css/style.css'],
                    dest: 'assets/css/style.min.css'
                },
                icons: {
                    src: ['assets/css/icons.css'],
                    dest: 'assets/css/icons.min.css'
                }
            },
            imagemin: {
                all: {
                    options: {
                        optimizationLevel: 3
                    },
                    files: [{
                        expand: true,
                        cwd: 'assets/img/',
                        src: ['**/*.{png,jpg,gif}', '*.jpg'],
                        dest: 'assets/img/compressed/'
                  }]
                },
            },
            'http-server': {
                'dev': {
                    root: './',
                    port: 8282,
                    host: "127.0.0.1",
                    openBrowser : true,
                    runInBackground: true
                }
            },
            watch: {
                files: ['assets/js/*.js'],
                tasks: ['uglify', 'http-server']
            }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin', 'http-server', 'watch']);
};
