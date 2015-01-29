var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var FileInput = require('./../react-common/FileInput');
var Reference = require('./../react-common/Reference');
var Address = require('./../react-common/Address');

var GetRefs = require('./../helpers/get-refs');
var ParseSave = require('./../parse/parse-save');

var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;

var ConsigneeFields = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={4}>
                        <Input ref="consignee" type="text" label="Consignee" defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input ref="consigneeProductConsigned" type="text" label="Product Consigned" defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input ref="consigneeAverageAnnualVolume" type="text" label="Average annual volume" defaultValue=""/>
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
                <td>{this.props.item.consigneeProductConsigned}</td>
                <td>{this.props.item.consigneeAverageAnnualVolume}</td>
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
        var result = GetRefs(this.refs.consignee, false);

        this.setState({
            collection: [result].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <ConsigneeFields ref="consignee" collection={this.state.collection} complex></ConsigneeFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <ConsigneeTable collection={this.state.collection}></ConsigneeTable>
            </div>
        );
    }
});


var ProductLicenseFields = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={4}>
                        <Input ref="productLicenseLicensor" type="text" label="Licensor" defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input ref="productLicenseMark" type="text" label="Mark" defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input ref="productLicenseProduct" type="text" label="Product" defaultValue=""/>
                    </Col>
                </Row>
                <FileInput ref="uploadLicenceAgreement" label="Upload licence agreement" file></FileInput>
            </div>
        );
    }
});

var ProductLicenseRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.productLicenseLicensor}</td>
                <td>{this.props.item.productLicenseMark}</td>
                <td>{this.props.item.productLicenseProduct}</td>
                <td>{this.props.item.uploadLicenceAgreement.name}</td>
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
        var result = GetRefs(this.refs.productLicense, false);

        this.setState({
            collection: [result].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <ProductLicenseFields ref="productLicense" collection={this.state.collection} complex></ProductLicenseFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <ProductLicenseTable collection={this.state.collection}></ProductLicenseTable>
            </div>
        );
    }
});

var BuyerReferenceFields = React.createClass({
    getInitialState: function() {
        return {collection: []};
    },
    render: function() {
        return (
            <div>
                <Reference ref="reference" complex></Reference>
                <Address ref="address" header="Address" complex></Address>
                <Input ref="buyerTotalAR" type="text" label="Total A/R You Intend to Factor on a Monthly Basis" defaultValue=""/>
            </div>
        );
    }
});

var BuyerReferenceRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.reference.referenceCompanyName}</td>
                <td>{this.props.item.reference.referenceContactName}</td>
                <td>{this.props.item.reference.phone}</td>
                <td>{this.props.item.reference.email}</td>
                <td>{this.props.item.address}</td>
                <td>{this.props.item.buyerTotalAR}</td>
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
        var result = GetRefs(this.refs.buyerReference, false);

        this.setState({
            collection: [result].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <BuyerReferenceFields ref="buyerReference" collection={this.state.collection} complex></BuyerReferenceFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <BuyerReferenceTable collection={this.state.collection}></BuyerReferenceTable>
            </div>
        );
    }
});

var TradeReferenceFields = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Reference ref="reference" complex></Reference>
                <Address ref="address" header="Address" complex></Address>
            </div>
        );
    }
});

var TradeReferenceRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.reference.referenceCompanyName}</td>
                <td>{this.props.item.reference.referenceContactName}</td>
                <td>{this.props.item.reference.phone}</td>
                <td>{this.props.item.reference.email}</td>
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
        var result = GetRefs(this.refs.tradeReference, false);

        this.setState({
            collection: [result].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <TradeReferenceFields ref="tradeReference" complex></TradeReferenceFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <TradeReferenceTable collection={this.state.collection}></TradeReferenceTable>
            </div>
        );
    }
});

var CustomerFields = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <Row>
                    <Col xs={4}>
                        <Input ref="customerName" type="text" label="Name" defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input ref="customerTermsOfPayment" type="text" label="Terms of payments" defaultValue=""/>
                    </Col>
                    <Col xs={4}>
                        <Input ref="customerPeakExposure" type="text" label="Peak Exposure" defaultValue=""/>
                    </Col>
                </Row>
                <FileInput ref="customerSampleTransaction" label="Sample transaction documents (sales contract, purchase order, invoice, proof of delivery and payment, etc.)" file></FileInput>
            </div>
        );
    }
});

var CustomerRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.item.customerName}</td>
                <td>{this.props.item.customerTermsOfPayment}</td>
                <td>{this.props.item.customerPeakExposure}</td>
                <td>{this.props.item.customerSampleTransaction.name}</td>
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
        var item = GetRefs(this.refs.customer, false);

        this.setState({
            collection: [item].concat(this.state.collection)
        });
    },
    render: function() {
        return (
            <div>
                <CustomerFields ref="customer" collection={this.state.collection} complex></CustomerFields>
                <Button bsStyle="primary" onClick={this.handlePlusButton}>+</Button>
                <CustomerTable collection={this.state.collection}></CustomerTable>
            </div>
        );
    }
});

var OperationsForm = React.createClass({
    handleSubmit: function(data, b) {
        var result = GetRefs(this, false);

        ParseSave(
            "Operations",
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
                    <h2>Operations</h2>

                    <Row>
                        <Col xs={4}>
                            <Input ref="outstandingAR" type="text" label="Outstanding A/R" defaultValue=""/>
                        </Col>
                        <Col xs={4}>
                            <Input ref="averageMonthlySales" type="text" label="Average Monthly Sales" defaultValue=""/>
                        </Col>
                        <Col xs={4}>
                            <Input ref="averageNumberOfActiveCustomers" type="text" label="Average Number of Active Customers" defaultValue=""/>
                        </Col>
                    </Row>

                    <Input ref="usualTermsSales" type="textarea" label="Usual terms sale" defaultValue="" />

                    <h3>Customers</h3>
                    <Customer ref="customer" collection></Customer>

                    <h3>3 trade references</h3>
                    <TradeReference ref="tradeReference" collection></TradeReference>

                    <h3>3 buyer references</h3>
                    <BuyerReference ref="buyerReference" collection></BuyerReference>

                    <h3>Product license agreements (if any)</h3>
                    <ProductLicense ref="productLicense" collection></ProductLicense>

                    <h3>Consignment sales (if any)</h3>
                    <Consignee ref="consignee" collection></Consignee>

                    <div className="pull-right">
                        <Button bsStyle="primary" className="btn-spaced" onClick={this.handleSubmit}>Save</Button>
                        <Button bsStyle="primary" onClick={this.next}>Next</Button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = OperationsForm;