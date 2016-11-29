import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gotoContent, showContent } from '../actions/index';
import { bindActionCreators } from 'redux';

class WizardElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>{this.props.question}</h4>
        <div className="btn-group">
          <button type="button" className="btn btn-secondary" onClick={() => this.props.gotoContent(this.props.id + 1)}>Yes</button>
          <button type="button" className="btn btn-secondary" onClick={() => this.props.showContent(this.props.id + 1)}>No</button>
        </div>
        {this.props.visible && <p>{this.props.content}</p>}

        {this.props.visible && <h5>Does this resolve your question?</h5>}
        {this.props.visible && <div className="btn-group">
          <button type="button" className="btn btn-secondary" onClick={() => this.props.gotoContent(this.props.id + 1)}>No</button>
          <button type="button" className="btn btn-secondary">Yes</button>
        </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ gotoContent, showContent }, dispatch);
}

export default connect(null, mapDispatchToProps)(WizardElement);
