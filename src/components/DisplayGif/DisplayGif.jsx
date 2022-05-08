

const DisplayGiph = (props)=>{
    const {giph} = props;
    if(giph){
      const images = giph.data.images;
      const {downsized} = images;
      return(
          <div>
              <img
                src={downsized.url} 
                alt="giph"
                style={{"height": downsized.height, "width": downsized.width}}
              />
              <p>
                  <a href="https://giphy.com/">GIPHY</a>
              </p>
          </div>
      )


    }
}

export default DisplayGiph