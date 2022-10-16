import * as React from "react";

import { Routes } from "../../constants";
import Container from "../Container";
import H5 from "../H5";
import Link from "../Link";

type Props = {
  nft: RandomNFT;
};

type RandomNFT = {
  collectionName: string;
  collectionSlug: string;
  imageUrl: string;
  name: string;
  owner: string;
  ownerName?: string;
};

const RandomNFT = ({ nft }: Props) => {
  const { collectionName, collectionSlug, imageUrl, name, owner, ownerName } =
    nft;
  const displayName = `${collectionName} - ${name}`;
  return (
    <div className="mb-12 text-center">
      <img src={imageUrl} className="w-full" />
      <H5>
        <Link href={Routes.COLLECTION(collectionSlug)}>{displayName}</Link>{" "}
        <span className="block text-base">
          owned by{" "}
          <Link href={Routes.ADDRESS(owner)}>{ownerName || owner}</Link>
        </span>
      </H5>
    </div>
  );
};

export default RandomNFT;
