
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Address = require('./../react-common/Address');
var Phone = require('./../react-common/Phone');
var Email = require('./../react-common/Email');

var GetRefs = require('./../helpers/get-refs');
var ParseSave = require('./../parse/parse-save');

var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var ContactInfoForm = React.createClass({
    handleSubmit: function(data, b) {
        var result = GetRefs(this, false);

        ParseSave(
            "ContactInfo",
            result,
            function(response) {
                console.log('New object created with objectId: ' + response.id);
            },
            function(response, error) {
                console.log('Error: ' + response.message);
            }
        );
    },
    render: function() {
        return (
            <div>
                <form>
                    <h2>Contact Info</h2>

                    <Input id="name" ref="name" type="text" label="Name" defaultValue="" />
                    <Address header="Address" ref="address" complex></Address>
                    <Row>
                        <Col xs={6}>
                            <Phone ref="phone" simple></Phone>
                        </Col>
                        <Col xs={6}>
                            <Email ref="email" simple></Email>
                        </Col>
                    </Row>

                    <div className="pull-right">
                        <Button bsStyle="primary" className="btn-spaced" onClick={this.handleSubmit}>Save</Button>
                        <Button bsStyle="primary" onClick={this.next}>Next</Button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = ContactInfoForm;