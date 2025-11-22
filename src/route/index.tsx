import App from "@/App";
import AboutPage from "@/components/modules/About/AboutPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {  
        Component: App,
        path:"/",
        children: [
          {
            Component: AboutPage,
            path:"/about"
          }
        ],
    }
])