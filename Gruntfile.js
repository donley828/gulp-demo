module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    contact: {
      options: {
        //定义一个用于插入合并输出文件之间的字符
        separator: ';'
      },
      dist: {
        //将要被合并的文件
        src: ['src/**/*.js'],
        //合并之后的JS文件的存放位置
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        //此处定义的banner注释将插入到输出文件的顶部
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        //压缩contact任务中生成的文件
        files: {
          'dist/<% pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    eslint: {
      all: ['**/*.js'],
      options: {
        config: '.eslintrc.json'
      }
    },

    watch: {
      files: ['<%= eslint.all %>'],
      tasks: ['eslint']
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //加载 "eslint" 任务的插件。
  grunt.loadNpmTasks('eslint-grunt');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);
};
