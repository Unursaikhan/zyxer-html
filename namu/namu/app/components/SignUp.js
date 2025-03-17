"use client";
import { useState } from "react";
export const Signfirst = () => {
  const [First, setFirst] = useState("");
  const [Last, setLast] = useState("");
  const [User, setUser] = useState("");
  let mail = "@gmail.com";
  const handleFirstChange = (event) => {
    setFirst(event.target.value);
  };
  const handleLastChange = (event) => {
    setLast(event.target.value);
  };
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };
  const handleSearchCheck = () => {
    let Firstcheck = false;
    let Lastcheck = false;
    let Usercheck = false;
    if (First !== "") {
      Firstcheck = true;
    }
    if (Last !== "" && Last.includes.mail) {
      Lastcheck = true;
    }
    if (User !== "") {
      Usercheck = true;
    }
    console.log(Firstcheck);
  };
  console.log(First);
  return (
    <div className="flex w-screen h-screen bg-[#F4F4F4] justify-center items-center">
      <div className="flex-col w-[480px] h-[655px] p-[32px] bg-white rounded-[8px] relative">
        <div className="flex-col mb-[28px]">
          <div>
            <img src="Main 1.svg" className="mb-[8px]" />
            <div className="text-[26px] font-semibold text-black mb-[8px]">
              Join Us! 😎
            </div>
            <div className="text-[18px] text-[#8E8E8E]">
              Please provide all current information accurately.
            </div>
          </div>
        </div>
        <div className="flex-col gap-y-[12px]">
          <div>
            <div className="text-[#334155] mb-[8px] flex">
              First name <p className="text-[#E14942]"> *</p>
            </div>
            <input
              type="text"
              value={First}
              onChange={handleFirstChange}
              className="w-full h-[44px] rounded-[8px] text-black"
              placeholder="your First Name"
            />
          </div>
          <div>
            <div className="text-[#334155] mb-[8px] flex">
              Last name <p className="text-[#E14942]"> *</p>
            </div>
            <input
              type="text"
              value={Last}
              onChange={handleLastChange}
              className="w-full h-[44px] rounded-[8px] text-black"
              placeholder="your Last Name"
            />
          </div>
          <div>
            <div className="text-[#334155] mb-[8px] flex">
              Username <p className="text-[#E14942]"> *</p>
            </div>
            <input
              type="text"
              value={User}
              onChange={handleUserChange}
              className="w-full h-[44px] rounded-[8px] text-black"
              placeholder="your Username"
            />
          </div>
        </div>
        <button
          className="flex bg-black text-white justify-center items-center h-[44px] rounded-[6px] w-[416px] absolute bottom-[32px]"
          onClick={handleSearchCheck}
        >
          Continue /3 <img src="chevron_right.png" />
        </button>
      </div>
    </div>
  );
};
