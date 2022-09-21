import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageHomeHeroSection } from "./PageHomeHeroSection";
import { SEOBlock } from "./SEOBlock";

export const cmsSections = {
  CommonSeoBlockRecord: (props) => <SEOBlock {...props} />,
  CommonMenuRecord: (props) => <Menu {...props} />,
  PagehomeHerosectionRecord: (props) => <PageHomeHeroSection {...props} />,
  CommonFooterRecord: (props) => <Footer {...props} />,
}
