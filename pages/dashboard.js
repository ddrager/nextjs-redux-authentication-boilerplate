import React from 'react'
import withAuth from  '../utils/withAuth'
import { Segment } from 'semantic-ui-react';

import Header from '../containers/header';

class Dashboard extends React.Component {
   render() {
     const { classes, theme, loggedIn } = this.props;
     const user = this.props.auth.getProfile()
     return (
        <div>
          <Header />
          <main>
            <div/>
            <Segment>

                Recent Events

                List of recent events here

            </Segment>
          </main>
        </div>
     )
   }
}

export default withAuth()(Dashboard);
