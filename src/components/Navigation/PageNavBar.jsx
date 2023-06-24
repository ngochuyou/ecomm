export default function PageNavBar() {
	return (
		<nav className="uk-navbar-container">
			<div className="uk-container">
	      <div uk-navbar="">
	      	<NavLeft />
	      	<NavRight />
	      </div>
	    </div>
		</nav>
	);
}

function NavLeft() {
	return (
		<div className="uk-navbar-left">
	  	<a className="uk-navbar-item uk-logo" href="/" aria-label="Home">EComm</a>
	  </div>
	)
}

function NavRight() {
	return (
		<div className="uk-navbar-right">
	  	<div className="uk-navbar-item">
	  		<span uk-icon="menu"></span>
	  	</div>
	  </div>
	)
}