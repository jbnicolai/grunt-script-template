/// <reference path='../types/node/node.d.ts' />
/// <reference path='../types/jasmine/jasmine.d.ts' />
var fs = require('fs');
var path = require('path');

function test(name) {
    it(name, function () {
        var expected = fs.readFileSync(path.join(__dirname, name + '-expected.ts'), 'utf8');
        var actual = fs.readFileSync(path.join(__dirname, '../temp', name + '.ts'), 'utf8');

        expect(actual).toBe(expected);
    });
}

var fileTest = new RegExp('([\\w\\d-]+)\\-template\\.ts');

function translateFileToTest(fileName) {
    var matches = fileTest.exec(fileName);

    // not a template file, ignore
    if (matches == null) {
        return;
    }

    var name = matches[1];

    test(name);
}
describe('Test that the Gruntfile created expected outputs from test templates.', function () {
    var files = fs.readdirSync(__dirname);
    files.forEach(translateFileToTest);
});
//# sourceMappingURL=grunt-spec.js.map
