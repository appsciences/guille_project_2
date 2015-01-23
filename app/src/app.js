
/** @jsx React.DOM */

var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;
var Panel = ReactBootstrap.Panel;
var PanelGroup = ReactBootstrap.PanelGroup;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var TabbedArea = ReactBootstrap.TabbedArea;
var TabPane = ReactBootstrap.TabPane;
var ButtonGroup = ReactBootstrap.ButtonGroup;

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

var Zip = React.createClass ({
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
            <Input type="text" ref="zip" label="Zip" bsStyle={this.state.bsStyle} pattern="^[0-9]{1,5}$" onBlur={this.handleChange} />
        );
    }
});

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
                                <Input id="streetAddress" ref="streetAddress" type="text" label="Street Address" onBlur={this.handleChange}/>
                            </Col>
                            <Col xs={6}>
                                <Input id="city" type="text" ref="city" label="City" onBlur={this.handleChange}/>
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

var Contact = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <PanelGroup defaultActiveKey='2' accordion>
                    <Panel header={this.props.header} eventKey='1'>
                        <Row>
                            <Col xs={4}>
                                <Input type="text" label="Contact" valueLink={this.linkState('contact')} defaultValue="" />
                            </Col>
                            <Col xs={4}>
                                <Phone ref="phone"></Phone>
                            </Col>
                            <Col xs={4}>
                                <Email ref="email"></Email>
                            </Col>
                        </Row>
                    </Panel>
                </PanelGroup>
            </div>
        );
    }
});

var Reference = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {};
    },
    render: function(){
        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <Input type="text" label="Company Name" valueLink={this.linkState('companyName')}defaultValue="" />
                    </Col>
                    <Col xs={6}>
                        <Input type="text" label="Contact Name" valueLink={this.linkState('contactName')} defaultValue="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Phone ref="phone"></Phone>
                    </Col>
                    <Col xs={6}>
                        <Email ref="email"></Email>
                    </Col>
                </Row>
            </div>
        );
    }
});

var Phone = React.createClass ({
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
           <Input type="text" id="phone" ref="phone" bsStyle={this.state.bsStyle} pattern="\d{3}[\-]\d{3}[\-]\d{4}" label="Phone" onBlur={this.handleChange} defaultValue="" />
       );2
   }
});

var CellPhone = React.createClass ({
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
            <Input type="text" id="cellPhone" bsStyle={this.state.bsStyle} pattern="\d{3}[\-]\d{3}[\-]\d{4}" label="Cell Phone" onBlur={this.handleChange} defaultValue="" />
        );
    }
});

var Fax = React.createClass ({
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
            <Input type="text" id="fax" bsStyle={this.state.bsStyle} pattern="\d{3}[\-]\d{3}[\-]\d{4}" label="Fax" onBlur={this.handleChange} defaultValue="" />
        );
    }
});

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
            <Input type="email" id="email" ref="email" bsStyle={this.state.bsStyle} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" label="Email" onBlur={this.handleChange} defaultValue="" />
        );
    }
});

var MonthSelect = React.createClass ({
    render: function() {
        return (
            <Input type="select" label='Month'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </Input>
        );
    }
});

var DaySelect = React.createClass ({
    render: function() {
        return (
            <Input type="select" label='Day'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </Input>
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
            <Input ref="taxIdNumber" label="Tax ID No." bsStyle={this.state.bsStyle} pattern="\d{2}[\-]\d{7}" type="text" onBlur={this.handleChange} defaultValue=""/>
        );
    }
});

var TimePeriodAmount = React.createClass({
    render: function() {
        return React.DOM.div({},
            this.props.collection.map(function() {
                return (
                    <div>
                        <Row>
                            <Col xs={6}>
                                <Input ref="Time Period" type="text" label="Time Period" defaultValue="" />
                            </Col>
                            <Col xs={6}>
                                <Input ref="Amount" type="text" label="Amount" defaultValue="" />
                            </Col>
                        </Row>
                    </div>
                );
            })
        );
    }
});

var PeriodAmountQuestion = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var item = this.state.collection.length;

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    handleYesClick: function(data) {
        var item = this.state.collection.length;

        if(item == 0) {
            this.setState({
                collection: [item].concat(this.state.collection)
            });
        }
    },
    handleNoClick: function(data) {
        this.setState({collection: []});
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
                <TimePeriodAmount collection={this.state.collection}></TimePeriodAmount>
                <Button bsStyle="primary" className={(this.state.collection.length > 0) ? 'show' : 'hide' } onClick={this.handlePlusButton}>+</Button>
            </div>
        );
    }
});

var UploadQuestion = React.createClass ({
    getInitialState: function() {
        return {show: false};
    },

    handleYesClick: function(data) {

        this.setState({
            show: true
        });

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
                            <Button>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <div className={(this.state.show === true) ? 'show' : 'hide' }>
                    <Input type="file" label="Copy of Company's main financing agreement" help="" />
                </div>
            </div>
        );
    }
});

var TimePeriodTaxingAuthority = React.createClass({
    render: function() {
        return React.DOM.div({},
            this.props.collection.map(function() {
                return (
                    <div>
                        <Row>
                            <Col xs={6}>
                                <Input ref="Time Period" type="text" label="Time Period" defaultValue="" />
                            </Col>
                            <Col xs={6}>
                                <States options={['Federal']} label="Taxing Authority"></States>
                            </Col>
                        </Row>
                    </div>
                );
            })
        );
    }
});

var TaxReturnsQuestion = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var item = this.state.collection.length;

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    handleYesClick: function(data) {
        var item = this.state.collection.length;

        if(item == 0) {
            this.setState({
                collection: [item].concat(this.state.collection)
            });
        }
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
                            <Button>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <TimePeriodTaxingAuthority collection={this.state.collection}></TimePeriodTaxingAuthority>
                <Button bsStyle="primary" className={(this.state.collection.length > 0) ? 'show' : 'hide' } onClick={this.handlePlusButton}>+</Button>
            </div>
        );
    }
});

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
            <Input label={this.props.label} bsStyle={this.state.bsStyle} pattern="\d{1,2}/\d{1,2}/\d{4}" type="text" onBlur={this.handleChange} defaultValue=""/>
        );
    }
});

var AmountAgainstCourt = React.createClass({
    render: function() {
        return React.DOM.div({},
            this.props.collection.map(function() {
                return (
                    <div>
                        <Row>
                            <Col xs={6}>
                                <Input ref="Amount" type="text" label="Amount" defaultValue="" />
                            </Col>
                            <Col xs={6}>
                                <Input ref="Against" type="text" label="Against" defaultValue="" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Input ref="Court" type="text" label="Court" defaultValue="" />
                            </Col>
                            <Col xs={6}>
                                <FullDateInput label="Approximate Date"></FullDateInput>
                            </Col>
                        </Row>
                    </div>
                );
            })
        );
    }
});

var OutstandingJudgmentsQuestion = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var item = this.state.collection.length;

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    handleYesClick: function(data) {
        var item = this.state.collection.length;

        if(item == 0) {
            this.setState({
                collection: [item].concat(this.state.collection)
            });
        }
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
                            <Button>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <AmountAgainstCourt collection={this.state.collection}></AmountAgainstCourt>
                <Button bsStyle="primary" className={(this.state.collection.length > 0) ? 'show' : 'hide' } onClick={this.handlePlusButton}>+</Button>
            </div>
        );
    }
});

var AmountSoughtAgainstCourt = React.createClass({
    render: function() {
        return React.DOM.div({},
            this.props.collection.map(function() {
                return (
                    <div>
                        <Row>
                            <Col xs={6}>
                                <Input ref="Amount Sought" type="text" label="Amount Sought" defaultValue="" />
                            </Col>
                            <Col xs={6}>
                                <Input ref="Against" type="text" label="Against" defaultValue="" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Input ref="Court" type="text" label="Court" defaultValue="" />
                            </Col>
                            <Col xs={6}>
                                <FullDateInput label="Approximate Date Complaint Filed"></FullDateInput>
                            </Col>
                        </Row>
                    </div>
                );
            })
        );
    }
});

var LitigationPendingQuestion = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var item = this.state.collection.length;

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    handleYesClick: function(data) {
        var item = this.state.collection.length;

        if(item == 0) {
            this.setState({
                collection: [item].concat(this.state.collection)
            });
        }
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
                            <Button>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <AmountSoughtAgainstCourt collection={this.state.collection}></AmountSoughtAgainstCourt>
                <Button bsStyle="primary" className={(this.state.collection.length > 0) ? 'show' : 'hide' } onClick={this.handlePlusButton}>+</Button>
            </div>
        );
    }
});

var VoluntaryCourtApproximate = React.createClass({
    render: function() {
        return React.DOM.div({},
            this.props.collection.map(function() {
                return (
                    <div>
                        <Row>
                            <Col xs={4}>
                                <Input type="select" label='Type of Financing'>
                                    <option value="0">Voluntary</option>
                                    <option value="1">Involuntary</option>
                                </Input>
                            </Col>
                            <Col xs={4}>
                                <Input ref="Court" type="text" label="Court" defaultValue="" />
                            </Col>
                            <Col xs={4}>
                                <FullDateInput label="Approximate Date Complaint Filed"></FullDateInput>
                            </Col>
                        </Row>
                    </div>
                );
            })
        );
    }
});

var BankruptcyQuestion = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var item = this.state.collection.length;

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    handleYesClick: function(data) {
        var item = this.state.collection.length;

        if(item == 0) {
            this.setState({
                collection: [item].concat(this.state.collection)
            });
        }
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
                            <Button>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <VoluntaryCourtApproximate collection={this.state.collection}></VoluntaryCourtApproximate>
                <Button bsStyle="primary" className={(this.state.collection.length > 0) ? 'show' : 'hide' } onClick={this.handlePlusButton}>+</Button>
            </div>
        );
    }
});

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
            <Input id="percentage" ref="percentage" type="text" label="%" bsStyle={this.state.bsStyle} pattern="^[0-9]{1,2}$" onBlur={this.handleChange} defaultValue="" />
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
            <Input ref="Company's FYE" type="text" bsStyle={this.state.bsStyle} pattern="(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])\d\d" onBlur={this.handleChange} label="Company's FYE" defaultValue=""/>
        );
    }
});

var EquityHoldersFields = React.createClass({
    getInitialState: function() {
        return {};
    },
    handleChange: function(e) {
        this.props.collection[this.props.index][e.target.id] = e.target.value;
        //this.state[e.target.id] = e.target.value;
    },
    render: function() {
        return React.DOM.div({},
            this.props.collection.map(function() {
                return (
                    <div>
                        <Row>
                            <Col xs={6}>
                                <Input ref="equityName" type="text" onBlur={this.handleChange} label="Name" defaultValue="" />
                            </Col>
                            <Col xs={6}>
                                <Percentage ref="percentage" simple></Percentage>
                            </Col>
                        </Row>
                    </div>
                );
            })
        );
    }
});

var EquityHolders = React.createClass ({
    getInitialState: function() {
        return {collection: [0]};
    },
    handlePlusButton: function() {
        var result = Utils.getRefs(this, false);

        this.setState({
            collection: [result.equityHolders].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <EquityHoldersFields ref="equityHolders" collection={this.state.collection} index={this.state.collection.length} complex></EquityHoldersFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
            </div>
        );
    }
});

var PrincipalFields = React.createClass({
    render: function() {
        return React.DOM.div({},
            this.props.collection.map(function() {
                return (
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
            })
        );
    }
});

var Principal = React.createClass ({
    getInitialState: function() {
        return {collection: [0]};
    },
    handlePlusButton: function(data) {
        var item = this.state.collection.length;

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <PrincipalFields collection={this.state.collection}></PrincipalFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
            </div>
        );
    }
});

var BankFields = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Input id="nameOfBank" type="text" label="Name of Bank" valueLink={this.linkState('nameOfBank')} />
                <h4>Address of Branch of Account</h4>
                <Address ref="bankAddress" header="Address"></Address>
                <Row>
                    <Col xs={6}>
                        <Input id="typeOfAccount" type="select" label="Type of Account(s)" valueLink={this.linkState('typeOfAccount')}>
                            <option value="Checking">Checking</option>
                            <option value="Savings">Savings</option>
                            <option value="Other">Other</option>
                        </Input>
                    </Col>
                    <Col xs={6}>
                        <Input type="text" label="Account No." valueLink={this.linkState('accountNumber')} defaultValue="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <Input type="text" label="Name of Officer" valueLink={this.linkState('nameOfOfficer')} defaultValue="" />
                    </Col>
                    <Col xs={4}>
                        <Phone ref="bankPhone"></Phone>
                    </Col>
                    <Col xs={4}>
                        <Fax ref="bankFax"></Fax>
                    </Col>
                </Row>
                <Input type="text" label="No. of Years with the Bank" valueLink={this.linkState('noOfYearsWithTheBank')} defaultValue=""/>
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
                <td>{this.props.item.typeOfAccount}</td>
                <td>{this.props.item.accountNumber}</td>
                <td>{this.props.item.nameOfOfficer}</td>
                <td>{this.props.item.phone}</td>
                <td>{this.props.item.fax}</td>
                <td>{this.props.item.noOfYearsWithTheBank}</td>
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
        var item = Object.create(this.refs.bankFields.state);
        var bankAddress = Object.create(this.refs.bankFields.refs.bankAddress);
        var phone = Object.create(this.refs.bankFields.refs.bankPhone.state);
        var fax = Object.create(this.refs.bankFields.refs.bankFax.state);

        item.bankAddress = bankAddress.state.street + ', ' + bankAddress.state.city;
        item.phone = phone.phone;
        item.fax = fax.fax;

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <BankFields ref="bankFields"></BankFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <BankTable collection={this.state.collection}></BankTable>
            </div>
        );
    }
});

var InstitutionFields = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Input type="text" label="Name of Institution" valueLink={this.linkState('nameOfInstitution')} defaultValue="" />
                <Address ref="institutionAddress" header="Address"></Address>

                <Row>
                    <Col xs={4}>
                        <Input type="text" label="Name of officer" valueLink={this.linkState('nameOfOfficer')} defaultValue="" />
                    </Col>
                    <Col xs={4}>
                        <Phone ref="institutionPhone"></Phone>
                    </Col>
                    <Col xs={4}>
                        <Fax ref="institutionFax"></Fax>
                    </Col>
                </Row>

                <Input type="text" label="No. of Years with the Bank" valueLink={this.linkState('noOfYearsWithTheBank')} defaultValue="" />

                <Input type="select" label="Type of financing" valueLink={this.linkState('typeOfFinancing')}>
                    <option value="0">Term Loan</option>
                    <option value="1">Line of Credit</option>
                    <option value="2">Factoring</option>
                    <option value="3">PO Funding</option>
                </Input>

                <Input type="text" label="Amount Outstanding" valueLink={this.linkState('amountOutstanding')} defaultValue="" />

                <Input type="select" label="Collateral" valueLink={this.linkState('collateral')} multiple>
                    <option value="0">All Assets</option>
                    <option value="1">Receivables</option>
                    <option value="2">Inventory</option>
                    <option value="3">Equipment</option>
                    <option value="4">Real Estate</option>
                    <option value="5">Intellectual</option>
                    <option value="6">Property</option>
                    <option value="7">Other</option>
                </Input>
            </div>
        );
    }
});

var InstitutionRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.nameOfInstitution}</td>
                <td>{this.props.item.address}</td>
                <td>{this.props.item.nameOfOfficer}</td>
                <td>{this.props.item.phone}</td>
                <td>{this.props.item.fax}</td>
                <td>{this.props.item.noOfYearsWithTheBank}</td>
                <td>{this.props.item.typeOfFinancing}</td>
                <td>{this.props.item.amountOutstanding}</td>
                <td>{this.props.item.collateral}</td>
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
        var item = Object.create(this.refs.institutionFields.state);
        var institutionAddress = Object.create(this.refs.institutionFields.refs.institutionAddress);
        var phone = Object.create(this.refs.institutionFields.refs.institutionPhone.state);
        var fax = Object.create(this.refs.institutionFields.refs.institutionFax.state);

        item.address = institutionAddress.state.street + ', ' + institutionAddress.state.city;
        item.phone = phone.phone;
        item.fax = fax.fax;

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <InstitutionFields ref="institutionFields"></InstitutionFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <InstitutionTable collection={this.state.collection}></InstitutionTable>
            </div>
        );
    }
});

var CustomerFields = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={4}>
                        <Input type="text" label="Name" valueLink={this.linkState('name')} defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input type="text" label="Terms of payments" valueLink={this.linkState('termsOfPayments')} defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input type="text" label="Peak Exposure" valueLink={this.linkState('peakExposure')} defaultValue=""/>
                    </Col>
                </Row>
                <Input type="file" label="Sample transaction documents (sales contract, purchase order, invoice, proof of delivery and payment, etc.)" valueLink={this.linkState('sampleTransaction')} />
            </div>
        );
    }
});

var CustomerRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.termsOfPayments}</td>
                <td>{this.props.item.peakExposure}</td>
                <td>{this.props.item.sampleTransaction}</td>
            </tr>
        );
    }
});

var CustomerTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<CustomerRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Terms Of Payment</th>
                        <th>Peak Exposure</th>
                        <th>Sample Transaction</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var Customer = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var item = Object.create(this.refs.customerFields.state);

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <CustomerFields ref="customerFields"></CustomerFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <CustomerTable collection={this.state.collection}></CustomerTable>
            </div>
        );
    }
});

var TradeReferenceFields = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Reference ref="reference"></Reference>
                <Address ref="address" header="Address"></Address>
            </div>
        );
    }
});

var TradeReferenceRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.companyName}</td>
                <td>{this.props.item.contactName}</td>
                <td>{this.props.item.phone}</td>
                <td>{this.props.item.email}</td>
                <td>{this.props.item.address}</td>
            </tr>
        );
    }
});

var TradeReferenceTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<TradeReferenceRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var TradeReference = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var item = Object.create(this.refs.tradeReferenceFields.refs.reference.refs.email.state);
        item.companyName = this.refs.tradeReferenceFields.refs.reference.state.companyName;
        item.contactName = this.refs.tradeReferenceFields.refs.reference.state.contactName;
        item.phone = this.refs.tradeReferenceFields.refs.reference.refs.phone.state.phone;
        var address = Object.create(this.refs.tradeReferenceFields.refs.address.state);
        item.address = address.street + ", " + address.city;

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <TradeReferenceFields ref="tradeReferenceFields"></TradeReferenceFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <TradeReferenceTable collection={this.state.collection}></TradeReferenceTable>
            </div>
        );
    }
});

var BuyerReferenceFields = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {collection: []};
    },
    render: function() {
        return (
            <div>
                <Reference ref="reference"></Reference>
                <Address ref="address" header="Address"></Address>
                <Input type="text" label="Total A/R You Intend to Factor on a Monthly Basis" valueLink={this.linkState('totalAR')} defaultValue=""/>
            </div>
        );
    }
});

var BuyerReferenceRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.companyName}</td>
                <td>{this.props.item.contactName}</td>
                <td>{this.props.item.phone}</td>
                <td>{this.props.item.email}</td>
                <td>{this.props.item.address}</td>
                <td>{this.props.item.totalAR}</td>
            </tr>
        );
    }
});

var BuyerReferenceTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<BuyerReferenceRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Total A/R</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var BuyerReference = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var item = Object.create(this.refs.buyerReferenceFields.refs.reference.refs.email.state);
        item.companyName = this.refs.buyerReferenceFields.refs.reference.state.companyName;
        item.contactName = this.refs.buyerReferenceFields.refs.reference.state.contactName;
        item.phone = this.refs.buyerReferenceFields.refs.reference.refs.phone.state.phone;
        var address = Object.create(this.refs.buyerReferenceFields.refs.address.state);
        item.address = address.street + ", " + address.city;
        item.totalAR = this.refs.buyerReferenceFields.state.totalAR;

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <BuyerReferenceFields ref="buyerReferenceFields"></BuyerReferenceFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <BuyerReferenceTable collection={this.state.collection}></BuyerReferenceTable>
            </div>
        );
    }
});

var ProductLicenseFields = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {collection: []};
    },
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={4}>
                        <Input type="text" label="Licensor" valueLink={this.linkState('licensor')} defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input type="text" label="Mark" valueLink={this.linkState('mark')} defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input type="text" label="Product" valueLink={this.linkState('product')} defaultValue=""/>
                    </Col>
                </Row>

                <Input ref="Upload licence agreement" type="file" label="Upload licence agreement" valueLink={this.linkState('licenceAgreement')} defaultValue=""/>
            </div>
        );
    }
});

var ProductLicenseRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.licensor}</td>
                <td>{this.props.item.mark}</td>
                <td>{this.props.item.product}</td>
                <td>{this.props.item.licenceAgreement}</td>
            </tr>
        );
    }
});

var ProductLicenseTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<ProductLicenseRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Licensor</th>
                        <th>Mark</th>
                        <th>Product</th>
                        <th>Licence agreement</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var ProductLicense = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var item = Object.create(this.refs.productLicenseFields.state);

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <ProductLicenseFields ref="productLicenseFields"></ProductLicenseFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <ProductLicenseTable collection={this.state.collection}></ProductLicenseTable>
            </div>
        );
    }
});

var ConsigneeFields = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {collection: []};
    },
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={4}>
                        <Input type="text" label="Consignee" valueLink={this.linkState('consignee')} defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input type="text" label="Product Consigned" valueLink={this.linkState('productConsigned')} defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input type="text" label="Average annual volume" valueLink={this.linkState('averageAnnualVolume')} defaultValue=""/>
                    </Col>
                </Row>
            </div>
        );
    }
});

var ConsigneeRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.consignee}</td>
                <td>{this.props.item.productConsigned}</td>
                <td>{this.props.item.averageAnnualVolume}</td>
            </tr>
        );
    }
});

var ConsigneeTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.collection.forEach(function(item) {
            rows.push(<ConsigneeRow item={item} key={item.name} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Consignee</th>
                        <th>Product Consigned</th>
                        <th>Average annual volume</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var Consignee = React.createClass ({
    getInitialState: function() {
        return {collection: []};
    },
    handlePlusButton: function(data) {
        var item = Object.create(this.refs.consigneeFields.state);

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <ConsigneeFields ref="consigneeFields"></ConsigneeFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <ConsigneeTable collection={this.state.collection}></ConsigneeTable>
            </div>
        );
    }
});

var FinancialsFrequencyFields = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {collection: []};
    },
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <Input type="select" label="Frequency" valueLink={this.linkState('frequency')} defaultValue="Monthly">
                            <option value="Monthly">Monthly</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Biannually">Biannually</option>
                            <option value="Annually">Annually</option>
                            <option value="Other">Other</option>
                        </Input>
                    </Col>
                    <Col xs={6}>
                        <Input type="select" label="Preparation" valueLink={this.linkState('preparation')} defaultValue="Internally Prepared">
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
                <td>{this.props.item.frequency}</td>
                <td>{this.props.item.preparation}</td>
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
        var item = Object.create(this.refs.financialFields.state);

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <FinancialsFrequencyFields ref="financialFields"></FinancialsFrequencyFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <FinancialsFrequencyTable collection={this.state.collection}></FinancialsFrequencyTable>
            </div>
        );
    }
});

var ContactInfoForm = React.createClass({
    handleSubmit: function(data, b) {
        var result = Utils.getRefs(this, false);

        ParseService.Save(
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

var CompanyInformationForm = React.createClass({
    handleSubmit: function(data, b) {
        var result = Utils.getRefs(this, false);

        console.log(result);

        ParseService.Save(
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

                    <Principal ref="principal" complex></Principal>

                    <div className="pull-right">
                        <Button bsStyle="primary" className="btn-spaced" onClick={this.handleSubmit}>Save</Button>
                        <Button bsStyle="primary" onClick={this.next}>Next</Button>
                    </div>
                </form>
            </div>
        );
    }
});

var Form = React.createClass({
    getInitialState: function() {
        return {tabKey: 1};
    },
    next: function() {
        this.state.tabKey++;
        this.handleTabSelect(this.state.tabKey);
    },
    handleTabSelect: function(selectedKey) {
        this.setState({
            tabKey: selectedKey
        });
    },
    render: function() {
        return (
            <div>
                <Panel>
                    <div className="modal-body">
                        <TabbedArea activeKey={this.state.tabKey} onSelect={this.handleTabSelect}>
                            <TabPane eventKey={1} tab="Contact Info">
                                <ContactInfoForm></ContactInfoForm>
                            </TabPane>
                            <TabPane eventKey={2} tab="Company Information">
                                <CompanyInformationForm></CompanyInformationForm>
                            </TabPane>
                            <TabPane eventKey={3} tab="Financials">

                                <h2>Financials</h2>

                                <h3>Deposits</h3>

                                <Bank></Bank>

                                <h3>Financing</h3>

                                <Institution></Institution>

                                <br></br> <br></br>

                                <div className="pull-right">
                                    <Button bsStyle="primary" className="btn-spaced" onClick={this.handleSubmit}>Save</Button>
                                    <Button bsStyle="primary" onClick={this.next}>Next</Button>
                                </div>

                            </TabPane>
                            <TabPane eventKey={4} tab="Operations">

                                <h2>Operations</h2>

                                <Row>
                                    <Col xs={4}>
                                        <Input ref="Outstanding A/R" type="text" label="Outstanding A/R" defaultValue=""/>
                                    </Col>
                                    <Col xs={4}>
                                        <Input ref="Average Monthly Sales" type="text" label="Average Monthly Sales" defaultValue=""/>
                                    </Col>
                                    <Col xs={4}>
                                        <Input ref="Average Number of Active Customers" type="text" label="Average Number of Active Customers" defaultValue=""/>
                                    </Col>
                                </Row>

                                <Input type="textarea" label="Usual terms sale" defaultValue="" />

                                <h3>Customers</h3>
                                <Customer></Customer>

                                <h3>3 trade references</h3>
                                <TradeReference></TradeReference>

                                <h3>3 buyer references</h3>
                                <BuyerReference></BuyerReference>

                                <h3>Product license agreements (if any)</h3>
                                <ProductLicense></ProductLicense>

                                <h3>Consignment sales (if any)</h3>
                                <Consignee></Consignee>

                                <div className="pull-right">
                                    <Button bsStyle="primary" className="btn-spaced" onClick={this.handleSubmit}>Save</Button>
                                    <Button bsStyle="primary" onClick={this.next}>Next</Button>
                                </div>

                            </TabPane>
                            <TabPane eventKey={5} tab="Accounting">

                                <h2>Accounting and Tax</h2>

                                <Input ref="Name of Company's CPA" type="text" label="Name of Company's CPA" defaultValue=""/>

                                <Row>
                                    <Col xs={4}>
                                        <Input ref="Address" type="text" label="Address" defaultValue=""/>
                                    </Col>
                                    <Col xs={4}>
                                        <Input ref="City" type="text" label="City" defaultValue=""/>
                                    </Col>
                                    <Col xs={4}>
                                        <States label="State"></States>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={4}>
                                        <Input ref="Contact Person" type="text" label="Contact Person" defaultValue=""/>
                                    </Col>
                                    <Col xs={4}>
                                        <Phone></Phone>
                                    </Col>
                                    <Col xs={4}>
                                        <Fax></Fax>
                                    </Col>
                                </Row>

                                <Input ref="Number of Years Using Services" type="text" label="Number of Years Using Services" defaultValue=""/>
                                <CompanyFYE></CompanyFYE>

                                <h3>How Often are Financials Generated{"?"}</h3>
                                <FinancialsFrequency></FinancialsFrequency>

                                <Input ref="No. of Employees" type="text" label="No. of Employees" defaultValue=""/>

                                <Input type="select" label="How often do you pay payroll taxes?">
                                    <option value="0">Weekly</option>
                                    <option value="1">Monthly</option>
                                    <option value="2">Quarterly</option>
                                </Input>

                                <PeriodAmountQuestion question="Past past due taxes (if any)"></PeriodAmountQuestion>
                                <PeriodAmountQuestion question="Past due state payroll taxes (if any)"></PeriodAmountQuestion>
                                <PeriodAmountQuestion question="Past due federal income taxes (if any)"></PeriodAmountQuestion>
                                <PeriodAmountQuestion question="Past due state income taxes (if any)"></PeriodAmountQuestion>
                                <PeriodAmountQuestion question="Past due state sales taxes (if any)"></PeriodAmountQuestion>
                                <PeriodAmountQuestion question="Past due local sales taxes (if any)"></PeriodAmountQuestion>

                                <UploadQuestion question="Federal or State Tax Liens (if any)"></UploadQuestion>

                                <Row>
                                    <Col xs={6}>
                                        <Input ref="Time Period" type="text" label="Time Period" defaultValue="" />
                                    </Col>
                                    <Col xs={6}>
                                        <States options={['Federal']} label="Taxing Authority"></States>
                                    </Col>
                                </Row>

                                <div className="pull-right">
                                    <Button bsStyle="primary" className="btn-spaced" onClick={this.handleSubmit}>Save</Button>
                                    <Button bsStyle="primary" onClick={this.next}>Next</Button>
                                </div>

                            </TabPane>
                            <TabPane eventKey={6} tab="Legal">

                                <h2>Legal</h2>

                                <Input ref="Name of Attorney" type="text" label="Name of Attorney" defaultValue="" />
                                <Address header="Address"></Address>

                                <Row>
                                    <Col xs={4}>
                                        <Input ref="Contact Person" type="text" label="Contact Person" defaultValue="" />
                                    </Col>
                                    <Col xs={4}>
                                        <Phone></Phone>
                                    </Col>
                                    <Col xs={4}>
                                        <Fax></Fax>
                                    </Col>
                                </Row>

                                <OutstandingJudgmentsQuestion question="Outstanding judgments if any?"></OutstandingJudgmentsQuestion>
                                <br></br>
                                <LitigationPendingQuestion question="Litigations pending against the Company or any of its Principals, if any?"></LitigationPendingQuestion>
                                <br></br>
                                <BankruptcyQuestion question="Bankruptcy or insolvency proceeding, if any, by Company or principles (voluntary or involuntary)?"></BankruptcyQuestion>
                                <br></br>

                                <p>
                                    The undersigned certifies that all of the above information is true and correct, that the Company's financial statements are true and correct and accurately present the financial condition of the Company, and that the undersigned's personal financial statement is true and correct and  accurately presents the  financial condition of the undersigned. The undersigned understands that [INSERT NAME OF LENDER/FACTOR] intends to rely thereon in determining whether to offer financing to the Company.
                                </p>

                                <Row>
                                    <Col xs={6}>
                                        <Input ref="Date" type="text" label="Date" defaultValue="" />
                                    </Col>
                                    <Col xs={6}>
                                        <Input ref="Signature" type="text" label="Signature" defaultValue="" />
                                    </Col>
                                </Row>

                                <p>
                                    The undersigned hereby authorizes [INSERT NAME OF LENDER/FACTOR] to gather and use, from time to time, without the undersigned's knowledge, any and all financial and/or credit information relating to the Company that can be obtained from any source whatsoever, including but not limited to banks, trade associates and creditors. The undersigned also hereby authorizes [INSERT NAME OF LENDER/FACTOR] to investigate the personal credit history of the Company and the undersigned and obtain credit bureau reports on the Company and the undersigned from time to time at the sole discretion of [INSERT NAME OF LENDER/FACTOR]. The undersigned hereby authorizes its suppliers, customers, accountants,  attorneys and employees and any person or consumer reporting agency to give [INSERT NAME OF LENDER/FACTOR] any information it may have on the Company or the undersigned. In addition, the undersigned authorizes [INSERT NAME OF LENDER/FACTOR] to answer questions about its credit experience with the Company. This serves as the undersigned's permission to release any information regarding this application for purposes of credit investigation to [INSERT NAME OF LENDER/FACTOR]
                                </p>

                                <Row>
                                    <Col xs={6}>
                                        <Input ref="Date" type="text" label="Date" defaultValue="" />
                                    </Col>
                                    <Col xs={6}>
                                        <Input ref="Signature" type="text" label="Signature" defaultValue="" />
                                    </Col>
                                </Row>

                                <div className="pull-right">
                                    <Button bsStyle="primary" className="btn-spaced" onClick={this.handleSubmit}>Save</Button>
                                </div>

                            </TabPane>
                        </TabbedArea>
                    </div>
                </Panel>
            </div>
        );
    }
});

React.render(<Form/>, document.getElementById('mainForm'));
