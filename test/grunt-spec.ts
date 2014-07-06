/// <reference path='../types/node/node.d.ts' />
/// <reference path='../types/jasmine/jasmine.d.ts' />

import fs = require('fs');
import path = require('path');

function test(name:string) {
    it(name, function() {
        var expected:string = fs.readFileSync(path.join(__dirname, name + '-expected.ts'), 'utf8');
        var actual:string = fs.readFileSync(path.join(__dirname, '../temp', name + '.ts'), 'utf8');

        expect(actual).toBe(expected);
    });
}

var fileTest:RegExp = new RegExp('([\\w\\d-]+)\\-template\\.ts');

function translateFileToTest(fileName:string) {

    var matches:RegExpExecArray = fileTest.exec(fileName);

    // not a template file, ignore
    if (matches == null)
    {
        return;
    }

    var name:string = matches[1];

    test(name);
}
describe('Test that the Gruntfile created expected outputs from test templates.', function() {
    var files:string[] = fs.readdirSync(__dirname);
    files.forEach(translateFileToTest);
});