
const after = require('./swap_rotate')

const createUser = ({
    userName = 'anonymous',
    age = 20,
    avatar = 'unknown.png' } = {}) => ({
        userName,
            age,
                avatar
});

after(createUser({userName: 'Master Marlon', 
age: 36, avatar: 'yuelami.png'}))

const addNums = ({
    x = 0, y = 0, z = 0, w = 0, 
    sum = x + y + z + w,
    less = x - y - z - w,
    roots = [Math.sqrt(x), Math.sqrt(y), Math.sqrt(z), Math.sqrt(w)]
} = {}) => ({
        x, y, z, w, sum, less, roots
});

after(addNums({x: 14, y: 124, z: 39}))