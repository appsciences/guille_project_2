
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Input = ReactBootstrap.Input;

var Phone = React.createClass ({
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
            <Input ref="phone" type="text" id="phone" bsStyle={this.state.bsStyle} pattern="\d{3}[\-]\d{3}[\-]\d{4}" label="Phone" onBlur={this.handleChange} defaultValue="" />
        );
    }
});

module.exports = Phone;