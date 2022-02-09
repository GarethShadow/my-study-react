import "./StyleAddFormItem.css";

const AddFormItem = () => {
    return (
        <form className="add-form__panel">
            <input className="add-form__input" placeholder="search"/>
            <button className="add-form__button">Add</button>
        </form>
    );
};

export default AddFormItem;