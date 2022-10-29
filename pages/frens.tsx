import * as React from 'react';
import Link from 'next/link';

import Container from '../components/Container';
import Error from '../components/Error';
import H1 from '../components/H1';
import Loading from '../components/Loading';
import type { FrenT } from '../types';
import { API_PATH, getFrenPhoto } from '../utils';
import { Routes } from '../constants';

type Props = {
    frens: FrenT;
    success: boolean;
};

const Frens = ({ frens, success }: Props) => {
    if (!success) {
        return <Error message="Failed to fetch frens" />;
    }

    if (!frens) {
        return <Loading />;
    }
    const { users } = frens;

    return (
        <Container>
            <H1>Frens</H1>
            {users && (
                <div className="grid grid-cols-2 gap-4">
                    {users.map((user) => (
                        <div key={user.name}>
                            {user.photo && (
                                <Link href={Routes.ADDRESS(user.slug)}>
                                    <a>
                                        <img
                                            alt={user.name}
                                            src={getFrenPhoto(user.address)}
                                        />
                                    </a>
                                </Link>
                            )}
                            <a href={Routes.ADDRESS(user.slug)}>
                                {user.name}
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </Container>
    );
};

export async function getServerSideProps() {
    const url = `${API_PATH}/frens`;
    const res = await fetch(url);
    if (res.status !== 200) {
        return {
            props: {
                success: false,
            },
        };
    }

    const frens = await res.json();

    return {
        props: {
            success: true,
            frens,
        },
    };
}

export default Frens;
