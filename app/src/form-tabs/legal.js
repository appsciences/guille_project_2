var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Address = require('./../react-common/Address');
var Phone = require('./../react-common/Phone');
var Fax = require('./../react-common/Fax');

var GetRefs = require('./../helpers/get-refs');
var ParseSave = require('./../parse/parse-save');

var Input = ReactBootstrap.Input;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;

var FullDateInput = React.createClass ({
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
            <Input ref="date" id="date" label={this.props.label} bsStyle={this.state.bsStyle} pattern="\d{1,2}/\d{1,2}/\d{4}" type="text" onBlur={this.handleChange} defaultValue=""/>
        );
    }
});

var BankruptcyQuestionFields = React.createClass({
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={4}>
                        <Input ref="typeOfFinancing" type="select" label='Type of Financing'>
                            <option value="Voluntary">Voluntary</option>
                            <option value="Involuntary">Involuntary</option>
                        </Input>
                    </Col>
                    <Col xs={4}>
                        <Input ref="court" type="text" label="Court" defaultValue="" />
                    </Col>
                    <Col xs={4}>
                        <FullDateInput ref="date" label="Approximate Date Complaint Filed" simple></FullDateInput>
                    </Col>
                </Row>
            </div>
        );
    }
});

var BankruptcyQuestionRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.typeOfFinancing}</td>
                <td>{this.props.item.court}</td>
                <td>{this.props.item.date}</td>
            </tr>
        );
    }
});

var BankruptcyQuestionTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<BankruptcyQuestionRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Type of Financing</th>
                        <th>Court</th>
                        <th>Approximate Date Complaint Filed</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var BankruptcyQuestion = React.createClass ({
    getInitialState: function() {
        return {collection: [], show: false};
    },
    handlePlusButton: function(data) {
        var result = GetRefs(this.refs.bankruptcyQuestion, false);

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
                    <BankruptcyQuestionFields ref="bankruptcyQuestion" collection={this.state.collection} complex></BankruptcyQuestionFields>
                    <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                    <BankruptcyQuestionTable collection={this.state.collection}></BankruptcyQuestionTable>
                </div>
            </div>
        );
    }
});

var LitigationPendingQuestionFields = React.createClass({
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <Input ref="amountSought" type="text" label="Amount Sought" defaultValue="" />
                    </Col>
                    <Col xs={6}>
                        <Input ref="against" type="text" label="Against" defaultValue="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Input ref="court" type="text" label="Court" defaultValue="" />
                    </Col>
                    <Col xs={6}>
                        <FullDateInput ref="date" label="Approximate Date Complaint Filed" simple></FullDateInput>
                    </Col>
                </Row>
            </div>
        );
    }
});

var LitigationPendingQuestionRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.amountSought}</td>
                <td>{this.props.item.against}</td>
                <td>{this.props.item.court}</td>
                <td>{this.props.item.date}</td>
            </tr>
        );
    }
});

var LitigationPendingQuestionTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<LitigationPendingQuestionRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Amount Sought</th>
                        <th>Against</th>
                        <th>Court</th>
                        <th>Approximate Date Complaint Filed</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var LitigationPendingQuestion = React.createClass ({
    getInitialState: function() {
        return {collection: [], show: false};
    },
    handlePlusButton: function(data) {
        var result = GetRefs(this.refs.litigationPendingQuestion, false);

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
                    <LitigationPendingQuestionFields ref="litigationPendingQuestion" collection={this.state.collection} complex></LitigationPendingQuestionFields>
                    <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                    <LitigationPendingQuestionTable collection={this.state.collection}></LitigationPendingQuestionTable>
                </div>
            </div>
        );
    }
});

var OutstandingJudgmentsQuestionFields = React.createClass({
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <Input ref="amount" type="text" label="Amount" defaultValue="" />
                    </Col>
                    <Col xs={6}>
                        <Input ref="against" type="text" label="Against" defaultValue="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Input ref="court" type="text" label="Court" defaultValue="" />
                    </Col>
                    <Col xs={6}>
                        <FullDateInput ref="date" label="Approximate Date" simple></FullDateInput>
                    </Col>
                </Row>
            </div>
        );
    }
});

var OutstandingJudgmentsQuestionRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.amount}</td>
                <td>{this.props.item.against}</td>
                <td>{this.props.item.court}</td>
                <td>{this.props.item.date}</td>
            </tr>
        );
    }
});

var OutstandingJudgmentsQuestionTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<OutstandingJudgmentsQuestionRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Against</th>
                        <th>Court</th>
                        <th>Approximate Date</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var OutstandingJudgmentsQuestion = React.createClass ({
    getInitialState: function() {
        return {collection: [], show: false};
    },
    handlePlusButton: function(data) {
        var result = GetRefs(this.refs.outstandingJudgmentsQuestion, false);

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
                    <OutstandingJudgmentsQuestionFields ref="outstandingJudgmentsQuestion" collection={this.state.collection} complex></OutstandingJudgmentsQuestionFields>
                    <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                    <OutstandingJudgmentsQuestionTable collection={this.state.collection}></OutstandingJudgmentsQuestionTable>
                </div>
            </div>
        );
    }
});

var LegalForm = React.createClass({
    handleSubmit: function(data, b) {
        var result = GetRefs(this, false);

        ParseSave(
            "Legal",
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
                    <h2>Legal</h2>

                    <Input ref="nameOfAttorney" type="text" label="Name of Attorney" defaultValue="" />
                    <Address ref="address" header="Address" complex></Address>

                    <Row>
                        <Col xs={4}>
                            <Input ref="contactPerson" type="text" label="Contact Person" defaultValue="" />
                        </Col>
                        <Col xs={4}>
                            <Phone ref="phone" simple></Phone>
                        </Col>
                        <Col xs={4}>
                            <Fax ref="fax" simple></Fax>
                        </Col>
                    </Row>

                    <OutstandingJudgmentsQuestion ref="outstandingJudgments" question="Outstanding judgments if any?" collection></OutstandingJudgmentsQuestion>
                    <br></br>
                    <LitigationPendingQuestion ref="litigationsPending" question="Litigations pending against the Company or any of its Principals, if any?" collection></LitigationPendingQuestion>
                    <br></br>
                    <BankruptcyQuestion ref="bankruptcyOrInsolvencyProceeding" question="Bankruptcy or insolvency proceeding, if any, by Company or principles (voluntary or involuntary)?" collection></BankruptcyQuestion>
                    <br></br>

                    <p>
                        The undersigned certifies that all of the above information is true and correct, that the Company's financial statements are true and correct and accurately present the financial condition of the Company, and that the undersigned's personal financial statement is true and correct and  accurately presents the  financial condition of the undersigned. The undersigned understands that [INSERT NAME OF LENDER/FACTOR] intends to rely thereon in determining whether to offer financing to the Company.
                    </p>

                    <Row>
                        <Col xs={6}>
                            <Input ref="certifyDate" type="text" label="Date" defaultValue="" />
                        </Col>
                        <Col xs={6}>
                            <Input ref="certifySignature" type="text" label="Signature" defaultValue="" />
                        </Col>
                    </Row>

                    <p>
                        The undersigned hereby authorizes [INSERT NAME OF LENDER/FACTOR] to gather and use, from time to time, without the undersigned's knowledge, any and all financial and/or credit information relating to the Company that can be obtained from any source whatsoever, including but not limited to banks, trade associates and creditors. The undersigned also hereby authorizes [INSERT NAME OF LENDER/FACTOR] to investigate the personal credit history of the Company and the undersigned and obtain credit bureau reports on the Company and the undersigned from time to time at the sole discretion of [INSERT NAME OF LENDER/FACTOR]. The undersigned hereby authorizes its suppliers, customers, accountants,  attorneys and employees and any person or consumer reporting agency to give [INSERT NAME OF LENDER/FACTOR] any information it may have on the Company or the undersigned. In addition, the undersigned authorizes [INSERT NAME OF LENDER/FACTOR] to answer questions about its credit experience with the Company. This serves as the undersigned's permission to release any information regarding this application for purposes of credit investigation to [INSERT NAME OF LENDER/FACTOR]
                    </p>

                    <Row>
                        <Col xs={6}>
                            <Input ref="authorizeDate" type="text" label="Date" defaultValue="" />
                        </Col>
                        <Col xs={6}>
                            <Input ref="authorizeSignature" type="text" label="Signature" defaultValue="" />
                        </Col>
                    </Row>

                    <div className="pull-right">
                        <Button bsStyle="primary" className="btn-spaced" onClick={this.handleSubmit}>Save</Button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = LegalForm;