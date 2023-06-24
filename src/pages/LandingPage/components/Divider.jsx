export default function Divider({
	title = "Title"
}) {
	return  (
		<div className="uk-padding-small">
			<hr />
			<p className="uk-text-uppercase uk-text-right uk-margin-remove">
				{title}
			</p>
		</div>
	);
}