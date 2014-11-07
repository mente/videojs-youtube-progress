module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.initConfig({
        autoprefixer: {
            single_file: {
                src: 'src/videojs-youtube-progress.css',
                dest: 'dist/videojs-youtube-progress.css'
            }
        }
    });

    grunt.registerTask('default', ['autoprefixer']);
};