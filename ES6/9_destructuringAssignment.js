const user = { 
  name: 'John Doe', 
  age: 34,
  hairColor: 'brown'
};

// const { name, age } = user;


console.log(user.age);
console.log(user.hairColor);





const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
// Only change code below this line

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line