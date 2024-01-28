import Interaction from "./Interaction.js";

class TimestampedInteractions extends Interaction{
    
    timeStamp = "";
    
    constructor(prompt, response,timeStamp){
        super(prompt, response);
        this.timeStamp = timeStamp;
    }

    show(){
        console.log(
            `Prompt ${this.prompt.slice(0,20)}... had response ${this.response.slice(0,20)}... run at ${this.timeStamp}`
        );
    }
}
  
export default TimestampedInteractions ;