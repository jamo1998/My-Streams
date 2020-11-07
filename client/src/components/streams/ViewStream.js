import React from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../actions';

class ViewStream extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    return <div>ViewStream</div>;
  }
}

export default connect(null, { getStream })(ViewStream);
