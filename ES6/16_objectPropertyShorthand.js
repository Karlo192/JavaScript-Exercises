const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

//syntactic sugar
const getMousePosition = (x, y) => ({ x, y });



const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name: name,
      age: age,
      gender: gender
    };
    // Only change code above this line
};

const createPerson = (name, age, gender) => {
    // Only change code below this line
    return { name, age, gender };
    // Only change code above this line
};


