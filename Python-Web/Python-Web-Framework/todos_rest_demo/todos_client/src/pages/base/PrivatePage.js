import {useAuth} from "../../hooks/auth";
import {useLocation, Navigate} from "react-router-dom";

const PrivatePage = ({children}) => {
    const {isLoggedIn} = useAuth();
    const location = useLocation();

    return (
        !isLoggedIn
            ? (
                <Navigate to={{
                    pathname: '/login',
                    state: {from: location},
                }}
                />
            )
            : (
                <>
                    {children}
                </>
            )
    );
}

const makePrivate = (ComponentToWrap) => (props) => (
    <PrivatePage>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <ComponentToWrap {...props} />
    </PrivatePage>
);

export default PrivatePage;

export {
    makePrivate,
};
