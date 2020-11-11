import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getAllStreams();
  }

  // this method checks to see if the current user signed in
  // created any of the streams. If true, render an 'edit'
  // and 'delete' button
  renderUserOptions(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/streams/edit/${stream._id}`}
            className="ui button primary"
          >
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream._id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream._id}>
          {this.renderUserOptions(stream)}
          <i className="large middle aligned icon computer" />
          <div className="content">
            <Link to={`/streams/${stream._id}`}>{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getAllStreams })(StreamList);
