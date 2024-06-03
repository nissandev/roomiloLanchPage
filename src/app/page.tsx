"use client";

import { FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import Image from "next/image";
import jsEncoderLogo from "../assets/images/jsencoderLogo.png";
import Head from "next/head";
import Home from "./home/page";

export default function Root() {
  return (
    <>
      <Head>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Home/>
    </>
  );
}
