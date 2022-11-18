import React, { useState } from 'react';
import TimeAgo from 'react-timeago';

import AttributeFloors from '../../components/AttributeFloors';
import Container from '../../components/Container';
import Error from '../../components/Error';
import FloorPriceLarge from '../../components/FloorPriceLarge';
import H1 from '../../components/H1';
import H4 from '../../components/H4';
import Loading from '../../components/Loading';
import StatsMarquee from '../../components/StatsMarquee';
import Text from '../../components/Text';
import { CollectionT } from '../../types';
import { API_PATH, formatUSD } from '../../utils';
import FloorPriceSmall from '../../components/FloorPriceSmall';


type Props = {
  collection: CollectionT;
  success: boolean;
};

const Collection = ({ collection, success }: Props) => {

  const [showETHPrice, setShowETHPrice] = useState(true);
  if (!success) {
    return <Error message="Failed to fetch collection" />;
  }

  if (!collection) {
    return <Loading />;
  }

  const numOwners = collection.collection.num;
  const totalSupply = collection.collection.supply;
  const topNFTs = collection.collection.topNFTs;
  const attributes = collection.collection.attributes;

  const hasTopNFTs = topNFTs && topNFTs.length > 0;
  const hasAttributes = attributes && attributes.length > 0;

  const openSeaCollectionLink = `https://opensea.io/collection/${collection.slug}`;

  return (
    <Container>
      <div className="flex justify-between mx-2">
        <div className="flex">
          <div className="mr-2">
            <img src={collection.thumb} alt={collection.name} className="w-24" />
          </div>
          <div className="pr-2">
            <H1>{collection.name}</H1>
            <div className="flex items-center">
              <a href={openSeaCollectionLink} target="_blank" rel="noreferrer">
                <img
                  src={`/opensea-light.svg`}
                  className="w-6"
                  alt="OpenSea"
                />
              </a>
              <span className="ml-1">
                <a
                  href={openSeaCollectionLink}
                >{`opensea.io/${collection.slug}`}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="my-4">
          {numOwners && totalSupply && (
            <div>
              <strong>{numOwners}</strong> owners,{' '}
              <strong>{totalSupply}</strong> tokens
            </div>
          )}
          <div>
            Updated <TimeAgo date={collection.updated} />
          </div>
        </div>
        <div onClick={() => setShowETHPrice(!showETHPrice)}>
          {showETHPrice ? (
            <FloorPriceLarge>{collection.floorETH}</FloorPriceLarge>
          ) : (
            <FloorPriceSmall>{formatUSD(collection.floorUSD)}</FloorPriceSmall>
          )}
        </div>
      </div>

      <StatsMarquee collection={collection} />
      {!hasAttributes && hasTopNFTs && (
        <div>
          <H4>Popular tokens</H4>
          <div className="grid grid-cols-2 gap-2">
            {topNFTs.map((nft) => (
              <div key={nft.name}>
                <img alt={nft.name} className="w-full" src={nft.image} />
                <Text>{nft.name}</Text>
              </div>
            ))}
          </div>
        </div>
      )}
      {hasAttributes && (
        <AttributeFloors slug={collection.slug} attributes={attributes} />
      )}
    </Container>
  );
};

export async function getServerSideProps(context) {
  const url = `${API_PATH}/collection/${context.query.collection}`;

  const res = await fetch(url);
  if (res.status !== 200) {
    return {
      props: {
        success: false,
      },
    };
  }

  const collection = await res.json();

  return {
    props: {
      success: true,
      collection,
    },
  };
}

export default Collection;
