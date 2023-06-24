import Card from './Card';

export default function ProductSection() {
	return (
		<section>
			<Card
				title={"Tên sản phẩm 1"}
				scrollSpy="cls: uk-animation-slide-left; repeat: true"
			/>
			<Card
        title={"Tên sản phẩm 2"}
        image="images/purse.jpg"
        scrollSpy="cls: uk-animation-slide-right; repeat: true"
      />
      <Card
        title={"Tên sản phẩm 3"}
        image="images/purse-2.jpg"
        scrollSpy="cls: uk-animation-slide-left; repeat: true"
      />
		</section>
	);
}