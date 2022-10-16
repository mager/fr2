import * as React from "react";

import Container from "../components/Container";
import Text from "../components/Text";
import H1 from "../components/H1";
import H5 from "../components/H5";

const About = () => {
  return (
    <Container>
      <H1>About</H1>
      <div>
        <Text>
          Floor Report is a project by @mager to learn about web3. Consider
          everything experimental.
        </Text>
      </div>
      <div>
        <H5>Tech Stack</H5>
        <ul>
          <li>Backend: Go backend hosted on Cloud Run</li>
          <li>Frontend: React & Next.js </li>
          <li>Database: Firestore</li>
          <li>Analytics: BigQuery</li>
          <li>Authentication: Web3Modal</li>
          <li>
            APIs: Infura for ENS resolution, OpenSea for NFT data, Coinstats for
            the price of ETH.{" "}
          </li>
          <li>Design: Figma, Google Fonts </li>
        </ul>
      </div>
    </Container>
  );
};

export default About;
