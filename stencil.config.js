const sass = require('@stencil/sass');
exports.config = {
    plugins: [
        sass()
    ],
    bundles: [
        { components: ['my-legend'] }
    ],
    // collections: [
    //     { name: '@stencil/router' }
    // ],
    serviceWorker: {
        globPatterns: [
            '**/*.{js,css,json,html,ico,png,jpg,jpeg}'
        ]
    }
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
};