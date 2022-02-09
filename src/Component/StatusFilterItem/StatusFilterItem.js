import "./StyleStatusFilterItem.css";

const StatusFilterItem = () => {
    return (
        <div className="status-item__container">
            <button className="filter-btn">All</button>
            <button className="filter-btn">Active</button>
            <button className="filter-btn">Done</button>
        </div>
    );
};

export default StatusFilterItem;