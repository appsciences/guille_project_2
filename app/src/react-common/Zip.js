
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Input = ReactBootstrap.Input;

var Zip = React.createClass ({
    getInitialState: function() {
        return {};
    },
    handleChange: function(e) {
        this.state[e.target.id] = e.target.value;

        this.setState({
            bsStyle: (e.target.value.match(e.target.pattern) === null ? "error" : "success")
        });
    },
    render: function() {
        return (
            <Input type="text" ref="zip" label="Zip" bsStyle={this.state.bsStyle} pattern="^[0-9]{1,5}$" onBlur={this.handleChange} />
        );
    }
});

module.exports = Zip;
