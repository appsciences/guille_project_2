
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Input = ReactBootstrap.Input;

var FileInput = React.createClass({
    getInitialState: function() {
        return {};
    },
    handleChange: function(event) {
        this.setState({fileContent: event.target.files[0]});
    },
    render: function() {
        return (
            <Input type="file" label={this.props.label} onChange={this.handleChange}/>
        );
    }
});

module.exports = FileInput;