import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { Drawer, Box, Typography, IconButton, Switch } from "@mui/material";
import { useState } from "react";
import { MainHeaderMenu } from "./MainHeaderMenu";
import { MainHeaderUserMenu } from "./MainHeaderUserMenu";
import Switcher from "./Switcher";
import { Tooltip } from "@mui/material";

export default function MainHeader() {
  return (
    <>
      <div class="bg-white dark:bg-main-bg relative header z-[100] min-h-[86px] bg-transparent flex flex-row content-center justify-center items-center px-[60px]">
        <div className="header-left flex-grow flex flex-row">
          <div class="header-logo">
            <Link to="/" data-mdb-ripple="true">
              <img
                alt="logo"
                class="w-auto h-[24px] inline-block"
                src="/images/branding/ebgg/logo.png"
              />
            </Link>
          </div>
          <div class="header-games-menu">
            <div className=""></div>
          </div>
        </div>
        <div class="header-buttons relative ml-auto flex flex-row items-center justify-center">
          <MainHeaderUserMenu />
          <MainHeaderMenu />
          <Switcher />
        </div>
      </div>
    </>
  );
}
