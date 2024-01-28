import Interaction from "./Interaction.js";

class DellaInteraction extends Interaction{

    prompt_img =""; // record the img url.
    response_img ="";
    isDalle = true;
    
    constructor(prompt, response,prompt_img,response_img){
        // check valid inputs
        if(prompt && response && prompt_img && response_img){
            super(prompt, response);
            this.prompt_img = prompt_img;
            this.response_img = response_img;
        }else{
            throw new Error('Invalid parameters,need 4 non-null parameters.');
        }
    }

    show(){
        console.log(
            `Prompt ${this.prompt.slice(0,20)}...`,
            `with image input url ${this.prompt_img.slice(0,20)}...`,
            `had response ${this.response.slice(0,20)}... `,
            `with image out put url ${this.response_img.slice(0,20)}...`
        );
    }

}    


export default DellaInteraction;