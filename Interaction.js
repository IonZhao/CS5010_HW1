class Interaction{
    response = "";
    promtpt = "";
    
    constructor(prompt, response){
        // check valid inputs
        if(prompt && response){
            this.prompt = prompt;
            this.response = response
        }else{
            throw new Error('Invalid parameters,need 2 non-null parameters');
        }
    }

    show(){
        console.log(
            `Prompt ${this.prompt.slice(0,20)}... had response ${this.response.slice(0,20)}...`
        );
    }
}



export default Interaction;