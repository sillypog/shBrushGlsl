/*
* grunt-asset-packager
* https://github.com/sillypog/grunt-asset-packager
*
* Copyright (c) 2013 Peter Hastie
* Licensed under the MIT license.
*/

'use strict';

module.exports = function (grunt) {
	// load all npm grunt tasks
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 9001,
					keepalive: true,
					hostname: '',
					base: 'example'
				}
			}
		}
	});

	// By default, lint and run all tests.
	grunt.registerTask('default', ['connect']);
};
