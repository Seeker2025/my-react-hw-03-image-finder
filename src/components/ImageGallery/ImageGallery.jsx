export const ImageGallery = () =>{
    return (
        <>
            <ul class="gallery">
                { arr.map(itm=>(
                        <li>
                <img src={this.state.img} width="200" alt="cat" />            
                        </li>
                ))}
            </ul>
        
        </>

    )
}