import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient"
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const [authorized, setAuthorized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAccess = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (!data || error) {
                navigate("/");
                return;
            }

            // Assuming 'profiles' table holds access information
            const { data: profilesData, error: profileError } = await supabase
                .from("profiles")
                .select("has_access")
                .eq("id", data.user.id);

            if (profileError || !profilesData.length || profilesData[0].has_access === false) {
                navigate("/pricing");
                return;
            }

            // User is authorized to view the children components
            setAuthorized(true);
        };

        checkAccess();
    }, [navigate]);

    if (!authorized) {
        // Optionally, you can render a loading indicator or null while checking access
        return null; // or <Loading/>
    }

    return children;
};

export default ProtectedRoute;
