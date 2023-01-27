const testFunc = (myArg) => {
    if(typeof myArg === 'string'){
        console.log(` The argument is of type string, i.e. --> \'${myArg}\'`)
    }
    else {
        console.log(myArg)
    }
}

testFunc('Marlon')