import React from 'react'

import Glogin from 'react-sociallogin-kc'
import GoogleOAuthProvider from 'react-sociallogin-kc'
import GoogleLogin from 'react-sociallogin-kc'
import 'react-sociallogin-kc/dist/index.css'

const App = () => {
  return (
    <Glogin>
      <GoogleOAuthProvider clientId='562677907760-7m99omjeao1ebmgn1ms024mp3pufpcmj.apps.googleusercontent.com'>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log('login successfull---------->', credentialResponse)
          }}
          onError={() => {
            console.log('login failed')
          }}
        ></GoogleLogin>
      </GoogleOAuthProvider>
    </Glogin>
  )
}

export default App
