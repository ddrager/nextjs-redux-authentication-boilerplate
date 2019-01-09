import React from 'react'
import Link from 'next/link'
import {connect} from 'react-redux'
import { Segment } from 'semantic-ui-react'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    // this.timer = startClock(dispatch)
  }

  render () {
    return (
      <div>
      <Segment>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Segment>
      <Segment>
        <Link href="/dashboard">
          <a>Private Dashboard</a>
        </Link>
      </Segment>
      </div>
    )
  }
}

export default connect()(Index)
