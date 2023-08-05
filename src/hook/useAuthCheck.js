import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { adminUserLoggedIn } from "../features/auth/adminAuthSlice";
import { studentUserLoggedIn } from "../features/auth/studentAuthSlice";

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const adminAuth = localStorage?.getItem("adminAuth");
        const studentAuth = localStorage?.getItem("studentAuth");

        if (adminAuth) {
            const auth = JSON.parse(adminAuth);
            if (auth?.accessToken && auth?.user) {
                dispatch(
                    adminUserLoggedIn({
                        accessToken: auth.accessToken,
                        user: auth.user,
                    })
                );
            }
        }
        if (studentAuth) {
            const auth = JSON.parse(studentAuth);
            if (auth?.accessToken && auth?.user) {
                dispatch(
                    studentUserLoggedIn({
                        accessToken: auth.accessToken,
                        user: auth.user,
                    })
                );
            }
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]);

    return authChecked;
}