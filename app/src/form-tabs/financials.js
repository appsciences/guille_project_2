
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Address = require('./../react-common/Address');
var Phone = require('./../react-common/Phone');
var Fax = require('./../react-common/Fax');

var GetRefs = require('./../helpers/get-refs');
var ParseSave = require('./../parse/parse-save');

var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var InstitutionFields = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Input ref="institutionName" type="text" label="Name of Institution" defaultValue="" />
                <Address ref="institutionAddress" header="Address" complex></Address>

                <Row>
                    <Col xs={4}>
                        <Input ref="institutionNameOfOfficer" type="text" label="Name of officer" defaultValue="" />
                    </Col>
                    <Col xs={4}>
                        <Phone ref="institutionPhone" complex></Phone>
                    </Col>
                    <Col xs={4}>
                        <Fax ref="institutionFax" complex></Fax>
                    </Col>
                </Row>

                <Input ref="institutionNumberOfYearsWithBank" type="text" label="No. of Years with the Bank" defaultValue="" />

                <Input ref="institutionTermLoan" type="select" label="Type of financing" defaultValue="Term Loan">
                    <option value="Term Loan">Term Loan</option>
                    <option value="Line of Credit">Line of Credit</option>
                    <option value="Factoring">Factoring</option>
                    <option value="PO Funding">PO Funding</option>
                </Input>

                <Input ref="institutionAmountOutstanding" type="text" label="Amount Outstanding" defaultValue="" />

                <Input ref="institutionCollateral" type="select" label="Collateral" multiple>
                    <option value="AllAssets">All Assets</option>
                    <option value="Receivables">Receivables</option>
                    <option value="Inventory">Inventory</option>
                    <option value="Equipment">Equipment</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Intellectual">Intellectual</option>
                    <option value="Property">Property</option>
                    <option value="Other">Other</option>
                </Input>
            </div>
        )
    }
});

var InstitutionRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.institutionName}</td>
                <td>{this.props.item.institutionAddress}</td>
                <td>{this.props.item.institutionNameOfOfficer}</td>
                <td>{this.props.item.institutionPhone}</td>
                <td>{this.props.item.institutionFax}</td>
                <td>{this.props.item.institutionNumberOfYearsWithBank}</td>
                <td>{this.props.item.institutionTermLoan}</td>
                <td>{this.props.item.institutionAmountOutstanding}</td>
                <td>{this.props.item.institutionCollateral}</td>
            </tr>
        );
    }
});

var InstitutionTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<InstitutionRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Name of Officer</th>
                        <th>Phone</th>
                        <th>Fax</th>
                        <th>No. of Years with the Bank</th>
                        <th>Type of Financing</th>
                        <th>Amount outstanding</th>
                        <th>Collateral</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var Institution = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var result = GetRefs(this.refs.institution, false);

        this.setState({
            collection: [result].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <InstitutionFields ref="institution" collection={this.state.collection} complex></InstitutionFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <InstitutionTable collection={this.state.collection}></InstitutionTable>
            </div>
        );
    }
});

var BankFields = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Input ref="nameOfBank" id="nameOfBank" type="text" label="Name of Bank" />
                <h4>Address of Branch of Account</h4>
                <Address ref="bankAddress" header="Address" complex></Address>
                <Row>
                    <Col xs={6}>
                        <Input ref="bankTypeOfAccount" id="typeOfAccount" type="select" label="Type of Account(s)" defaultValue="Checking">
                            <option value="Checking">Checking</option>
                            <option value="Savings">Savings</option>
                            <option value="Other">Other</option>
                        </Input>
                    </Col>
                    <Col xs={6}>
                        <Input ref="bankAccountNo" type="text" label="Account No." defaultValue="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <Input ref="bankNameOfOfficer" type="text" label="Name of Officer" defaultValue="" />
                    </Col>
                    <Col xs={4}>
                        <Phone ref="bankPhone" complex></Phone>
                    </Col>
                    <Col xs={4}>
                        <Fax ref="bankFax" complex></Fax>
                    </Col>
                </Row>
                <Input ref="bankNoOfYearsWithTheBank" type="text" label="No. of Years with the Bank" defaultValue=""/>
            </div>
        )
    }
});

var BankRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.nameOfBank}</td>
                <td>{this.props.item.bankAddress}</td>
                <td>{this.props.item.bankTypeOfAccount}</td>
                <td>{this.props.item.bankAccountNo}</td>
                <td>{this.props.item.bankNameOfOfficer}</td>
                <td>{this.props.item.bankPhone}</td>
                <td>{this.props.item.bankFax}</td>
                <td>{this.props.item.bankNoOfYearsWithTheBank}</td>
            </tr>
        );
    }
});

var BankTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<BankRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Type of Account</th>
                        <th>Account No.</th>
                        <th>Name of Officer</th>
                        <th>Phone</th>
                        <th>Fax</th>
                        <th>No. of Years with the Bank</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var Bank = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var result = GetRefs(this.refs.bank, false);

        this.setState({
            collection: [result].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <BankFields ref="bank" collection={this.state.collection} complex></BankFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <BankTable collection={this.state.collection}></BankTable>
            </div>
        );
    }
});

var FinancialsForm = React.createClass({
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
                    <h2>Financials</h2>
                    <h3>Deposits</h3>

                    <Bank ref="bank" collection></Bank>

                    <h3>Financing</h3>

                    <Institution ref="institution" collection></Institution>

                    <br></br> <br></br>

                    <div className="pull-right">
                        <Button bsStyle="primary" className="btn-spaced" onClick={this.handleSubmit}>Save</Button>
                        <Button bsStyle="primary" onClick={this.next}>Next</Button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = FinancialsForm;