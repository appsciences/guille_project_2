
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Input = ReactBootstrap.Input;

var States = React.createClass({
    getInitialState: function() {
        return {
            data: ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
            options: []
        }
    },
    handleChange: function(e) {
        this.state[e.target.id] = e.target.value;
    },
    render: function() {

        if(this.props.options !== undefined) {
            for (var i=0; i<this.props.options.length; i++) {
                this.state.options.push( <option value={this.props.options[i]}>{this.props.options[i]}</option> );
            }
        }

        for(var i=0; i<this.state.data.length; i++) {
            this.state.options.push( <option value={this.state.data[i]}>{this.state.data[i]}</option> );
        }

        return (
            <Input type="select" ref="state" label={this.props.label} onBlur={this.handleChange} defaultValue={this.state.options[0]}>
                {this.state.options}
            </Input>
        );
    }
});

module.exports = States;