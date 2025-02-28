"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Linkedin, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

function StackedCircularFooter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMessage("Please enter an email.");
      return;
    }

    // Redirect to Gmail compose with pre-filled email
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ibrahimghani030@gmail.com&su=Subscription Request&body=Hello, I would like to contact with you using this email: ${email}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-primary/10 p-6">
            <h2 className="font-bold text-3xl bg-gradient-to-r from-gray-300 to-blue-600 text-transparent bg-clip-text">
              Ibrahim Ghani
            </h2>
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <Link href="#" className="hover:text-primary">
              Home
            </Link>
            <Link href="#" className="hover:text-primary">
              About
            </Link>
            <Link href="#" className="hover:text-primary">
              Projects
            </Link>
            <Link href="#" className="hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <PhoneCall className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2" onSubmit={handleSubmit}>
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full"
                />
              </div>
              <Button type="submit" className="rounded-full">
                Contact
              </Button>
            </form>
            {message && <p className="text-center text-sm mt-2">{message}</p>}
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { StackedCircularFooter };
