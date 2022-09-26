# react-sociallogin-kc

> react component of google sociallogin for react js with oauth 2.0 (new method of google login )
> The previous google sign library method is going to be deprecate so this is your answer for the new method.
> check th oauth 2.0 official documents here "https://developers.google.com/identity/gsi/web/guides/overview"

[![NPM](https://img.shields.io/npm/v/react-sociallogin-kc.svg)](https://www.npmjs.com/package/react-sociallogin-kc) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-sociallogin-kc
```

## Usage

```jsx
import React from 'react'

import Glogin from 'react-sociallogin-kc'
import GoogleOAuthProvider from 'react-sociallogin-kc'
import GoogleLogin from 'react-sociallogin-kc'
import 'react-sociallogin-kc/dist/index.css'

const App = () => {
  return (
    <Glogin>
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
    </Glogin>
  )
}

export default App
```

## License

MIT © [Kcalita](https://github.com/Kcalita)
