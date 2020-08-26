import React, { Component } from 'react';

// components/NotificationView/index.js

import connect from './connect';
export class NotificationView extends Component {
  addNewNotify() {
    const curVal = `Notification add at ${new Date().getTime()}`;
    this.props.addNotification(curVal);
  }

  render() {
    return (
      <div>
        <h1>Notifications Center</h1>
        {/* <input value={this.state.inputValue} onChange={this.updateInputValue} /> */}
        <button onClick={this.addNewNotify.bind(this)}>
          Add new notification
        </button>
        <p>{this.props.nextNotification ? this.props.nextNotification.message : null}</p>
      </div>
    );
  }
}
export default connect(NotificationView);
