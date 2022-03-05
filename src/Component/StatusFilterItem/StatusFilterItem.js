import React, {Component} from "react";
import "./StyleStatusFilterItem.css";

class StatusFilterItem extends Component {
    buttons = [
        {name: "all", label: "All"},
        {name: "active", label: "Active"},
        {name: "done", label: "Done"}
    ];

    render() {
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const classActive = isActive ? "filter-btn-cactive" : "filter-btn-outline";
            return (
                <button className={`filter-btn ${classActive}`} key={name} onClick={() => onFilterChange(name)}>{label}</button>
            );
        });
        return (
            <div className="status-item__container">
                {buttons}
            </div>
        );
    }
}

export default StatusFilterItem;