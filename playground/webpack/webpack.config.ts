import WebpackRemove from 'unplugin-remove/webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { Configuration } from 'webpack'

const config: Configuration = {
  mode: (process.env.MODE as any) ?? 'development',
  entry: {
    app: './src/main.ts',
  },
  devtool: 'source-map',
  plugins: [
    process.env.MODE === 'production' ? WebpackRemove({}) : null,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ].filter(Boolean),
}
export default config
