import { useState } from "react";

const Form = ({getGifFromInput})=>{
    //utilize useState hook anytime I need to render something on screen
    const [inputState, setInputState] = useState({searchTerm: ""})

    const handleChange = (e)=>{
        const newState = {[e.target.name]: e.target.value};
        setInputState(newState);
        console.log(newState)
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        getGifFromInput(inputState.searchTerm)
        setInputState({searchTerm:""});
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange} 
                    type="text" name="searchTerm" 
                    value={inputState.searchTerm} 
                    placeholder="enter tag or click button for random gif"
                    style={{"width":"35vh"}}
                    />
                <input type="submit" value="Get Gif!"/>
            </form>
        </div>
    )
}

export default Form