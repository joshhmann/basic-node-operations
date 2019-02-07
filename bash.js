
// //#1. we output a prompt
// process.stdout.write('prompt > ');
//
// //#2.the stdnin 'data' event triggers after a user types in a line
// process.stdin.on('data', (data) => {
//
// //#3. we use trim to remove \n character at the end of data
//   const cmd = data.toString().trim();
//
//
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt >');
// });

const commands = require("./commands.js");

//prompt the user for input
process.stdout.write('prompt > ');

//stdin 'data event triggers after a user types in a line'
process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();
  //evaludateCmd is a function which will be implemented in the commands.js
  commands.evaluateCmd(userInput);
});
