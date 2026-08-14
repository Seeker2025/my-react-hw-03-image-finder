import { 
                                Gallery,
                                ImageGalleryItem    
 } from './ImageGallery.styled';

export const ImageGallery = ({arr}) =>{
    return (
        <>
            <Gallery>
                { 
                arr.map(itm=>(
    <ImageGalleryItem  key={itm.id}>
        <img src={itm.webformatURL} alt={itm.name.split(', ')[0]} />            
    </ImageGalleryItem >
                ))
                }
            </Gallery>
        </>
    )
}