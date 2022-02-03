import HeaderTitle from "./HeaderTitle/HeaderTitle";
import HeaderDate from "./HeaderDate/HeaderDate";
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