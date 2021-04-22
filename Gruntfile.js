// This builds the library itself
module.exports = function (grunt) {
  // Configuration
  grunt.initConfig({
    uglify: {
      options: {
        banner: '/* MoonHare.CSS ' + grunt.file.readJSON('package.json').version + ' https://github.com/MoonHareLabs/MoonHare.CSS */\n'
      },
      moonhare: {
        files: {
          'moonhare.min.js': 'moonhare.js'
        }
      },
      web: {
        files: {
          'docs/moonhare.min.js': 'moonhare.js'
        }
      },
      es6: {
        options: {
          footer: '\nexport default mh;'
        },
        files: {
          'moonhare.esm.js': 'moonhare.js'
        }
      }
    },

    semistandard: {
      app: {
        src: []
      }
    },

    watch: {
      scripts: {
        files: [
          'package.js', // To bump versions
          'Gruntfile.js',
          'src/*.js',
          'src/*.md',
          'src/**/*.*',
          'docs/**.*'
        ],
        tasks: ['default'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    jade: {
      compile: {
        options: {
          client: false
        },
        files: [ {
          cwd: '.',
          src: '**/*.html.jade',
          dest: '.',
          expand: true,
          ext: '.html'
        } ]
      }
    },

    concat: {
      main: {
        // No test files
        options: {
          process: function (src, file) {
            return /test\.js/.test(file) ? '' : src;
          }
        },
        files: {
          'moonhare.js': ['src/moonhare.js', 'src/plugins/**/*.js', 'src/export.js'],
          'documentation.md': ['src/readme.md', 'src/plugins/**/readme.md']
        }
      },
      test: {
        files: {
          'docs/test.js': ['src/test.js', 'src/plugins/**/test.js']
        }
      }
    },

    bytesize: {
      all: {
        src: [
          'moonhare.min.js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-semistandard');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-bytesize');

  grunt.registerTask('build', ['concat', 'uglify', 'jade']);
  grunt.registerTask('test', ['semistandard']);
  grunt.registerTask('default', ['build', 'test', 'bytesize']);
};
