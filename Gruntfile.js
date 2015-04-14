module.exports = function ( grunt ) {
  grunt.initConfig({
    pkg : grunt.file.readJSON( 'package.json' ),
    coffee : {
      complied : {
        expand : true,
        flatten : true,
        cwd : '<%= pkg.paths.appComponents %>',
        src : ['**/*.coffee'],
        dest : '<%= pkg.paths.app %>/dist/',
        ext : '.js'
      }
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-coffee' );

  grunt.registerTask( 'build' , ['coffee'] );
  //grunt.registerTask( 'compile' , ['coffee'] ); //build all, minify, concat
};
