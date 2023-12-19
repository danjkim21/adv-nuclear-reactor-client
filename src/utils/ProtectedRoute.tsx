import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useLocalStorage<any>("userData", null);

  const checkUserToken = () => {
    if (!userData || userData.authenticated === "undefined") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return <>{isLoggedIn ? props.children : null}</>;
};
export default ProtectedRoute;
