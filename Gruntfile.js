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
            watch: {
                files: ['assets/js/*.js'],
                tasks: ['assets/jshint', 'uglify']
            }
        });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'watch']);
};
