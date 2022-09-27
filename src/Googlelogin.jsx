import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import React from 'react'

function Glogin() {
  return (
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
  )
}
export default Glogin
