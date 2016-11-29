import React, { Component } from 'react';
import { connect } from 'react-redux';

import WizardElement from './wizard_element';
import WizardIndicators from './wizard_indicators';

class WizardLoader extends Component {
  constructor(props) {
    super(props);
  }

  renderWizard() {
    const currentContent = this.props.content[this.props.currentContentId];

    if (!currentContent) {
      return (
        <div>
          <p>We are unable to find a solution for your problem</p>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary">Contact support</button>
            <button type="button" className="btn btn-secondary">Send to repair</button>
          </div>
        </div>);
    }

    return (
      <li key={currentContent.id}>
        <WizardElement
          content={currentContent.content}
          question={currentContent.titleQuestion}
          id={this.props.currentContentId}
          visible={currentContent.visible}
        />
      </li>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="center-align"><h5>{ this.props.content.length } solutions found</h5>
        <WizardIndicators /></div>
        <ul>
          { this.renderWizard() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    content: state.content,
    currentContentId: state.currentContentId
  }
}


export default connect(mapStateToProps)(WizardLoader);
