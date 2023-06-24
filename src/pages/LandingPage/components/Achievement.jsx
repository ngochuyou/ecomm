export default function Achievement() {
	return (
		<div
			uk-grid=""
			className="uk-grid-large uk-grid-match uk-child-width-expand@s uk-text-center"
		>
			<AchievementItem
				icon="icon: crosshairs; ratio: 3.5"
				main="Thành tựu"
			/>
			<AchievementItem
				icon="icon: lifesaver; ratio: 3.5"
				main="Chứng nhận"
			/>
			<AchievementItem
				icon="icon: star; ratio: 3.5"
				main="Chứng chỉ"
			/>
		</div>
	);
}

function AchievementItem({
	icon = "crosshairs",
	main = "Main content"
}) {
	return (
		<div className="uk-card uk-card-default">
			<div
				className="uk-card-header"
				style={{
          "border": "none"
        }}
			>
				<span uk-icon={icon}></span>
			</div>
			<div className="uk-card-body">
				<p>{main}</p>
			</div>
		</div>
	);
}