import Interaction from "./Interaction.js";

class TimestampedInteractions extends Interaction{
    
    timeStamp = "";
    
    constructor(prompt, response,timeStamp = new Date()){
        // check valid inputs
        if(prompt && response && timeStamp instanceof  Date){
            super(prompt, response);
            this.timeStamp = timeStamp;
        }else{
            throw new Error('Invalid parameters,need 2 non-null parameters and a Date type parameter');
        }
    }

    show(){
        console.log(
            `Prompt ${this.prompt.slice(0,20)}... had response ${this.response.slice(0,20)}... run at ${this.timeStamp}`
        );
    }
}
  
export default TimestampedInteractions ;