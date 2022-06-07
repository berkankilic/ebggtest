import LazyLoad from "react-lazyload";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";

export const MainHeaderUserMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="bg-[#000] h-[700px] w-full"> DRAWER CONTENT</div>
      </Drawer>

      <button
        class=" bg-white/[.08] h-11 w-11 rounded-full"
        data-mdb-ripple="true"
        type="button"
        onClick={() => setIsDrawerOpen(true)}
      >
        <img class="m-auto h-[18px]" src="/images/icons/user.svg" />
      </button>
    </>
  );
};
