const { override, addWebpackPlugin } = require('customize-cra');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = override(
  addWebpackPlugin(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // Génère un fichier HTML avec la taille des bundles
      openAnalyzer: false, // Empêche l'ouverture automatique du rapport
    })
  )
);
