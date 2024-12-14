import { AuthContext } from "@/context/auth";
import React, { useContext } from "react";

const page = () => {
  const { user } = useContext(AuthContext);
    return <div>
        {/* {user.role  } */}
        
  </div>;
};

export default page;
