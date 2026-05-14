"use client";

import { FadeIn } from "@/components/animations";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <FadeIn>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-forge-accent/10 p-2.5">
            <Settings className="h-5 w-5 text-forge-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-forge-text">Configurações</h1>
            <p className="text-sm text-forge-text-secondary">
              Gerencie suas preferências e configurações.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 space-y-4">
          {[
            { label: "Tema", desc: "Dark mode ativo", value: "Dark" },
            { label: "Idioma", desc: "Idioma da interface", value: "Português (BR)" },
            { label: "Notificações", desc: "Receber atualizações de progresso", value: "Ativo" },
          ].map((setting) => (
            <div
              key={setting.label}
              className="flex items-center justify-between rounded-xl border border-forge-border bg-forge-card p-4"
            >
              <div>
                <p className="text-sm font-semibold text-forge-text">{setting.label}</p>
                <p className="text-xs text-forge-text-secondary">{setting.desc}</p>
              </div>
              <span className="rounded-lg border border-forge-border bg-forge-bg px-3 py-1.5 text-xs font-medium text-forge-text-secondary">
                {setting.value}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
