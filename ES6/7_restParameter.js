function howMany(...args) {
    console.log(args);
    return "You have passed " + args.length + " arguments.";
  }

  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));


  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

  sum(0,1,2);