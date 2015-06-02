var isDebug = process.env.DEBUG || false;
var browsers = [isDebug ? 'Chrome' : 'PhantomJS'];

module.exports = function(config) {
	var client_dir = '';

	config.set({
		basePath: './src',
		browsers: browsers,
		frameworks: ['jasmine'],
		files: [
			'vendors.js',
			'bower_components/angular-mocks/angular-mocks.js',
			
			'bundle.js',
			'templates.mdl.js',
			'tests/specs/**/*spec.js',
			'tests/mocks/**/*mock.json'
	    ],
	    autoWatch: true,
	    singleRun: true,
        preprocessors: {
	        'tests/mocks/**/*mock.json': ['json_fixtures']
	        // 'app/bundle.js': ['coverage']
	        // 'common/**/*.html': ['ng-html2js']
	    },
	    jsonFixturesPreprocessor: {
	      // strip this from the file path \ fixture name
	      stripPrefix: '.+mocks/',
	      // strip this to the file path \ fixture name
	      // prependPrefix: 'mock/',
	      // change the global fixtures variable name
	      variableName: 'mocks'
	    },
	    plugins : [
	        'karma-phantomjs-launcher',
	        'karma-chrome-launcher',
	        'karma-jasmine',
	        'karma-mocha-reporter',
	        'karma-json-fixtures-preprocessor'
	    ],
	    reporters: [
	    	'mocha'
    	]
  });
};