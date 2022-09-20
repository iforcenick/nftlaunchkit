import { useEffect } from "react";
import Router from "next/router";

// Redirect to /about if you navigate to root url
export default () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/about");
    }
  });
};