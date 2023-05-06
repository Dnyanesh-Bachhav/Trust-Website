import Image from "next/image";
import ngo_help from "../../../assets/banners/ngo_help.jpg";
function Gallery() {
  return (
    <div id="gallery" className="gallery-container">
      {/* <h1 className='gallery-title' >Image Gallery</h1> */}
      <div className="title-container text-center mb-8">
        <div
          className="text-center z-0 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="section-title text-center">Image Gallery</h1>
        </div>
        {/* <div className="border border-b-1 border-b-gray-400 w-full z-2"></div> */}
        {/* <br /> */}
      </div>
      <div className="image-container">
        <Image src={ngo_help} alt="Picture of the author" width={500} />
        <Image src={ngo_help} alt="Picture of the author" width={500} />
        <Image src={ngo_help} alt="Picture of the author" width={500} />
      </div>
    </div>
  );
}
export default Gallery;
