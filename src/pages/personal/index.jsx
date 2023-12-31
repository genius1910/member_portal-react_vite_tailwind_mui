import { useEffect, useState } from "react";
import AOS from "aos";

import calImg from "../../assets/images/calImg.svg";
import prevArrow from "../../assets/images/prevArrow.svg";
import nextArrow from "../../assets/images/nextArrow.svg";
import calImg_1 from "../../assets/images/calImg_1.svg";
import editImg from "../../assets/images/editImg.svg";
import { Button } from "@mui/material";
import { BsPlus, BsChatLeft, BsBookmark, BsTrash3 } from "react-icons/bs";
import { FiSettings, FiUpload } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import SModal from "../../components/modals";

const PersonalAI = () => {
  const [open, setOpen] = useState(false);
  const [openUpload, setUploadOpen] = useState(false);
  const [chat, setChat] = useState({
    level: "",
    age: "",
    gender: "",
    location: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickUploadOpen = () => {
    setUploadOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUploadClose = () => {
    setUploadOpen(false);
  };
  const setValue = (e) => {
    setChat({ ...chat, location: e.target.value });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex w-full h-[calc(100vh-80px)] pt-[30px] display:px-[104px] tablet:px-[52px] phone:px-[27px] px-[52px] pb-[50px] flex-col items-start gap-[20px] bg-[#dbdbdb]">
      <div className="flex justify-between items-start self-stretch">
        <div className="flex items-start gap-[20px]">
          <div className=" flex items-start gap-3">
            <img className=" w-6 h-6" src={calImg}></img>
            <p className="text-black font-[Inter] text-lg font-semibold leading-normal">
              Today
            </p>
          </div>
          <p className=" text-[#8E8E8E] font-[Inter] text-lg font-light leading-normal">
            /
          </p>
          <p className=" text-black font-[Inter] text-lg font-light leading-normal">
            Friday, Sept 1, 2023
          </p>
        </div>
        <div className=" flex items-start gap-[26px]">
          <Button className=" !w-6 !h-6 !p-0 !min-w-0">
            <img className="w-full h-full" src={prevArrow}></img>
          </Button>
          <Button className=" !w-6 !h-6 !p-0 !min-w-0">
            <img className="w-full h-full" src={nextArrow}></img>
          </Button>
          <Button className=" !w-6 !h-6 !p-0 !min-w-0">
            <img className="w-full h-full" src={calImg_1}></img>
          </Button>
        </div>
      </div>
      <div className=" flex flex-1 w-full items-start shrink-0 self-stretch rounded-[7px] shadow-white/75 shadow-xl bg-white">
        <div className="flex w-[293px] px-4 py-5 flex-col justify-between items-start self-stretch border-r-[#8E8E8E] border-r-solid border-r-[0.5px]">
          <div className=" flex flex-col items-start gap-5 self-stretch">
            <p className="text-black font-[Inter] text-lg font-semibold leading-normal">
              Conversations
            </p>
            <div className=" felx felx-col items-start self-stretch">
              <div className=" cursor-pointer flex p-4 justify-between items-start self-stretch rounded-[5px] bg-[#e5e5e5]">
                <div className="flex items-start gap-2.5">
                  <BsChatLeft className="w-5 h-5" />
                  <p className="text-black font-[Inter] text-[16px] font-normal !leading-none">
                    Welcome
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Button className="!p-0 !min-w-0 w-5 h-5 !text-black">
                    <img className="w-full h-full" src={editImg}></img>
                  </Button>
                  <Button className="!p-0 !min-w-0 w-5 h-5 !text-black">
                    <BsBookmark className="w-full h-full" />
                  </Button>
                  <Button className="!p-0 !min-w-0 w-5 h-5 !text-black">
                    <BsTrash3 className="w-full h-full" />
                  </Button>
                </div>
              </div>
              <div className=" cursor-pointer flex p-4 justify-between items-start self-stretch rounded-[5px] bg-transparent">
                <div className="flex items-start gap-2.5">
                  <BsChatLeft className="w-5 h-5" />
                  <p className="text-black font-[Inter] text-[16px] font-normal !leading-none">
                    Welcome
                  </p>
                </div>
                <div className="flex items-start gap-2.5"></div>
              </div>
            </div>
          </div>
          <Button
            className="!normal-case flex !h-[50px] !px-4 !py-5 !justify-center !text-white !items-center !gap-0.5 !self-stretch !rounded-[99px] !bg-[#1e1e1e]"
            onClick={handleClickOpen}
          >
            <BsPlus className="w-6 h-6" />
            <p className=" font-[Inter] text-base font-semibold leading-normal">
              New Chat
            </p>
          </Button>
        </div>
        <div className="flex flex-1 flex-col justify-between items-start self-stretch bg-white w-full">
          <div className=" flex p-2.5 flex-col items-start gap-6 self-stretch"></div>
          <div className=" flex p-5 items-center gap-4 self-stretch w-full">
            <div className="flex items-center gap-3">
              <Button className=" !min-w-0 flex !p-2 !justify-center !items-center !gap-2.5 !rounded-full !border-[0.5px] !border-solid !border-[#8E8E8E] !text-[#8E8E8E]">
                <FiSettings className=" w-6 h-6" />
              </Button>
              <Button
                className=" !min-w-0 flex !p-2 !justify-center !items-center !gap-2.5 !rounded-full !border-[0.5px] !border-solid !border-[#8E8E8E] !text-[#8E8E8E]"
                onClick={handleClickUploadOpen}
              >
                <FiUpload className=" w-6 h-6" />
              </Button>
            </div>
            <div className="flex h-[50px] p-4 justify-between items-center w-full border-[0.5px] border-solid border-[#8E8E8E] rounded-[5px]">
              <input
                className=" flex-1 !outline-none focus:!outline-none h-full text-[14px] text-black font-normal leading-normal font-[Inter]"
                placeholder="Send a message"
              ></input>
              <Button className=" !min-w-0 flex !p-2 !justify-center !items-center !gap-2.5 !rounded-full !border-none !text-[#8E8E8E]">
                <VscSend className=" w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <SModal headerTitle="New Chat" onClose={handleClose} open={open}>
        <div className=" w-full p-5 flex flex-col gap-5 justify-between">
          <p className="text-black text-center font-[Inter] text-[12px] font-normal leading-normal">
            Before we start, we need some information from you! This ensures our
            assistant
            <br /> provides the best possible personalized guidance for your
            fitness level.
          </p>
          <div className=" flex flex-col items-center gap-3">
            <p className="text-black text-center font-[Inter] text-[14px] font-semibold leading-6">
              Rider Level:
            </p>
            <div className={`flex justify-center items-center gap-3`}>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.level === "Beginner"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, level: "Beginner" });
                }}
              >
                Beginner
              </Button>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.level === "Intermediate"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, level: "Intermediate" });
                }}
              >
                Intermediate
              </Button>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.level === "Advanced"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, level: "Advanced" });
                }}
              >
                Advanced
              </Button>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <p className="text-black text-center font-[Inter] text-[14px] font-semibold leading-6">
              Your Age:
            </p>
            <div className={`flex justify-center items-center gap-3`}>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.age === "Under 18"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, age: "Under 18" });
                }}
              >
                Under 18
              </Button>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.age === "18 – 30"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, age: "18 – 30" });
                }}
              >
                18 – 30
              </Button>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.age === "31 – 40"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, age: "31 – 40" });
                }}
              >
                31 – 40
              </Button>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.age === "41 – 50"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, age: "41 – 50" });
                }}
              >
                41 – 50
              </Button>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.age === "Over 50"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, age: "Over 50" });
                }}
              >
                Over 50
              </Button>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <p className="text-black text-center font-[Inter] text-[14px] font-semibold leading-6">
              Your Gender:
            </p>
            <div className={`flex justify-center items-center gap-3`}>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.gender === "Female"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, gender: "Female" });
                }}
              >
                Female
              </Button>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.gender === "Male"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, gender: "Male" });
                }}
              >
                Male
              </Button>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.gender === "Transgender"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, gender: "Transgender" });
                }}
              >
                Transgender
              </Button>
              <Button
                className={`!flex !px-3.5 !py-2.5 !justify-center !items-center !gap-2.5 !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E] ${
                  chat.gender === "Non-Binary"
                    ? " !bg-black !text-white"
                    : " !bg-transparent !text-black"
                }`}
                onClick={() => {
                  setChat({ ...chat, gender: "Non-Binary" });
                }}
              >
                Non-Binary
              </Button>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <p className="text-black text-center font-[Inter] text-[14px] font-semibold leading-6">
              Your Location:
            </p>
            <div
              className={`flex justify-center items-center px-4 py-2.5 rounded-[5px] border-[0.5px] border-solid border-[#8E8E8E] w-[354px]`}
            >
              <input
                className="font-[Inter] text-[14px] font-normal leading-normal flex-1 outline-none focus:outline-none"
                value={chat.location}
                onChange={(e) => setValue(e)}
                placeholder="Start typing to search for a location"
              ></input>
              <RiSendPlaneLine className=" w-6 h-6 !text-[#8E8E8E]" />
            </div>
          </div>
        </div>
        <div className="p-5 w-full">
          <Button
            className={`!w-full !flex !h-[50px] !px-4 !py-3 !justify-center !items-center !gap-0.5 !self-stretch !rounded-[99px] !font-[inter] !text-[16px] !font-semibold !leading-normal ${
              chat.level !== "" &&
              chat.age !== "" &&
              chat.gender !== "" &&
              chat.location !== ""
                ? " !bg-black !text-white"
                : " !bg-[#8E8E8E] !text-[#D9D9D9]"
            }`}
            disabled={
              chat.level !== "" &&
              chat.age !== "" &&
              chat.gender !== "" &&
              chat.location !== ""
                ? false
                : true
            }
          >
            Get Started
          </Button>
        </div>
      </SModal>
      <SModal
        headerTitle="Prepare for a route"
        onClose={handleUploadClose}
        open={openUpload}
      >
        <div className=" w-full p-5 flex flex-col gap-5 justify-between">
          <p className="text-black text-center font-[Inter] text-[12px] font-normal leading-normal">
            I can certainly help you prepare for a route. Search for well-known
            routes below, or
            <br /> a gpx file for me to analyze.
          </p>
          <div className=" flex flex-col items-center gap-3">
            <div
              className={`flex justify-center items-center px-4 py-2.5 rounded-[5px] border-[0.5px] border-solid border-[#8E8E8E] w-[354px] gap-2`}
            >
              <GoSearch className=" w-6 h-6 !text-[#8E8E8E]" />
              <input
                className="font-[Inter] text-[14px] font-normal leading-normal flex-1 outline-none focus:outline-none"
                value={chat.location}
                onChange={(e) => setValue(e)}
                placeholder="Start typing to search for a location"
              ></input>
            </div>
            <p className="text-black text-center font-[Inter] text-[14px] font-semibold leading-6">
              or
            </p>
            <div className={`flex justify-center items-center gap-3`}>
              <Button
                className={`!flex !px-3.5 !py-2.5 !gap-2.5 !justify-center !items-center !rounded-[99px] !border-[0.5px] !border-solid !font-[Inter] !text-[12px] !font-medium !leading-normal !border-[#8E8E8E]  !bg-transparent !text-black `}
              >
                <FiUpload className="w-6 h-6" />
                Upload a GPX file
              </Button>
            </div>
          </div>
        </div>
        <div className="p-5 w-full">
          <Button
            className={`!w-full !flex !h-[50px] !px-4 !py-3 !justify-center !items-center !gap-0.5 !self-stretch !rounded-[99px] !font-[inter] !text-[16px] !font-semibold !leading-normal ${
              chat.level !== "" &&
              chat.age !== "" &&
              chat.gender !== "" &&
              chat.location !== ""
                ? " !bg-black !text-white"
                : " !bg-[#8E8E8E] !text-[#D9D9D9]"
            }`}
            disabled={
              chat.level !== "" &&
              chat.age !== "" &&
              chat.gender !== "" &&
              chat.location !== ""
                ? false
                : true
            }
          >
            Submit
          </Button>
        </div>
      </SModal>
    </div>
  );
};

export default PersonalAI;
