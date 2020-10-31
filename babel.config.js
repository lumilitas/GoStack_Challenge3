module.exports = {
  presets: [
    '@babel/preset-env',  // converte o JS mais recente para um outro de acordo com o ambiente;
    '@babel/preset-react' // adiciona as funcionalidades do react na conversão do código JS;
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}