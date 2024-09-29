import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "flatpickr/dist/flatpickr.css";
import { differenceInYears } from "date-fns"; // Import the function to calculate age
import axios from "axios";
import { useSelector } from "react-redux";
import { contactInfo } from "../../cardComponets/ReduxComponents/slice";
function Registraton() {
  // use only to fist part of useState to get data in this case use resgister to get data
  // where console.log() is use to see the if data is passing throug component or not

  //  Retriving Resgitration as data
  const [resgister, setRegister] = useState("Player");

  // console.log("register", resgister);

  //Retriving User Id data
  const [userId, setUserId] = useState("");

  // do not use this sug it is for fornted
  const [sug, setSug] = useState("UserId");

  // To Retrive (Email, Mobile number) use thes varibels mobile and email
  const mobile = useSelector((state) => state.info.Mobile);
  const email = useSelector((state) => state.info.Email);

  console.log("info", email, mobile);

  console.log("UserID", userId);
  // To retrive gender values use gender
  const [gender, setGender] = useState("");
  console.log(gender);

  // these are not for backend
  const [female, setFemale] = useState(false);
  const [male, setMale] = useState(false);

  // date caluculation use (datee for date) and use (age for age)
  const [datee, setDatee] = useState();
  const [age, setAge] = useState(null);

  // to Retrive slected game fieled form Sprots drop down use (sports) for backend
  const [sports, setSports] = useState("Cricket");
  console.log("sports", sports);

  // to retrive the data from sports
  const [role, setRole] = useState("");
  console.log(role);
  //Date Calculator
  const cale = (Event) => {
    setDatee(Event.target.value);
    const calculatedAge = differenceInYears(new Date(), new Date(datee));
    setAge(calculatedAge);
  };

  return (
    <div className=" w-full h-full grid grid-rows-[100%] grid-cols-[25%_70%] ">
      <div className=" row-span-1 col-start-1 col-end-2 flex justify-center bg-gray-100">
        <div className="  mt-20 justify-center align-top gap-2 text-left ">
          <label for="Register as a" className="font-[450]">
            Register as a
          </label>
          <select
            name="Register as a"
            id="Register as a"
            className=" h-7 w-[120%] rounded-md hover:ring ring-orange-500 hover:outline-none bg-white text-black"
            onChange={(e) => setRegister(e.target.value)}
          >
            <option value="Player" className="w-[120%] ">
              Player
            </option>
            <option value="Team" className="w-[120%]  ">
              Team
            </option>
            <option value="Event" className="w-[120%]  ">
              Event
            </option>
          </select>
        </div>
      </div>
      <div className="col-start-2 col-end-3">
        <header className="flex flex-col h-[132px] justify-between ">
          <p className="relative mt-5 ml-5 text-orange-500">
            <Link to="/*">
              <strong>piSports</strong>
            </Link>
          </p>
          <div>
            <p className="  relative  ml-20 ">
              <strong>{resgister}</strong>
            </p>
            <p className=" relative ml-20">
              This is how others will see you on the site.
            </p>
          </div>
        </header>
        <section className="relative w-full h-screen left-10">
          {/* form start from here  */}
          <section>
            <div className="mt-4 ml-10 flex flex-col gap-2 w-1/2">
              <label htmlFor="Name">UserID</label>
              <input
                type="text"
                id="Name"
                className="bg-white border rounded-sm pl-1 "
                placeholder="UserId"
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.length > 5) setUserId(e.target.value);
                  else {
                    setSug("Userid must have more then  5 char");
                  }
                }}
              />
            </div>
            <div className="mt-4 ml-10 flex flex-col gap-2 w-1/2">
              <label htmlFor="Email">Email</label>
              <input
                readOnly
                type="Email"
                id="Email"
                className="bg-white border rounded-sm pl-1 "
                placeholder="Enter Your Email"
                value={email}
              />
            </div>
          </section>
          <div className="gap-2 w-[48vw] mt-4 ml-10 flex flex-wrap justify-between">
            <div>
              <label htmlFor="India">Moblie</label>
              <div className="w-52 flex justify-between ">
                <span className="text-gray-500 border-gray-200 border rounded-s m ">
                  +91
                </span>
                <input
                  readOnly
                  type="tel"
                  id="India"
                  className="border-2  hover:border-l-0 rounded-sm pl-1  "
                  placeholder="012-345-6789"
                  value={mobile}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Image">Image</label>
              <input type="file"></input>
            </div>
          </div>
          <section className="w-[38vw] flex  ">
            <div className="w-[24vw] mt-4 ml-10 flex flex-col justify-between">
              <label htmlFor="Male" className="mt-4 mb-2">
                Gender
              </label>
              <div>
                <div className="w-52 flex justify-start gap-5 ">
                  <div className="flex flex-wrap justify-center items-center gap-1">
                    <label htmlFor="Male">Male</label>
                    <input
                      type="radio"
                      id="Male"
                      className="border-2  hover:border-l-0 rounded-sm pl-1  "
                      onClick={(e) => {
                        setMale((prev) => !prev);
                        setGender(e.target.id);
                        setFemale(false);
                      }}
                      checked={male}
                    />
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-1">
                    <label htmlFor="Female">Female</label>
                    <input
                      type="radio"
                      id="Female"
                      className="border-2  hover:border-l-0 rounded-sm pl-1  "
                      onClick={(e) => {
                        setFemale((prev) => !prev);
                        setGender(e.target.id);
                        setMale(false);
                      }}
                      checked={female}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col"></div>
            <div className="mt-8 ml-10 flex flex-col gap-2 w-36">
              <label htmlFor="Languge">Languge</label>
              <select
                id="Name"
                className="bg-white border rounded-sm pl-4 appearance-none "
              >
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
              </select>
            </div>
          </section>
          <section className="w-[38vw] h-24 flex flex-wrap justify-between">
            <div className=" flex flex-col justify-center ml-10 mt-4 h-24">
              <label htmlFor="datepicker">DOB</label>
              <input
                type="date"
                icon={"black"}
                placeholder="Date of birth"
                className="text-white text-center border appearance-auto bg-[#854949]"
                onChange={cale}
              />
            </div>

            <div className=" flex flex-col justify-center ml-10 mt-4 h-24">
              <label htmlFor="datepicker">Age</label>
              <input
                type="text"
                value={age}
                className="w-32 text-center border "
                readOnly
              />
            </div>
          </section>

          <section className="w-[38vw] h-24 flex flex-wrap justify-between ">
            <div className=" flex flex-col justify-center ml-10 mt-4 h-24">
              <label htmlFor="Sports">Sports</label>
              <select
                id="Sports"
                className=" bg-white border"
                onClick={(e) => setSports(e.target.value)}
              >
                <option value="Cricket">Cricket</option>
                <option value="Soccer">Soccer</option>
                <option value="Kabaddi">Kabaddi</option>
              </select>
            </div>

            <div className=" flex flex-col justify-center ml-10 mt-4 h-24">
              <label htmlFor="Profile">
                Role in <strong className="text-orange-600">{sports}</strong>
              </label>
              {sports == "Cricket" ? (
                <select
                  id="Profile"
                  className="bg-white border"
                  onClick={(e) => setRole(e.target.value)}
                >
                  <option value="">Select Your Game Role</option>
                  <option value="Batsman">Batsman</option>
                  <option value="Bowler">Bowler</option>
                  <option value="All-Rounder">All-Rounder</option>
                  <option value="Wicketkeeper">Wicketkeeper</option>
                  <option value="Fielder">Fielder</option>
                  <option value="Opening Batsman">Opening Batsman</option>
                  <option value="Middle Order Batsman">
                    Middle Order Batsman
                  </option>
                  <option value="Fast Bowler">Fast Bowler</option>
                  <option value="Spin Bowler">Spin Bowler</option>
                </select>
              ) : (
                ""
              )}
              {sports == "Soccer" ? (
                <select
                  id="Profile"
                  className="bg-white border"
                  onClick={(e) => setRole(e.target.value)}
                >
                  <option value="">Select Your Game Role</option>
                  <option value="Goalkeeper">Goalkeeper</option>
                  <option value="Defender">Defender</option>
                  <option value="Midfielder">Midfielder</option>
                  <option value="Forward">Forward</option>
                  <option value="Striker">Striker</option>
                  <option value="Winger">Winger</option>
                  <option value="Center Back">Center Back</option>
                  <option value="Full Back">Full Back</option>
                  <option value="Sweeper">Sweeper</option>
                  <option value="Defensive Midfielder">
                    Defensive Midfielder
                  </option>
                  <option value="Attacking Midfielder">
                    Attacking Midfielder
                  </option>
                  <option value="Box-to-Box Midfielder">
                    Box-to-Box Midfielder
                  </option>
                </select>
              ) : (
                ""
              )}
              {sports === "Kabaddi" ? (
                <select
                  id="Profile"
                  className="bg-white border"
                  onClick={(e) => setRole(e.target.value)}
                >
                  <option value="">Select Your Game Role</option>
                  <option value="Raider">Raider</option>
                  <option value="Defender">Defender</option>
                  <option value="All-Rounder">All-Rounder</option>
                  <option value="Corner Defender">Corner Defender</option>
                  <option value="Cover Defender">Cover Defender</option>
                  <option value="Left Raider">Left Raider</option>
                  <option value="Right Raider">Right Raider</option>
                  <option value="Substitutes">Substitutes</option>
                </select>
              ) : (
                ""
              )}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
export default Registraton;
