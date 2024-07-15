import React, { useState } from "react";

const SingUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");

  const isButtonEnabled = name && email && passcode.length === 4;
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const alphabetOnly = value.replace(/[^A-Za-z.-]/g, ""); // Remove non-alphabet characters
    setName(alphabetOnly);
  };
  return (
    <div className='px-[35px]'>
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='name'
          className='font-semibold text-[16px] focus:outline-none'>
          Name
        </label>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          className='p-2 border rounded'
          value={name}
          onChange={handleNameChange}
          pattern='[A-Za-z]*'
        />
        <label
          htmlFor='email'
          className='font-semibold text-[16px] focus:outline-none'>
          Email
        </label>
        <input
          type='email'
          name='email'
          required
          placeholder='Your Email'
          className='p-2 border rounded'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor='passcode'
          className='font-semibold text-[16px] focus:outline-none'>
          Enter 4-digit passcode
        </label>
        <div className='relative w-full'>
          <input
            type='text'
            name='passcode'
            maxLength={4}
            placeholder='Enter Passcode'
            className='p-2 border rounded w-full'
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />

          <div className='absolute top-2 right-3'>
            <span className='text-red-500 font-semibold'>Resend</span>
          </div>
        </div>
        <div>
          <button
            className={`px-14 py-4 mt-4 active:scale-90 rounded hover:bg-orange-600 transition-all duration-500 shadow-md bg-[#f26600] font-semibold text-white (!isSignWithPass && !isValid) ||
            ${!isButtonEnabled ? "opacity-50 cursor-not-allowed" : ""}`}
            type='submit'
            disabled={!isButtonEnabled}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
