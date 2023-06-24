export default function Story({
  avatar = "images/avatar.jpg",
  title = "Title",
  date = "April 01, 2016",
  main = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
}) {
	return (
    <div className="uk-card uk-card-default uk-width-1-2@m">
      <div
        className="uk-card-header"
        style={{
          "border": "none"
        }}
      >
        <div className="uk-grid-small uk-flex-middle" uk-grid="">
          <div
            className="uk-width-auto"
          >
            <img
              className="uk-border-circle"
              src={avatar}
              alt="Avatar"
              style={{
                "objectFit": "cover",
                "width": "40px",
                "height": "40px"
              }}
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">{title}</h3>
            <p className="uk-text-meta uk-margin-remove-top">
              <time>
                {date}
              </time>
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>{main}</p>
      </div>
    </div>
	);
}