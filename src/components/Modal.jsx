export default function Modal({ onClose }) {
  return (
    <>
      <div className="popupContainer" style={{ display: "block", position: "fixed", zIndex: 11000, left: "50%", marginLeft: "-165px", top: 100 }}>
        <div className="popupHeader">
          <span className="header_title">Login</span>
          <span className="modal_close" onClick={onClose}>
            <i className="fa fa-times" />
          </span>
        </div>
        <section className="popupBody">
          {/* Social Login */}
          <div className="social_login">
            <a href="#" className="social_box fb">
              <span className="icon"><i className="fab fa-facebook" /></span>
              <span className="icon_title">Connect with Facebook</span>
            </a>
            <a href="#" className="social_box google">
              <span className="icon"><i className="fab fa-google-plus" /></span>
              <span className="icon_title">Connect with Google</span>
            </a>
          </div>
          {/* Forms can be added here */}
        </section>
      </div>
      <div id="lean_overlay" style={{ display: "block", opacity: 0.6 }} />
    </>
  );
}
