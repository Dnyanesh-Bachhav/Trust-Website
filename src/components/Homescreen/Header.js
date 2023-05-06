import axios from "axios";

function Header() {
    const handleSubmit = async (e)=>{
        console.log("In a function");
        e.preventDefault();
        console.log("Called...");
        axios.post('/api/setGallery',{
            name: "Photo 4",
            img_src: "photo4.png",
            index: 4
        }).then((res)=>{
            console.log("Response: ");
            console.log(res);
        }).catch(e=>{
            console.log("Error: "+e);
        });
    }
    return (
        <div className="header-container">
            <ul className="header-ul">
                <li><a className="active" href="#home">HOME</a><p>+</p></li>
                <li><a href="#gallery">GALLERY</a><p>+</p></li>
                <li><a href="#contact">EVENTS</a><p>+</p></li>
                <li><a href="#contact">DAILY ROUTINE</a><p>+</p></li>
                <li><a href="#findus">FIND US</a><p>+</p></li>
                <li><a href="#about">ABOUT US</a><p>+</p></li>
            </ul>

            <form action="" method="post" onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}
export default Header;