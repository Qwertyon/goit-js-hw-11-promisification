const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms !== 0) {
        const time = ms;
        resolve(time);
      }
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
