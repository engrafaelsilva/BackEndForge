"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/animations";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulating API call for demonstration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
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
          <h1 className="text-2xl font-bold text-forge-text">Recuperar senha</h1>
          <p className="text-sm text-forge-text-secondary mt-2 text-center px-4">
            {isSubmitted 
              ? "Verifique seu e-mail para as instruções de recuperação."
              : "Insira seu e-mail e enviaremos um link para você redefinir sua senha."}
          </p>
        </div>

        <div className="rounded-2xl border border-forge-border bg-forge-card p-8 shadow-xl shadow-black/20">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-forge-text-secondary ml-1">E-mail</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-forge-text-secondary transition-colors group-focus-within:text-forge-accent" />
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="pl-10 bg-forge-bg border-forge-border focus:border-forge-accent transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-forge-accent text-white hover:bg-forge-accent/90 h-11 group"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <>
                    Enviar Link de Recuperação
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forge-success/10 text-forge-success">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-forge-text">E-mail enviado!</h3>
                <p className="text-sm text-forge-text-secondary">
                  Se houver uma conta associada a <strong>{email}</strong>, você receberá um link em breve.
                </p>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-forge-border text-forge-text-secondary hover:bg-forge-bg h-11"
                onClick={() => setIsSubmitted(false)}
              >
                Tentar outro e-mail
              </Button>
            </motion.div>
          )}

          <div className="mt-8 pt-6 border-t border-forge-border">
            <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-forge-text-secondary hover:text-forge-accent transition-colors group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Voltar para o login
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
