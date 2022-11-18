import * as React from 'react';

import FloorPriceSmall from '../../components/FloorPriceSmall';
import H4 from '../../components/H4';
import type { AttributeT } from '../../types';
import { getOpenSeaAttributeURL } from '../../utils';

type Props = {
  attributes: AttributeT[];
  slug: string;
};


const AttributeFloors = ({ slug, attributes }: Props) => {
  return (
    <div>
      <H4>Attribute Floors</H4>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
        {attributes.map((attr) => {
          const openSeaURL = getOpenSeaAttributeURL(slug, attr);
          return (
            <div key={attr.key}>
              <a href={openSeaURL} target="_blank" rel="noreferrer">
                <img alt={attr.value} className="w-full" src={attr.image} />
              </a>
              <div className=" flex justify-center items-center mt-2">
                <div className="flex flex-col mr-2">
                  <div className="text-sm">{attr.value}</div>
                </div>
                <FloorPriceSmall>{attr.floor}</FloorPriceSmall>
              </div>
            </div>
          );
        })}
      </div>
    </div >
  );
};
export default AttributeFloors;
