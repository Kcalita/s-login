import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import React from 'react';

function Glogin() {
  return /*#__PURE__*/React.createElement(GoogleOAuthProvider, {
    clientId: "562677907760-7m99omjeao1ebmgn1ms024mp3pufpcmj.apps.googleusercontent.com"
  }, /*#__PURE__*/React.createElement(GoogleLogin, {
    onSuccess: function onSuccess(credentialResponse) {
      console.log('login successfull---------->', credentialResponse);
    },
    onError: function onError() {
      console.log('login failed');
    }
  }));
}

export default Glogin;
//# sourceMappingURL=index.modern.js.map
