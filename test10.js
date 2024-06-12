function slowFunction() {
  return new Promise((resolver) => {
    setTimeout(() => {
      resolver('done');
    }, 3000);
  });
}