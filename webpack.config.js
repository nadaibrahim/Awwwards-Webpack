module.exports = {
    
    entry:"./js/main.js" ,
    
    output: {
        path:__dirname + "/dist/js",
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test:/\.css$/,
                loader:'style-loader!css-loader',
                
//                 test: /\.(woff|woff2|eot|ttf|otf)$/,
//                 loader: "file-loader"
            }
        ]
    }
};