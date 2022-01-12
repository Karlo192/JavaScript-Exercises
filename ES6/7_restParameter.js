function howMany(...args) {
    console.log(args);
    return "You have passed " + args.length + " arguments.";
  }

  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));


  const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }