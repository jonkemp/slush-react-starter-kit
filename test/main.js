/* jshint node:true */
/* global require, it, before, beforeEach, describe */

'use strict';
var should = require('should'),
    inquirer = require('inquirer'),
    gulp = require('gulp'),
    mockGulpDest = require('mock-gulp-dest')(gulp);

require('../slushfile');

/**
 * Mock inquirer prompt
 */

function mockPrompt(answers) {
    inquirer.prompt = function (prompts, done) {

        [].concat(prompts).forEach(function (prompt) {
            if (!(prompt.name in answers)) {
                answers[prompt.name] = prompt.default;
            }
        });

        done(answers);
    };
}

describe('slush-react-starter-kit', function() {
    before(function () {
        process.chdir(__dirname);
        process.argv.push('--skip-install');
    });

    describe('default generator', function () {
        beforeEach(function () {
            mockPrompt({
                moveon: true
            });
        });

        it('should put all project files in current working directory', function (done) {
            gulp.start('default').once('stop', function () {
                mockGulpDest.cwd().should.equal(__dirname);
                mockGulpDest.basePath().should.equal(__dirname);
                done();
            });
        });

        it('should create expected files', function (done) {
            gulp.start('default').once('stop', function () {
                mockGulpDest.assertDestContains([
                    '.bowerrc',
                    '.editorconfig',
                    '.gitattributes',
                    '.gitignore',
                    '.jshintrc',
                    'bower.json',
                    'gulpfile.js',
                    'package.json',
                    'app/index.html',
                    'app/styles/main.css',
                    'app/scripts/main.js'
                ]);

                done();
            });
        });
    });
});
