import { useState } from "react";

const DisplayGiph = (props)=>{
    const {giph} = props;
    if(giph){
      const images = giph.data.images;
      const {downsized, downsized_large, downsized_medium} = images;
      return(
          <div>
              <img
                src={downsized.url} 
                alt="giph"
                style={{"height": downsized.height, "width": downsized.width}}
              />
          </div>
      )


    }
}

export default DisplayGiph