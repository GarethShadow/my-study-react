import "./StyleSearchPanel.css";
import StatusFilterItem from "../StatusFilterItem/StatusItemFilter";

function SearchPanel() {
    return (
        <div className="serch__container">
            <input className="serch__panel" placeholder="search"/>
            <StatusFilterItem/>
        </div>
        );
}

export default SearchPanel;