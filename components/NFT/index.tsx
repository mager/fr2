import * as React from 'react';


import { NFTT } from '../../types';
// import FloorPrice from '../FloorPriceXSmall';

type Props = {
  nft: NFTT;
};

// const div = styled(Block, ({$theme}) => ({
//   display: 'flex',
//   alignItems: 'center',
//   width: '100%',
//   marginBottom: $theme.sizing.scale200,
// }));

// const Details = styled(Block, ({$theme}) => ({
//   width: '100%',
//   display: 'flex',
//   marginLeft: $theme.sizing.scale200,
//   justifyContent: 'space-between',
//   alignItems: 'center',
// }));

const NFT = ({ nft }: Props) => {
  const displayName = nft.name || nft.tokenId;
  return (
    <div className="flex items-center w-full mb-2" key={nft.tokenId}>
      <img height="32" width="32" src={nft.imageUrl} alt={nft.name} />
      <div className="flex w-full justify-between items-center ml-1">
        <div className="break-all">{displayName}</div>
        <div>
          <div>{nft.floor}</div>
        </div>
      </div>
    </div>
  );
};

export default NFT;
