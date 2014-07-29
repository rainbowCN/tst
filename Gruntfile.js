module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    scp: {
      options: {
          host: '106.186.20.33',
          username: 'root',
          password: 'jdi2014'
      },
      your_target: {
          files: [{
              cwd: './',
              src: 'index.html',
              filter: 'isFile',
              // path on the server
              dest: '/home/wwwroot/viewsoft/mobile/bn'
          },{
              cwd: './',
              src: './build',
              dest: '/home/wwwroot/viewsoft/mobile/bn'
          }]
      },
    },    
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-scp');

  grunt.registerTask('default', ['uglify','scp']);

};