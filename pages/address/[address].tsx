import * as React from 'react';
import TimeAgo from 'react-timeago';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next'

import AddressMarquee from '../../components/AddressMarquee';
import Container from '../../components/Container';
// import EditProfile from '../../components/EditProfile';
import H1 from '../../components/H1';
import H4 from '../../components/H4';
import H5 from '../../components/H5';
import Loading from '../../components/Loading';
import Text from '../../components/Text';
import { CollectionT, GetAddressRespT, UserT } from '../../types';
import { API_PATH, getFrenPhoto, getName } from '../../utils';
import CollectionRow from '../../components/CollectionRow';

type Props = {
  data: GetAddressRespT;
};

// const InfoGrid = styled(div, ({ $theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
// }));


// const UserInfo = styled(div, () => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const Updated = styled(Text, ({ $theme }) => ({
//   marginTop: $theme.sizing.scale200,
//   fontSize: $theme.sizing.scale550,
// }));

// const Name = styled(div, ({ $theme }) => ({}));

// const Edit = styled(div, ({ $theme }) => ({
//   fontSize: $theme.sizing.scale550,
//   marginTop: $theme.sizing.scale200,
// }));

const Updating = () => {
  return (
    <div>
      <H4>Updating your wallet... come back in a few.</H4>
      <Loading />
    </div>
  );
};

export const Address = ({ data }: Props): JSX.Element => {
  const { push } = useRouter();
  const account = useAccount();
  // const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);

  const refresh = async (a?: string) => {
    const address = a || (account.address as string).toLowerCase();
    setLoading(true);
    await fetch(`/api/user/${address}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setLoading(false);
  };

  if (!data) {
    return <Loading />;
  }

  // While we are adding the wallet to the database, show the user a updating message
  const updating = data.updating;
  if (updating) {
    return <Updating />;
  }

  if (data.collections?.length === 0) {
    return (
      <Container>
        <Text>No collections found</Text>
      </Container>
    );
  }

  const user: UserT = data.user;
  const address = data.address;
  const usersWallet =
    account.isConnected &&
    (account.address as string).toLowerCase() == address.toLowerCase();

  const displayName = getName(user, data);
  const imageSrc = getFrenPhoto(address);

  const hasCollections = data.collections;
  // const settings = user.settings;

  return (
    <Container>
      <div className="grid justify-between">
        <div className="flex justify-center items-center">
          {user.photo && (
            <div className="pr-2">
              <img className="w-16" src={imageSrc} alt={displayName} />
            </div>
          )}
          <div>
            <H1>{displayName}</H1>
            {hasCollections && (
              <div>
                Updated <TimeAgo date={data.updatedAt} />
              </div>
            )}
            {usersWallet && (
              <div>
                {/* <a onClick={() => setIsOpen(true)}>
                  Edit Profile
                </a> */}
                |
                {loading ? (
                  <a>Refreshing...</a>
                ) : (
                  <a
                    onClick={() => {
                      refresh();
                      push(`/address/${(account.address as string).toLowerCase()}`);
                    }}
                  >
                    Refresh
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>{hasCollections && <AddressMarquee data={data} />}</div>
      {data.collections ? (
        <div className="mt-4">
          <div>
            <H4>Collections</H4>
          </div>
          <div>
            {data.collections.map((collection: CollectionT, i: number) => (
              <div key={i}>
                <CollectionRow collection={collection} i={i} />
              </div>
            ))}
          </div>
        </div>
      ) : isUpdating ? (
        <Updating />
      ) : (
        <div>
          <H5>Add your wallet to Floor Report</H5>
          <Text>
            We&rsquo;ll fetch the latest floor prices for your NFTs from OpenSea
            every 12 hours.
          </Text>
          <div>
            <button className="btn"
              // loading={loading}
              disabled={loading}
              onClick={async () => {
                setIsUpdating(true);
                await refresh(address);
              }}
            >
              Add me to the index
            </button>
          </div>
        </div>
      )}
      {/* <EditProfile
        settings={settings}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imageSrc={imageSrc}
        displayName={displayName}
      /> */}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = `${API_PATH}/address/${context.query.address}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Address;
