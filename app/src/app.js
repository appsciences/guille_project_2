
/** @jsx React.DOM */

var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;
var Panel = ReactBootstrap.Panel;
var PanelGroup = ReactBootstrap.PanelGroup;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var TabbedArea = ReactBootstrap.TabbedArea;
var TabPane = ReactBootstrap.TabPane;

var Address = React.createClass({
    render: function() {
        return (
            <div>
                <PanelGroup defaultActiveKey='2' accordion>
                    <Panel header={this.props.header} eventKey='1'>
                        <Row>
                            <Col xs={6}>
                                <Input ref="Street Address" type="text" label="Street Address" defaultValue="" />
                            </Col>
                            <Col xs={6}>
                                <Input ref="City" type="text" label="City" defaultValue="" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Input ref="State" type="text" label="State" defaultValue="" />
                            </Col>
                            <Col xs={6}>
                                <Input ref="Zip" type="text" pattern="(\d{5}([\-]\d{4})?)" label="Zip" defaultValue="" />
                            </Col>
                        </Row>
                    </Panel>
                </PanelGroup>
            </div>
        );
    }
});

var Contact = React.createClass({
    render: function() {
        return (
            <div>
                <PanelGroup defaultActiveKey='2' accordion>
                    <Panel header={this.props.header} eventKey='1'>
                        <Row>
                            <Col xs={4}>
                                <Input ref="Contact" type="text" label="Street Address" defaultValue="" />
                            </Col>
                            <Col xs={4}>
                                <Input ref="Phone" type="text" label="Phone" defaultValue="" />
                            </Col>
                            <Col xs={4}>
                                <Input ref="Email" type="email" label="Email" defaultValue="" />
                            </Col>
                        </Row>
                    </Panel>
                </PanelGroup>
            </div>
        );
    }
});

var Phone = React.createClass ({
   render: function() {
       return (
           <Input ref="Phone" type="text" pattern="\d{3}[\-]\d{3}[\-]\d{4}" label="Phone" defaultValue="" />
       );
   }
});

var Fax = React.createClass ({
    render: function() {
        return (
            <Input ref="Fax" type="text" pattern="\d{3}[\-]\d{3}[\-]\d{4}" label="Fax" defaultValue="" />
        );
    }
});

var Email = React.createClass ({
    render: function() {
        return (
            <Input ref="Email" type="email" label="Email" defaultValue="" />
        );
    }
});


var Form = React.createClass({

    getInitialState: function() {
        return {tabKey: 1};
    },

    handleSubmit: function(data, b) {

    },
    next: function() {
        this.state.tabKey++;
        this.handleTabSelect(this.state.tabKey);
    },
    addBank: function(data, b) {

    },
    handleTabSelect: function(selectedKey) {
        this.state.tabKey = selectedKey;
        React.render(<Form/>, document.getElementById('mainForm'));
    },
    render: function() {
        return (
            <div>
                <Panel>
                    <div className="modal-body">
                        <TabbedArea activeKey={this.state.tabKey} onSelect={this.handleTabSelect}>
                            <TabPane eventKey={1} tab="Tab 1">
                                <Input ref="Name" type="text" label="Name" defaultValue="" />
                                <Address header="Address"></Address>
                                <Row>
                                    <Col xs={6}>
                                        <Phone></Phone>
                                    </Col>
                                    <Col xs={6}>
                                        <Email></Email>
                                    </Col>
                                </Row>
                                <div className="pull-right">
                                    <Button bsStyle="primary" onClick={this.handleSubmit}>Save</Button>
                                    <Button bsStyle="primary" onClick={this.next}>Next</Button>
                                </div>
                            </TabPane>
                            <TabPane eventKey={2} tab="Tab 2">
                                <Input ref="Name of Bank" type="text" label="Name of Bank" defaultValue="" />
                                <Address header="Address of Branch of Account"></Address>
                                <Row>
                                    <Col xs={6}>
                                        <Input type="select" label='Type of Account(s)'>
                                            <option value="Checking">Checkings</option>
                                            <option value="Savings">Savings</option>
                                            <option value="Other">Other</option>
                                        </Input>
                                    </Col>
                                    <Col xs={6}>
                                        <Input ref="Account No" type="text" label="Account No" defaultValue="" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4}>
                                        <Input ref="Name of Officer" type="text" label="Name of Officer" defaultValue="" />
                                    </Col>
                                    <Col xs={4}>
                                        <Phone></Phone>
                                    </Col>
                                    <Col xs={4}>
                                        <Fax></Fax>
                                    </Col>
                                </Row>
                                <Input type="select" label='No. of Years with the Bank'>
                                    <option value="0">less than 1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">more than 5</option>
                                </Input>
                                <Row>
                                    <div className="pull-right">
                                        <Button bsStyle="primary" onClick={this.addBank}>Add Bank</Button>
                                    </div>
                                </Row>

                                <Input ref="Name of Institution" type="text" label="Name of Institution" defaultValue="" />

                                <Address header="Address of Institution"></Address>

                                <Row>
                                    <Col xs={4}>
                                        <Input ref="Name of Officer" type="text" label="Name of Officer" defaultValue="" />
                                    </Col>
                                    <Col xs={4}>
                                        <Phone></Phone>
                                    </Col>
                                    <Col xs={4}>
                                        <Fax></Fax>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={6}>
                                        <Input type="select" label='No. of Years with the institution'>
                                            <option value="0">less than 1</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">more than 5</option>
                                        </Input>
                                    </Col>
                                    <Col xs={6}>
                                        <Input type="select" label='Type of Financing'>
                                            <option value="0">Term Loan</option>
                                            <option value="1">Line of Credit</option>
                                            <option value="2">Factoring</option>
                                            <option value="3">PO Funding</option>
                                        </Input>
                                    </Col>
                                </Row>

                                <Input ref="Amount Outstanding" type="text" label="Amount Outstanding" defaultValue="" />

                                <Input type="select" label='Collateral' multiple>
                                    <option value="0">All Assets</option>
                                    <option value="1">Receivables</option>
                                    <option value="2">Inventory</option>
                                    <option value="3">Equipment</option>
                                    <option value="4">Real Estate</option>
                                    <option value="5">Intellectual</option>
                                    <option value="6">Property</option>
                                    <option value="7">Other</option>
                                </Input>

                                <Input type="file" label="Copy of Company's main financing agreement" help="" />

                                <Row>
                                    <div className="pull-right">
                                        <Button bsStyle="primary" onClick={this.addInsitution}>Add Institution</Button>
                                    </div>
                                </Row>

                                <Input ref="Outstanding A/R" type="text" label="Outstanding A/R" defaultValue="" />
                                <Input ref="Average Monthly Sales" type="text" label="Average Monthly Sales" defaultValue="" />
                                <Input ref="Average Number of Active Customers" type="text" label="Average Number of Active Customers" defaultValue="" />
                                <Input ref="Usual Terms of Sale" type="text" label="Usual Terms of Sale" defaultValue="" />

                                <Input type="file" label="List of principal customers (include contact information, terms of payment and peak exposure for each)" help="" />

                                <label>Sample transaction documents (sales contract, purchase order, invoice, proof of delivery and payment, etc.)</label>
                                <Input ref="Amount Outstanding" type="text" label="Amount Outstanding" defaultValue="" buttonAfter={<Button bsStyle="primary" onClick={this.addInsitution}>+</Button>} />

                                <Row>
                                    <div className="pull-right">
                                        <Button bsStyle="primary" onClick={this.addInsitution}>Upload</Button>
                                    </div>
                                </Row>

                                <label>3 trade references</label>
                                <Row>
                                        <Input ref="Amount Outstanding" type="text" label="Amount Outstanding" defaultValue="" />
                                        <Address header="Address"></Address>
                                        <Contact header="Contact"></Contact>
                                </Row>
                                <Row>
                                        <Input ref="Amount Outstanding" type="text" label="Amount Outstanding" defaultValue="" />
                                        <Address header="Address"></Address>
                                        <Contact header="Contact"></Contact>
                                </Row>
                                <Row>
                                        <Input ref="Amount Outstanding" type="text" label="Amount Outstanding" defaultValue="" />
                                        <Address header="Address"></Address>
                                        <Contact header="Contact"></Contact>
                                </Row>

                                <Input ref="Total A/R You Intend to Factor on a Monthly Basis" type="text" label="Total A/R You Intend to Factor on a Monthly Basis" defaultValue=""/>

                                <label>Product license agreements (if any)</label>
                                <Input ref="Licensor" type="text" label="Licensor" defaultValue=""/>
                                <Input ref="Mark" type="text" label="Mark" defaultValue=""/>
                                <Input ref="Product" type="text" label="Product" defaultValue=""/>
                                <Input type="file" label="Upload licence agreement" help="" />

                                <label>Consignment sales (if any)</label>
                                <Input ref="Consignee" type="text" label="Consignee" defaultValue=""/>
                                <Input ref="Product consigned" type="text" label="Product consigned" defaultValue=""/>
                                <Input ref="Average annual volume" type="text" label="Average annual volume" defaultValue=""/>

                                <Input ref="Name of Company's CPA" type="text" label="Name of Company's CPA" defaultValue=""/>


                            </TabPane>
                        </TabbedArea>
                    </div>
                </Panel>
            </div>
        );
    }
});

React.render(<Form/>, document.getElementById('mainForm'));
