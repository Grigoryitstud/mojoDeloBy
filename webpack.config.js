const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        historyApiFallback: true,
    // contentBase: path.resolve(__dirname, './public'),
        open: true,
        compress: true,
        hot: true,
        port: 8081,
    },
    // plugins: [
    //     // ...
    //     // применять изменения только при горячей перезагрузке
    //     new webpack.HotModuleReplacementPlugin(),
    // ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
            
        ]
        
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}