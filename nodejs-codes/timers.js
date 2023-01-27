
const timeoutObj = setTimeout(() => {
    console.log('timeout beyond time');
  }, 1500);
  
  const immediateObj = setImmediate(() => {
    console.log('immediately executing immediate');
  });
  
  const intervalObj = setInterval(() => {
    console.log('interviewing the interval');
  }, 500);
  
  clearTimeout(timeoutObj);
  clearImmediate(immediateObj);
  clearInterval(intervalObj);

  const timerObj = setTimeout(() => {
    console.log('will i run?');
  });
  
  // if left alone, this statement will keep the above
  // timeout from running, since the timeout will be the only
  // thing keeping the program from exiting
  timerObj.unref();
  
  // we can bring it back to life by calling ref() inside
  // an immediate
  setImmediate(() => {
    timerObj.ref();
  });

