import MainFooterAlt from "./MainFooterPaymentAndText";
import MainFooterLinks from "./MainFooterSiteMapAndContact";
import MainFooterLogoAndSocial from "./MainFooterLogoAndSocial";
export default function MainFooter() {
  return (
    <>
      <footer className="mt-[1000px] text-tdark-3 overflow-x-hidden">
        <div className="footer-hr">
          <hr></hr>
        </div>
        <MainFooterLogoAndSocial />
        <div className="footer-hr mb-[90px]">
          <hr></hr>
        </div>
        <MainFooterLinks />
        <MainFooterAlt />
      </footer>
    </>
  );
}
