"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Server,
  Cloud,
  CheckCircle2,
  Database,
  Bot,
  Activity,
  Terminal,
} from "lucide-react";

// Brand Icon SVGs with precise vector rendering
function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.232 23 20.463" className="w-6 h-6" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextjsIcon() {
  return (
    <svg viewBox="0 0 180 180" className="w-6 h-6" fill="currentColor">
      <mask height="180" id="mask0_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask="url(#mask0_next)">
        <circle cx="90" cy="90" data-circle="true" fill="#0f172a" r="90" />
        <path d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#next_paint0)" />
        <rect fill="url(#next_paint1)" height="72" width="12" x="115" y="54" />
      </g>
      <defs>
        <linearGradient id="next_paint0" gradientUnits="userSpaceOnUse" x1="109" x2="144.5" y1="116.5" y2="160.5">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next_paint1" gradientUnits="userSpaceOnUse" x1="121" x2="120.799" y1="54" y2="106.875">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6">
      <rect width="32" height="32" rx="4" fill="#3178C6" />
      <path d="M18.8 13.8h2.3v10.5h-2.3V13.8zm-7.6 2.3h-3v-2.3h8.3v2.3h-3v8.2h-2.3v-8.2zm11.5 6.6c.7.5 1.7.8 2.7.8 1.4 0 2.2-.6 2.2-1.5 0-.9-.6-1.3-2-1.8-1.9-.7-3.1-1.6-3.1-3.2 0-1.8 1.4-3.1 3.7-3.1 1.2 0 2.2.3 2.8.7l-.6 1.8c-.5-.3-1.3-.6-2.2-.6-1.2 0-1.8.6-1.8 1.3 0 .8.6 1.2 1.9 1.7 2 .8 3.2 1.6 3.2 3.3 0 1.9-1.5 3.3-4.1 3.3-1.4 0-2.6-.4-3.3-.9l.6-1.9z" fill="white" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

function ReactNativeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#61DAFB">
      <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-7C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6">
      <path d="M16 2.5l11.7 6.8v13.4L16 29.5 4.3 22.7V9.3L16 2.5z" fill="#339933" />
      <path d="M16 6.5l8 4.6v9.2L16 25l-8-4.7v-9.2L16 6.5z" fill="#215732" opacity="0.3" />
      <path d="M16 10a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0v-4a2 2 0 0 1 2-2z" fill="#ffffff" />
      <path d="M12 18h8v2h-8z" fill="#ffffff" />
    </svg>
  );
}

function NestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#E0234E">
      <path d="M11.99 2C8.36 2 5.09 3.82 3.17 6.84L2 14.88l3.18-1.84c.83 2.87 2.92 5.14 5.67 6.27l1.14-.66-.64-1.11c-2.31-.95-4.06-2.85-4.75-5.26l4.28 2.47 5.11-2.95V5.81L11.99 2zm5.72 4.88l-3.8 2.19v4.39l3.8-2.19V6.88z" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M11.927 2c-3.13 0-2.937 1.358-2.937 1.358l.003 1.408h2.984v.427H6.115S4 4.957 4 8.083c0 3.125 1.854 3.01 1.854 3.01h1.107v-1.547s-.06-1.854 1.824-1.854h3.146s1.764.03 1.764-1.704V4.18s.262-2.18-3.768-2.18zm-1.677 1.096a.662.662 0 1 1 0 1.325.662.662 0 0 1 0-1.325z" fill="#3776AB" />
      <path d="M12.073 22c3.13 0 2.937-1.358 2.937-1.358l-.003-1.408H12.023v-.427h5.862S20 19.043 20 15.917c0-3.125-1.854-3.01-1.854-3.01h-1.107v1.547s.06 1.854-1.824 1.854h-3.146s-1.764-.03-1.764 1.704v1.812s-.262 2.18 3.768 2.18zm1.677-1.096a.662.662 0 1 1 0-1.325.662.662 0 0 1 0 1.325z" fill="#FFD438" />
    </svg>
  );
}

function ExpressIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center font-mono font-bold text-white text-[10px]">
      ex
    </div>
  );
}

function GraphQLIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#E10098">
      <path d="M12 2a1.8 1.8 0 0 0-1.6 1L3.9 14.8a1.8 1.8 0 0 0 .5 2.2l7 5.2a1.8 1.8 0 0 0 2.2 0l7-5.2a1.8 1.8 0 0 0 .5-2.2L13.6 3A1.8 1.8 0 0 0 12 2zm0 2.8l6.1 10.6-5.1 3.8-5.1-3.8L12 4.8z" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.575a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm0 2.715h2.118a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm-2.954 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.075a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.118a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.186H8.075a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm-2.955 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185zm-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.166a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185zm8.863-5.43h2.118a.186.186 0 00.186-.186V3.575a.186.186 0 00-.186-.186h-2.118a.186.186 0 00-.186.186v1.887c0 .102.083.186.186.186zm2.954 2.715h2.119a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm10.744 5.568c-.378-.235-.984-.337-1.579-.19-1.077.265-1.921-.497-2.155-.705-.286-.255-.75-.853-.941-1.398-.19-.544-.13-1.066-.13-1.066s.745-.294 1.637-.103c.892.19 1.458.74 1.458.74s.655-.91 1.713-.807c1.057.102 1.32.748 1.32.748s.575-.544 1.472-.36c.897.184 1.139.816 1.139.816s-.46.367-1.056.49-.596.122-1.356-.041-1.638-.135c-.282-.095-.568-.135-.845-.082-.276.054-.537.245-.537.245l-.039.02a3.86 3.86 0 00-.01.387c0 .03.003.06.004.09.288 1.32-.424 2.37-1.787 2.37zM.163 12.875s-.377 1.83 1.054 3.738c1.431 1.908 4.293 3.637 10.36 3.637 6.068 0 10.158-2.613 11.45-5.518.232-.52.373-1.1.373-1.714v-.143H.163z" />
    </svg>
  );
}

function KubernetesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#326CE5">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.3L5.34 8.1v7.8L12 19.7l6.66-3.8V8.1L12 4.3zm0 4.2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
    </svg>
  );
}

function AWSIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M6.544 10.589c-.643.08-1.28.212-1.895.395-.818.243-1.299.704-1.299 1.341 0 .942 1.01 1.547 2.453 1.547.456 0 .894-.055 1.288-.162.628-.17 1.077-.487 1.258-.888.067-.148.094-.316.094-.523v-1.71zm1.599-2.327v.982c-.509-.168-1.127-.263-1.802-.263-1.428 0-2.585.394-3.275 1.114-.548.571-.828 1.309-.828 2.186 0 1.037.42 1.889 1.196 2.427.79.549 1.879.827 3.09.827.844 0 1.637-.132 2.29-.383v.258c0 .285.08.498.242.639.16.14.417.21.766.21.282 0 .61-.038.976-.113v.81c-.343.104-.814.162-1.394.162-.803 0-1.423-.197-1.844-.585-.42-.388-.635-.974-.635-1.745v-4.14c0-.705-.18-1.218-.538-1.527-.457-.393-1.185-.594-2.145-.594-.794 0-1.57.14-2.317.419l.348.847c.594-.22 1.246-.334 1.932-.334.619 0 1.08.115 1.36.342.279.227.42.582.42 1.054zm12.307 7.03c-.279.208-.667.314-1.154.314-.547 0-.964-.13-1.24-.388-.276-.258-.415-.658-.415-1.19v-4.664h1.492v4.545c0 .542.348.814 1.037.814.414 0 .748-.094.996-.282l.284.851zm-7.614.314h-1.458l-1.92-6.52h1.496l1.242 4.78 1.229-4.78h1.341l1.229 4.78 1.242-4.78h1.496l-1.92 6.52h-1.458l-1.389-5.06-1.389 5.06z" fill="#232F3E" />
      <path d="M18.896 17.587c-3.138 2.316-7.754 3.535-11.666 3.535-5.5 0-10.457-2.039-14.216-5.45-.333-.304-.035-.717.369-.472 4.07 2.457 9.07 3.935 14.254 3.935 3.487 0 7.378-.824 10.87-2.529.531-.259.974.397.389.981zm1.226-1.383c-.397-.512-2.613-.243-3.614-.12-.303.037-.35-.227-.076-.421 1.777-1.258 4.697-.894 5.044-.457.348.438-.088 3.393-1.745 4.793-.257.216-.503.1-.389-.184.379-.937 1.176-3.099.78-3.611z" fill="#FF9900" />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#336791">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.8 15.6c-.6.2-1.3.3-2 .3-2.1 0-3.6-1.2-3.8-3.2l1.6-.3c.1 1.2 1 2 2.3 2 .5 0 1-.1 1.4-.2l.5 1.4zm2.4-4.8c-.3.2-.8.3-1.4.3-1.1 0-1.8-.7-1.8-1.8 0-1.2.7-1.9 1.8-1.9.6 0 1.1.1 1.4.3v3.4zm-.2-4.9c-.6-.3-1.4-.4-2.2-.4-2.2 0-3.7 1.4-3.7 3.7 0 2.2 1.4 3.6 3.7 3.6.8 0 1.6-.1 2.2-.4v-6.5z" />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#47A248">
      <path d="M12 1.5C12 1.5 5 8.5 5 14.5c0 3.8 3.1 7 7 7s7-3.2 7-7c0-6-7-13-7-13zm.1 18.5c-.3 0-.6-.1-.9-.2V4.5c.3.5.7 1.1 1.1 1.8 1.9 3.2 3.8 7.3 3.8 8.2 0 3-1.8 5.5-4 5.5z" />
    </svg>
  );
}

function RedisIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#DC382D">
      <path d="M12 3L2 8l10 5 10-5-10-5zm0 8.5L4 7.6v4.9l8 3.9 8-3.9V7.6l-8 3.9zm0 6L4 13.6v4.9l8 3.9 8-3.9v-4.9l-8 3.9z" />
    </svg>
  );
}

function OpenAIIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#10A37F">
      <path d="M22.28 9.77a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.06 6.06 0 0 0-4.9-2.5c-3.1 0-5.69 2.34-6 5.41a6.01 6.01 0 0 0-3.98 2.88 5.99 5.99 0 0 0 .8 6.94 6 6 0 0 0 .52 4.9 6.05 6.05 0 0 0 6.51 2.91 6.06 6.06 0 0 0 4.9 2.5c3.1 0 5.69-2.34 6-5.41a6.01 6.01 0 0 0 3.98-2.88 5.99 5.99 0 0 0-.8-6.94zM12 14.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function FastAPIIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#009688">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-5-5.5h3.5V6.5l5 5.5H13v4.5z" />
    </svg>
  );
}

interface TechItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "cloud" | "database" | "ai";
  tag: string;
  description: string;
  badge: string;
  accent: string;
  icon: () => React.JSX.Element;
}

const technologies: TechItem[] = [
  // Frontend
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    tag: "SSR & Edge Framework",
    description: "Server-side rendering, App Router & lightning-fast edge performance with automated SEO.",
    badge: "Core Framework",
    accent: "group-hover:border-slate-800 group-hover:shadow-slate-500/10",
    icon: NextjsIcon,
  },
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    tag: "Reactive UI Library",
    description: "Component-driven architectures, reactive state management and fluid user interfaces.",
    badge: "Interactive UI",
    accent: "group-hover:border-cyan-400 group-hover:shadow-cyan-500/10",
    icon: ReactIcon,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    tag: "Type Safety & Scale",
    description: "Strict compile-time type validation ensuring reliable, self-documenting enterprise code.",
    badge: "100% Typed",
    accent: "group-hover:border-blue-500 group-hover:shadow-blue-500/10",
    icon: TypeScriptIcon,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    tag: "Design System",
    description: "Utility-first design architecture enabling rapid, consistent, pixel-perfect responsive styling.",
    badge: "Modern Styling",
    accent: "group-hover:border-sky-400 group-hover:shadow-sky-500/10",
    icon: TailwindIcon,
  },
  {
    id: "reactnative",
    name: "React Native",
    category: "frontend",
    tag: "Mobile Cross-Platform",
    description: "Native iOS and Android mobile app builds sharing high-efficiency core business logic.",
    badge: "iOS & Android",
    accent: "group-hover:border-cyan-400 group-hover:shadow-cyan-500/10",
    icon: ReactNativeIcon,
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    tag: "Event-Driven Runtime",
    description: "High-throughput asynchronous I/O powering scalable microservices and real-time APIs.",
    badge: "High Throughput",
    accent: "group-hover:border-green-500 group-hover:shadow-green-500/10",
    icon: NodeIcon,
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "backend",
    tag: "Enterprise Architecture",
    description: "Structured modular backend framework providing dependency injection and robust security.",
    badge: "Enterprise Ready",
    accent: "group-hover:border-red-500 group-hover:shadow-red-500/10",
    icon: NestIcon,
  },
  {
    id: "python",
    name: "Python & FastAPI",
    category: "backend",
    tag: "Async APIs & Data",
    description: "High-performance Python APIs, data parsing pipelines and backend machine learning services.",
    badge: "Data & APIs",
    accent: "group-hover:border-teal-500 group-hover:shadow-teal-500/10",
    icon: PythonIcon,
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    tag: "Lightweight REST",
    description: "Minimalist, battle-tested HTTP layer engineered for fast, lightweight microservices.",
    badge: "Lightweight",
    accent: "group-hover:border-slate-700 group-hover:shadow-slate-500/10",
    icon: ExpressIcon,
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: "backend",
    tag: "Data Query Layer",
    description: "Precise, client-driven typed queries eliminating overfetching across multi-client apps.",
    badge: "Zero Overfetch",
    accent: "group-hover:border-pink-500 group-hover:shadow-pink-500/10",
    icon: GraphQLIcon,
  },

  // Cloud & DevOps
  {
    id: "docker",
    name: "Docker",
    category: "cloud",
    tag: "Containerization",
    description: "Reproducible container environments guaranteeing seamless parity from local dev to production.",
    badge: "Container Standard",
    accent: "group-hover:border-blue-400 group-hover:shadow-blue-500/10",
    icon: DockerIcon,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "cloud",
    tag: "Cluster Orchestration",
    description: "Automated scaling, self-healing deployments and multi-zone resilience for cloud workloads.",
    badge: "Auto Healing",
    accent: "group-hover:border-indigo-500 group-hover:shadow-indigo-500/10",
    icon: KubernetesIcon,
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: "cloud",
    tag: "Cloud Infrastructure",
    description: "Enterprise compute, serverless Lambdas, secure S3 object storage and global CDN distribution.",
    badge: "Enterprise Cloud",
    accent: "group-hover:border-orange-500 group-hover:shadow-orange-500/10",
    icon: AWSIcon,
  },
  {
    id: "cicd",
    name: "CI/CD Automation",
    category: "cloud",
    tag: "DevOps Pipelines",
    description: "Continuous integration, automated security checks, code quality gates and zero-downtime deploy.",
    badge: "Zero Downtime",
    accent: "group-hover:border-teal-500 group-hover:shadow-teal-500/10",
    icon: FastAPIIcon,
  },

  // Database
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    tag: "Relational & Vector",
    description: "ACID-compliant relational database management with pgvector support for AI search applications.",
    badge: "ACID Compliant",
    accent: "group-hover:border-sky-600 group-hover:shadow-sky-500/10",
    icon: PostgresIcon,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    tag: "Document NoSQL",
    description: "High-flexibility JSON-like document model ideal for rapid iteration and high-volume workloads.",
    badge: "Flexible Schema",
    accent: "group-hover:border-emerald-500 group-hover:shadow-emerald-500/10",
    icon: MongoIcon,
  },
  {
    id: "redis",
    name: "Redis",
    category: "database",
    tag: "In-Memory Caching",
    description: "Ultra-low-latency in-memory key-value storage, session persistence and pub/sub message brokers.",
    badge: "< 1ms Latency",
    accent: "group-hover:border-red-500 group-hover:shadow-red-500/10",
    icon: RedisIcon,
  },

  // AI & Automation
  {
    id: "openai",
    name: "OpenAI & LLMs",
    category: "ai",
    tag: "Generative Intelligence",
    description: "Custom autonomous agents, fine-tuned domain models and context-aware natural language tools.",
    badge: "Autonomous Agents",
    accent: "group-hover:border-emerald-400 group-hover:shadow-emerald-500/10",
    icon: OpenAIIcon,
  },
  {
    id: "rag",
    name: "LangChain & RAG",
    category: "ai",
    tag: "Contextual Retrieval",
    description: "Enterprise knowledge base integration with vector semantic search and grounded answers.",
    badge: "Grounded RAG",
    accent: "group-hover:border-[#FF6600] group-hover:shadow-orange-500/10",
    icon: FastAPIIcon,
  },
];

const categories = [
  { id: "all", label: "All Technologies", icon: Layers },
  { id: "frontend", label: "Frontend & Mobile", icon: Cpu },
  { id: "backend", label: "Backend & APIs", icon: Server },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
  { id: "database", label: "Databases & Cache", icon: Database },
  { id: "ai", label: "AI & Intelligence", icon: Bot },
] as const;

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/60 border-t border-slate-200/70">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-[#008080]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[280px] bg-[#FF6600]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#008080]/10 text-[#008080] border border-[#008080]/20 tracking-wide uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern & Scalable Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-5 text-slate-900 tracking-tight"
          >
            Our <span className="text-[#008080]">Technology Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 text-base md:text-lg leading-relaxed"
          >
            We leverage industry-standard frameworks, robust cloud architectures, and modern AI toolchains to build high-performance, battle-tested digital solutions.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count =
              cat.id === "all"
                ? technologies.length
                : technologies.filter((t) => t.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#008080] text-white shadow-md shadow-[#008080]/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${tech.accent}`}
                >
                  {/* Top Bar: Icon + Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50/90 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-slate-100/80 transition-all duration-300">
                        <IconComponent />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                        {tech.badge}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#008080] transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 tracking-wide">
                        {tech.tag}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Production Ready</span>
                    </span>
                    <span className="text-[11px] text-slate-400 capitalize font-medium">
                      {tech.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Architectural Pillars Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#008080]/10 flex items-center justify-center text-[#008080] shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Sub-Second Speed</h4>
              <p className="text-xs text-slate-500 mt-0.5">Optimized for high Core Web Vitals and edge speed.</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Enterprise Security</h4>
              <p className="text-xs text-slate-500 mt-0.5">OWASP standards, encrypted storage & zero-trust auth.</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">99.9% Uptime</h4>
              <p className="text-xs text-slate-500 mt-0.5">Elastic containers with auto-healing and failover.</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Automated CI/CD</h4>
              <p className="text-xs text-slate-500 mt-0.5">Automated test suites & zero-downtime releases.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
