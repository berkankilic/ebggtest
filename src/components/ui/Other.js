export default function Other() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-dark-1 invisible bg-clip-padding shadow-sm outline-none transition duration-700 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
        tabindex="-1"
        id="qwe3"
        aria-labelledby="offcanvasRightLabel"
      >
        <div
          id="menu"
          className="relative min-h-screen w-full bg-[#181A20] h-full ml-auto py-7 px-16"
        >
          <div className="testclass">
            <a href="/hakkimizda">Overview</a>
            <a href="#">Orders</a>
            <a href="#">Wallet</a>
            <a href="#">Support</a>
            <a href="#">Settings</a>
          </div>

          <div className="absolute top-6 right-6">
            <button
              id="close-btn"
              className="bg-[#272A30] m-auto h-[36px] w-[36px] rounded-full flex flex-col items-center"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <img
                alt="user"
                className="m-auto h-[20px] rotate-180"
                src="images/header/close-x.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
