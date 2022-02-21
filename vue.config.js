const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

const path = require("path");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");


module.exports = {

    pwa: {
        name: 'Glanz & Gloria',
        themeColor: '#31B9D5',
        msTileColor: '#000000',

        // configure the workbox plugin
    /*    workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: './src/service-worker.js',
            // ...other Workbox options...

        }*/
    },



    pluginOptions: {
        compression:{
            brotli: {
                filename: '[file].br[query]',
                algorithm: 'brotliCompress',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                compressionOptions: {

                },
                minRatio: 0.8,
            },
            gzip: {
                filename: '[file].gz[query]',
                algorithm: 'gzip',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                minRatio: 0.8,
            }
        }




    },




    configureWebpack: {
        plugins: [
            new ImageminWebpWebpackPlugin({
                config: [{
                    test: /\.(jpe?g|png|webp)/,
                    options: {
                        quality: 75
                    }
                }],
                overrideExtension: true,
                detailedLogs: false,
                silent: false,
                strict: true
            }),




            new ServiceWorkerWebpackPlugin({
                entry: path.join(__dirname, "./src/service-worker.js")
            })

        ],




    },
    chainWebpack: (config) =>  {

        config.module
            .rule('images')
            .test(/\.(jpe?g|png|webp)$/i)
            .use('webp')
            .loader('webp-loader')

    },


}


