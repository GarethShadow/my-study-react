import HeaderTitle from "./HeaderTitle";
import HeaderDate from "./HeaderDate";
import "./StyleHeader.css";

function Header() {
    return (
        <div className="header__container">
            <HeaderTitle/>
            <HeaderDate/>
        </div>
    );
}

export default Header;