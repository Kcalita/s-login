import React from 'react'

import Googlesociallogin from 'react-sociallogin-kc'
import 'react-sociallogin-kc/dist/index.css'

const App = () => {
  const loginsuccess = (res) => {
    console.log('success...', res)
  }

  const loginfail = (res) => {
    console.log('unsuccessful....', res)
  }

  return (
    <div>
      <Googlesociallogin>
        <ReactGoogleLogin
          clientId='562677907760-7m99omjeao1ebmgn1ms024mp3pufpcmj.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={loginsuccess}
          onFailure={loginfail}
          cookiePolicy={'single_host_origin'}
          responseType='code,token'
        />
      </Googlesociallogin>
    </div>
  )
}

export default App
