const fse = require('fs-extra');
const minify = require('@node-minify/core');
const terser = require('@node-minify/terser');

if(fse.existsSync('dist')){
    fse.removeSync('dist')
}

fse.copySync('src','dist');

minify({
    compressor: terser,
    input: 'src/card.component.mjs',
    output: 'dist/card.component.min.mjs',
    callback: function(err, min) {}
});
  
fse.writeFileSync('dist/index.js',"export * from './card.component.mjs';")