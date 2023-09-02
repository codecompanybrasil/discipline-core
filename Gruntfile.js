const sass = require('dart-sass');

module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'src/styles/discipline-components.css': ['src/components/**/style.scss']
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/styles/discipline-core.min.css': [
                        'src/styles/discipline-core.css',
                        'src/styles/discipline-components.css',
                    ],
                },
            },
        },
        copy: {
            dist: {
                files: [
                    // Copying Google Fonts
                    { expand: true, cwd: 'src/styles/', src: 'GoogleFonts/**', dest: 'dist/styles/' },
                ],
            },
        },
    })

    // require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['sass', 'cssmin', 'copy'])
}
