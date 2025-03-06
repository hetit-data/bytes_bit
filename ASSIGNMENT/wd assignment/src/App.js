import React from 'react'
import Greeting from './components/Greeting'
import Classcompo from './components/Classcompo'
import Welcomejsx from './components/Welcomejsx'
import Usercard from './components/Usercard'
import Counter from './components/Counter'
import Buttonclickevent from './components/Buttonclickevent'
import InputField from './components/InputField'
import AuthButton from './components/AuthButton'
import Voting from './components/Voting'
import List from './components/List'
import Userapi from './components/Userapi'
import AuthStatus from './components/AuthStatus'
import AuthProvider from './components/context/AuthContext'
import TodoApp from './components/TodoApp'
import Localstorage from './components/Localstorage'
import Jsoncontactmanage from './components/Jsoncontactmanage'

function App() {
  return (
    <div>
      <Greeting name="het patel"/>
      <Classcompo/>
      <Welcomejsx/>
      <Usercard name="John Doe" age={30} location="New York" />
      <Counter/>
      <Buttonclickevent/>
      <InputField/>
      <AuthButton/>
      <Voting/>
      <List/>
      <Userapi/>
      <AuthProvider>
      <div>
        <AuthStatus />
      </div>
    </AuthProvider>
    <TodoApp/>
    <Localstorage/>
    <Jsoncontactmanage/>
    </div>
  )
}

export default App
