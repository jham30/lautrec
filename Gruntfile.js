module.exports = function (grunt) {

    grunt.initConfig({
        buildDir: 'dist',
        srcDir: '.',
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    '<%= buildDir %>/lautrec.min.js': ['<%= srcDir %>/js/**/*.js']
                }
            }
        },
        clean: {
            clean: ['<%= buildDir %>']
        },
        // copy: {
        //     build: {
        //         // files we need to copy for the "build" version
        //         files: [
        //             {expand: true, cwd: '<%= srcDir %>/www', src: ['**', '!style/**'], dest: '<%= buildDir %>/www/'},
        //             {expand: true, cwd: '<%= srcDir %>/jsLib', src: ['**'], dest: '<%= buildDir %>/jsLib/'}
        //         ]
        //     }
        // },
        jshint: {
            build: {
                files: {
                    src: ['Gruntfile.js', '<%= srcDir %>/js/**/*.js', '!<%= srcDir %>/test/**/*.js']
                },
                options: {
                    esversion: 6,
                    globals: {
                        jQuery: true
                    }
                }
            }
        },
        less: {
            build: {
                options: {
                    compress: true,
                    optimization: 1
                },
                files: {
                    '<%= buildDir %>/lautrec.css': [
                        '<%= srcDir %>/less/lautrec.less'
                    ]
                }
            }
        },
        mkdir: {
            build: {
                options: {
                    create: [
                        '<%= buildDir %>'
                    ]
                }
            }
        },
        uglify: {
            options: {
                beautify: true
            },
            my_target: {
                files: {
                    '<%= buildDir %>/lautrec.min.js': ['<%= srcDir %>/js/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mkdir');

    grunt.registerTask('build', ['jshint', 'mkdir', 'less', 'babel']);
    grunt.registerTask('run', ['build']);
};
