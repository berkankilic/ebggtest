import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <section className="relative h-screen text-white mt-[-90px]">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          src={"/images/games/tft/video/TFT.webm"}
          type="video/webm"
          className="min-w-full min-h-full absolute object-cover"
          autoPlay
          muted
          loop
        />
        <div className="relative z-10 h-full w-full mainherobg"></div>
      </div>
      <div className="relative flex flex-col items-center justify-center  min-h-screen z-30 ">
        <img
          alt="lol-logo"
          className="w-auto h-[70px] mb-8"
          src="/images/games/lol/logo/lol-logo-w.png"
        />

        <div className="flex flex-row gap-[2px] mb-8">
          <button
            id="lol-btn"
            className=" bg-white/[.08] m-auto h-14 min-w-[300px] my-auto rounded-l-[99px] text-center text-[14px]"
          >
            CHECK THE PRICES
          </button>
          <button
            id="lol-btn"
            className=" bg-white/[.08] m-auto h-14 min-w-[300px] my-auto rounded-r-[99px] text-center text-[14px]"
          >
            CHECK THE DEMO
          </button>
        </div>
        <div className="flex flex-row gap-3">
          <Link
            to="/test1"
            data-mdb-ripple="true"
            className="bg-white/[.08] h-[60px] w-[60px] rounded-full m-auto flex flex-col items-center"
          >
            <img
              alt="user"
              className="m-auto h-[22px]"
              src="/images/games/lol/icon/lol-icon.png"
            />
          </Link>
          <Link
            to="/test2"
            data-mdb-ripple="true"
            className="bg-white/[.08] h-[60px] w-[60px] rounded-full m-auto flex flex-col items-center"
          >
            <img
              alt="user"
              className="m-auto h-[24px]"
              src="/images/games/tft/icon/tft-icon.png"
            />
          </Link>
          <button
            id="valo-btn"
            className=" bg-white/[.08] h-[60px] w-[60px] rounded-full m-auto flex flex-col items-center"
          >
            <img
              alt="user"
              className="m-auto h-[18px]"
              src="/images/games/valo/icon/valo-icon.png"
            />
          </button>
        </div>
        <button
          href="#"
          className="absolute bottom-0 flex flex-col items-center mb-5"
        >
          <p className="text-[11px] pb-2">GETg TEST TES TEST INFO</p>
          <div className="w-[3px] rounded-t-[99px] bg-[#E8BD73] h-[13px]"></div>
          <div className="w-[3px] rounded-b-[99px] bg-dark-4 h-[13px]"></div>
        </button>
      </div>
      <div>
        <Link to="/test1" data-mdb-ripple="true">
          <img
            alt="logo"
            class="w-auto h-[24px] inline-block"
            src="/images/branding/ebgg/logo.png"
          />
        </Link>
      </div>
    </section>
  );
}
