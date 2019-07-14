var fs = require('fs');
var browserify = require('browserify');

var options = {
    opts: {
        basedir: "./",
        commondir: false,
        bundleExternal: true,
        debug: true,
        extensions: ['.js', '.json', '.vue'],
        transform: [
            'envify'
        ],
    },
    entry: {
        vue: './src/vue.js',
        main: './src/main.js',
    },
    output: {
        path: './dist/',
        filename: '[name].js'
    }
};
//=========================================
var opts = options.opts;
var entry = options.entry;
for (const name in entry) {
    browserify(entry[name], opts)
        .transform('uglifyify', {
            global: true
        })
        .bundle()
        .pipe(fs.createWriteStream(options.output.path + name + ".js"));
}
//==============================================================