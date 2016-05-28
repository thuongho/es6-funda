module.exports = function (grunt) {
    'strict mode';

    // initConfig to specify config for babel
    grunt.initConfig({
      babel: {
        options: {
          sourceMap: true
        },
        dist: {
          files: {
            // output file that is compiled key
            // input is the es6
            'dist/es5.js': 'js/es6.js'
          }
        }
      }
    });

    // load babel
    grunt.loadNpmTasks('grunt-babel');
    // register so that it can run
    // alias es6 on command line that will run babel task
    grunt.registerTask('es6', ['babel']); 
    // need to enable presets or plugins to run the code npm install babel-preset-es2015 and transform each feature
    // babelrc enable the preset that was installed

};