import * as React from "react";
import { GetServerSideProps } from 'next'

import Container from "../components/Container";
import H2 from "../components/H2";
import Error from "../components/Error";
import Loading from "../components/Loading";
import RandomNFT from "../components/RandomNFT";
import Stats from "../components/Stats";
import { HomeT } from "../types";
import { API_PATH } from "../utils";

type Props = {
  home: HomeT;
  success: boolean;
};

const Home = ({ home, success }: Props) => {
  if (!success) {
    return <Error message="Failed to fetch stats" />;
  }

  if (!home) {
    return <Loading />;
  }

  const { randomNFT, stats } = home;

  return (
    <Container>
      <div className="flex flex-col justify-center items-center mb-2">
        <H2>
          <em>NFT floor prices & analytics</em>
        </H2>
      </div>
      <Stats stats={stats} />
      <RandomNFT nft={randomNFT} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${API_PATH}/home`;
  const res = await fetch(url);
  if (res.status !== 200) {
    return {
      props: {
        success: false,
      },
    };
  }

  const home = await res.json();

  return {
    props: {
      success: true,
      home,
    },
  };
}

export default Home;
