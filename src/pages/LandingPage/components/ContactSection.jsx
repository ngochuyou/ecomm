export default function ContactSection() {
	return (
		<section className="uk-padding-small">
			<div className="uk-grid-collapse uk-grid-divider" uk-grid="">
				<div className="uk-width-1-3">
					<div>
						<p className="uk-text-lead">EComm</p>
						<div>
							<div
			      		uk-img=""
			      		data-src="images/qr.jpg"
			      		style={{
			      			"height": "100px",
			      			"width": "100px",
		              "backgroundSize": "cover",
		              "backgroundRepeat": "no-repeat",
		              "backgroundPosition": "center"
			      		}}
			    		>
							</div>
							<p className="uk-margin-remove-top">Website</p>
						</div>
						<div>
							<div
			      		uk-img=""
			      		data-src="images/qr.jpg"
			      		style={{
			      			"height": "100px",
			      			"width": "100px",
		              "backgroundSize": "cover",
		              "backgroundRepeat": "no-repeat",
		              "backgroundPosition": "center"
			      		}}
			    		>
							</div>
							<p className="uk-margin-remove-top">Tiktok</p>
						</div>
					</div>
				</div>
				<div className="uk-width-2-3">
					<div>
						<ContactUs />
						<FollowUs />
					</div>
				</div>
			</div>
		</section>
	);
}

function ContactUs() {
	return (
		<div>
			<div className="uk-text-lead">Liên lạc</div>
			<p>
				<span
					uk-icon="icon: location; ratio: 1.1"
					className="uk-margin-small-right"
				></span>
				<span className="uk-text-meta">Tầng X, Tòa nhà Y, Số Z Đường A, Phường B, Quận D, Thành phố C</span>
			</p>
			<p>
				<span
					uk-icon="icon: phone; ratio: 1.1"
					className="uk-margin-small-right"
				></span>
				<span className="uk-text-meta">0123456789</span>
			</p>
			<p>
				<span
					uk-icon="icon: mail; ratio: 1.1"
					className="uk-margin-small-right"
				></span>
				<span className="uk-text-meta">abc.xyz@def.vn</span>
			</p>
		</div>
	);
}

function FollowUs() {
	return (
		<div>
			<div className="uk-text-lead">Kênh</div>
			<div className="uk-margin-small-top">
				<div
					className="uk-grid-small"
					uk-grid=""
				>
					<SocialMedia
						icon="facebook"
					/>
					<SocialMedia
						icon="tiktok"
					/>
					<SocialMedia
						icon="whatsapp"
					/>	
				</div>
			</div>
		</div>
	);
}

function SocialMedia({
	icon = ""
}) {
	return (
		<div className="uk-child-width-1-1">
			<div>
				<span uk-icon={`icon: ${icon}; ratio: 2`}></span>
			</div>
		</div>
	);
}