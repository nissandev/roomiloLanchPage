"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../assets/images/orange.png";
import Link from "next/link";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { isPhoneValid } from "../../../utilis/utilis";
import OtpInput from "react-otp-input";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [isSignWithPass, setSignWithPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  console.log(otp?.length);

  const isSendingOTP = false;

  const credential = {
    phone,
    password,
  };
  const isValid: any = isPhoneValid(phone);
  console.log(isValid);

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle form submission (verify number button)
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted!", credential);
  };

  // Function to check if the password meets the length criteria
  const isPasswordValid = password.length >= 6 && password.length <= 20;
  console.log(
    (!isSignWithPass && password?.length >= 0) || !isValid,
    !isSignWithPass && !isValid
  );

  return (
    <div className="h-screen bg-[url(/bamboo.jpg)] bg-cover">
      <div className="bg-black bg-opacity-60 h-full">
        <div className="flex gap-5 items-center px-[80px] py-5">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={150}
              className="hover:scale-105 transition-all duration-500"
            />
          </Link>
          <p className="text-[16px] mt-4 text-white font-semibold">
            Hotels and homes across 64 cities, 2+ countries
          </p>
        </div>
        <div className="flex w-[90%] pt-[2%] mx-auto justify-center ">
          <div className="flex-grow mx-20 pt-3  text-white">
            <h1 className="text-[48px] font-extrabold">
              There’s a smarter way to Roomilo around
            </h1>
            <p className="font-[600]">
              Sign up with your phone number and get exclusive access to
              discounts and savings on Roomilo stays and with our many travel
              partners.
            </p>
          </div>
          {/* Login / Sign form */}
          <div className="bg-white w-[480px] whitespace-nowrap shrink-0 relative mr-10">
            <h2 className="p-[35px] tex-[14px] py-1.5 font-semibold text-white bg-gradient-to-r from-[#f26600] to-orange-700">
              Sing up & Get 500Tk Roomilo Money
            </h2>
            <div className={isSendingOTP ? `h-[465px]` : !isSignWithPass ? 'h-[438px]'  : "h-[487px]"}>
              <h1
                className={`text-[32px] font-bold pl-[35px] pt-[23px]  ${
                  isSendingOTP ? "pb-" : "pb-8"
                }`}
              >
                {isSendingOTP ? "Share OTP" : "Login / Signup"}
              </h1>

              <div className="px-[35px]">
                {isSendingOTP ? (
                  <div>
                    <h2 className="font-semibold text-[16px]">
                      We have sent a temporary passcode to you at {phone}
                    </h2>
                    <button
                      type="button"
                      className="text-[16px] font-semibold text-red-500 my-[16px]"
                    >
                      Use a different number
                    </button>
                    <div>
                      <label
                        htmlFor="otp"
                        className="font-semibold text-[16px]"
                      >
                        Enter your 4-digit passcode
                      </label>
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        containerStyle="mt-3"
                        inputStyle="border  h-[72px] !w-[72px] rounded "
                        numInputs={4}
                        renderSeparator={<span>{"-"}</span>}
                        renderInput={(props) => <input {...props} />}
                      />
                    </div>
                    <div>
                      <button
                        className={`px-28 py-4 mt-6 active:scale-90 rounded hover:bg-orange-600 transition-all duration-500 shadow-md bg-[#f26600] font-semibold text-white ${
                          otp?.length !== 4
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        type="submit"
                        disabled={otp?.length !== 4}
                      >
                        Submit
                      </button>
                    </div>
                    <p className="mt-4 font-semibold text-red-600">Resend Code</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col gap-2">
                      <label
                        className="font-semibold text-[#222]"
                        htmlFor="phoneNumber"
                      >
                        Please enter your phone number to continue
                      </label>
                      <div className="w-full">
                        <PhoneInput
                          forceDialCode
                          defaultCountry="bd"
                          value={phone}
                          inputStyle={{
                            width: "100%",
                            height: "36px",
                            backgroundColor: "white",
                            color: "#222",
                            fontSize: "14px",
                            borderRadius: "4px",
                            borderColor: "gainsboro",
                            padding: "10px",
                          }}
                          onChange={(phone) => setPhone(phone)}
                        />
                        {phone?.length <= 8 ||
                          (!isValid && (
                            <div className="text-red-600">
                              Phone is not valid
                            </div>
                          ))}
                      </div>

                      {isSignWithPass ? (
                        <div>
                          <div className="flex flex-col mt-1 gap-[6px]">
                            <label
                              htmlFor="password"
                              className="font-semibold text-[16px]"
                            >
                              Password
                            </label>
                            <form className="relative">
                              <input
                                required
                                type={showPass ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                maxLength={20}
                                minLength={6}
                                onChange={handlePasswordChange}
                                className="p-1.5 border w-full rounded focus:outline-none"
                              />
                              <div
                                onClick={() => setShowPass(!showPass)}
                                className="absolute top-[33%] text-[15px] cursor-pointer right-4"
                              >
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                              </div>
                            </form>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <button
                      className={`px-14 py-4 mt-4 active:scale-90 rounded hover:bg-orange-600 transition-all duration-500 shadow-md bg-[#f26600] font-semibold text-white ${
                        (!isSignWithPass && !isValid) ||
                        (isSignWithPass && password?.length <= 6)
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      type="submit"
                      disabled={
                        (!isSignWithPass && !isValid) ||
                        (isSignWithPass && password?.length <= 6)
                      }
                      onClick={handleSubmit}
                    >
                      Verify Number
                    </button>
                    <p className="mt-3 font-semibold">
                      {isSignWithPass
                        ? "Prefer to Proceed with OTP instead? "
                        : "Prefer to Sign in with password instead ?"}
                      <span
                        onClick={() => setSignWithPass(!isSignWithPass)}
                        className="font-semibold pl-2 text-red-500 cursor-pointer"
                      >
                        Click here
                      </span>
                    </p>
                  </div>
                )}
              </div>
              {!isSendingOTP ? (
                <div className="absolute bottom-0 w-full h-[84px] bg-white">
                  <div className="border relative">
                    <p className="absolute bg-white px-2 py-1 font-semibold -top-4 left-[30px]">
                      Or Sign in as
                    </p>
                  </div>
                  <div className="w-full pl-[35px] h-[84px] flex items-center">
                    <div className="flex  gap-5">
                      <div className="flex items-center gap-1 font-semibold">
                        <p>Travel Agent</p>
                        <p>{">"}</p>
                      </div>
                      <div>|</div>
                      <div className="font-semibold flex items-center gap-1">
                        <p>Corporate</p>
                        <p>{">"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
