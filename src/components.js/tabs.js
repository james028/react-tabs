import React, { Component } from 'react'
import Tab from './tab'
import PropTypes from 'prop-types';

export default class Tabs extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: this.props.children[0].props.label
        };
    }

    onClickTabs = (id) => {
        this.setState({
            activeTab: id
        })
    }

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="tabs">
        <ul>
            {children.map((e) => {
                return (
                    <Tab>

                    </Tab>
                );
            })}
        </ul>
        <div className="tab-content">
            {children.map((e) => {
                if (e.props.label !== activeTab) return undefined;
                return children.props.children;
            })}
        </div>
      </div>
    )
  }
}
