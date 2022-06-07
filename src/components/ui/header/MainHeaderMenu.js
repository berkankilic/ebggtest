import LazyLoad from "react-lazyload";
import { Drawer } from "@mui/material";
import { useState } from "react";

export const MainHeaderMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Drawer
        className="qwe"
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="bg-[#000] h-[700px] w-full"> DRAWER CONTENT</div>
      </Drawer>

      <button
        class=" bg-white/[.08] h-11 w-11 rounded-full ml-2"
        data-mdb-ripple="true"
        type="button"
        onClick={() => setIsDrawerOpen(true)}
      >
        <img class="m-auto h-[14px]" src="/images/icons/menu.svg" />
      </button>
    </>
  );
};
