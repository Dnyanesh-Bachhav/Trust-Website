import Image from "next/image";
import ngo_help from "../../../assets/banners/map.png";
import styles from "../../styles/findUs.module.css";
function FindUs() {
  return (
    <div id="findus" className="mb-10">
      <div className="title-container text-center mb-8">
        <div className="text-center z-0 " style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <h1 className="section-title text-center">Find Us</h1>
        </div>
        {/* <div className="border border-b-1 border-b-gray-400 w-full z-2"></div> */}
        {/* <br /> */}
      </div>
      <div className="findUsContainer">
        <div className="location-container">
          <h1 className={styles.title}>Reach Us At</h1>
          <p>
            c-34 navshantiniketan society, near friends corner, akurdi, pune
          </p>
          <br />
          <div className={styles.social_media_link_container}>
            <div className="drop-shadow-xl">
              <i className="bi bi-instagram p-4 bg-slate-400 rounded-full"></i>
            </div>
            <div className="drop-shadow-xl">
              <i className="bi bi-facebook p-4 ml-2 bg-slate-400 rounded-full drop-shadow-xl"></i>
            </div>
            <div className="drop-shadow-xl">
              <i className="bi bi-envelope p-4 ml-2 bg-slate-400 rounded-full drop-shadow-xl"></i>
            </div>
            <div className="drop shadow-xl">
              <i className="bi bi-twitter p-4 ml-2 bg-slate-400 rounded-full drop-shadow-xl"></i>
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.340120277385!2d73.75609047514867!3d18.648727382469882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9faa4357807%3A0xbfc3f8b31bb9306b!2sNavshantiniketan%20Society!5e0!3m2!1sen!2sin!4v1683051755724!5m2!1sen!2sin"
          width="800"
          height="1000"
          style={{ border: "1px solid black" }}
          className="map-container border-8 border-gray-800"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
export default FindUs;
