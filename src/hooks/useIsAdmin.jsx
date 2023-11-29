import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";

export function useIsAdmin() {

    const {isAdmin} = useAuth()
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const checkAdminStatus = async () => {
            const isAdminUser = await isAdmin();
            setAdmin(isAdminUser);
        };

        checkAdminStatus();
    }, [admin]);

    return { admin };
}