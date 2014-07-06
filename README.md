grunt-script-template
=====================

Grunt task to generate files using script-template.

# Overview

To use `grunt-script-template` you'll need three things: a template, data, and a destination. `grunt-script-template` will then run the data against the template and store the result in the specified destination. Both the template and destination are specified as relative paths to the files. Data may be specified as JSON data within the `Gruntfile.js` or can be specified as a function which will be evaluated with the result run against the template.

# Specification

Inside your `grunt.initConfig` call you'll want to specify each template you want to run and a corresponding template (`src`), destination (`dest`), and data (`data`).

For example, the following is the configuration for the tests included with `grunt-script-template`:

```js
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
            data: {title: 'Static Object Title', values: ['a', 'b', 'c']}
        },
        'dynamic-one-test': {
            src: 'test/dynamic-one-template.ts',
            dest: 'temp/dynamic-one.ts',
            data: getData                        
                    // getData is a previously defined function,
                    // notice no parenthesis, passing the function, 
                    // not the results
        }
    },

    clean: {
        tests: ['temp']
    },

    'jasmine_node': {
        'tests': ['test/']
    }
});

grunt.loadNpmTasks('grunt-script-template');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-jasmine-node');

grunt.registerTask('default', ['clean', 'script-template', 'jasmine_node']);
```

# script-template

`script-template` is a simple templating engine designed to generate scripts (JavaScript, TypeScript, CoffeeScript). The main advantage of this engine is that the source templates are themselves valid JavaScript/TypeScript/CoffeeScript.

For more information on templates and data, see https://github.com/samuelneff/script-template.

# License

Copyright (c) 2014 Samuel Neff
Licensed under the (MIT license)[https://github.com/samuelneff/grunt-script-template/blob/master/LICENSE-MIT].

