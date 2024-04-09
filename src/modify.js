/** FEEDBACK: The functionality should not have changed meaning that the return should have stayed the same. In addition, this is not using a guard clause. A guard clause is basically a specific condition that will exit the function. 
 * This is what your code should have looked like instead: 
 * 
const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') return console.log('Yea that place is cool I guess');
  console.log('THE GREATEST CITY IN THE WORLD');
  console.log('THE CITY THAT NEVER SLEEPS');
  console.log('WOW WHAT A CITY');
};
 */
const wildlyBiasedReview = (location) => {
  if (location === 'NYC') {
     console.log('THE GREATEST CITY IN THE WORLD');
     console.log('THE CITY THAT NEVER SLEEPS');
     console.log('WOW WHAT A CITY');
  } else {
    console.log('Yea that place is cool I guess');
  }  
 return "where you tryna go"
};

module.exports = {
  wildlyBiasedReview,
};

