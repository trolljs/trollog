'use strict';
module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    browserify: {
      main: {
        src: 'src/index.js',
        dest: 'dist/trollog.js'
      },
      specs: {
        src: 'test/test.js',
        dest: 'test/test-bundled.js'
      }
    },
    uglify: {
      trolljs: {
        files: {
          'dist/trollog.min.js': ['dist/trollog.js']
        }
      }
    },
    jasmine: {
      dev: {
        src: 'test/test-bundled.js'
      }
    },
    watch: {
      test: {
        files: '<%= jasmine.dev.src %>',
        tasks: ['default']
      }
    }
  });

  grunt.registerTask('default', ['browserify', 'jasmine', 'uglify']);
};
