import Image from 'next/image';
import ngo_help from '../../../assets/banners/map.png';
function FindUs() {
    return (
        <div id="findus">
            <h1 className='gallery-title'>Find Us</h1>
            <div className="findUsContainer">

                <div className='location-container'>
                    <h1>Reach Us At</h1>
                    <p>c-34 navshantiniketan society, near friends corner, akurdi, pune</p>
                </div>
                <Image
                    src={ngo_help}
                    alt="Picture of the author"
                    width={500}
                    className={"mapImage"}
                />
            </div>
        </div>
    );
}
export default FindUs;