/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { Auth } from 'aws-amplify'

const AuthenticateService = {
  signup: async function (username: string, password: string) {
    try {
      const { user } = await Auth.signUp({ username, password })
      console.log('signup user: ', user.getUsername())
    } catch (error) {
      console.log('error signing up:', error)
    }
  },

  signin: async function (username: string, password: string) {
    try {
      await Auth.signIn(username, password)
    } catch (error) {
      console.log('error signing in', error)
    }
  },

  signout: async function () {
    try {
      await Auth.signOut()
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

}

export default AuthenticateService
