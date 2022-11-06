import * as React from 'react';


import { Routes } from '../../constants';
// import FloorPriceSmall from '../../components/FloorPriceSmall';
import NFT from '../../components/NFT';
// import Quantity from '../../components/Quantity';
import { CollectionT } from '../../types';


// const CollectionContainer = styled(Block, () => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
// }));

// const Details = styled(Block, () => ({
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '100%',
// }));

// const Name = styled(Block, () => ({
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
// }));

// const FloorContainer = styled(Block, () => ({
//     textAlign: 'right',
// }));

// const Thumb = styled(Block, ({ $theme }) => ({
//     position: 'relative',
//     marginRight: $theme.sizing.scale400,
// }));

type Props = {
    collection: CollectionT;
    i: number;
};

// const NFTs = styled(Block, () => ({
//     display: 'flex',
//     flexDirection: 'column',
// }));

const CollectionRow = ({ collection, i }: Props) => {
    return (
        <div className="border-b-2 mb-2 pb-2">
            <div tabIndex={i}>
                <div className="flex w-full px-0 py-2">
                    {collection.thumb && (
                        <div className="relative">
                            <div className="avatar">
                                <div className="w-16">
                                    <img
                                        alt={collection.name}
                                        src={collection.thumb}
                                    />
                                </div>
                            </div>
                            {collection.numOwned > 1 && (
                                <div className="badge badge-accent absolute -top-1 -right-1">x{collection.numOwned}</div>
                            )}
                        </div>
                    )}
                    <div className="ml-1 flex w-full justify-between items-center">
                        <div>
                            <a href={Routes.COLLECTION(collection.slug)}>
                                {collection.name} ({collection.floor}ETH)
                            </a>
                        </div>
                        <div className="text-right">
                            {collection.value}
                        </div>
                    </div>
                </div>
                <div>{collection.nfts.map((nft) => <NFT nft={nft} />)}</div>
            </div>
        </div>
    );
};
export default CollectionRow;
