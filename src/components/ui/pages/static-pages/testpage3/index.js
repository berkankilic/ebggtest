/* plugins */
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

/* header */ import MainHeader from "../../../header/MainHeader";

/* sections */
/* section-1 */ import Section1 from "./Section1";

/* other */ import Other from "../../../Other";

/* footer */ import MainFooter from "../../../footer/MainFooter";

function Homepage() {
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
        <div> Yükleniyor</div>
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

export default Homepage;
