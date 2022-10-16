import * as React from "react";
import TimeAgo from "react-timeago";

import Text from "../Text";
import { StatsT } from "../../types";

type Props = {
  stats: StatsT;
};

const Stats = ({ stats: { totalCollections, totalUsers, updated } }: Props) => {
  return (
    <div className="text-center mb-4">
      <Text>
        Indexing {totalCollections} collections from {totalUsers} wallets,
        updated <TimeAgo date={updated} />
      </Text>
    </div>
  );
};

export default Stats;
