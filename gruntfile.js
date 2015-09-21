module.exports = function(grunt) {
  
  grunt.initConfig({
        


        watch: {
    css: {
        files: ['css/*.less'],
        tasks: ['less'],
        options: {
        spawn: false,
    }
  }
},    
    
       less: {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'css/main.css': 'css/main.less'
        }
    } 
},
uglify: {
    build: {
        src: 'js/countdown.js',
        dest: 'js/countdown.min.js'
    }
  }

});

    // 3. Where we tell Grunt we plan to use this plug-in.

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
     grunt.registerTask('default', ['watch', 'less','uglify']);

};