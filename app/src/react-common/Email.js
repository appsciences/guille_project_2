
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Input = ReactBootstrap.Input;

var Email = React.createClass ({
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
            <Input ref="email" type="email" id="email" bsStyle={this.state.bsStyle} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" label="Email" onBlur={this.handleChange} defaultValue="" />
        );
    }
});

module.exports = Email;