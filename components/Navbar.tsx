import { useState } from "react";
import Image from "next/image";
import Send from "../public/images/send.png"




const Navbar: React.FC = () => {
    const [zoomLevel, setZoomLevel] = useState(100);
  
    const handleZoomIn = () => {
      setZoomLevel(zoomLevel + 10);
    };
  
    const handleZoomOut = () => {
      setZoomLevel(zoomLevel - 10);
    };
  
    return (
      <div>
        <div className="nav">
          <div className="logo">
            <span className="logoName">Services</span>
            <span className="logoIcon">o</span>
          </div>
          
          <div className="navList">
            <div className="listFunc">
                <button className="listView">LIST VIEW</button>
                <span className="centerList">
                    <Image src={Send} alt="send_icon" />
                </span>
            </div>
            <div className="zoom">
                <button className="zoomMinus" onClick={handleZoomOut}>-</button>
                <span className="zoomDisplay">{zoomLevel}%</span>
                <button className="zoomPlus" onClick={handleZoomIn}>+</button>
            </div>
          </div>
        </div>
        <div style={{ transform: `scale(${zoomLevel / 100})` }}>
        </div>
      </div>
    );
  };
  
  export default Navbar;