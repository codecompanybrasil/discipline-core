const scss = require('dart-sass')

module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            build: {
                src: [
                    'src/styles/discipline-components.scss',
                    'src/styles/discipline-components.css',
                    'dist'
                ],
            },
        },
        concat: {
            dist: {
                src: [
                    'src/components/**/*.scss',
                ],
                dest: 'src/styles/discipline-components.scss',
            }
        },
        sass: {
            options: {
                implementation: scss,
                sourceMap: false,
            },
            dist: {
                files: {
                    'src/styles/discipline-components.css': 'src/styles/discipline-components.scss'
                },
            },
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
                    // Copying Icons
                    { expand: true, cwd: 'src/', src: 'assets/**', dest: 'dist/' },
                ],
            },
        },
    })

    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-copy')

    grunt.registerTask('clean-dist', ['clean'])
    grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'copy'])
}
