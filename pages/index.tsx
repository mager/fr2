import * as React from "react";

import Container from "../components/Container";
import H1 from "../components/H1";
// import Error from '../components/Error';
// import Loading from '../components/Loading';
// import RandomNFT from '../components/RandomNFT';
// import Stats from '../components/Stats';
import Text from "../components/Text";
import { HomeT } from "../types";
import { API_PATH } from "../utils";

type Props = {
  home: HomeT;
  success: boolean;
};

const Home = ({ home, success }: Props) => {
  // if (!success) {
  //   return <Error message="Failed to fetch stats" />;
  // }

  // if (!home) {
  //   return <Loading />;
  // }

  const { randomNFT, stats } = home;

  return (
    <Container>
      <H1>
        <strong>Floor Report</strong>
      </H1>
      <Text>NFT floor prices & analytics</Text>
      {/*}
    //   <Stats stats={stats} />
    //   <RandomNFT nft={randomNFT} /> */}
    </Container>
  );
};

export async function getServerSideProps() {
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
