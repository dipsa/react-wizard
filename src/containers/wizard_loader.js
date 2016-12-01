import React, { Component } from 'react';
import { connect } from 'react-redux';

import WizardElement from './wizard_element';
import WizardIndicators from './wizard_indicators';
import WizardItemCount from '../components/wizard_item_count';

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
        </div>
      );
    }

    return (
      <div key={currentContent.id}>
        <WizardElement
          currentContent={currentContent}
          id={this.props.currentContentId}
        />
    </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="center-align">
          <WizardItemCount contentCount={this.props.content.length} />
          <WizardIndicators />
        </div>
        <div>
          { this.renderWizard() }
        </div>
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
