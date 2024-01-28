class Interaction{
    response = "";
    promtpt = "";
    
    constructor(prompt, response){
        this.prompt = prompt;
        this.response = response
    }
    show(){
        console.log(
            `Prompt ${this.prompt.slice(0,20)}... had response ${this.response.slice(0,20)}...`
        );
    }
}



export default Interaction;