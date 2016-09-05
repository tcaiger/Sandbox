/**
 * Created by Nathan on 5/05/2015.
 */


"use strict";

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    //require('grunt-contrib-cssmin')(grunt);


    var gruntConfig = {
        pkg : grunt.file.readJSON('package.json'),
        /**
         * sass
         */
        sass: {
            dev : {
                options: {
                    style      : 'expanded',
                    debugInfo  : true,
                    lineNumbers: true,
                    sourceMap  : true
                },
                expand : true,
                cwd    : './styles/',
                src    : ['*.scss'],
                dest   : './css/',
                ext    : '.min.css'
            },
            dist: {
                options: {
                    sourceMap  : false,
                    lineNumbers: false,
                    style      : 'compressed'
                },
                expand : true,
                cwd    : './styles/',
                src    : ['*.scss'],
                dest   : './css/',
                ext    : '.min.css'
            }
        },

        /**
         * Autoprefix the css
         */
        autoprefixer: {
            options: {
                browsers: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
                map     : true
            },
            no_dest: {
                src: './css/main.min.css'
            }
        },

        /**
         * watch task
         */

        watch : {
            sass: {
                files  : ['./styles/**/*.scss'],
                tasks  : ['sass:dev', 'autoprefixer'],
                trace  : true,
                options: {
                    spawn    : false,
                    sourcemap: true
                }
            }
        },
        /**
         * min css
         */
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd   : 'css',
                    src   : 'main.min.css',
                    dest  : 'css',
                    ext   : '.min.css'
                }]
            }
        }
    };
    grunt.initConfig(gruntConfig);


    /* Default build task */
    grunt.registerTask('default', ['sass:dist', 'autoprefixer', 'cssmin']);

    /* Dev build task */
    grunt.registerTask('dev', ['sass:dev', 'autoprefixer', 'watch:sass']);

    /* Deployment task */
    grunt.registerTask('dist', ['sass:dist', 'autoprefixer', 'cssmin']);
};