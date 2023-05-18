import axios from "axios";
import { useState } from "react";

function GalleryUpload(){
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    async function handleImage() {
        console.log("In a function");
        // e.preventDefault();
        console.log("Called...");
        console.log(name);
        console.log(image);
        axios
          .post("http://localhost:3000/api/setGallery", {
            name: name,
            img_src: image,
            // index: 4
          })
          .then((res) => {
            alert("Uploaded...");
            console.log("Response: ");
            console.log(res);
          })
          .catch((e) => {
            console.log("Error: " + e);
          });
      }
      const convertToBase64 = (e) => {
        e.preventDefault();
        console.log(e);
        var reader = new FileReader();
        // console.log(e.target.files[0].name);
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          // console.log(reader.result);
          setName(e.target.files[0].name);
          setImage(reader.result);
          // handleImage();
        };
        reader.onerror = (error) => {
          console.log("Error: ", error);
        };
      };
    return(
        <div className="h-screen flex justify-center items-center px-2">
                <div className="w-[320px] grid gap-2">
                    <div className="h-24 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200">
                        <input type="file" name="file" onChange={convertToBase64} className="z-20 opacity-0 cursor-pointer h-full w-full" />
                        <div className="absolute flex justify-center items-center gap-2">
                            <img className={`h-10 w-10 rounded-full ${ image != null ? 'opacity-1':'opacity-0'}`} src={image ? image : null} />
                            <span className="text-[18px] text-gray-400 w-56 truncate">{ image != null ? name : 'choose a file'}</span>
                        </div>        
                    </div>
                    <button onClick={handleImage} className="w-full h-14 bg-green-600 text-white rounded-md">Upload</button>
                </div>
            </div>
    );
}
export default GalleryUpload;