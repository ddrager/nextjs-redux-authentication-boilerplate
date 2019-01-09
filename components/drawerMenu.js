import React from 'react';
import PropTypes from 'prop-types';

function drawerMenu(props) {
  const { classes } = props;
  return (
    <div>
      Drawer here
    </div>
  );
}

drawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default drawerMenu;
