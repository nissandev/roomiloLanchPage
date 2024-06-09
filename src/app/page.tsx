import React from 'react';
import Head from 'next/head';
import Home from './pages/home/page';

export default function Root() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Home />
    </>
  );
}
