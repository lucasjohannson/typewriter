const sentence = "hello there from lighthouse labs";
let startTime = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);

  }, startTime + 50) // <= 1s delay to make it noticeable. Can dial it down later.
  startTime += 50;
}

setTimeout(()=> {
  console.log();
}, 3000);