"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

export default function ClientWrapper({ children }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 d-none d-md-block">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <main className="my-4">{children}</main>
            </div>
          </div>
        </div>
        <Footer />
      </QueryClientProvider>
    </AuthProvider>
  );
}


