import React, { useState } from 'react';
import { GoogleLogout, GoogleLogin } from 'react-google-login';

function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

function Googlelogin() {
  var _useState = useState(false),
      islogedin = _useState[0];

  var _useState2 = useState(' '),
      accesstoken = _useState2[0];

  var logoutsuccess = function logoutsuccess() {
    _readOnlyError("setislogedin");
    _readOnlyError("setaccesstoken");
    console.log('log out successful!.......');
  };

  var logoutfail = function logoutfail(res) {
    console.log('error in logout->>>>>', res);
  };

  var loginsuccess = function loginsuccess(res) {
    _readOnlyError("setislogedin");
    _readOnlyError("setaccesstoken");
    console.log('login successfull.......');
  };

  var loginfail = function loginfail(res) {
    console.log('error in login.......', res);
  };

  return /*#__PURE__*/React.createElement("div", null, islogedin ? /*#__PURE__*/React.createElement(GoogleLogout, {
    clientId: "562677907760-7m99omjeao1ebmgn1ms024mp3pufpcmj.apps.googleusercontent.com",
    buttonText: "Login With Google",
    onLogoutSuccess: logoutsuccess,
    onFailure: logoutfail
  }) : /*#__PURE__*/React.createElement(GoogleLogin, {
    clientId: "562677907760-7m99omjeao1ebmgn1ms024mp3pufpcmj.apps.googleusercontent.com",
    buttonText: "Logout",
    onSuccess: loginsuccess,
    onFailure: loginfail,
    cookiePolicy: 'single_host_origin',
    responseType: "code,token"
  }), accesstoken ? /*#__PURE__*/React.createElement("h5", null, "your accesstoken: ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), " ", accesstoken, ' ') : null);
}

export default Googlelogin;
//# sourceMappingURL=index.modern.js.map
