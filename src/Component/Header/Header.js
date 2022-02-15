import HeaderTitle from "./HeaderTitle";
import HeaderDate from "./HeaderDate";
import "./StyleHeader.css";

function Header(props) {
    const {todoCount, doneCount} = props;
    return (
        <div className="header__container">
            <HeaderTitle/>
            <HeaderDate todoCount={todoCount} doneCount={doneCount}/>
        </div>
    );
}

export default Header;