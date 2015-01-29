
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var States = require('./States');
var Zip = require('./Zip');

var PanelGroup = ReactBootstrap.PanelGroup;
var Panel = ReactBootstrap.Panel;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Input = ReactBootstrap.Input;

var Address = React.createClass({
    getInitialState: function() {
        return {};
    },
    handleChange: function(e) {
        this.state[e.target.id] = e.target.value;
    },
    render: function() {
        return (
            <div>
                <PanelGroup defaultActiveKey='2' accordion>
                    <Panel header={this.props.header} eventKey='1'>
                        <Row>
                            <Col xs={6}>
                                <Input ref="streetAddress" id="streetAddress" type="text" label="Street Address" onBlur={this.handleChange}/>
                            </Col>
                            <Col xs={6}>
                                <Input ref="city" id="city" type="text" label="City" onBlur={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <States ref="state" label="State" simple></States>
                            </Col>
                            <Col xs={6}>
                                <Zip ref="zip" simple></Zip>
                            </Col>
                        </Row>
                    </Panel>
                </PanelGroup>
            </div>
        );
    }
});

module.exports = Address;