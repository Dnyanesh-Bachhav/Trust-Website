import Image from 'next/image';
import ngo_help from '../../../assets/banners/ngo_help.jpg';
function Gallery() {
    return (
        <div id='gallery' className='gallery-container'>
            <h1 className='gallery-title' >Image Gallery</h1>
            <div className="image-container">
                <Image
                    src={ngo_help}
                    alt="Picture of the author"
                    width={500}
                    />
                <Image
                    src={ngo_help}
                    alt="Picture of the author"
                    width={500}
                    />
                <Image
                    src={ngo_help}
                    alt="Picture of the author"
                    width={500}
                    />
            </div>
        </div>
    );
}
export default Gallery;