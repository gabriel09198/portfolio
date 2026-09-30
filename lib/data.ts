export const profile = {
  name: "Gabriel Carvalho",
  fullName: "Gabriel Lima de Carvalho",
  role: "Desenvolvedor Full Stack",
  location: "Aracaju, SE",
  timeZone: "America/Maceio",
  avatar: "/avatar.jpg",
  github: "https://github.com/gabriel09198",
  linkedin: "https://www.linkedin.com/in/gabriel-lima-de-carvalho-328b19386/",
  // Preencha para exibir um botão de e-mail na seção de contato.
  email: "",
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  live?: string;
  repo: string;
  tint: string;
};

export const projects: Project[] = [
  {
    slug: "opcg",
    title: "OPCG Club",
    tagline: "Comunidade de One Piece Card Game",
    year: "2026",
    role: "Projeto solo · Full stack",
    description:
      "Plataforma web para um grupo de jogadores de One Piece Card Game organizar decks, lista de desejos, trocas e conversas — com autenticação e dados em tempo real.",
    highlights: [
      "Cadastro, login e recuperação de senha com Firebase Authentication",
      "Solicitações de troca direcionadas entre jogadores e chat integrado",
      "Busca de cartas via API Route e regras de segurança no Firestore",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Firestore", "Motion"],
    live: "https://travel-card-wzfa.vercel.app",
    repo: "https://github.com/gabriel09198/TravelCard",
    tint: "#ff6a3d",
  },
  {
    slug: "jota-nunes",
    title: "Jota Nunes",
    tagline: "Cadastro de obras & memorial descritivo",
    year: "2025",
    role: "Equipe de 7 devs · Maior contribuidor",
    description:
      "Sistema para engenheiros cadastrarem obras em etapas, com painel de aprovação para gestores e geração automática do Memorial Descritivo do imóvel em Word.",
    highlights: [
      "Formulário multi-etapas validado com React Hook Form + Zod",
      "Documentos .docx gerados direto no navegador",
      "Painel do gestor para aprovar, reprovar e comentar projetos",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "React Hook Form", "Axios", "docx"],
    live: "https://jota-nunes.vercel.app",
    repo: "https://github.com/gabriel09198/jota_nunes",
    tint: "#5b8cff",
  },
  {
    slug: "atos",
    title: "Atos Capitais",
    tagline: "Dashboard comercial",
    year: "2025",
    role: "Em dupla · Front-end",
    description:
      "Dashboard de vendas com login, acompanhamento da última venda registrada e gráficos de crescimento comparados às metas do ano.",
    highlights: [
      "Gráficos de crescimento × meta com Recharts",
      "Interface com shadcn/ui e Radix, sidebar responsiva e loading animado",
      "Integração com API REST e serviço de autenticação via Axios",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts", "Framer Motion"],
    live: "https://atos-capitais.vercel.app/login",
    repo: "https://github.com/gabriel09198/atos_capitais",
    tint: "#2fe6a0",
  },
];

export const stats = [
  { value: "03", label: "apps publicados na Vercel" },
  { value: "07", label: "devs no maior projeto em equipe" },
  { value: "93%", label: "do código público em TypeScript" },
  { value: "2023", label: "no GitHub desde" },
];

export const stackGroups = [
  {
    title: "Front-end",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS", "Bootstrap"],
  },
  {
    title: "Back-end",
    items: ["C#", "Python", "PHP", "REST APIs", "Next.js API Routes"],
  },
  {
    title: "Dados & Auth",
    items: ["Firebase Auth", "Cloud Firestore", "PostgreSQL", "Prisma"],
  },
  {
    title: "UI & bibliotecas",
    items: ["shadcn/ui", "Radix UI", "Framer Motion", "Recharts", "Zod", "React Hook Form"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

// Bytes por linguagem nos repositórios públicos (API do GitHub, set/2026).
export const languages = [
  { name: "TypeScript", bytes: 327066, color: "#3178c6" },
  { name: "CSS", bytes: 21202, color: "#a371f7" },
  { name: "JavaScript", bytes: 2651, color: "#f1e05a" },
];

export const marquee = [
  "Next.js",
  "React",
  "TypeScript",
  "C#",
  "Python",
  "Tailwind CSS",
  "Firebase",
  "PostgreSQL",
  "Prisma",
  "Framer Motion",
  "Zod",
  "Git",
];

export const timeline = [
  {
    when: "Hoje",
    title: "Aprofundando C#, Next.js, React e Python",
    text: "Estudos e trabalhos focados em back-end e front-end.",
  },
  {
    when: "2026",
    title: "OPCG Club",
    text: "Primeiro produto full stack solo, com Firebase e dados em tempo real.",
  },
  {
    when: "2025",
    title: "Jota Nunes",
    text: "Sistema de obras em equipe de 7 pessoas, liderando em número de commits.",
  },
  {
    when: "2025",
    title: "Atos Capitais",
    text: "Dashboard comercial com gráficos e autenticação, desenvolvido em dupla.",
  },
  {
    when: "2023",
    title: "Primeiros repositórios",
    text: "Conta criada no GitHub e início dos projetos públicos.",
  },
];
