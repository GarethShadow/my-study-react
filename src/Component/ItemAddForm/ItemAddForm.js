import React, {Component} from "react";
import "./StyleItemAddForm.css";

export default class ItemAddForm extends Component {

    render() {
        const {onItemAdded} = this.props;
        return (
            <div className="add-form__panel">
                <input className="add-form__input" placeholder="search"/>
                <button className="add-form__button" onClick={() => onItemAdded('Hello world')}>Add Item
                </button>
            </div>
        );
    }

}