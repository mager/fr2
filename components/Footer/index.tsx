import * as React from "react";

import Container from "../Container";
import Link from "../Link";

const Footer = () => (
  <footer className="pb-12">
    <Container>
      <div className="flex justify-center">
        <div className="mx-2">
          <a
            href="https://discord.gg/MqsRYeQWqa"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`/discord-light.svg`}
              width="32"
              height="32"
              alt="Discord"
            />
          </a>
        </div>
        <div className="mx-2">
          <a
            href="https://twitter.com/floor_report"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`/twitter-light.svg`}
              width="32"
              height="32"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
      <div className="text-center">
        Experiment by <Link href="https://twitter.com/mager">@mager</Link>
      </div>
    </Container>
  </footer>
);

export default Footer;
