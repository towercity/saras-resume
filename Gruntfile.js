module.exports = function(grunt) {
    grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1500,
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', 'responsive_images');

};
