const wakeUp = (action) => action('Acordando!!');
const breakfast = (action) => action('Bora tomar café!!');
const toSleep = (action) => action('Partiu dormir!!');
const doingThings = (action) => {
  action(console.log)
};

doingThings(toSleep);