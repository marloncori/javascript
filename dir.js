const fsp = require('fs').promises
const fs = require('fs')


/*if(!fs.existsSync('./tutorial')) {
    fs.mkdir('./new_dir', (err) => {
        if(err) throw err
        console.log('  Another folder has been created!')
    })
} else {
    fs.rmdir('./new_dir', (err) => {
        if(err) throw err
        console.log('\n\t  Folder \'new_dir\' has been deleted.')
    })
}*/

const fsPromise = async () => {
    try {
        await fsp.mkdir('./tutorial')
        console.log(' New folder has been created!')
        await fsp.writeFile('./tutorial/index.js', 'console.log()', 'utf-8')
        console.log('\n File has been created inside new folder!')
    }catch (err){
        console.error(' Folder has not been created. Cause:\n ', err)
    }
}

fsPromise().then(' Visual Studio Code can be shutdown soon...')


