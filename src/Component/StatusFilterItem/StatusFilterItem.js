import React, {Component} from "react";
import "./StyleStatusFilterItem.css";

class StatusFilterItem extends Component {
    render() {
        return (
            <div className="status-item__container">
                <button className="filter-btn">All</button>
                <button className="filter-btn">Active</button>
                <button className="filter-btn">Done</button>
            </div>
        );
    }
}

export default StatusFilterItem;