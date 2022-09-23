import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

function Googlesociallogin() {
  const [islogedin, setislogedin] = useState(false)
  const [accesstoken, setaccesstoken] = useState(' ')

  const logoutsuccess = () => {
    setislogedin = false
    setaccesstoken = ' '
    console.log('log out successful!.......')
  }

  const logoutfail = (res) => {
    console.log('error in logout->>>>>', res)
  }

  const loginsuccess = (res) => {
    setislogedin = true
    setaccesstoken = res.accesstoken
    console.log('login successfull.......')
  }

  const loginfail = (res) => {
    console.log('error in login.......', res)
  }

  return (
    <div>
      {islogedin ? (
        <GoogleLogout
          clientId='562677907760-7m99omjeao1ebmgn1ms024mp3pufpcmj.apps.googleusercontent.com'
          buttonText='Log out'
          onLogoutSuccess={logoutsuccess}
          onFailure={logoutfail}
        />
      ) : (
        <GoogleLogin
          clientId='562677907760-7m99omjeao1ebmgn1ms024mp3pufpcmj.apps.googleusercontent.com'
          buttonText='Login With Google'
          onSuccess={loginsuccess}
          onFailure={loginfail}
          cookiePolicy={'single_host_origin'}
          responseType='code,token'
        ></GoogleLogin>
      )}
      {accesstoken ? (
        <h5>
          your accesstoken: <br />
          <br /> {accesstoken}{' '}
        </h5>
      ) : null}
    </div>
  )
}

export default Googlesociallogin
