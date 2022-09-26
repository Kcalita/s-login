function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function useLoadGsiScript(options = {}) {
    const { onScriptLoadSuccess, onScriptLoadError } = options;
    const [scriptLoadedSuccessfully, setScriptLoadedSuccessfully] = React.useState(false);
    const onScriptLoadSuccessRef = React.useRef(onScriptLoadSuccess);
    onScriptLoadSuccessRef.current = onScriptLoadSuccess;
    const onScriptLoadErrorRef = React.useRef(onScriptLoadError);
    onScriptLoadErrorRef.current = onScriptLoadError;
    React.useEffect(() => {
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

const GoogleOAuthContext = React.createContext(null);
function GoogleOAuthProvider({ clientId, onScriptLoadSuccess, onScriptLoadError, children, }) {
    const scriptLoadedSuccessfully = useLoadGsiScript({
        onScriptLoadSuccess,
        onScriptLoadError,
    });
    const contextValue = React.useMemo(() => ({
        clientId,
        scriptLoadedSuccessfully,
    }), [clientId, scriptLoadedSuccessfully]);
    return (React__default.createElement(GoogleOAuthContext.Provider, { value: contextValue }, children));
}
function useGoogleOAuth() {
    const context = React.useContext(GoogleOAuthContext);
    if (!context) {
        throw new Error('Google OAuth components must be used within GoogleOAuthProvider');
    }
    return context;
}

const containerHeightMap = { large: 40, medium: 32, small: 20 };
function GoogleLogin({ onSuccess, onError, useOneTap, promptMomentNotification, type = 'standard', theme = 'outline', size = 'large', text, shape, logo_alignment, width, locale, ...props }) {
    const btnContainerRef = React.useRef(null);
    const { clientId, scriptLoadedSuccessfully } = useGoogleOAuth();
    const onSuccessRef = React.useRef(onSuccess);
    onSuccessRef.current = onSuccess;
    const onErrorRef = React.useRef(onError);
    onErrorRef.current = onError;
    const promptMomentNotificationRef = React.useRef(promptMomentNotification);
    promptMomentNotificationRef.current = promptMomentNotification;
    React.useEffect(() => {
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
    return (React__default.createElement("div", { ref: btnContainerRef, style: { height: containerHeightMap[size] } }));
}

function Glogin() {
  return /*#__PURE__*/React__default.createElement(GoogleOAuthProvider, {
    clientId: "YOUR_CLIENT_ID"
  }, /*#__PURE__*/React__default.createElement(GoogleLogin, {
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
