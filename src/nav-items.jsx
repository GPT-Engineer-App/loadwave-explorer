import { Home, Bone, Heart, Camera } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Breeds",
    to: "/breeds",
    icon: <Bone className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Care",
    to: "/care",
    icon: <Heart className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <Camera className="h-4 w-4" />,
    page: <Index />,
  },
];
