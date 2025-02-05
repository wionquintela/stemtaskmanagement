export default function Button({ name, onClick, type, icon, href }) {
  let style;
  if (icon) {
    const trashIcon = <i className="fa-solid fa-trash"></i>;
    const penIcon = <i className="fa-solid fa-pen-to-square"></i>;

    if (icon.props.className === trashIcon.props.className) {
      style = "btn-success"; // Change background color to red for fa-trash icon
    } else if (icon.props.className === penIcon.props.className) {
      style = "btn-danger"; // Change background color to yellow for fa-pen-to-square icon
    } else {
      style = "btn-primary"; // Default background color if neither fa-trash nor fa-pen-to-square
    }
  } else {
    style = "btn-primary"; // Default background color if icon is not provided
  }

  return (
    <div className="">
      <button className={`btn ${style}`} onClick={onClick} type={type}>
        <a style={{ color: "white", textDecoration: "none" }} href={href}>
          {name ? name : icon}
        </a>
      </button>
    </div>
  );
}
