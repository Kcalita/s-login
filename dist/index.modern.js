import React, { createContext, useMemo, useRef, useEffect, useState, useContext } from 'react';

function useLoadGsiScript(options = {}) {
    const { onScriptLoadSuccess, onScriptLoadError } = options;
    const [scriptLoadedSuccessfully, setScriptLoadedSuccessfully] = useState(false);
    const onScriptLoadSuccessRef = useRef(onScriptLoadSuccess);
    onScriptLoadSuccessRef.current = onScriptLoadSuccess;
    const onScriptLoadErrorRef = useRef(onScriptLoadError);
    onScriptLoadErrorRef.current = onScriptLoadError;
    useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://accounts.google.com/gsi/client';
        scriptTag.async = true;
        scriptTag.defer = true;
        scriptTag.onload = () => {
            var _a;
            setScriptLoadedSuccessfully(true);
            (_a = onScriptLoadSuccessRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadSuccessRef);
        };
        scriptTag.onerror = () => {
            var _a;
            setScriptLoadedSuccessfully(false);
            (_a = onScriptLoadErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadErrorRef);
        };
        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);
    return scriptLoadedSuccessfully;
}

const GoogleOAuthContext = createContext(null);
function GoogleOAuthProvider({ clientId, onScriptLoadSuccess, onScriptLoadError, children, }) {
    const scriptLoadedSuccessfully = useLoadGsiScript({
        onScriptLoadSuccess,
        onScriptLoadError,
    });
    const contextValue = useMemo(() => ({
        clientId,
        scriptLoadedSuccessfully,
    }), [clientId, scriptLoadedSuccessfully]);
    return (React.createElement(GoogleOAuthContext.Provider, { value: contextValue }, children));
}
function useGoogleOAuth() {
    const context = useContext(GoogleOAuthContext);
    if (!context) {
        throw new Error('Google OAuth components must be used within GoogleOAuthProvider');
    }
    return context;
}

const containerHeightMap = { large: 40, medium: 32, small: 20 };
function GoogleLogin({ onSuccess, onError, useOneTap, promptMomentNotification, type = 'standard', theme = 'outline', size = 'large', text, shape, logo_alignment, width, locale, ...props }) {
    const btnContainerRef = useRef(null);
    const { clientId, scriptLoadedSuccessfully } = useGoogleOAuth();
    const onSuccessRef = useRef(onSuccess);
    onSuccessRef.current = onSuccess;
    const onErrorRef = useRef(onError);
    onErrorRef.current = onError;
    const promptMomentNotificationRef = useRef(promptMomentNotification);
    promptMomentNotificationRef.current = promptMomentNotification;
    useEffect(() => {
        var _a, _b, _c;
        if (!scriptLoadedSuccessfully)
            return;
        (_a = window.google) === null || _a === void 0 ? void 0 : _a.accounts.id.initialize({
            client_id: clientId,
            callback: (credentialResponse) => {
                var _a;
                if (!credentialResponse.clientId || !credentialResponse.credential) {
                    return (_a = onErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onErrorRef);
                }
                onSuccessRef.current(credentialResponse);
            },
            ...props,
        });
        (_b = window.google) === null || _b === void 0 ? void 0 : _b.accounts.id.renderButton(btnContainerRef.current, {
            type,
            theme,
            size,
            text,
            shape,
            logo_alignment,
            width,
            locale,
        });
        if (useOneTap)
            (_c = window.google) === null || _c === void 0 ? void 0 : _c.accounts.id.prompt(promptMomentNotificationRef.current);
        return () => {
            var _a;
            if (useOneTap)
                (_a = window.google) === null || _a === void 0 ? void 0 : _a.accounts.id.cancel();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        clientId,
        scriptLoadedSuccessfully,
        useOneTap,
        type,
        theme,
        size,
        text,
        shape,
        logo_alignment,
        width,
        locale,
    ]);
    return (React.createElement("div", { ref: btnContainerRef, style: { height: containerHeightMap[size] } }));
}

function Glogin() {
  return /*#__PURE__*/React.createElement(GoogleOAuthProvider, {
    clientId: "YOUR_CLIENT_ID"
  }, /*#__PURE__*/React.createElement(GoogleLogin, {
    onSuccess: credentialResponse => {
      console.log('login successfull---------->', credentialResponse);
    },
    onError: () => {
      console.log('login failed');
    }
  }));
}

export default Glogin;
//# sourceMappingURL=index.modern.js.map
