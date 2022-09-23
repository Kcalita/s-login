function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactGoogleLogin = require('react-google-login');

function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

function Googlesociallogin() {
  var _useState = React.useState(false),
      islogedin = _useState[0];

  var _useState2 = React.useState(' '),
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

  return /*#__PURE__*/React__default.createElement("div", null, islogedin ? /*#__PURE__*/React__default.createElement(reactGoogleLogin.GoogleLogout, {
    clientId: "562677907760-7m99omjeao1ebmgn1ms024mp3pufpcmj.apps.googleusercontent.com",
    buttonText: "Login With Google",
    onLogoutSuccess: logoutsuccess,
    onFailure: logoutfail
  }) : /*#__PURE__*/React__default.createElement(reactGoogleLogin.GoogleLogin, {
    clientId: "562677907760-7m99omjeao1ebmgn1ms024mp3pufpcmj.apps.googleusercontent.com",
    buttonText: "Logout",
    onSuccess: loginsuccess,
    onFailure: loginfail,
    cookiePolicy: 'single_host_origin',
    responseType: "code,token"
  }), accesstoken ? /*#__PURE__*/React__default.createElement("h5", null, "your accesstoken: ", /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), " ", accesstoken, ' ') : null);
}

module.exports = Googlesociallogin;
//# sourceMappingURL=index.js.map
