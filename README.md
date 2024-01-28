# OOP Coding

Class: CS5610 HW1

Author: Yang Zhao

License: MIT



## Test

Enter blow to run the code and check the solution.

```bash
node index.js
```

The output will be 3 part. Each modification will be done and result would output to the console.



### Show record

Show all the interaction that just been recorded.

```
***SHOW ALL RECORD:
Record 0:
Prompt Aren't you forgettin... had response I apologize if I mis...
Record 1:
Prompt What is imperative p... had response Imperative programmi...
Record 2:
Prompt Prompt Test1 with ti... had response Response Test1 with ... run at Sat Jan 27 2024 15:53:40 GMT-0800 (Pacific Standard Time)
Record 3:
Prompt DellaPrompt Test1 wi... with image input url https://i.insider.co... had response DellaResponse Test1 ...  with image out put url https://media.themov...
***SHOW CERTAIN RECORD:
Record 3:
Prompt DellaPrompt Test1 wi... with image input url https://i.insider.co... had response DellaResponse Test1 ...  with image out put url https://media.themov...
***SHOW RECORD'TYPE:
Record 3's Type:
This is a instance of DellaInteraction Class which extends from Interaction.
```



### Update Record

Show all the interaction and check if successfully update .

```
***AFTER UPDATE ON RECORD 2:
Record 2:
Prompt Update Prompt Test2... had response Update Response Test... run at Sat Jan 27 2024 15:55:42 GMT-0800 (Pacific Standard Time)
```



### Delete Record

Show all the interaction and check if successfully delete.

```
***AFTER DELETE:
Record 0:
Prompt Aren't you forgettin... had response I apologize if I mis...
Record 1:
Prompt DellaPrompt Test1 wi... with image input url https://i.insider.co... had response DellaResponse Test1 ...  with image out put url https://media.themov...
```



## Implementation Detail

In the index.js,there are 4 basic module to test the coding.

### Show

#### Show all

Use method showAllInterations in PromptManager to output all the record in the console.

Here is the code in the index.js.

```javascript
console.log("***SHOW ALL RECORD:")
myPromptManager.showAllInterations();
```

#### show certain

Use showInteration(indexNumber) in PromptManager to output a certain record according to the input index to the console.

```javascript
console.log("***SHOW CERTAIN RECORD:");
myPromptManager.showInteration(3);
```

#### show certain type

Use showInterationType(indexNumber) in PromptManager to output a certain record's type according to the input index to the console.

Since only DellaInteracion implement the method, if the interaction is a instance of DellaInteraction it will pass. But if it's not, the program will throw a **error**.

```javascript
// show certain record's type
console.log("***SHOW RECORD'TYPE:");
myPromptManager.showInterationType(3);
```



### Record

There are three class of Interation.

1. Interaction
2. TimeStampedInteraction
3. DellaInteraction

So there are three ways to record the prompt. They are:

```javascript
myPromptManager.recordPrompt();

myPromptManager.recordTimestampedPrompt();

myPromptManager.recordDellaPrompt();
```



### Update

Update certain interaction based on the input index.

Use parameters number to decide which type of Interaction to put in updating.

```javascript
// update certain record
myPromptManager.updateUniversalPrompt(
  2, "Update Prompt Test2","Update Response Test2",new Date()
)
```



### Delete

Delete certain interaction based on the input index.

```javascript
// delete certain record
myPromptManager.deletePrompt(1);
```



## Creative Features

Since we already have the function which can read, create and delete the interactions in the PromptManager, we can add a update function to implement a simple CRUD(create/ read/ update/delete)  database.

We can delete certain interaction use it's index number. But we still need to create a interaction to replace it. However, we have 3 type of interaction, and which one should we choose according to the input?

We can create 3 updating method to deal to different condition. But I decide to use parameters number to judge which class need to be used. Use the code blow we can figure out which type of interaction the user want to use.

```javascript
// Update
updateUniversalPrompt(...args) {
    //...
    if(numParams === 3){
        p = new Interaction(prompt,response);
    }else if(numParams === 4){
        const timeStamp = args[3];
        p = new TimestampedInteractions(prompt,response,timeStamp);
    }else if(numParams === 5){
        const prompt_img = args[3];
        const response_img = args[4];
        p = new DellaInteraction(prompt,response,prompt_img,response_img);
    }else{
        console.log("Wrong input.");
        return;
    }
    //console.log("*** INTERACTIONS", this.interactions);
    this.interactions.splice(indexNumber,1,p);
}
```