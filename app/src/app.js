/** @jsx React.DOM */

var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var ContactInfoForm = require('./form-tabs/contact-info');
var CompanyInformationForm = require('./form-tabs/company-information');
var FinancialsForm = require('./form-tabs/financials');
var OperationsForm = require('./form-tabs/operations');
var AccountingForm = require('./form-tabs/accounting');
var LegalForm = require('./form-tabs/legal');

var Panel = ReactBootstrap.Panel;
var TabbedArea = ReactBootstrap.TabbedArea;
var TabPane = ReactBootstrap.TabPane;

Parse.initialize('9pzGSaxmA5QR7bXtHZHIwjltAQVJEXOtcrwzTxeu', '8laOtgGozvc7WW7QRqbWpCu1gutHzdECHP3FrTm5');

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
                                <FinancialsForm></FinancialsForm>
                            </TabPane>
                            <TabPane eventKey={4} tab="Operations">
                                <OperationsForm></OperationsForm>
                            </TabPane>
                            <TabPane eventKey={5} tab="Accounting">
                                <AccountingForm></AccountingForm>
                            </TabPane>
                            <TabPane eventKey={6} tab="Legal">
                                <LegalForm></LegalForm>
                            </TabPane>
                        </TabbedArea>
                    </div>
                </Panel>
            </div>
        );
    }
});

React.render(<Form/>, document.getElementById('mainForm'));
