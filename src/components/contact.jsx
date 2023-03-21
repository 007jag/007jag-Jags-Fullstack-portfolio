import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { toast } from "react-toastify";

function Contact() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputHandler = (e) => {
    setInputData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const submitHandler = () => {
    console.log(inputData.email);
    if (
      inputData.email &&
      inputData.message &&
      inputData.name &&
      inputData.email.includes("@")
    ) {
      toast("Success");
    } else if (!inputData.email) {
      toast("Input your email");
    } else if (!inputData.email.includes("@")) {
      toast("Input valid email");
    } else if (!inputData.name) {
      toast("Input your name");
    } else {
      toast("Input your message");
    }
  };

  return (
    <div
      id="contact"
      className=" bg-background text-white p-5 py-10 md:py-20 font-semibold"
    >
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row lg:space-x-12">
        <div className="flex flex-col lg:w-[45%]">
          <div className="md:text-[2.5rem] font-bold">Contact Me</div>
          <div className="flex items-center space-x-3 md:text-[1.5rem] mt-5">
            <MailIcon />
            <div>Jagmitsingh2003@gmail.com</div>
          </div>
          <div className="flex items-center space-x-3 mt-3 md:text-[1.5rem] mt-10">
            <PhoneIcon />
            <div>704-303-6290</div>
          </div>
        </div>

        {/* Form  */}
        <div className="flex flex-col space-y-5 lg:w-[55%] mt-5 lg:mt-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-5">
            <div className="w-full">
              <label className="text-white">Name</label>
              <input
                id="name"
                onChange={(e) => inputHandler(e)}
                placeholder="Input your name"
                className="bg-transparent outline-none border-b-[1px] border-white py-2 w-full"
              />
            </div>
            <div className="w-full mt-5 md:mt-0">
              <label className="text-white">Email</label>
              <input
                id="email"
                onChange={(e) => inputHandler(e)}
                type="email"
                placeholder="Input your email"
                className="bg-transparent outline-none border-b-[1px] border-white py-2 w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-white">Message</label>
            <textarea
              id="message"
              onChange={(e) => inputHandler(e)}
              placeholder="Input your message"
              className="bg-transparent outline-none border-b-[1px] border-white p-1 w-full h-[10rem]"
            />
          </div>
          <Button
            onClick={() => submitHandler()}
            variant="contained"
            className="bg-primary hover:bg-primary"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
