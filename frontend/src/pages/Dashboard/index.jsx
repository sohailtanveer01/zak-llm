import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {supabase} from "../../utils/supabaseClient"

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const history = useNavigate();
  useEffect(() => {
      const getUser = async () => {
          const { data } = await supabase.auth.getUser();

          if(!data){
               // Redirect to '/landing' page
               toast.error("You are not logged in");
               
               history("/")
          return;
          }

          console.log(data);
          setUser(data.user);

          // Query profiles table to check if user has access
          const { data: profilesData, error } = await supabase
              .from("profiles")
              .select("has_access")
              .eq("id", data.user.id);

          if (error) {
              console.error("Error fetching profile data:", error);
              return;
          }

          const hasAccess = profilesData[0]?.has_access;
          console.log("Has access:", hasAccess);
          if(hasAccess==false || hasAccess==undefined){
              // Redirect to '/pricing' page
          history("/pricing");
          }

          if(hasAccess==true && data){
              history("/onboarding");
          };
      }
      getUser();
  }, [supabase]);

}
