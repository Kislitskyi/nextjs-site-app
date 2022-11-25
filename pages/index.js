import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Main from '../components/Main';

const index = () => {
  return (
    <ContainerIndex>
      <Head>
        <title>Project FS</title>
        <link rel="icon" href="./fs.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </Head>
      <Main />
    </ContainerIndex>
  )
}

const ContainerIndex = styled.div``;

export default index;
