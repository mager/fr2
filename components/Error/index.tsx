import * as React from "react";
import Image from "next/image";

import Container from "../Container";
import H4 from "../H4";

type Props = {
  message: string;
};

const Error = (props: Props): JSX.Element => {
  return (
    <Container>
      <div className="flex justify-center items-center flex-col py-8">
        <H4>{props.message}</H4>
        <Image src="/opensea-throttle.jpg" width="400" height="400" />
      </div>
    </Container>
  );
};

export default Error;
