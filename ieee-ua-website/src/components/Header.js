function Header({ children, backgroundImage }) {
    return (
  
        <div className="header-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
            {children}
        </div>
    );
  }
  export default Header;