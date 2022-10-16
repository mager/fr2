import * as React from "react";

import { Routes } from "../../constants";
import H5 from "../H5";
import H6 from "../H6";
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
    <div className="mb-12 flex justify-center items-center flex-col">
      <img src={imageUrl} className="w-full md:w-1/2" />
      <h5 className="font-sans text-lg lg:text-xl tracking-tight mt-4">
        <Link href={Routes.COLLECTION(collectionSlug)}>{displayName}</Link>{" "}
      </h5>
      <h6 className="font-sans text-md lg:text-lg tracking-tight">
        owned by <Link href={Routes.ADDRESS(owner)}>{ownerName || owner}</Link>
      </h6>
    </div>
  );
};

export default RandomNFT;
