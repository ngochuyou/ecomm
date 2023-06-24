export default function Card({
  title = "Tên sản phẩm",
  main = "Đây là mô tả cho sản phẩm. Ngắn gọn, bao quát. Dài từ một đến ba dòng",
  image = "images/glass-1.jpg",
  scrollSpy = ""
}) {
	return (
		<div
			className="uk-padding-small"
		>
	    <div
				uk-scrollspy={scrollSpy}
	    >
	      <div>
	      	<div
	      		uk-img=""
	      		data-src={image}
	      		className="uk-height-medium uk-box-shadow-small"
            /*uk-height-viewport="min-height: 100"*/
	      		style={{
              "backgroundSize": "cover",
              "backgroundRepeat": "no-repeat",
              "backgroundPosition": "center"
	      		}}
	    		>
	      	</div>
	      </div>
	    </div>
			<div className="uk-text-center uk-margin-top">
				<p className="uk-text-lead">{title}</p>
				<div className="uk-height-max-medium">
	      	<p>{main}</p>
	      </div>
	    </div>
		</div>
	);
}
