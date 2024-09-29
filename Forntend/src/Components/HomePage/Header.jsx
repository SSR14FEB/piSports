import React from "react";
import {useDispatch} from "react-redux"
import { Link, NavLink } from "react-router-dom";
import { cricketBtn } from "../../cardComponets/ReduxComponents/slice";
import { useState } from "react";
import {
  MdOutlineSportsCricket,
  MdOutlineSportsHockey,
  MdSportsTennis,
  MdSportsKabaddi,
  MdSportsHandball,
} from "react-icons/md";
import { GiSoccerKick } from "react-icons/gi";
import Section1 from "./Section1";

function Header() {
  const card1 = {
    name: "Cricket",
    icon: "https://fonts.gstatic.com/s/i/materialiconsoutlined/sports_cricket/v1/24px.svg",
  };
  const card2 = {
    name: "Soccer",
    icon: "https://fonts.gstatic.com/s/i/materialiconsoutlined/sports_soccer/v1/24px.svg",
  };
  const card4 = {
    name: "Soccer",
    icon: "https://fonts.gstatic.com/s/i/materialiconsoutlined/sports_hockey/v1/24px.svg",
  };
  const card5 = {
    name: "Tennis",
    icon: "https://fonts.gstatic.com/s/i/materialiconsoutlined/sports_tennis/v1/24px.svg",
  };
  const card6 = {
    name: "Kabaddi",
    icon: "https://fonts.gstatic.com/s/i/materialiconsoutlined/sports_kabaddi/v1/24px.svg",
  };
  const card7 = {
    name: "Kho-Kho",
    icon: "https://fonts.gstatic.com/s/i/materialiconsoutlined/sports_handball/v1/24px.svg",
  };

  const [cricketColor, setCricketColor] = useState(false);
  const [SoccerColor, setSoccerColor] = useState(false);
  const [hockeyColor, setHockeyColor] = useState(false);
  const [badmintonColor, setBadmintonColor] = useState(false);
  const [kabadiColor, setKabdiColor] = useState(false);
  const [handballColor, setHandballColor] = useState(false);

  const dispatch=useDispatch();
  dispatch(cricketBtn(cricketColor));

  return (
    <header className="h-24 w-screen grid grid-rows-[50%_50%] fixed z-10 bg-white text-orange-600">
      <div className=" grid row-span1 gird-cols-[10%_90%]">
        <div className="col-start-1 col-end-2 flex flex-wrap justify-start items-center">
          <p className="relative left-4">
            <strong>piSports</strong>
          </p>
        </div>
        <div className="col-start-2 col-end-3 flex flex-wrap justify-end items-center gap-5 font-bold">
          <nav className=" flex flex-wrap list-none gap-10 ">
            <li>Home</li>
            <li>Blogs</li>
            <li>Challengrs</li>
            <li>Venue</li>
            <li>Events</li>
            <li>Shopping</li>
            <li>Service</li>
          </nav>
          <Link to="/SingIn">
          <button className="text-center relative right-2 w-24 h-7 bg-orange-600 text-white rounded-2xl">
            Sing In
          </button>
          </Link>
          <Link to="/SingUp">
          <button className=" relative right-4 text-center w-24 h-7 bg-orange-600 text-white rounded-2xl">
               Sing Up 
          </button>
          </Link>
        </div>
      </div>
      <div className="row-span-2  ">
        <nav className=" flex justify-center gap-2  h-20">
          <ul className=" w-[80%]  flex justify-evenly  items-center h-full space-x-8">
            <li>
              <a
                href="#"
                className="flex flex-col items-center group"
                onClick={() => {
                  setCricketColor((prev) => !prev);
                  setKabdiColor(false);
                  setSoccerColor(false);
                  setHockeyColor(false);
                  setBadmintonColor(false);
                  setHandballColor(false);
                  
                }}
              >
                <MdOutlineSportsCricket
                  size={25}
                  color={cricketColor == true ? "#ff4500" : "black"}
                />
                {/* <span className="text-orange-600 font-medium text-sm group-hover:underline decoration-2 ">
                  Cricket
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-col items-center group"
                onClick={() => {
                  setSoccerColor((prev) => !prev);
                  setCricketColor(false);
                  setHockeyColor(false);
                  setBadmintonColor(false);
                  setKabdiColor(false);
                  setHandballColor(false);
                }}
              >
                <GiSoccerKick
                  size={25}
                  color={SoccerColor == true ? "#ff4500" : "black"}
                />
                {/* <span className="text-orange-600 font-medium text-sm group-hover:underline decoration-2">
                  Football
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-col items-center group"
                onClick={() => {
                  setHockeyColor((prev) => !prev);
                  setCricketColor(false);
                  setSoccerColor(false);
                  setBadmintonColor(false);
                  setKabdiColor(false);
                  setHandballColor(false);
                }}
              >
                <MdOutlineSportsHockey
                  size={25}
                  color={hockeyColor == true ? "#ff4500" : "black"}
                />
                {/* <span className="text-orange-600 font-medium text-sm group-hover:underline decoration-2">
                  Hockey
                </span> */}
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center group" onClick={()=>{
                setBadmintonColor(prev=>!prev);
                setCricketColor(false);
                setSoccerColor(false);
                setHockeyColor(false);
                setKabdiColor(false);
                setHandballColor(false);
              }}>
                <MdSportsTennis
                  size={25}
                  color={badmintonColor == true ? "#ff4500" : "black"}
                />
                {/* <span className="text-orange-600 font-medium text-sm group-hover:underline decoration-2">
                  Badminton
                </span> */}
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center group" onClick={()=>{
              setKabdiColor(prev=>!prev);
              setCricketColor(false);
              setSoccerColor(false);
              setHockeyColor(false);
              setBadmintonColor(false);
              setHandballColor(false);
              }}>
                <MdSportsKabaddi
                  size={25}
                  color={kabadiColor == true ? "#ff4500" : "black"}
                />
                {/* <span className="text-orange-600 font-medium text-sm group-hover:underline decoration-2">
                  Kabaddi
                </span> */}
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center group" onClick={()=>{
              setHandballColor(prev=>!prev);
              setKabdiColor(false);
              setCricketColor(false);
              setSoccerColor(false);
              setHockeyColor(false);
              setBadmintonColor(false);
              }}>
                <MdSportsHandball
                  size={25}
                  color={handballColor == true ? "#ff4500" : "black"}
                />
                {/* <span className="text-orange-600 font-medium text-sm group-hover:underline decoration-2">
                  Kho-Kho
                </span> */}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </header>
  );
}

export default Header;
