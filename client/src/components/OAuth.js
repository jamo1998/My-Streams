import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class OAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          client_id:
            '694124409943-dok4bmhafndlptl1e3tcgq9t82rfm3ni.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          // gets a referance to the 'auth' object
          this.auth = window.gapi.auth2.getAuthInstance();

          // checks to see if user is signed in
          this.onAuthChange(this.auth.isSignedIn.get());

          // listens for when a user logs in
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderLoginButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderLoginButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(OAuth);
