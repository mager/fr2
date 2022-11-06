import * as React from 'react';
import Marquee from 'react-fast-marquee';


import FloorPriceLarge from '../../components/FloorPriceLarge';
// import FloorPriceUSD from '../../components/FloorPriceUSD';
import { GetAddressRespT } from '../../types';
import { formatUSD } from '../../utils';

type Props = {
  data: GetAddressRespT;
};

const AddressMarquee = ({ data: { totalETH, totalUSD } }: Props) => {
  const totalUSDFmt = formatUSD(totalUSD);

  return (
    <Marquee
      speed={90}
      gradient={false}
      style={{
        zIndex: 0,
      }}
    >
      <div className="w-full">
        <div className="flex items-center p-4 cursor-pointer">
          <FloorPriceLarge>{totalETH}</FloorPriceLarge>{' '}
          <div>({totalUSDFmt})</div>
        </div>
      </div>
    </Marquee>
  );
};

export default AddressMarquee;
