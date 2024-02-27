function rand(min = 0, max = 100000) {
    const num = Math.random() * (max - min) +
      min;
    return Math.floor(num);
  }

  console.log(rand());