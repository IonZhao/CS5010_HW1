import PromptsManager from "./PromptManager.js";

const myPromptManager = new PromptsManager();

// Record each prompt
myPromptManager.recordPrompt(
  "Aren't you forgetting a very important one?",
  "I apologize if I missed mentioning a specific coding paradigm. Please clarify which paradigm you are referring to, and I'll be happy to provide information about it."
);
  
myPromptManager.recordPrompt(
  "What is imperative programming?",
  "Imperative programming is a programming paradigm that uses statements that change a program's state. In imperative programming, the focus is on describing how a program operates."
);

myPromptManager.recordTimestampedPrompt(
  "Prompt test1 with timestamp","Response test1 with timestamp",new Date()
);

myPromptManager.recordDellaPrompt(
  "DellaPrompt test1 with img url","DellaResponse test1 with img url","https://i.insider.com/64a325b16075be0019c28e16?width=1000&format=jpeg&auto=webp","https://media.themoviedb.org/t/p/w500/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg"
);

// show all the record
// SHOW
console.log("----------------------------------------------------SHOW--------------------------------------------");
console.log("-------SHOW ALL RECORD:-------");
myPromptManager.showAllInterations();

// show certain record
console.log("-------SHOW CERTAIN RECORD:-------");
myPromptManager.showInteration(3);


// show certain record's type
console.log("-------SHOW RECORD'TYPE:-------");
myPromptManager.showInterationType(3);
myPromptManager.showInterationType(2);


// update certain record
console.log("---------------------------------------------------UPDATE-------------------------------------------");
console.log("-------BEFORE UPDATE ON RECORD 2:-------");
myPromptManager.showInteration(2);
// update
myPromptManager.updateUniversalPrompt(
  2, "Update prompt test2","Update response test2",new Date()
);

console.log("-------AFTER UPDATE ON RECORD 2:-------");
myPromptManager.showInteration(2);

console.log("---------------------------------------------------DELETE-------------------------------------------");
console.log("-------BEFORE DELETE:-------");
myPromptManager.showAllInterations();
// delete certain record
myPromptManager.deletePrompt(1);
myPromptManager.deletePrompt(1);

console.log("-------AFTER DELETE:-------");
myPromptManager.showAllInterations();