const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        pageelements: './src/modules/pageelements.js',
        task: './src/modules/task.js',
        project: './src/modules/project.js',
        todolist: './src/modules/todolist.js',
        storage: './src/modules/storage.js',
        UI: './src/modules/UI.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        //clean: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {            
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};