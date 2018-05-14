/**
 * App
 *
 * Returns an array of components as in Helmet, Google analytics and react router handling the Profile container.
 *
 */
import React from 'react';
import GATracker from 'containers/GATracker';

const style = {
  display: 'flex',
  alignContent: 'center',
  minHeight: '100vh',
  padding: '4px 0', // this also hides vertical scrollbar on initial load.
  overflow: 'auto',
};

let LazyProfile = null;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isReady: LazyProfile !== null };
  }

  componentDidMount() {
    import('containers/Profile').then((Profile) => {
      LazyProfile = Profile.default;
      if (!this.hasUnmounted) {
        this.setState({ isReady: true });
      }
    });
  }

  componentWillUnmount() {
    this.hasUnmounted = true;
  }

  render() {
    return (
      <div style={style}>
        <GATracker key="ga-tracker" />
        {this.state.isReady ? <LazyProfile key="profile" /> : null}
      </div>
    );
  }
}

export default App;
