function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var google = require('@react-oauth/google');
var React = _interopDefault(require('react'));

function Glogin() {
  return /*#__PURE__*/React.createElement(google.GoogleOAuthProvider, {
    clientId: "YOUR_CLIENT_ID"
  }, /*#__PURE__*/React.createElement(google.GoogleLogin, {
    onSuccess: function onSuccess(credentialResponse) {
      console.log('login successfull---------->', credentialResponse);
    },
    onError: function onError() {
      console.log('login failed');
    }
  }));
}

module.exports = Glogin;
//# sourceMappingURL=index.js.map
