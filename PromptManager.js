import Interaction from "./Interaction.js";
import TimestampedInteractions from "./TimeStampedInteraction.js";
import DellaInteraction from "./DellaInteraction.js";

export class PromptsManager {
    interactions = [];

    // Show 
    // show all
    showAllInterations(){
        for(let i = 0; i<this.interactions.length;i++){
            console.log(`Record ${i}:`);
            this.interactions[i].show();
        }
    }

    // show certain
    showInteration(indexNumber){
        console.log(`Record ${indexNumber}:`);
        this.interactions[indexNumber].show();
    }

    // show certain type
    showInterationType(indexNumber){
        console.log(`Record ${indexNumber}'s Type:`);
        
        if(this.interactions[indexNumber].isDalle === true){
            console.log("This is a instance of DellaInteraction Class which extends from Interaction.");
        }else{
            console.log("This is not a instance of DellaInteraction.");
        }   
    }

    // Record
    recordPrompt(prompt, response) {
        const p = new Interaction(prompt,response);
        //console.log("*** INTERACTIONS", this.interactions);
        this.interactions.push(p);
    }
    
    recordTimestampedPrompt(prompt, response,timeStamp = Date.now()) {
        const p = new TimestampedInteractions(prompt,response,timeStamp);
        //console.log("*** INTERACTIONS", this.interactions);
        this.interactions.push(p);
    }


    recordDellaPrompt(prompt, response,prompt_img,response_img) {
        const p = new DellaInteraction(prompt,response,prompt_img,response_img);
        //console.log("*** INTERACTIONS", this.interactions);
        this.interactions.push(p);
    }

    // Update
    updateUniversalPrompt(...args) {
        const numParams = args.length;
        const indexNumber = args[0];
        const prompt = args[1];
        const response = args [2];

        let p = {};

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

    // Delete
    deletePrompt(indexNumber){
        this.interactions.splice(indexNumber,1);
    }
}

export default PromptsManager;