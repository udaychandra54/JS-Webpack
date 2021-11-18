const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:{
        main:path.resolve(__dirname,'./src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    // devServer:{
    //     contentBase:'./dist',
    //     open:true
    // },
    plugins:[
        new HtmlWebpackPlugin({
            title:"Webpack tutorial",
           
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }
        ]
    }
   
}