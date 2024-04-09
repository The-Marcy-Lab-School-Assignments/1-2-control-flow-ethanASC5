const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(Math.floor(Math.random() * 10) +1)
/** FEEDBACK: Awesome job with this ternary! */
const coolnessGauge = (numOfFridges) => {
  return numOfFridges > 3 ? 'You are downright chilly!' : 'You need more fridges.';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if ( numOfFunkoPops < 11 ) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops < 21 ) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops < 31) {
    console.log('You need help!');
  } else if (numOfFunkoPops >= 31 ) {
    console.log('You need an intervention!!!');
  }
};
/** FEEDBACK: Make sure to keep spacing consistent in the future! */
const getWeatherReport = (temperature) => {
      let weatherReport;
  if (temperature > 90) {
    weatherReport = "It's hot and gross out."
    console.log(weatherReport);
  } else if (temperature > 70) {
     weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
}
else if (temperature  >= 32 && temperature <= 70 ) {
  weatherReport = "It's not too bad!";
 console.log(weatherReport);
}
else if (temperature < 32) {
     weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
  }

  console.log("And that's your report!");
  return weatherReport;
};
/** FEEDBACK: Great use of conditionals here, you could've also used a ternary here. Your code would then look like this: 
const returnPositiveNegativeZero = (num) => {
  if (num === 0) return 'Zero';
  return (num < 1) ? 'Negative' : 'Positive';
};
 */
const returnPositiveNegativeZero = (num) => {
  if (num === 0) {
    return 'Zero'
  } else if (num >0) {
    return 'Positive' 
  } else if (num <0) {
    return 'Negative'
  } 
};

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
