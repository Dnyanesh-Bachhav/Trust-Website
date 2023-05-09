import Connect from "@/components/AdminPanel/Connect";
import Navbar from "@/components/AdminPanel/Navbar";
import Sidebar from "@/components/AdminPanel/Sidebar";
import axios from "axios";
import { useState } from "react";

function AdminPanel() {
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
  return (
    <div>
      <h1>Admin Panel</h1>
            <input type="file" accept="image/*"
            onChange={convertToBase64}
            />
            {
                image == "" || image == null ? "" : <img src={image} width={200} height={200}/>
            }
            <button type="button" onClick={handleImage} className="btn" >Submit</button>
      {/* <Connect/> */}
      <Navbar />
      <Sidebar />
    </div>
  );
}
export default AdminPanel;
