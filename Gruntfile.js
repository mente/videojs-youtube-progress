module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dist/videojs-youtube-progress.css': 'src/videojs-youtube-progress.less'
                }
            }
        },
        autoprefixer: {
            single_file: {
                src: 'dist/videojs-youtube-progress.css'
            }
        }
    });

    grunt.registerTask('default', ['less', 'autoprefixer']);
};