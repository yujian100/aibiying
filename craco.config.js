const CracoLessPlugin = require("craco-less");
const path = require('path')
const resolve = pathname =>path.resolve(__dirname,pathname)
module.exports = {
    plugins: [{ plugin: CracoLessPlugin }],
    // ...
    webpack: {
            alias: {
                '@':resolve('src'),
                'componset':resolve('src/componset'),
                'view':resolve('src/view'),
                'asset':resolve('src/asset'),
                'service':resolve('src/service'),
                '@mui/styled-engine': '@mui/styled-engine-sc'
            },
            resolve:{
                alias:{
                    '@mui/styled-engine': '@mui/styled-engine-sc'
                }
            }
            
    },
    
  };