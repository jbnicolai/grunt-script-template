/*
* grunt-script-template
* https://github.com/samuelneff/grunt-script-template
*
* Copyright (c) 2014 Samuel Neff
* Licensed under the MIT license.
*/
/// <reference path='types/gruntjs/gruntjs.d.ts' />
var getData = require('./test/dynamic-one-data');

function setupGrunt(grunt) {
    grunt.initConfig({
        pkg: 'package.json',
        'script-template': {
            'static-array-test': {
                src: 'test/static-array-template.ts',
                dest: 'temp/static-array.ts',
                data: ['One', 'Two', 'Three']
            },
            'static-object-test': {
                src: 'test/static-object-template.ts',
                dest: 'temp/static-object.ts',
                data: { title: 'Static Object Title', values: ['a', 'b', 'c'] }
            },
            'dynamic-one-test': {
                src: 'test/dynamic-one-template.ts',
                dest: 'temp/dynamic-one.ts',
                data: getData
            }
        },
        clean: {
            tests: ['temp']
        },
        'jasmine_node': {
            'tests': ['test/']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.registerTask('default', ['clean', 'script-template', 'jasmine_node']);
}

module.exports = setupGrunt;
//# sourceMappingURL=Gruntfile.js.map
