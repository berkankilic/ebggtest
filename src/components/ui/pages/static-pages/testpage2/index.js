/* plugins */
import { Helmet } from "react-helmet";

/* header */ import MainHeader from "../../../header/MainHeader";

/* sections */
/* section-1 */ import Section1 from "../testpage2/Section1";

/* other */ import Other from "../../../Other";

/* footer */ import MainFooter from "../../../footer/MainFooter";

export default function Homepage() {
  return (
    <div id="ebgg-app text-white">
      <Helmet>
        <title>EBGG - Anasayfa</title>
        <meta name="description" content="EBGG Anasayfa google seo için " />
      </Helmet>
      <header>
        <MainHeader />
      </header>
      <Section1 />
      <MainFooter />
      <Other />
    </div>
  );
}
