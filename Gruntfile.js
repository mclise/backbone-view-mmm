module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    browserify: {
      dev: {
        options: {
          transform: ['debowerify', 'hbsfy'],
          debug: true
        },
        src: ['app/client.js'],
        dest: 'build/bundle.js' 
      },
      test: {
        options: {
          transform: ['hbsfy', 'debowerify'],
          debug: true
        },
        src: ['test/mocha/backbone/**/*.js'],
        dest: 'test/testbundle.js'
      }
    }
  });
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
};
