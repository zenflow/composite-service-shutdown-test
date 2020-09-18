const interval = setInterval(() => {}, 1000);
let exiting = false;

process.on("SIGINT", () => {
  console.log("got SIGINT");
  if (!exiting) {
    exiting = true;
    clearInterval(interval);
    setTimeout(() => {
      console.log("bye");
      process.exitCode = 130;
    }, 1000);
  }
});

console.log("hi");
