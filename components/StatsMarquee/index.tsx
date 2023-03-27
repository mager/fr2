import * as React from "react";
import Marquee from "react-fast-marquee";

import { CollectionT } from "../../types";

import FloorPriceSmall from "../../components/FloorPriceSmall";

type Props = {
  collection: CollectionT;
};

// const Wrapper = styled(Block, ({$theme}) => ({
//   padding: `${$theme.sizing.scale100} 0`,
//   width: '100%',
// }));

// const Component = styled(Block, ({$theme}) => ({
//   cursor: 'pointer',
//   padding: $theme.sizing.scale800,
//   background: $theme.colors.background,
//   display: 'flex',
//   alignItems: 'center',
// }));

const StatsMarquee = ({ collection }: Props) => {
  // Create a list of components to render in the marquee
  const components = [];
  // Create a map of keys and their corresponding labels
  const labels = {
    "1d": "24 hour volume",
    "7d": "Weekly volume",
    "30d": "Monthly volume",
    cap: "Market cap",
    sales: "Total sales",
  };

  // Loop through the keys in the labels map
  for (const key in labels) {
    // If the key exists in the collection object
    if (collection.collection[key]) {
      // Push a new component to the components array
      components.push(
        <div className="flex items-center justify-center px-2" key={key}>
          <span className="italic mr-2">{labels[key]}</span>
          <FloorPriceSmall>{collection.collection[key]}</FloorPriceSmall>
        </div>
      );
    }
  }

  return (
    <Marquee
      speed={85}
      gradient={false}
      style={{
        zIndex: 0,
      }}
    >
      <div className="w-full">
        <div className="cursor-pointer flex items-center">
          {components.map((component) => component)}
        </div>
      </div>
    </Marquee>
  );
};

export default StatsMarquee;
