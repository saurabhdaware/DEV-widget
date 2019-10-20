const fse = require('fs-extra');
if(fse.existsSync('dist')){
    fse.removeSync('dist')
}

fse.copySync('src','dist');
fse.writeFileSync('dist/index.js',"export * from './card.component.mjs';")