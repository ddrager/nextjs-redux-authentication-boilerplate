import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux'
import Link from 'next/link'


const drawerWidth = 240;

class Header extends React.Component {
  state = {
    open: false,
    anchorEl: null,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { classes, theme, loggedIn, user } = this.props;
    console.log(this.props);
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
        Header Here
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProps (state) {
  console.log(state);
  const { authentication: { user }, theme: uiTheme } = state
  return {user, uiTheme}
}

// export default withStyles(styles, { withTheme: true })(Header);

// export default compose(
//   withStyles(styles, {
//     name: 'Header',
//     withTheme: true
//   }),
//   connect(state => ({
//     uiTheme: state.theme,
//   })),
// )(Header);

export default connect(mapStateToProps)(Header);
