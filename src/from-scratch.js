const measureRain = (inches) => {
if (inches===0) { 
console.log('drought')
} 
else if (inches < 2) {
  console.log('dry')
} 
else if (inches < 4) {
  console.log('average')
}
else if (inches < 6) {
  console.log('rainy')
}
else {
  console.log('flood')
}
};
// measureRain(3)





const happyBirthdayPet = (breed,age) => {
  if (breed==='snake') {
    console.log('Hiss Hiss')
  } else if (breed==='cat' && age < 5 ) {
    console.log('Mew mew')
  } else if (breed==='cat' && age >= 5) {
    console.log('Meow meow')
  } else if (breed==='dog' && age > 5 ) {
console.log('Arf arf')
  } else if (breed==='dog' && age >= 5 ) {
  console.log('Woof woof')
  } else if (breed==='dog' && age <=10 ) {
  console.log('Boof boof')
  }
}

// if (breed = 'snake') {
//   console
// } else if (breed = 'cat') {
//   if (age < 5) {
//     console
//   } else if (age > 5) {
//     console
//   }
// } else if (breed = 'dog')


const funTypes = (jsType) => {
  if (typeof jsType === 'string') {
  console.log('That\'s just some text.') 

} else if (typeof jsType === 'boolean') {
  console.log('To bool, or not to bool?') 
  
} else if (typeof jsType === 'undefined') {
  console.log('Nothing, but I didn\'t set that') 
  
} else if (jsType === null) {
  console.log('Nothing, and I did see that') 
  
} else if (Array.isArray(jsType)) {
  console.log('I order you to be indexed.') 
  
} else if (Number.isNaN(jsType)) {
  console.log('Well, now you\'re just showing off.') 
  
} else if (typeof jsType === 'object') {
  console.log('Anybody got the key?') 
  
} else if (typeof jsType === 'number') {
  console.log('That\'s a good number.') 

} 
};

// console.log(typeof NaN)

funTypes('yo');
funTypes(6);
funTypes(false)
funTypes(undefined)
funTypes(null)
funTypes({})
 funTypes([])
funTypes(NaN)


// when they ask to return message ---> return "___"
// to call function cosole.log(function name(____))


const rounder = (float,roundingSetting) => {
  if (roundingSetting==='up') { 
      return Math.ceil(float)
  }  else if (roundingSetting==='down')  { 
      return Math.floor(float)
    } else if (roundingSetting==='honest') { 
      return Math.round(float)}
};

console.log(rounder( 3.5, 'up'))
console.log(rounder( 3.5, 'down'))
console.log(rounder( 7.7, 'honest'))

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
