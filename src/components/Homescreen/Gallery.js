import Image from "next/image";
import ngo_help from "../../../assets/banners/ngo_help.jpg";
import { useEffect } from "react";

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
      {/* <div className="image-container">
        <Image src={ngo_help} alt="Picture of the author" width={500} />
        <Image src={ngo_help} alt="Picture of the author" width={500} />
        <Image src={ngo_help} alt="Picture of the author" width={500} />
      </div> */}
      {/* https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg */}
      <div class="carousel w-full h-1/4">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
}
export default Gallery;
