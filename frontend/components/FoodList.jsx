const React = require('react');
const classNames = require('class-names');

const FoodList = (props) =>
    <div className="row">
        <div className="small-12 medium-8 large-6 small-centered columns">
            {props.food.map((foodItem, i) => {
                let status = "enough";

                if (foodItem.amount === 0) status = "empty";
                else if (foodItem.amount <= foodItem.baseline / 2) status = "running-low";

                return <FoodItem {...foodItem} status={status} key={i} />
            }) }
            <AddNewFoodForm />
        </div>
    </div>;

const FoodItem = React.createClass({
    getInitialState() {
        return {
            hideButtons: true
        };
    },
    toggleButtons() {
        this.setState({ hideButtons: !this.state.hideButtons });
    },

    render() {
    return (
        <div>
            <div className={`row food-item ${this.props.status}`} onClick={this.toggleButtons} >
                <div className="small-8 columns food-name">
                    {this.props.name}
                </div>
                <div className="small-4 columns food-amount">
                    {this.props.amount} {this.props.amount === 1 ? this.props.unit.singular : this.props.unit.plural}
                </div>
            </div>
            <FoodButtons hideButtons={this.state.hideButtons} />
        </div>
    );
    }
});

const FoodButtons = (props) =>
    <div className={classNames("row", "food-buttons", { "hidden": props.hideButtons })}>
        <div className="small-2 columns">
            <button className="add-button small-centered columns">+ 1</button>
        </div>
        <div className="small-2 columns">
            <button className="add-button small-centered columns">+ &#189; </button>
        </div>
        <div className="small-2 columns">
            <button className="add-button small-centered columns">+ &#188; </button>
        </div>
        <div className="small-2 columns">
            <button className="remove-button small-centered columns">- 1</button>
        </div>
        <div className="small-2 columns">
            <button className="remove-button small-centered columns">- &#189; </button>
        </div>
        <div className="small-2 columns">
            <button className="remove-button small-centered columns">- &#188; </button>
        </div>
        <form className="small-6 columns add-form">
            <button className="add-button-custom">Legg til</button> <input className="add-input-custom" name="amount" placeholder="0" type="text" />
        </form>
        <form className="small-6  columns remove-form">
            <button className="remove-button-custom">Legg til</button> <input className="remove-input-custom" name="amount" placeholder="0" type="text" />
        </form>
    </div>

const AddNewFoodForm = (props) =>
    <form>
        <label>Matvare</label><input type="text" name="name" placeholder="Rømme" required />
        <label>Mengde</label><input type="number" name="amount" placeholder="2" required />
        <label>Enhet (entall) </label><input type="text" name="singularUnit" placeholder="boks" required />
        <label>Enhet (flertall) </label><input type="text" name="pluralUnit" placeholder="bokser" />
        <button type="submit">Legg til</button>
    </form>;

module.exports = FoodList;
