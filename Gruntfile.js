module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            sitecss: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                },
                files: {
                    'src/styles/discipline-core.min.css': [
                        'src/styles/discipline-core.css',
                        'src/components/**/style.css',
                    ],
                },
            },
        },
    })

    grunt.loadNpmTasks('grunt-contrib-cssmin')

    grunt.registerTask('default', ['cssmin'])
}
