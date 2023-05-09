const { default: Navbar } = require("./Navbar");
const { default: Sidebar } = require("./Sidebar");

function Connect(){
    return(
        <div>
            <frameset cols="25%,75%">
  <frame src={<Navbar/>} scrolling="no" name="frame1" noresize="no"></frame>
  <frame src={<Sidebar/>} scrolling="yes" name="frame2" noresize="no"></frame>

</frameset>
            {/* <Sidebar/> */}
            {/* <Navbar/> */}
        </div>
    );
}
export default Connect;