var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var States = require('./../react-common/States');
var Address = require('./../react-common/Address');
var Phone = require('./../react-common/Phone');
var CellPhone = require('./../react-common/CellPhone');

var GetRefs = require('./../helpers/get-refs');
var ParseSave = require('./../parse/parse-save');

var Input = ReactBootstrap.Input;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;

var Percentage = React.createClass({
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
            <Input ref="percentage" id="percentage" type="text" label="%" bsStyle={this.state.bsStyle} pattern="^[0-9]{1,2}$" onBlur={this.handleChange} defaultValue="" />
        );
    }
});

var PrincipalFields = React.createClass({
    getInitialState: function() {
        return {collection: []};
    },
    render: function() {
        return React.DOM.div({},
            <div>
                <Input ref="principalName" type="text" label="Name" defaultValue=""/>
                <Address ref="principalAddress" header="Address" complex></Address>
                <Input ref="principalSocialSecurityNumber" type="text" label="Social Security No." defaultValue=""/>

                <h4>Home address</h4>
                <Address ref="principalHomeAddress" header="Address" complex></Address>

                <Input ref="principalOwnRent" type="select" label="Own/Rent" defaultValue="Own">
                    <option value="Own">Own</option>
                    <option value="Rent">Rent</option>
                </Input>

                <Row>
                    <Col xs={6}>
                        <Phone ref="principalPhone" simple></Phone>
                    </Col>
                    <Col xs={6}>
                        <CellPhone ref="principalCellPhone" simple></CellPhone>
                    </Col>
                </Row>

                <Input ref="principalYearsWithTheCompany" type="text" label="Years with the company" defaultValue=""/>
                <Input ref="principalSocialSecurityIndustry" type="text" label="Years with the Industry" defaultValue=""/>
            </div>
        );
    }
});

var PrincipalRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.principalName}</td>
                <td>{this.props.item.principalAddress}</td>
                <td>{this.props.item.principalSocialSecurityNumber}</td>
                <td>{this.props.item.principalHomeAddress}</td>
                <td>{this.props.item.principalOwnRent}</td>
                <td>{this.props.item.principalPhone}</td>
                <td>{this.props.item.principalCellPhone}</td>
                <td>{this.props.item.principalYearsWithTheCompany}</td>
                <td>{this.props.item.principalSocialSecurityIndustry}</td>
            </tr>
        );
    }
});

var PrincipalTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<PrincipalRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Social Security No.</th>
                        <th>Home Address</th>
                        <th>Own/Rent</th>
                        <th>Phone</th>
                        <th>Cell Phone</th>
                        <th>Years with the company</th>
                        <th>Social Security Industry</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var Principal = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var result = GetRefs(this.refs.principal, false);

        this.setState({
            collection: [result].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <PrincipalFields ref="principal" collection={this.state.collection} complex></PrincipalFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <PrincipalTable collection={this.state.collection}></PrincipalTable>
            </div>
        );
    }
});

var EquityHoldersFields = React.createClass({
    getInitialState: function() {
        return {collection: []};
    },
    render: function() {
        return React.DOM.div({},
            <div>
                <Row>
                    <Col xs={6}>
                        <Input ref="equityName" type="text" label="Name" defaultValue="" />
                    </Col>
                    <Col xs={6}>
                        <Percentage ref="percentage" simple></Percentage>
                    </Col>
                </Row>
            </div>
        );
    }
});

var EquityHoldersRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.equityName}</td>
                <td>{this.props.item.percentage}</td>
            </tr>
        );
    }
});

var EquityHoldersTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<EquityHoldersRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Equity Name</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var EquityHolders = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function() {
        var result = GetRefs(this.refs.equityHolders, false);

        this.setState({
            collection: [result].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <EquityHoldersFields ref="equityHolders" collection={this.state.collection} index={this.state.collection.length} complex></EquityHoldersFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <EquityHoldersTable collection={this.state.collection}></EquityHoldersTable>
            </div>
        );
    }
});

var TaxIDNumber = React.createClass ({
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
            <Input ref="taxIdNumber" label="Tax ID No." id="taxIdNumber" bsStyle={this.state.bsStyle} pattern="\d{2}[\-]\d{7}" type="text" onBlur={this.handleChange} defaultValue=""/>
        );
    }
});

var CompanyInformationForm = React.createClass({
    handleSubmit: function(data, b) {
        var result = GetRefs(this, false);

        ParseSave(
            "CompanyInformation",
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
                    <h2>Company Information</h2>

                    <Row>
                        <Col xs={6}>
                            <Input ref="companyName" type="text" label="Name" defaultValue=""/>
                        </Col>
                        <Col xs={6}>
                            <Input type="select" ref="typeOfEntity" label="Type of entity" defaultValue="Corp">
                                <option value="Corp">Corp</option>
                                <option value="LLC">LLC</option>
                                <option value="LP">LP</option>
                                <option value="GP">GP</option>
                                <option value="Sole Proprietorship">Sole Proprietorship</option>
                                <option value="Other">Other</option>
                            </Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6}>
                            <TaxIDNumber ref="taxIdNumber" simple></TaxIDNumber>
                        </Col>
                        <Col xs={6}>
                            <States label="State" ref="state" simple></States>
                        </Col>
                    </Row>

                    <Input type="textarea" ref="companyBusiness" label="Describe company's business" defaultValue="" />

                    <h4>List equity holders and their percentage ownership</h4>

                    <Row>
                        <Col xs={12}>
                            <EquityHolders ref="equityHolders" collection></EquityHolders>
                        </Col>
                    </Row>

                    <h4>List all subsidiaries</h4>

                    <Row>
                        <Col xs={6}>
                            <Input ref="subsidiaryName" type="text" label="Name" defaultValue=""/>
                        </Col>
                        <Col xs={6}>
                            <States ref="subsidiaryState" label="State" simple></States>
                        </Col>
                    </Row>

                    <h4>List all affiliates (companies whose equity is at least 50% owned by any combination of the Company's principals)</h4>

                    <Row>
                        <Col xs={6}>
                            <Input ref="affiliateName" type="text" label="Name" defaultValue=""/>
                        </Col>
                        <Col xs={6}>
                            <States ref="affiliateState" label="State" simple></States>
                        </Col>
                    </Row>

                    <h4>Tradenames, tradestyles and trademarks (if any)</h4>
                    <Row>
                        <Col xs={6}>
                            <Input ref="tradenamesName" type="text" label="Name" defaultValue=""/>
                        </Col>
                        <Col xs={6}>
                            <States ref="tradenamesState" options={['USPTO', 'Other']} label="State" simple></States>
                        </Col>
                    </Row>

                    <h2>Principals</h2>

                    <Principal ref="principal" collection></Principal>

                    <div className="pull-right">
                        <Button bsStyle="primary" className="btn-spaced" onClick={this.handleSubmit}>Save</Button>
                        <Button bsStyle="primary" onClick={this.next}>Next</Button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = CompanyInformationForm;