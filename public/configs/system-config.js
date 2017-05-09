SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
        'plugin-babel': 'https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js',
        'systemjs-babel-build': 'https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js',

        // app script 
        'app': './js/app.js',
        'router': './configs/sammy-config.js',
        'databaseController': './database/databaseController.js',
        'accountController': './controllers/accountController.js',
    },

    packages: {
        '/': {
            defaultExtension: 'js'
        }
    }
});