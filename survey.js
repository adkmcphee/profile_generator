const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your first name? ', (firstName) => {
  console.log(`Hey, ${firstName}, welcome!`);

  rl.question('What is an activity you like doing? ', (activity) => {
    console.log(`${activity} is an interesting activity!`);

    rl.question('What do you listen to while doing that? ', (band) => {
      console.log(`Right on. ${band} has some great tunes!`);

      rl.question('Which meal is your favourite? ', (meal) => {
        console.log(`Nice. ${meal} is one of my favourites.`);

        rl.question('What is your favourite thing to eat for that meal? ', (food) => {
          console.log(`Yum! I love ${food}`);

          rl.question('What sport is your favourite? ', (sport) => {
            console.log(`${sport} is a great way to stay in shape`);

            rl.question('What is your superpower? In a few words, tell us what you\'re amazing at. ', (superpower) => {
              console.log(`Now I know who to go to if I need ${superpower} done.`);

              rl.close();

              console.log(`This is ${firstName}, he likes ${activity} while listening to ${band}. Their go to meal is ${meal} - specifically ${food}. He likes the sport ${sport}, and they are amazing at ${superpower}`);

            });
          });
        });
      });
    });
  });
});





//output should be paragraph