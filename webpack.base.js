const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const globAll = require('glob-all');
const paths = globAll.sync([
  // path.resolve(__dirname + '/src/**/*.js'),
  path.resolve(__dirname + '/public/index.html'),
]);
console.log(paths);
const devMode = process.env.NODE_ENV !== 'production';

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  entry: {
    main: './src/index.js',
    // other: './src/other.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'js/[name]-[chunkhash:5].js',
    library: 'webpack',
    libraryTarget: 'var',
  },
  // target: "web",
  // module: {
  //   noParse: false,
  // },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  externals: {
    // jquery: '$',
  },
  stats: {
    colors: true,
    modules: false,
    hash: false,
    builtAt: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: './cache',
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              // plugins: ['babel-plugin-transform-remove-console'],
            },
          },
        ],
      },
      {
        test: /\.(css)|(less)|(pcss)$/,
        use: [
          devMode ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {},
          },
          'less-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png)|(gif)|(jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 不限制大小
              // limit: false,
              // 文件不超过 100 * 1024 则使用 base64
              limit: 1 * 1024,
              esModule: false,
              name: '[name]-[hash:5].[ext]',
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new CompressionWebpackPlugin({
      filename: '[file].gz',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:5].css',
      chunkFilename: 'common.[hash:5].css',
    }),
    new PurgeCSSPlugin({
      paths: paths,
    }),
    new CleanWebpackPlugin({
      // 要清除的文件或目录
      // 排除掉dll目录本身和它里面的文件
      cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/*'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      chunks: ['index'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/assets'), // 拷贝来源
          to: path.resolve(__dirname, 'dist/assets'), // 拷贝到的位置
          // 没有错误丢失
          noErrorOnMissing: true,
        },
      ],
      options: {},
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // 使用手动分包
    // new webpack.DllReferencePlugin({
    //   manifest: require('./dll/jquery.manifest.json'),
    // }),
    // new webpack.DllReferencePlugin({
    //   manifest: require('./dll/lodash.manifest.json'),
    // }),
  ],
  devServer: {
    port: 8000,
    open: true,
    hot: true,
    proxy: {},
  },
  optimization: {
    // 是否要启用压缩，默认情况下，生产环境会自动开启
    // minimize: true,
    minimizer: [
      // 压缩时使用的插件，可以有多个
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ],
    // 分包策略
    splitChunks: {
      chunks: 'all',
      //全局配置
      cacheGroups: {
        styles: {
          minSize: 0,
          test: /\.css$/,
          minChunks: 2,
        },
      },
    },
  },
  // context: path.resolve(__dirname, "src"),
};
