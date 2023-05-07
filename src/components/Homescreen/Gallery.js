import Image from "next/image";
import ngo_help from "../../../assets/banners/ngo_help.jpg";
import { useEffect, useState } from "react";
import styles from "../../styles/gallery.module.css";
import axios from "axios";

function Gallery() {
  const [ images, setImages ] = useState([]);
  async function getAllImages(){
    const res = await axios.get("http://localhost:3000/api/gallery");
    console.log(res.data.photos);
    setImages(res.data.photos);
  }
  useEffect(()=>{
    getAllImages();
  },[]);
  return (
    <div id="gallery" className="gallery-container">
      {/* <h1 className='gallery-title' >Image Gallery</h1> */}
      <div className="title-container text-center">
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

<div className={styles.container}>
  {
    images.map(img=>(

      <div class={styles.hex_cell}><img className={styles.image} src={ img.img_src } /></div>
    ))
  }
  {/* <div class={styles.hex_cell}><img className={styles.image} src="/Gallery/2.jpg"/></div>
  <div class={styles.hex_cell}><img className={styles.image} src="/Gallery/5.jpeg"/></div>
  <div class={styles.hex_cell}><img className={styles.image} src="/Gallery/4.jpg"/></div>
  <div class={styles.hex_cell}><img className={styles.image} src="/Gallery/7.jpg"/></div>
  <div class={styles.hex_cell}><img className={styles.image} src="/Gallery/3.jpg"/></div>
  <div class={styles.hex_cell}><img className={styles.image} src="https://images.unsplash.com/photo-1515937350506-3e7b51a95339?w=650&amp;fm=jpg"/></div> */}
</div>
  </div>
  );
}
export default Gallery;
