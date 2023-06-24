import Story from './Story';
import Achievement from './Achievement';

export default function CommunitySection() {
	return (
		<section>
			<Stories />
			<Achievement />
		</section>
	);
}

function Stories() {
	return (
		<div uk-grid="">
			<Story
				title="Tên người 1"
				avatar="images/people-1.jpg"
				date="Tháng 06 2019"
				main="Bình luận từ Facebook, Zalo,..."
			/>
			<Story
				title="Tên người 2"
				avatar="images/people-2.jpg"
				date="Tháng 04 2023"
				main="Bình luận từ Facebook, Zalo,..."
			/>
		</div>
	);
}