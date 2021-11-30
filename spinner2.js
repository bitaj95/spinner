process.stdout.write('hello from spinner1.js... \rheyyy\n');

const ticks = ['|','/','-','|','\\','|','/','-','\\'];
let time = 0;

for (const tick of ticks) {

  setTimeout(() => {
    process.stdout.write(`\r${tick}`)
  }, 100 + time)
  time += 200;
}
