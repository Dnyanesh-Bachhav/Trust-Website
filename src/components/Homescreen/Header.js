import axios from "axios";
import Image from "next/image";
import Link from "next/link";

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
        <div className="header-container z-10">
            {/* <ul className="header-ul">
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
            </form> */}
            
<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
    <a href="#" class="flex items-center">
        <Image
        priority
        alt="SVG"
        src={"/logo.png"}
        width={34}
        height={34}
        class="mr-3"
        />
        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#7E4555] dark:[#7E4555]">Trust Web</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-sm text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">HOME<span className="ml-2" >+</span></a>
        </li>
        {/* <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            // Dropdown Menu
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">HOME<p>+</p></a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">GALLERY<p>+</p></a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">DAILY ROUTINE<p>+</p></a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"></a>
                </div>
            </div>
        </li> */}
        <li>
          <a href="#gallery" class="block py-2 pl-3 pr-4 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">GALLERY<span className="ml-2" >+</span></a>
        </li>
        <li>
          <a href="#events" class="block py-2 pl-3 pr-4 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">EVENTS<span className="ml-2" >+</span></a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">DAILY ROUTINE<span className="ml-2" >+</span></a>
        </li>
        <li>
          <a href="#findus" class="block py-2 pl-3 pr-4 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FIND US<span className="ml-2" >+</span></a>
        </li>
        <li>
          <a href="#contactus" class="block py-2 pl-3 pr-4 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT US<span className="ml-2" >+</span></a>
        </li>
      </ul>
    </div>
      <div className="bg-[#db4242] p-2 rounded-lg ">
        <Link href="/adminPanel" className="text-sm text-white font-bold font-sans ">Admin</Link>
      </div>
  </div>
</nav>

        </div>
    );
}
export default Header;