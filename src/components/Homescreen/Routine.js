import Image from "next/image";
import styles from "../../styles/routine.module.css";
import img1 from "../../../assets/event 1.jpg"
function Routine() {
  return (
    <div className={styles.container} id="routine">
      {/* title */}
      <div className="title-container text-center mt-8 mb-8 ">
        <div
          className="text-center z-0 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="section-title text-center">Routine</h1>
        </div>
        {/* <div className="border border-b-1 border-b-gray-400 w-full z-2"></div> */}
        {/* <br /> */}
      </div>
      {/* <!-- component --> */}
      <div class="flex flex-col bg-white">
        
        <div
          className={`flex overflow-x-scroll pb-10 ${styles.hide_scroll_bar}`}
        >
          <div class="flex flex-nowrap lg:ml-20 md:ml-10 ml-10">
            <div class="inline-block px-3">
              <div class="w-96 h-[440px] max-w-xs border border-gray-200 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <a href="#">
                  <img
                    //   width={}
                    class="rounded-t-lg"
                    src="/routine/opening.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <p className="text-sm text-gray-500 font-bold" >Temple Opening</p>
                  <a href="#">
                    <h6 class="mb-2 text-2xl font-bold tracking-tight text-[#db4242] dark:text-white">
                      Noteworthy technology
                    </h6>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far.
                  </p>
                  <div className="inline-flex" >
                    <i class="bi bi-clock text-[#db4242] "></i>
                    <p className="ml-2 text-sm text-gray-400">6:00 - 6:30 AM</p>
                  </div>
                  <br />
                  <div className="inline-flex" >
                    <i class="bi bi-geo-alt text-[#db4242]"></i>
                    {/* <i class="bi bi-clock-fill"></i> */}
                    <p className="ml-2 text-sm text-gray-400">56 Thatcher Avenue River Forest Chicago, IL United</p>
                  </div>

                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-96 h-[440px] max-w-xs border border-gray-200 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <a href="#">
                  <img
                    //   width={}
                    class="rounded-t-lg"
                    src="https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/blog/3.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <p className="text-sm text-gray-500 font-bold" >Morning Aarti</p>
                  <a href="#">
                    <h6 class="mb-2 text-2xl font-bold tracking-tight text-[#db4242] dark:text-white">
                      Daily Morning Aarti
                    </h6>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far.
                  </p>
                  <div className="inline-flex" >
                    <i class="bi bi-clock text-[#db4242] "></i>
                    <p className="ml-2 text-sm text-gray-400">7:00 AM</p>
                  </div>
                  <br />
                  <div className="inline-flex" >
                    <i class="bi bi-geo-alt text-[#db4242]"></i>
                    {/* <i class="bi bi-clock-fill"></i> */}
                    <p className="ml-2 text-sm text-gray-400">56 Thatcher Avenue River Forest Chicago, IL United</p>
                  </div>

                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-96 h-[440px] max-w-xs border border-gray-200 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <a href="#">
                  <img
                    //   width={}
                    class="rounded-t-lg"
                    src="/routine/opening.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <p className="text-sm text-gray-500 font-bold" >Temple Opening</p>
                  <a href="#">
                    <h6 class="mb-2 text-2xl font-bold tracking-tight text-[#db4242] dark:text-white">
                      Noteworthy technology
                    </h6>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far.
                  </p>
                  <div className="inline-flex" >
                    <i class="bi bi-clock text-[#db4242] "></i>
                    <p className="ml-2 text-sm text-gray-400">6:00 - 6:30 AM</p>
                  </div>
                  <br />
                  <div className="inline-flex" >
                    <i class="bi bi-geo-alt text-[#db4242]"></i>
                    {/* <i class="bi bi-clock-fill"></i> */}
                    <p className="ml-2 text-sm text-gray-400">56 Thatcher Avenue River Forest Chicago, IL United</p>
                  </div>

                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-96 h-[440px] max-w-xs border border-gray-200 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <a href="#">
                  <img
                    //   width={}
                    class="rounded-t-lg"
                    src="https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/blog/3.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <p className="text-sm text-gray-500 font-bold" >Temple Opening</p>
                  <a href="#">
                    <h6 class="mb-2 text-2xl font-bold tracking-tight text-[#db4242] dark:text-white">
                      Noteworthy technology
                    </h6>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far.
                  </p>
                  <div className="inline-flex" >
                    <i class="bi bi-clock text-[#db4242] "></i>
                    <p className="ml-2 text-sm text-gray-400">6:00 - 6:30 AM</p>
                  </div>
                  <br />
                  <div className="inline-flex" >
                    <i class="bi bi-geo-alt text-[#db4242]"></i>
                    {/* <i class="bi bi-clock-fill"></i> */}
                    <p className="ml-2 text-sm text-gray-400">56 Thatcher Avenue River Forest Chicago, IL United</p>
                  </div>

                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-96 h-[440px] max-w-xs border border-gray-200 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <a href="#">
                  <img
                    //   width={}
                    class="rounded-t-lg"
                    src="/routine/opening.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <p className="text-sm text-gray-500 font-bold" >Temple Opening</p>
                  <a href="#">
                    <h6 class="mb-2 text-2xl font-bold tracking-tight text-[#db4242] dark:text-white">
                      Noteworthy technology
                    </h6>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far.
                  </p>
                  <div className="inline-flex" >
                    <i class="bi bi-clock text-[#db4242] "></i>
                    <p className="ml-2 text-sm text-gray-400">6:00 - 6:30 AM</p>
                  </div>
                  <br />
                  <div className="inline-flex" >
                    <i class="bi bi-geo-alt text-[#db4242]"></i>
                    {/* <i class="bi bi-clock-fill"></i> */}
                    <p className="ml-2 text-sm text-gray-400">56 Thatcher Avenue River Forest Chicago, IL United</p>
                  </div>

                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-96 h-[440px] max-w-xs border border-gray-200 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <a href="#">
                  <img
                    //   width={}
                    class="rounded-t-lg"
                    src="/routine/opening.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <p className="text-sm text-gray-500 font-bold" >Temple Opening</p>
                  <a href="#">
                    <h6 class="mb-2 text-2xl font-bold tracking-tight text-[#db4242] dark:text-white">
                      Noteworthy technology
                    </h6>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far.
                  </p>
                  <div className="inline-flex" >
                    <i class="bi bi-clock text-[#db4242] "></i>
                    <p className="ml-2 text-sm text-gray-400">6:00 - 6:30 AM</p>
                  </div>
                  <br />
                  <div className="inline-flex" >
                    <i class="bi bi-geo-alt text-[#db4242]"></i>
                    {/* <i class="bi bi-clock-fill"></i> */}
                    <p className="ml-2 text-sm text-gray-400">56 Thatcher Avenue River Forest Chicago, IL United</p>
                  </div>

                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-96 h-[440px] max-w-xs border border-gray-200 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <a href="#">
                  <img
                    //   width={}
                    class="rounded-t-lg"
                    src="https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/blog/3.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <p className="text-sm text-gray-500 font-bold" >Temple Opening</p>
                  <a href="#">
                    <h6 class="mb-2 text-2xl font-bold tracking-tight text-[#db4242] dark:text-white">
                      Noteworthy technology
                    </h6>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far.
                  </p>
                  <div className="inline-flex" >
                    <i class="bi bi-clock text-[#db4242] "></i>
                    <p className="ml-2 text-sm text-gray-400">6:00 - 6:30 AM</p>
                  </div>
                  <br />
                  <div className="inline-flex" >
                    <i class="bi bi-geo-alt text-[#db4242]"></i>
                    {/* <i class="bi bi-clock-fill"></i> */}
                    <p className="ml-2 text-sm text-gray-400">56 Thatcher Avenue River Forest Chicago, IL United</p>
                  </div>

                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-96 h-[440px] max-w-xs border border-gray-200 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <a href="#">
                  <img
                    //   width={}
                    class="rounded-t-lg"
                    src="/routine/bhajan.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <p className="text-sm text-gray-500 font-bold" >Temple Opening</p>
                  <a href="#">
                    <h6 class="mb-2 text-2xl font-bold tracking-tight text-[#db4242] dark:text-white">
                      Noteworthy technology
                    </h6>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far.
                  </p>
                  <div className="inline-flex" >
                    <i class="bi bi-clock text-[#db4242] "></i>
                    <p className="ml-2 text-sm text-gray-400">6:00 - 6:30 AM</p>
                  </div>
                  <br />
                  <div className="inline-flex" >
                    <i class="bi bi-geo-alt text-[#db4242]"></i>
                    {/* <i class="bi bi-clock-fill"></i> */}
                    <p className="ml-2 text-sm text-gray-400">56 Thatcher Avenue River Forest Chicago, IL United</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Routine;
