import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import React from 'react'

function Glogin() {
  return (
    <GoogleOAuthProvider clientId='YOUR_CLIENT_ID'>
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
