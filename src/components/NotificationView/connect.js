// components/NotificationView/connect.js

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addNotification, removeNotification, selectNextNotification } from '../../data/notifications';

const mapStateToProps = createStructuredSelector({
  nextNotification: selectNextNotification
});
const mapDispatchToProps = { addNotification, removeNotification };

export default connect(mapStateToProps, mapDispatchToProps);