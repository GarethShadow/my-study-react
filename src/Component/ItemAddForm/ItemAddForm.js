import React, {Component} from "react";
import "./StyleItemAddForm.css";

export default class ItemAddForm extends Component {

    state = {
        label: ""
    }

    onLabelChange = (e) => {
        this.setState({
            label : e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
      this.props.onItemAdded(this.state.label);
    };

    render() {
        return (
            <form
                className="add-form__panel"
                onSubmit={this.onSubmit}
            >
                <input
                    className="add-form__input"
                    placeholder="search"
                    type="text"
                    onChange={this.onLabelChange}
                    placeholder="What need tobe done"
                />
                <button
                    className="add-form__button"
                >
                    Add Item
                </button>
            </form>
        );
    }

}