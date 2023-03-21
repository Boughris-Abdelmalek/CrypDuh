import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout, selectUser } from "../features/users/userSlice";
import { onAuthStateChanged, auth } from "../utils/firebase-config";

const Test = () => {
    const user = useSelector(selectUser);

    const navigate = useNavigate();

    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                    })
                );
            } else {
                dispatch(logout());
                navigate("/login");
            }
        });
    }, []);

    console.log(user);

    return <div>Welcome {user && user.displayName}</div>;
};

export default Test;
