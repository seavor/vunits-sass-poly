module.exports = function(grunt) {

  // Load Grunt module dependencies
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

  	compass: {
  		dev: {
  			options: {
	  			sassDir: 'sass',
  				cssDir: 'test'
  			}
  		}
  	},

    // Watchers
    watch: {
      scss: {
        files: ['sass/*.scss'],
        tasks: ['compass']
      }
    }

  });

  // Dev or Deploy grunt task options
  grunt.registerTask('default', ['compass', 'watch']);

};
