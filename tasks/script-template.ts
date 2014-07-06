/// <reference path='../types/gruntjs/gruntjs.d.ts' />

import ScriptEngine = require('../node_modules/script-template/lib/index');
var chalk:{cyan:(text:string)=>void} = require('chalk');

interface IScriptTemplateTaskData {
    src: string;
    dest: string;
    data: any;
}

function createTask(grunt:IGrunt):void {
    grunt.registerMultiTask('script-template', 'Generates files using script-template.',
        function scriptTemplateTask() {
            var task:grunt.task.IMultiTask<IScriptTemplateTaskData> = this;

            if (typeof task.data.src !== 'string')
            {
                grunt.fatal('Unable to process script-template for ' + task.target + '. Template (\'src\') provided is not a string. It must be a single file path to the template.');
                return;
            }
            if (typeof task.data.dest !== 'string')
            {
                grunt.fatal('Unable to process script-template for ' + task.target + '. Destination (\'dest\') provided is not a string. It must be a single file path to the template.');
                return;
            }
            if (!grunt.file.exists(task.data.src))
            {
                grunt.fatal('Unable to process script-template for ' + task.target + '. Template \'' + task.data.src + '\' not found.');
                return;
            }

            var template:string = grunt.file.read(task.data.src);

            var data:any = typeof task.data.data === 'function'
                                ? task.data.data(task.data)
                                : task.data.data;

            var engine:ScriptEngine = new ScriptEngine(template);
            var genSource:string = engine.run(data);

            grunt.file.write(task.data.dest, genSource);

            grunt.log.writeln('File ' + chalk.cyan(task.data.dest) + ' created from template ' + task.data.src + '.');
        }
    );
}

export = createTask;