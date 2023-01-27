
const after = require('./swap_rotate')

const ArrayToObject = ([key, value]) => ({
    [key] : value
})

after(ArrayToObject(['name', 'Marlon']))
