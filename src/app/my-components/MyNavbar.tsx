"use client";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { FileUser, Home, Shapes } from "lucide-react";

const navItems = [
  {
    name: "Home",
    url: "/",
    icon: Home,
  },
  {
    name: "About",
    url: "#about",
    icon: FileUser,
  },
  {
    name: "Projects",
    url: "#projects",
    icon: Shapes,
  },
];
function MyNavbar() {
  return <NavBar items={navItems} className="" />;
}

export default MyNavbar;
