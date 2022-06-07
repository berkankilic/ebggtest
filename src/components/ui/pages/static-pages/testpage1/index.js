/* header */ import MainHeader from "../../../header/MainHeader";
/* other */ import Other from "../../../Other";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Test1() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <ClipLoader color={"#ffffff"} loading={loading} size={150} />
      ) : (
        <div id="ebgg-app">
          <header>
            <MainHeader />
          </header>
          <Other />
          <div className=" text-center text-white text-7xl">TEST 1</div>
        </div>
      )}
    </div>
  );
}

export default Test1;
