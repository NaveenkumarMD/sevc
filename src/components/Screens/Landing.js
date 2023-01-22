import React from "react";
import { Menu, Layout, Button, Carousel, message } from "antd";
import theme from "../../css/theme.json";
import Logo from "../../assets/Logo.png";
import car from "../../assets/car.jpg";
import "../../css/landing.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react";
const { Header, Content } = Layout;

export default function Landing() {
  const [pauseOnfocus,setpauseonfocus]=useState(false)
  const handleclick=()=>{
    console.log("click")
      setTimeout(()=>{
        message.info("Click on the image to view the full size image")
        setpauseonfocus(true)
      },[300])
  }
  const handleleave=()=>{
    console.log("leave")
    setpauseonfocus(false)
  }
  return (
    <Layout>
    <Navbar />
      <Content style={{
        backgroundColor: theme.colors.primaryBlack,
      }}>
        <Carousel autoplay infinite={true}
          autoplaySpeed={2000} 
          pauseOnHover={pauseOnfocus}
          pauseOnFocus={false}
          effect="scrollx"
        >

          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/launchposter_wide.png")}/>
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/sevc2023_rushindusk.png")}/>
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/GIO6.png")}/>
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/Rulebook and General Engineering Test Poster- For Website.png")} />
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/sevc22_winner.png")} />
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/sevc22_runnerup_1st.png")} />
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/sevc22_runnerup_2nd.png")}  />
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/shutbug22.png")} />
          </div>
        </Carousel>
      </Content>
      <Footer />
    </Layout>
  );
}
