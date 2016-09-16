const React = require('react');
const FoodList = require('./FoodList');
const Header = require('./Header');


const hardcodedfood = require('../hardcodedfood');

const AppRoot = (props) =>
    <div>
        <Header />
        <FoodList food={hardcodedfood} />
    </div>;


module.exports = AppRoot;
