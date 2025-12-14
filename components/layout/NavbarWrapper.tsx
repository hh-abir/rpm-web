"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import AdminNavbar from "./AdminNavbar";

export default function NavbarWrapper() {
    const pathname = usePathname();

    const isAdminRoute = pathname.startsWith("/dashboard");

    if (isAdminRoute) {
        return <AdminNavbar />;
    }

    return <Navbar />;
}