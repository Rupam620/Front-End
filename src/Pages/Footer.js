import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
export function Footer() {
  const [token, setToken] = useState({});
  useEffect(() => {
    // Retrieve token from localStorage when the component mounts
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      setToken(jwtDecode(token));
    } else {
      setToken(" ");
    }
    console.log(JSON.stringify(token));
  }, []);
  return (
    <>
      
        <div className="container footer">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p>
                Made for {token?.username} With {String.fromCodePoint("129505")}{" "}
                by Anirban
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
}
