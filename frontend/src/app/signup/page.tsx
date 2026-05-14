"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Terminal, User, Mail, Lock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/animations";
import { useAuth } from "@/lib/auth-context";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }
    // Simple mock signup
    login(formData.name, formData.email);
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-forge-bg px-6 py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_70%)]" />
      
      <FadeIn className="relative w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2.5 mb-6 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forge-accent transition-transform group-hover:scale-110">
              <Terminal className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-forge-text">BackendForge</span>
          </Link>
          <h1 className="text-2xl font-bold text-forge-text">Crie sua conta</h1>
          <p className="text-sm text-forge-text-secondary mt-2">
            Comece sua jornada para se tornar um engenheiro sênior.
          </p>
        </div>

        <div className="rounded-2xl border border-forge-border bg-forge-card p-8 shadow-xl shadow-black/20">
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-forge-text-secondary ml-1">Nome Completo</label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-forge-text-secondary transition-colors group-focus-within:text-forge-accent" />
                <Input
                  name="name"
                  type="text"
                  placeholder="Seu nome completo"
                  className="pl-10 bg-forge-bg border-forge-border focus:border-forge-accent transition-all"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-forge-text-secondary ml-1">E-mail</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-forge-text-secondary transition-colors group-focus-within:text-forge-accent" />
                <Input
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-10 bg-forge-bg border-forge-border focus:border-forge-accent transition-all"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-forge-text-secondary ml-1">Telefone</label>
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-forge-text-secondary transition-colors group-focus-within:text-forge-accent" />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="pl-10 bg-forge-bg border-forge-border focus:border-forge-accent transition-all"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-forge-text-secondary ml-1">Senha</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-forge-text-secondary transition-colors group-focus-within:text-forge-accent" />
                  <Input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-forge-bg border-forge-border focus:border-forge-accent transition-all"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-forge-text-secondary ml-1">Confirmar</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-forge-text-secondary transition-colors group-focus-within:text-forge-accent" />
                  <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-forge-bg border-forge-border focus:border-forge-accent transition-all"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-forge-accent text-white hover:bg-forge-accent/90 h-11 group mt-2">
              Criar Conta
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-forge-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-forge-card px-3 text-forge-text-secondary">Ou cadastre-se com</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-forge-border hover:bg-forge-bg h-11">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-forge-text-secondary">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-forge-accent font-semibold hover:underline">
            Fazer login
          </Link>
        </p>
      </FadeIn>
    </div>
  );
}
