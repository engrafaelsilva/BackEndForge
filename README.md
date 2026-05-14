# 🚀 BackendForge - Plataforma Inteligente de Geração de Projetos Back-End

O BackendForge é uma plataforma inteligente voltada para desenvolvedores Back-End que desejam encontrar ideias de projetos mais relevantes, desafiadoras e alinhadas às exigências reais do mercado de tecnologia.

A aplicação utiliza Inteligência Artificial para gerar sugestões personalizadas de projetos com base no perfil do usuário, tecnologias dominadas, objetivos profissionais, nível técnico e área de interesse, ajudando desenvolvedores a criarem projetos mais estratégicos para estudo, portfólio e evolução de carreira.

---

# 📸 Preview da Aplicação

## 🏠 Home Page

![Home](./docs/images/home.png)

---

## 🤖 Geração de Projetos com IA

![Generate Project](./docs/images/generate-project.png)

---

## 🗺️ Roadmap Inteligente

![Roadmap](./docs/images/roadmap.png)

---

# ✨ Problema que a Plataforma Resolve

Muitos desenvolvedores enfrentam dificuldades para:

- Encontrar ideias relevantes de projetos
- Criar projetos que realmente agreguem ao portfólio
- Estruturar aplicações completas e realistas
- Evoluir tecnicamente sem repetir projetos genéricos
- Saber quais funcionalidades e arquiteturas utilizar

O BackendForge resolve esse problema utilizando IA para sugerir projetos personalizados e alinhados ao objetivo profissional de cada desenvolvedor.

---

# 🧠 Funcionalidades

- Geração inteligente de projetos com IA
- Roadmap automático de desenvolvimento
- Sugestão de arquitetura de software
- Sugestão de funcionalidades reais
- Definição de nível de dificuldade
- Recomendações de tecnologias
- Autenticação JWT
- Login social com Google OAuth2
- Recuperação de senha por e-mail
- Sistema de autenticação seguro
- Processamento assíncrono com RabbitMQ
- API REST documentada com Swagger/OpenAPI

---

# 🛠️ Tecnologias Utilizadas

## 🔙 Back-End

- Java 21
- Spring Boot
- Spring Security
- JWT Authentication
- OAuth2 Google Login
- Spring Data JPA
- Hibernate
- PostgreSQL
- Flyway Migrations
- RabbitMQ
- Swagger/OpenAPI
- Docker & Docker Compose
- Maven

---

## 🎨 Front-End

- Next.js
- React
- TypeScript
- Tailwind CSS

---

# 🧱 Arquitetura do Projeto

Atualmente o projeto utiliza arquitetura em camadas, visando velocidade no desenvolvimento do MVP.

Futuramente a aplicação será migrada para uma arquitetura mais robusta baseada em Clean Architecture, acompanhando a evolução e escalabilidade da plataforma.

---

# 🧠 Conceitos Aplicados

- API RESTful
- Arquitetura em Camadas
- Autenticação e Autorização
- Criptografia com BCrypt
- Integração com IA
- Comunicação assíncrona
- Mensageria com RabbitMQ
- Containerização
- Versionamento de banco de dados
- Boas práticas de segurança
- Separação de responsabilidades
- Escalabilidade de software

---

# 📂 Estrutura do Projeto

```txt
src/main/java/com/backendforge

├── config
├── controller
├── dto
│   ├── request
│   └── response
├── entity
├── enums
├── repository
├── security
├── service
└── exception
