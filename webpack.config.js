const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'postcss-loader',
                    'sass-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    'vue-loader',
                    'vue-svg-loader',
                ],
            },
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
    ],
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('vue-loader')
            .loader('vue-loader') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
}