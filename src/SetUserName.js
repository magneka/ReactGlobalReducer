import React, { useContext, useEffect } from "react";
import { Context } from "./Store";

const SetUserName = (props) => {
  const [state, dispatch] = useContext(Context);
  const currentUsername = "BOBBY";

  useEffect(() => {
    if (currentUsername) {
      dispatch({ type: "UPDATE_NAME", payload: currentUsername });
    }
  }, []);

  return (
    <div>
      {currentUsername}
      {JSON.stringify(state)}
    </div>
  );
};

export default SetUserName;
