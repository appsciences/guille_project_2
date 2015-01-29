var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Phone = require('./Phone');
var Email = require('./Email');

var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Input = ReactBootstrap.Input;

var Reference = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function(){
        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <Input ref="referenceCompanyName" type="text" label="Company Name" defaultValue="" />
                    </Col>
                    <Col xs={6}>
                        <Input ref="referenceContactName" type="text" label="Contact Name" defaultValue="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Phone ref="phone" simple></Phone>
                    </Col>
                    <Col xs={6}>
                        <Email ref="email" simple></Email>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = Reference;