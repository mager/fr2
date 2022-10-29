import * as React from 'react';
import { ConnectButton as RainbowButton } from '@rainbow-me/rainbowkit';

type Props = {
  label: string;
};

const ConnectButton = ({ label }: Props) => {
  return (
    <RainbowButton.Custom>
      {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <div onClick={openConnectModal}>
                    {label}
                  </div>
                );
              }

              return (
                <div className="navbar cursor-pointer">
                  <div className="navbar-center" onClick={openAccountModal}>
                    <ul className="menu menu-horizontal p-0">
                      <li><a>{account.displayName}</a></li>
                    </ul>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </RainbowButton.Custom >
  );
};

export default ConnectButton;
