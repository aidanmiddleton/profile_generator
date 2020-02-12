// Pair coded with Joe Wang 


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const user = {};

rl.question('What is your name? Nicknames are fine. ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  user.name = answer;

  rl.question('What is an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    user.activity = answer;
    
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      user.music = answer;
      
      rl.question('What is your favourite meal of the day? ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        user.meal = answer;
        
        rl.question('What is your favourite food for that meal? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          user.food = answer;
          
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            user.sport = answer;
            
            rl.question('What is your superpower? ', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              user.superPower= answer;
              process.stdout.write(`${user.name} loves listening to ${user.music} while ${user.activity}. Their favourite meal of the day is ${user.meal}, and they like to eat ${user.food}. Their favourite sport is ${user.sport}, and their superpower is ${}\n`)
              rl.close();
            })
          })
        })
      })
      
    })
  })


});





