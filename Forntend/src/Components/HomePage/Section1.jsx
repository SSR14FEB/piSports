import React from "react";
import Section1_cards from "../../cardComponets/Section1_cards";
import { useSelector } from "react-redux";
function Section1(props) {
const val = useSelector(state=>state.value)
console.log(val)
  return (
    <div className={"w-screen h-screen overflow-x-hidden"} >
      <div className={val===false?"relative  w-screen h-[500px] flex flex-wrap justify-center gap-5 items-center   bottom-[500px] "
      :"relative  w-screen h-[500px] flex flex-wrap justify-center gap-5 items-center   top-[150px] "}>
        <Section1_cards/>
        <Section1_cards/>
        <Section1_cards/>
        <Section1_cards/>
        </div>
      </div>
  );
}

export default Section1;