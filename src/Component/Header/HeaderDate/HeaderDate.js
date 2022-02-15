import "./StyleHeaderDate.css";

const HeaderDate = props => {
    const {todoCount, doneCount} = props;
    return <p className="header-date__text">{todoCount} more to do, {doneCount} done</p>;
};

export default HeaderDate;