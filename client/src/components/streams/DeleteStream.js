import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { getStream, deleteStream } from '../../actions';

class DeleteStream extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.getStream(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <Fragment>
        <Link
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </Link>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream: '${this.props.stream.title}'`;
  }

  render() {
    return (
      <Modal
        title="Delete Strom"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, deleteStream })(
  DeleteStream
);
