"use client";

import { Toaster } from "react-hot-toast";

export default function AppToaster() {
    return (
        <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{
                top: 90,  
                right: 20, 
            }}
            toastOptions={{
                duration: 4000,
                style: {
                    background: "#22c55e",
                    color: "#fff",
                    padding: "14px 20px 18px 20px",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: "500",
                    minWidth: "320px",
                    boxShadow: "0 8px 24px rgba(34,197,94,0.35)",
                    position: "relative",
                    overflow: "hidden",
                },
                success: {
                    duration: 4000,
                    iconTheme: {
                        primary: "#fff",
                        secondary: "#22c55e",
                    },
                },
                error: {
                    style: {
                        background: "#ef4444",
                        boxShadow: "0 8px 24px rgba(239,68,68,0.35)",
                    },
                    iconTheme: {
                        primary: "#fff",
                        secondary: "#ef4444",
                    },
                },
                loading: {
                    style: {
                        background: "#0b1437",
                        boxShadow: "0 8px 24px rgba(11,20,55,0.35)",
                    },
                    iconTheme: {
                        primary: "#fff",
                        secondary: "#0b1437",
                    },
                },
            }}
        />
    );
}