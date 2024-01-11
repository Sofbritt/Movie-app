import React from "react";
import TodayMovies from "../../../components/todayMovies/TodayMovies";
import WhatsPopular from "../../../components/whatsPopular/WhatsPopular";
import JoinToday from "../../../components/joinUs/JoinToday";
import { useEffect } from "react";


function Goodies() {
    
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  
    return (
        <div>
            <TodayMovies />
            <WhatsPopular />
            <JoinToday />

        </div>
    )
}

export default Goodies;