import React from 'react'
import Link from 'next/link'
//import Api from  '../../utils/SeshSourceApi'
import withAuth from  '../../utils/withAuth'
import fetch from 'isomorphic-unfetch'

import { Segment } from 'semantic-ui-react'



import Header from '../../containers/header';

//import '../../assets/css/seshsource.css'

class CreateEvent extends React.Component {
    static async getInitialProps({ req }) {
        let query = await fetch('http://localhost/api/events')
        let events = await query.json()

        return {
            events: events
        }
    }

   render() {
     const { classes, theme, loggedIn, events } = this.props;
     const user = this.props.auth.getProfile()

        const list = events.data.map((event) => {
            let url = '/events/' + event.slug;
            console.log(url);
            return (
                <Link key={ event.slug } href={ url }>
                    <ListItem button>
                        <ListItemText primary={ event.title } secondary={ event.start_date } />
                    </ListItem>
                </Link>
            )
        })

     return (
        <div>
          <Header />
          <main>
            <div />
            <Segment>
                Example isomorphic page
            </Segment>
            <div>{'You think water moves fast? You should see ice.'}</div>
          </main>
        </div>
     )
   }
}

export default withAuth()(CreateEvent);
