import React from 'react'
import {connect} from 'react-redux'
import { userActions } from '../actions';

import { Segment, Button } from 'semantic-ui-react'

import Header from '../containers/header';

class Login extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    return {}
  }

  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    const {dispatch} = this.props
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {dispatch} = this.props

    // dispatch login here
    // login(dispatch, form.data)
    dispatch(userActions.login(this.state.username, this.state.password));
  }

  render () {
     const { classes, theme, loggedIn } = this.props;
    return (
      <section>
        <Header />
          <main>
            <div/>
            <Segment>
              <form onSubmit={ this.handleSubmit }>
                  <section>
                      <label>Username:</label>
                      <input
                          name="username"
                          type="text"
                          value={ this.state.username }
                          onChange={ this.handleChange }
                      />
                  </section>

                  <section className="field">
                      <label>Password:</label>
                      <input
                          name="password"
                          type="text"
                          value={ this.state.password }
                          onChange={ this.handleChange }
                      />
                  </section>
                    <Button variant="contained" color="primary" onClick={ this.handleSubmit }>
                      Submit
                    </Button>
              </form>
            </Segment>
          </main>
      </section>
    )
  }
}

export default connect()(Login)
