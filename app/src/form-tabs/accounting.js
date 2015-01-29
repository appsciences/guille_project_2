
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var States = require('./../react-common/States');
var Phone = require('./../react-common/Phone');
var Fax = require('./../react-common/Fax');
var FileInput = require('./../react-common/FileInput');

var GetRefs = require('./../helpers/get-refs');
var ParseSave = require('./../parse/parse-save');

var Input = ReactBootstrap.Input;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;

var UploadQuestion = React.createClass ({
    getInitialState: function() {
        return {show: false};
    },
    handleYesClick: function(data) {
        this.setState({
            show: true
        });
    },
    handleNoClick: function(data) {
        this.setState({show: false});
    },
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <label>{this.props.question}</label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ButtonGroup>
                            <Button onClick={this.handleYesClick}>Yes</Button>
                            <Button onClick={this.handleNoClick}>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <div className={(this.state.show === true) ? 'show' : 'hide' }>
                    <FileInput ref="file" label="Copy of Company's main financing agreement" file></FileInput>
                </div>
            </div>
        );
    }
});

var PeriodAmountQuestionFields = React.createClass({
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <Input ref="timePeriod" type="text" label="Time Period" defaultValue="" />
                    </Col>
                    <Col xs={6}>
                        <Input ref="amount" type="text" label="Amount" defaultValue="" />
                    </Col>
                </Row>
            </div>
        );
    }
});

var PeriodAmountQuestionRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.timePeriod}</td>
                <td>{this.props.item.amount}</td>
            </tr>
        );
    }
});

var PeriodAmountQuestionTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<PeriodAmountQuestionRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Time period</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var PeriodAmountQuestion = React.createClass ({
    getInitialState: function() {
        return {collection: [], show: false};
    },
    handlePlusButton: function(data) {
        var result = GetRefs(this.refs.timePeriodAmount, false);

        this.setState({
            collection: [result].concat(this.state.collection)
        });
    },
    handleYesClick: function(data) {
        this.setState({
            show: true
        });
    },
    handleNoClick: function(data) {
        this.setState({collection: [], show: false});
    },
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <label>{this.props.question}</label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ButtonGroup>
                            <Button onClick={this.handleYesClick}>Yes</Button>
                            <Button onClick={this.handleNoClick}>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <div className={(this.state.show === true) ? 'show' : 'hide' }>
                    <PeriodAmountQuestionFields ref="timePeriodAmount" collection={this.state.collection} complex></PeriodAmountQuestionFields>
                    <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                    <PeriodAmountQuestionTable collection={this.state.collection}></PeriodAmountQuestionTable>
                </div>
            </div>
        );
    }
});

var FinancialsFrequencyFields = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <Input ref="financialsFrequency" type="select" label="Frequency" defaultValue="Monthly">
                            <option value="Monthly">Monthly</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Biannually">Biannually</option>
                            <option value="Annually">Annually</option>
                            <option value="Other">Other</option>
                        </Input>
                    </Col>
                    <Col xs={6}>
                        <Input ref="financialsInternallyPrepared" type="select" label="Preparation" defaultValue="Internally Prepared">
                            <option value="Internally Prepared">Internally Prepared</option>
                            <option value="Compiled">Compiled</option>
                            <option value="Reviewed">Reviewed</option>
                            <option value="Audited">Audited</option>
                            <option value="Other">Other</option>
                        </Input>
                    </Col>
                </Row>
            </div>
        );
    }
});

var FinancialsFrequencyRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.financialsFrequency}</td>
                <td>{this.props.item.financialsInternallyPrepared}</td>
            </tr>
        );
    }
});

var FinancialsFrequencyTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<FinancialsFrequencyRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Frequency</th>
                        <th>Preparation</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var FinancialsFrequency = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var result = GetRefs(this.refs.financialsFrequency, false);

        this.setState({
            collection: [result].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <FinancialsFrequencyFields ref="financialsFrequency" collection={this.state.collection} complex></FinancialsFrequencyFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <FinancialsFrequencyTable collection={this.state.collection}></FinancialsFrequencyTable>
            </div>
        );
    }
});

var CompanyFYE = React.createClass({
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
            <Input ref="companyFYE" type="text" id="companyFYE" bsStyle={this.state.bsStyle} pattern="(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])\d\d" onBlur={this.handleChange} label="Company's FYE" defaultValue=""/>
        );
    }
});

var AccountingForm = React.createClass({
    handleSubmit: function(data, b) {
        var result = GetRefs(this, false);

        ParseSave(
            "Accounting",
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
                    <h2>Accounting and Tax</h2>

                    <Input ref="nameOfCompanyCPA" type="text" label="Name of Company's CPA" defaultValue=""/>

                    <Row>
                        <Col xs={4}>
                            <Input ref="address" type="text" label="Address" defaultValue=""/>
                        </Col>
                        <Col xs={4}>
                            <Input ref="city" type="text" label="City" defaultValue=""/>
                        </Col>
                        <Col xs={4}>
                            <States ref="state" label="State" simple></States>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <Input ref="contactPerson" type="text" label="Contact Person" defaultValue=""/>
                        </Col>
                        <Col xs={4}>
                            <Phone ref="phone" simple></Phone>
                        </Col>
                        <Col xs={4}>
                            <Fax ref="fax" simple></Fax>
                        </Col>
                    </Row>

                    <Input ref="numberOfYearsUsingServices" type="text" label="Number of Years Using Services" defaultValue=""/>
                    <CompanyFYE ref="companyFYE" simple></CompanyFYE>

                    <h3>How Often are Financials Generated{"?"}</h3>
                    <FinancialsFrequency ref="financialsFrequency" collection></FinancialsFrequency>

                    <Input ref="numberOfEmployees" type="text" label="No. of Employees" defaultValue=""/>

                    <Input ref="howOftenPayrollTaxes" type="select" label="How often do you pay payroll taxes?">
                        <option value="0">Weekly</option>
                        <option value="1">Monthly</option>
                        <option value="2">Quarterly</option>
                    </Input>

                    <PeriodAmountQuestion ref="pastDueTaxes" question="Past past due taxes (if any)" collection></PeriodAmountQuestion>
                    <PeriodAmountQuestion ref="pastDueStatePayroll" question="Past due state payroll taxes (if any)" collection></PeriodAmountQuestion>
                    <PeriodAmountQuestion ref="pastDueFederalIncome" question="Past due federal income taxes (if any)" collection></PeriodAmountQuestion>
                    <PeriodAmountQuestion ref="pastDueStateIncome" question="Past due state income taxes (if any)" collection></PeriodAmountQuestion>
                    <PeriodAmountQuestion ref="pastDueStateSales" question="Past due state sales taxes (if any)" collection></PeriodAmountQuestion>
                    <PeriodAmountQuestion ref="pastDueLocalSales" question="Past due local sales taxes (if any)" collection></PeriodAmountQuestion>

                    <UploadQuestion ref="federalOrStateTaxLiens" question="Federal or State Tax Liens (if any)" complex></UploadQuestion>

                    <Row>
                        <Col xs={6}>
                            <Input ref="timePeriod" type="text" label="Time Period" defaultValue="" />
                        </Col>
                        <Col xs={6}>
                            <States ref="taxingAuthority" options={['Federal']} label="Taxing Authority" simple></States>
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

module.exports = AccountingForm;