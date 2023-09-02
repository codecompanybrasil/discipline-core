module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            dist: {
                files: {
                    'dist/styles/discipline-core.min.css': [
                        'src/styles/discipline-core.css',
                        'src/components/**/style.css',
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

    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['cssmin', 'copy'])
}
