import * as React from "react";
import ConnectButton from "../ConnectButton";
import Logo from "../Logo";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 px-0">
      <div className="navbar-start w-100 justify-between">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/about">About</a></li>
            <li><a href="/frens">Frens</a></li>
          </ul>
        </div>
        <div className=""><a href="/"><Logo /></a></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><a href="/about">About</a></li>
          <li><a href="/frens">Frens</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ConnectButton label="Connect" />
      </div>
    </div >
  );
};

export default Nav;
