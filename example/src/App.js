import React from 'react'

import Googlelogin from 'react-sociallogin-kc'
import 'react-sociallogin-kc/dist/index.css'

const App = () => {
  return (
    <div>
      <Googlelogin
        clientId='562677907760-7m99omjeao1ebmgn1ms024mp3pufpcmj.apps.googleusercontent.com'
        buttonText='Logout'
        onSuccess={loginsuccess}
        onFailure={loginfail}
        cookiePolicy={'single_host_origin'}
        responseType='code,token'
      />
    </div>
  )
}

export default App
