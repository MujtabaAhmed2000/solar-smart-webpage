"use client";

import { useEffect, useState } from "react";

import InputTextField from "../Inputs/InputTextField";
import InputTextArea from "../Inputs/InputTextArea";
import Button from "../Buttons/Button";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");

  const [buttonText, setButtonText] = useState("Submit");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      comments.trim().length === 0
    ) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [comments, email, name]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonText("Submitting");
    // let response = await fetch("/api/contact-us", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     comments,
    //     budget,
    //     phone,
    //     timeline,
    //   }),
    // });
    // response.ok ? setButtonText("Submitted") : setButtonText("Error");
    setTimeout(() => {
      setButtonText("Submitted");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section
      id="contact-us"
      className="mx-auto flex w-full flex-col space-y-4 pt-20 lg:w-[60%]"
    >
      <h3 className="pb-10 text-center text-5xl font-bold text-secondary">
        Help us optimize and take care of your solar goals
      </h3>
      <form className="flex flex-col items-center justify-center space-y-4 p-4">
        <InputTextField
          onChange={setName}
          value={name}
          placeholder={"Your Name*"}
        />
        <InputTextField
          onChange={setEmail}
          value={email}
          placeholder={"Email*"}
        />
        <InputTextField
          onChange={setPhone}
          value={phone}
          placeholder={"Phone Number"}
        />
        <InputTextArea
          onChange={setComments}
          value={comments}
          placeholder={"Tell us more details about your PV farm*"}
        />
        <Button
          isDisabled={isLoading}
          onClick={(e) => {
            submitHandler(e);
          }}
        >
          {buttonText}
        </Button>
      </form>
    </section>
  );
};

export default ContactUsForm;
