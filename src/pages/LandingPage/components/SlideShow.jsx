export default function SlideShow() {
	return (
		<div uk-slideshow="">
	    <ul className="uk-slideshow-items">
	      <li>
	        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
            <img src="images/light.jpg" alt="light" uk-cover="" />
	        </div>
	      </li>
	      <li>
	        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
            <img src="images/dark.jpg" alt="light" uk-cover="" />
	        </div>
	      </li>
	      <li>
	        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
            <img src="images/photo.jpg" alt="light" uk-cover="" />
	        </div>
	      </li>
	    </ul>
		</div>
	);
}