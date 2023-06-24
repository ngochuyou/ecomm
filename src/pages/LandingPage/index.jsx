import PageNavBar from 'components/Navigation/PageNavBar';
import SlideShow from './components/SlideShow';
import ProductSection from './components/ProductSection';
import Divider from './components/Divider';
import CommunitySection from './components/CommunitySection';
import ContactSection from './components/ContactSection';

export default function LandingPage() {
	return (
		<>
			<PageNavBar />
			<SlideShow />
			<Divider
        title="Các sản phẩm"
      />
      <ProductSection />
      <Divider
        title="Cộng đồng"
      />
      <CommunitySection />
      <Divider
        title="Về chúng tôi"
      />
      <ContactSection />
		</>
	);
}