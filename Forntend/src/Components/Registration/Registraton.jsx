import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

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
  const formName = useSelector((state) => state.info.Name);
  const mobile = useSelector((state) => state.info.Mobile);
  const email = useSelector((state) => state.info.Email);

  console.log("info", email, mobile);

  console.log("UserID", userId);
  // To retrive form name use name
  const [name, setName] = useState(formName);

  // To retrive gender values use gender
  const [gender, setGender] = useState("");
  console.log(gender);

  // these are not for backend
  const [female, setFemale] = useState(false);
  const [male, setMale] = useState(false);

  // date caluculation use (datee for date) and use (age for age)
  const [datee, setDatee] = useState("");
  const [age, setAge] = useState("");

  // to Retrive slected game fieled form Sprots drop down use (sports) for backend
  const [sports, setSports] = useState("Cricket");
  console.log("sports", sports);

  // to retrive the data from sports
  const [role, setRole] = useState("");
  console.log(role);
  //Date Calculator
  const cale = () => {
    const calculatedAge = differenceInYears(new Date(), new Date(datee));
    if (calculatedAge == 0 || calculatedAge) alert("Please Slecte Valid Date");
    else setAge(calculatedAge);
  };
  // form validation
  const reg = (e) => {
    const id = document.querySelectorAll("[id]");
    for (let i = 2; i < id.length; i++) {
      if (id[i].value === "") {
        e.preventDefault();
        Swal.fire({
          title: "Its Look Your Energy is Low!",
          text: "Please Fill The Form Properly",
          icon: "error",
          confirmButtonText: "Cool",
        });
      }
    }
    async function dataSend() {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  return (
    <form
      className="w-full h-[100%] grid grid-rows-[170vh] grid-cols-[25%_70%]"
      form
      action="none"
    >
      <div className=" row-start-1 row-end-2 col-start-1 col-end-2 flex justify-center bg-gray-100">
        <div className="mt-20 justify-center align-top gap-2 text-left fixed">
          <label htmlFor="Register as a" className="font-[450]">
            Register as a
          </label>
          <select
            name="Register as a"
            id="Register as a"
            className="h-7 w-[120%] rounded-md hover:ring ring-orange-500 hover:outline-none bg-white text-black "
            onChange={(e) => setRegister(e.target.value)}
          >
            <option value="Player" className="w-[120%]">
              Player
            </option>
            <option value="Team" className="w-[120%]">
              Team
            </option>
            <option value="Event" className="w-[120%]">
              Event
            </option>
          </select>
        </div>
      </div>

      <div className="col-start-2 col-end-3 ml-10">
        <header className="flex flex-col h-[132px] justify-between">
          <p className="relative mt-5 ml-5 text-orange-500">
            <Link to="/*">
              <strong>PiSports</strong>
            </Link>
          </p>
          <div>
            <p className="relative ml-20">
              <strong className="font-bold text-lg">{resgister}</strong>
            </p>
            <p className="text-xs font-semibold relative ml-20">
              Register Now, Be Part of Something Big!
            </p>
          </div>
        </header>
        <section className="relative w-full h-screen left-10">
          {resgister == "Team" ? (
            <section>
              <div className="mt-4 ml-10 flex flex-col gap-2 w-1/2">
                <label htmlFor="Team">Team Name</label>
                <input
                  type="text"
                  id="Team"
                  className="bg-white border rounded-sm pl-1"
                />
              </div>

              <div className="mt-4 ml-10 flex flex-col gap-2 w-1/2">
                <label htmlFor="TeamId">Team Id</label>
                <input
                  type="text"
                  id="UserId"
                  className="bg-white border rounded-sm pl-1"
                  placeholder="TeamId"
                  // onChange={(e) => {
                  //   const val = e.target.value;
                  //   if (val.length > 5) setUserId(e.target.value);
                  //   else {
                  //     setSug("Userid must have more than 5 char");
                  //   }
                  // }}
                />
              </div>

              <div className="mt-4 ml-10 flex flex-col gap-2 w-1/2">
                <label htmlFor="Email">Email</label>
                <input
                  readOnly
                  type="Email"
                  id="Email"
                  className="bg-white border rounded-sm pl-1"
                  placeholder="Enter Your Email"
                  value={email}
                />
              </div>
            </section>
          ) : (
            <section>
              <div className="mt-4 ml-10 flex flex-col gap-2 w-1/2">
                <label htmlFor="Name">Name</label>
                <input
                  value={name}
                  type="text"
                  id="Name"
                  className="bg-white border rounded-sm pl-1"
                  onChange={(e) => setName(e.target.value)}
                />
                {name.length < 3 ? (
                  <p className="text-red-600 "> Name is not valid </p>
                ) : (
                  ""
                )}
              </div>

              <div className="mt-4 ml-10 flex flex-col gap-2 w-1/2">
                <label htmlFor="UserId">UserID</label>
                <input
                  type="text"
                  id="UserId"
                  className="bg-white border rounded-sm pl-1"
                  placeholder="UserId"
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val.length > 5) setUserId(e.target.value);
                    else {
                      setSug("Userid must have more than 5 char");
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
                  className="bg-white border rounded-sm pl-1"
                  placeholder="Enter Your Email"
                  value={email}
                />
              </div>
            </section>
          )}

          {/* Mobile and Image */}
          <div className="gap-2 w-[48vw] mt-4 ml-10 flex flex-wrap justify-between">
            <div>
              <label htmlFor="India">Mobile</label>
              <div className="w-52 flex justify-between">
                <span className="text-gray-500 border-gray-200 border rounded-s">
                  +91
                </span>
                <input
                  readOnly
                  type="tel"
                  id="India"
                  className="border-2  rounded-sm pl-1"
                  placeholder="012-345-6789"
                  value={mobile}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Image">Image</label>
              <input
                type="file"
                accept="Image/*"
                onChange={(e) => {
                  const img = e.target.files[0];
                  const imgSize = img.size / 1024;
                  if (imgSize <= 400) {
                    alert("File Uploded Success Fully");
                  } else {
                    alert(
                      "File size exceeds 500KB. Please upload a smaller image."
                    );
                    e.target.value = null;
                  }
                }}
              />
            </div>
          </div>

          {/* Physically Disabled Section */}
          <section className="w-[50vw] flex ">
            <div className="w-[24vw] mt-4 ml-10 flex flex-col justify-between">
              <label htmlFor="PhysicallyDisabled" className="mt-4 mb-2">
                Are you Physically Disabled?
              </label>
              <div className="w-52 flex justify-start gap-5">
                <div className="flex items-center gap-2">
                  <label htmlFor="Yes">Yes</label>
                  <input
                    className="appearance-auto checked:text-orange-500"
                    type="radio"
                    id="Yes"
                    value="Yes"
                    name="physicallyDisabled"
                    onChange={(e) => setPhysicallyDisabled(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="No">No</label>
                  <input
                    type="radio"
                    id="No"
                    value="No"
                    name="physicallyDisabled"
                    onChange={(e) => setPhysicallyDisabled(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-6 mt-8 ">
              <label htmlFor="blood" className="text-base font-medium mb-2">
                Blood Group
              </label>
              <select
                id="blood"
                className="bg-white text-center  border-none shadow-md rounded-md focus:ring focus:ring-orange-500 focus:border-orange-500 py-1 px-1"
              >
                <option
                  value=""
                  className="text-orange-600 border-black"
                  disabled
                  selected
                >
                  Blood group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </section>

          <section className="w-[38vw] flex justify-center ">
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
                className="bg-white border rounded-sm pl-4 w-28 appearance-none "
              >
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
              </select>
            </div>
          </section>
          <section className="w-[37vw] h-24 flex flex-wrap justify-between">
            <div className=" flex flex-col justify-center ml-10 mb-4 h-24">
              <label htmlFor="datepicker">DOB</label>
              <input
                type="date"
                icon={"black"}
                placeholder="Date of birth"
                className="text-orange-600 text-center border appearance-auto "
                onChange={(e) => {
                  setDatee(e.target.value);
                  if (datee.length == 10) {
                    console.log(datee);
                    cale();
                  }
                }}
              />
            </div>

            <div className=" flex flex-col justify-center ml-10  h-24">
              <label htmlFor="datepicker">Age</label>
              <input
                type="text"
                value={age}
                className="w-28 text-center border "
                readOnly
              />
            </div>
          </section>
          <section className=" ml-10 flex flex-wrap flex-col">
            <label htmlFor="About">About</label>
            <textarea
              name=""
              id="About"
              maxLength="101"
              className="w-[50%] h-[10vh]  bg-white shadow appearance-none  text-black border-2  rounded-sm pl-1  focus:shadow-outline resize-none"
              placeholder="Write aobut Your self withn 100 char"
              onChange={(e) => {
                e.target.value.length > 100
                  ? alert(
                      `You have exceeded the limit of 500 characters by  characters.`
                    )
                  : "";
              }}
            />
          </section>

          <section className="w-[38vw] h-24 flex flex-wrap justify-between ">
            <div className=" flex flex-col justify-center ml-10 mt-4 h-24">
              <label htmlFor="Sports">Sports</label>
              <select
                id="Sports"
                className=" bg-white border border-gray-300 rounded-md focus:ring focus:ring-orange-500 focus:border-orange-500 py-1 px-1"
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
                  className="bg-white border border-gray-300 rounded-md focus:ring focus:ring-orange-500 focus:border-orange-500 py-1 px-1"
                  onClick={(e) => setRole(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select Your Game Role
                  </option>
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
                  className="bg-white border border-gray-300 rounded-md focus:ring focus:ring-orange-500 focus:border-orange-500 py-1 px-1"
                  onClick={(e) => setRole(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select Your Game Role
                  </option>
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
                  className="bg-white border border-gray-300 rounded-md focus:ring focus:ring-orange-500 focus:border-orange-500 py-1 px-1"
                  onClick={(e) => setRole(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select Your Game Role
                  </option>
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
            { (role=="Bowler"||role=="Batsman")?
            <div className="w-[38vw] h-24 flex flex-wrap justify-between transition-colors">
              {/* left hand  */}
              <div className="gap-2 ml-10">
              <label htmlFor="Left" className="text-orange-600 font-semibold">Left Handed</label>
               <input type="checkbox" name="" id="Left" className="border-balck ml-2 " />
              </div>
              {/* right hand */}
              <div className=" gap-2">
              <label htmlFor="Right"  className="text-orange-600 font-semibold">Right Handed</label>
               <input type="checkbox" name="" id="Right" className="border-black ml-2" />
              </div>
            </div>:""
            }
          </section>
          <section className="w-[38vw] h-24 flex flex-wrap justify-center mt-5">
            <div className="w-[32.5vw] flex flex-wrap items-center justify-start mt-5">
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-sm px-2 py-1"
                onClick={reg}
              >
                Update profile
              </button>
            </div>
          </section>
        </section>
      </div>
    </form>
  );
}
export default Registraton;
