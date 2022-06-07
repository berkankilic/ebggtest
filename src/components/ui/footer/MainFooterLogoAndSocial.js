import { Link } from "react-router-dom";

export default function MainFooterLogoAndSocial() {
  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-5 px-[60px] py-[30px] items-center">
        <div className="col-span-1">
          <div class="header-logo">
            <Link to="/" data-mdb-ripple="true">
              <img
                alt="logo"
                class="w-auto h-[24px] inline-block"
                src="/images/branding/ebgg/logo.png"
              />
            </Link>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-grow justify-end">
            <div className="flex gap-8 items-center">
              <div className="flex gap-3">
                <button
                  className=" bg-white/[.05] h-10 w-10 rounded-full m-auto "
                  onClick={() =>
                    window.open("http://localhost:3000/", "_blank")
                  }
                >
                  <svg
                    className="m-auto h-[14px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="14.629"
                    viewBox="0 0 18 14.629"
                  >
                    <path
                      id="twitter-icon"
                      d="M18,4.731a7.33,7.33,0,0,1-2.121.581A3.707,3.707,0,0,0,17.5,3.27a7.4,7.4,0,0,1-2.345.9A3.7,3.7,0,0,0,8.865,7.534,10.486,10.486,0,0,1,1.253,3.676,3.7,3.7,0,0,0,2.4,8.607,3.682,3.682,0,0,1,.724,8.145c0,.015,0,.032,0,.046a3.7,3.7,0,0,0,2.962,3.622,3.71,3.71,0,0,1-1.667.064,3.7,3.7,0,0,0,3.449,2.565A7.408,7.408,0,0,1,.882,16.022,7.463,7.463,0,0,1,0,15.971a10.461,10.461,0,0,0,5.661,1.658A10.436,10.436,0,0,0,16.169,7.121c0-.16,0-.32-.011-.478A7.492,7.492,0,0,0,18,4.731Z"
                      transform="translate(-0.001 -3)"
                      fill="#55acee"
                    />
                  </svg>
                </button>
                <button
                  className=" bg-white/[.05] h-10 w-10 rounded-full m-auto "
                  onClick={() =>
                    window.open("http://localhost:3000/", "_blank")
                  }
                >
                  <svg
                    className="m-auto h-[14px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="14.629"
                    viewBox="0 0 18 14.629"
                  >
                    <path
                      id="twitter-icon"
                      d="M18,4.731a7.33,7.33,0,0,1-2.121.581A3.707,3.707,0,0,0,17.5,3.27a7.4,7.4,0,0,1-2.345.9A3.7,3.7,0,0,0,8.865,7.534,10.486,10.486,0,0,1,1.253,3.676,3.7,3.7,0,0,0,2.4,8.607,3.682,3.682,0,0,1,.724,8.145c0,.015,0,.032,0,.046a3.7,3.7,0,0,0,2.962,3.622,3.71,3.71,0,0,1-1.667.064,3.7,3.7,0,0,0,3.449,2.565A7.408,7.408,0,0,1,.882,16.022,7.463,7.463,0,0,1,0,15.971a10.461,10.461,0,0,0,5.661,1.658A10.436,10.436,0,0,0,16.169,7.121c0-.16,0-.32-.011-.478A7.492,7.492,0,0,0,18,4.731Z"
                      transform="translate(-0.001 -3)"
                      fill="#55acee"
                    />
                  </svg>
                </button>
                <button
                  className=" bg-white/[.05] h-10 w-10 rounded-full m-auto "
                  onClick={() =>
                    window.open("http://localhost:3000/", "_blank")
                  }
                >
                  <svg
                    className="m-auto h-[14px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="14.629"
                    viewBox="0 0 18 14.629"
                  >
                    <path
                      id="twitter-icon"
                      d="M18,4.731a7.33,7.33,0,0,1-2.121.581A3.707,3.707,0,0,0,17.5,3.27a7.4,7.4,0,0,1-2.345.9A3.7,3.7,0,0,0,8.865,7.534,10.486,10.486,0,0,1,1.253,3.676,3.7,3.7,0,0,0,2.4,8.607,3.682,3.682,0,0,1,.724,8.145c0,.015,0,.032,0,.046a3.7,3.7,0,0,0,2.962,3.622,3.71,3.71,0,0,1-1.667.064,3.7,3.7,0,0,0,3.449,2.565A7.408,7.408,0,0,1,.882,16.022,7.463,7.463,0,0,1,0,15.971a10.461,10.461,0,0,0,5.661,1.658A10.436,10.436,0,0,0,16.169,7.121c0-.16,0-.32-.011-.478A7.492,7.492,0,0,0,18,4.731Z"
                      transform="translate(-0.001 -3)"
                      fill="#55acee"
                    />
                  </svg>
                </button>
                <button
                  className=" bg-white/[.05] h-10 w-10 rounded-full m-auto "
                  onClick={() =>
                    window.open("http://localhost:3000/", "_blank")
                  }
                >
                  <svg
                    className="m-auto h-[14px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="14.629"
                    viewBox="0 0 18 14.629"
                  >
                    <path
                      id="twitter-icon"
                      d="M18,4.731a7.33,7.33,0,0,1-2.121.581A3.707,3.707,0,0,0,17.5,3.27a7.4,7.4,0,0,1-2.345.9A3.7,3.7,0,0,0,8.865,7.534,10.486,10.486,0,0,1,1.253,3.676,3.7,3.7,0,0,0,2.4,8.607,3.682,3.682,0,0,1,.724,8.145c0,.015,0,.032,0,.046a3.7,3.7,0,0,0,2.962,3.622,3.71,3.71,0,0,1-1.667.064,3.7,3.7,0,0,0,3.449,2.565A7.408,7.408,0,0,1,.882,16.022,7.463,7.463,0,0,1,0,15.971a10.461,10.461,0,0,0,5.661,1.658A10.436,10.436,0,0,0,16.169,7.121c0-.16,0-.32-.011-.478A7.492,7.492,0,0,0,18,4.731Z"
                      transform="translate(-0.001 -3)"
                      fill="#55acee"
                    />
                  </svg>
                </button>
                <button
                  className=" bg-white/[.05] h-10 w-10 rounded-full m-auto "
                  onClick={() =>
                    window.open("http://localhost:3000/", "_blank")
                  }
                >
                  <svg
                    className="m-auto h-[14px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="14.629"
                    viewBox="0 0 18 14.629"
                  >
                    <path
                      id="twitter-icon"
                      d="M18,4.731a7.33,7.33,0,0,1-2.121.581A3.707,3.707,0,0,0,17.5,3.27a7.4,7.4,0,0,1-2.345.9A3.7,3.7,0,0,0,8.865,7.534,10.486,10.486,0,0,1,1.253,3.676,3.7,3.7,0,0,0,2.4,8.607,3.682,3.682,0,0,1,.724,8.145c0,.015,0,.032,0,.046a3.7,3.7,0,0,0,2.962,3.622,3.71,3.71,0,0,1-1.667.064,3.7,3.7,0,0,0,3.449,2.565A7.408,7.408,0,0,1,.882,16.022,7.463,7.463,0,0,1,0,15.971a10.461,10.461,0,0,0,5.661,1.658A10.436,10.436,0,0,0,16.169,7.121c0-.16,0-.32-.011-.478A7.492,7.492,0,0,0,18,4.731Z"
                      transform="translate(-0.001 -3)"
                      fill="#55acee"
                    />
                  </svg>
                </button>
              </div>
              <button>qwewqewqe</button>
              <a
                href="#"
                className="flex items-center justify-center rounded-full h-[50px] w-[50px] bg-dark-1 m-auto"
              >
                <svg
                  className=" -rotate-90 scale-110 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.253"
                  height="12"
                  viewBox="0 0 7.253 12"
                >
                  <path
                    id="Path_2594"
                    data-name="Path 2594"
                    d="M6.858,4.82l-.2-.18-.026-.024c-.046-.043-.095-.085-.145-.127L1.7.27A.908.908,0,0,0,.388.294L.261.431A.988.988,0,0,0,.284,1.793L3.624,5.946.65,10.265a.987.987,0,0,0,.069,1.36l.136.127a.908.908,0,0,0,1.313-.071L6.657,6.953c.019-.017.039-.033.056-.051l.177-.19A1.372,1.372,0,0,0,6.858,4.82Z"
                    fill="#999ca3"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
