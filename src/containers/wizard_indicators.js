import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gotoContent } from '../actions/index';

class WizardIndicators extends Component {
  constructor(props) {
    super(props);
  }

  renderIndicator(currentContentId, index) {
    let clzName = 'indicator';

    if (currentContentId == index) {
      clzName += ' current';
    }

    return <li className={clzName} key={index} onClick={() => this.props.gotoContent(index)}></li>
  }

  render() {
    return (
      <div>
        <ul className="indicator-group">
          {[...Array(this.props.indicatorCount)].map((x, i) => {
            return this.renderIndicator(this.props.currentContentId, i);
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentContentId: state.currentContentId,
    indicatorCount: state.content.length
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ gotoContent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardIndicators);
