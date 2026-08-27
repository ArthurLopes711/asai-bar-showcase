import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logo from "@/assets/asai-logo.jpg.asset.json";
import heroImg from "@/assets/hero.jpg";
import item1 from "@/assets/item-1.jpg";
import item2 from "@/assets/item-2.jpg";
import item3 from "@/assets/item-3.jpg";
import item4 from "@/assets/item-4.jpg";
import item5 from "@/assets/item-5.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";

/**
 * ASAÍ BAR — página única.
 *
 * DADOS CONFIRMADOS (perfil público @asai_bar): nome, logo, categoria
 * "Lanchonete", produtos smoothie bowls e paninis.
 * DADOS NÃO CONFIRMADOS: telefone, WhatsApp, horário da unidade da Asa Norte,
 * preços e itens exatos do cardápio. Estão marcados como demonstração abaixo —
 * o proprietário deve substituir pelos dados reais.
 */

const INSTAGRAM_URL = "https://instagram.com/asai_bar";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=CLN+202+Asa+Norte+Bras%C3%ADlia+DF";

// TODO (proprietário): substituir nomes, descrições e preços reais.
const menu = [
  {
    nome: "Smoothie bowl tradicional",
    desc: "Base cremosa de açaí com frutas frescas e crocância por cima.",
    img: item1,
  },
  {
    nome: "Smoothie tropical",
    desc: "Mix de frutas batido na hora, para levar e beber gelado.",
    img: item2,
  },
  {
    nome: "Panini na chapa",
    desc: "Pão prensado, recheio quentinho e queijo derretido.",
    img: item3,
  },
  {
    nome: "Bowl salgado",
    desc: "Opção leve e completa para o intervalo do almoço.",
    img: item4,
  },
  {
    nome: "Café gelado & acompanhamento",
    desc: "Para acompanhar o bowl ou dar aquela pausa da tarde.",
    img: item5,
  },
];

const diferenciais = [
  {
    titulo: "Rápido e prático",
    texto: "Pensado para quem tem pouco tempo e não quer abrir mão de comer bem.",
  },
  {
    titulo: "Sabor fresco",
    texto: "Frutas, bowls e lanches montados na hora, do jeito que você pedir.",
  },
  {
    titulo: "Para qualquer hora",
    texto: "Café da manhã, intervalo do trabalho, pós-treino ou fim de tarde.",
  },
  {
    titulo: "Clima descontraído",
    texto: "Um ponto simpático na Asa Norte para comer com calma ou levar.",
  },
];

const galeria = [
  { src: gal1, alt: "Ambiente claro de uma casa de smoothie bowls (imagem ilustrativa)" },
  { src: gal2, alt: "Bowl de frutas servido na mesa (imagem ilustrativa)" },
  { src: gal3, alt: "Panini na chapa com suco natural (imagem ilustrativa)" },
  { src: gal4, alt: "Frutas tropicais frescas (imagem ilustrativa)" },
];

const secoes = [
  { id: "sobre", label: "Sobre" },
  { id: "cardapio", label: "Cardápio" },
  { id: "galeria", label: "Galeria" },
  { id: "horario", label: "Horário" },
  { id: "localizacao", label: "Localização" },
  { id: "contato", label: "Contato" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Asaí Bar — Smoothie bowls e paninis | Asa Norte, Brasília" },
      {
        name: "description",
        content:
          "Asaí Bar na CLN 202, Asa Norte, Brasília - DF. Smoothie bowls, paninis e lanches frescos para qualquer hora do dia.",
      },
      { property: "og:title", content: "Asaí Bar — Smoothie bowls e paninis" },
      {
        property: "og:description",
        content: "Smoothie bowls e paninis na CLN 202, Asa Norte, Brasília - DF.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Asaí Bar",
          servesCuisine: "Smoothie bowls, paninis",
          sameAs: [INSTAGRAM_URL],
          address: {
            "@type": "PostalAddress",
            streetAddress: "CLN 202, Asa Norte",
            addressLocality: "Brasília",
            addressRegion: "DF",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
});

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#topo" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logo.url}
        alt="Logo do Asaí Bar"
        width={48}
        height={48}
        className="size-10 rounded-full object-cover ring-1 ring-border"
      />
      <span className="font-display text-lg font-extrabold tracking-tight text-ink">
        Asaí <span className="text-primary">Bar</span>
      </span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Wordmark />
        <div className="hidden items-center gap-7 md:flex">
          {secoes.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#cardapio"
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            Ver cardápio
          </a>
        </div>
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border p-2.5 md:hidden"
        >
          <span className="block h-0.5 w-5 bg-foreground" />
          <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          <span className="mt-1 block h-0.5 w-5 bg-foreground" />
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-4 pb-5 pt-2 md:hidden">
          {secoes.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-base font-medium text-foreground last:border-0"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function DemoTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-primary/40 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}

function Index() {
  return (
    <div id="topo" className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-primary/15 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="reveal">
            <DemoTag>Smoothie bowls · Paninis</DemoTag>
            <h1 className="mt-5 text-5xl font-black leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
              ASAÍ <span className="text-gradient-brand">BAR</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              Fresco, rápido e do seu jeito. Bowls e lanches montados na hora, no coração da Asa
              Norte.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cardapio"
                className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
              >
                Conheça o cardápio
              </a>
              <a
                href="#localizacao"
                className="rounded-full border border-ink/15 bg-card px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                Como chegar
              </a>
            </div>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              CLN 202 · Asa Norte · Brasília - DF
            </p>
          </div>

          <div className="reveal relative">
            <div className="overflow-hidden rounded-[2rem] shadow-float">
              <img
                src={heroImg}
                alt="Bowl de frutas com granola — imagem ilustrativa do conceito"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-right text-xs text-muted-foreground">
              Imagem ilustrativa — substituir por fotos do estabelecimento.
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle eyebrow="Sobre" title="Comida fresca, sem complicação">
              O Asaí Bar é uma lanchonete de bowls e paninis: coisa boa feita na hora, para comer
              ali mesmo ou levar. A proposta é simples — ingredientes frescos, atendimento próximo e
              um cardápio que combina tanto com o café da manhã quanto com o fim da tarde.
            </SectionTitle>
            {/* TODO (proprietário): substituir o texto acima pela descrição oficial da marca. */}
            <p className="mt-6 text-sm text-muted-foreground">
              Texto de demonstração — pode ser substituído pela descrição oficial do
              estabelecimento.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {diferenciais.slice(0, 2).map((d) => (
              <div key={d.titulo} className="rounded-3xl bg-card p-6 shadow-card">
                <h3 className="font-display text-lg font-bold text-ink">{d.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Cardápio" title="Sugestões de cardápio">
              Itens de demonstração para ilustrar o layout. Nomes, descrições e preços devem ser
              confirmados e substituídos pelo estabelecimento.
            </SectionTitle>
            <DemoTag>Demonstração</DemoTag>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((item) => (
              <li
                key={item.nome}
                className="group overflow-hidden rounded-3xl bg-card shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={`${item.nome} — imagem ilustrativa`}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{item.nome}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                  {/* TODO (proprietário): inserir o preço real. */}
                  <span className="shrink-0 rounded-full border border-dashed border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
                    R$ —
                  </span>
                </div>
              </li>
            ))}
            <li className="flex flex-col items-start justify-center rounded-3xl border-2 border-dashed border-border p-8">
              <h3 className="font-display text-lg font-bold text-ink">Mais itens</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Espaço preparado para os produtos reais do Asaí Bar.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Galeria" title="O clima da casa">
            Imagens ilustrativas do conceito. Estrutura pronta para receber as fotos reais do
            estabelecimento.
          </SectionTitle>
          <DemoTag>Imagens ilustrativas</DemoTag>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galeria.map((g, i) => (
            <figure
              key={g.alt}
              className={`overflow-hidden rounded-3xl shadow-card ${
                i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={900}
                height={700}
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-64"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-ink py-20 text-background sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Diferenciais</p>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold sm:text-4xl">
            Por que passar no Asaí Bar
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d, i) => (
              <div key={d.titulo} className="rounded-3xl border border-background/15 p-6">
                <span className="font-display text-3xl font-black text-accent">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-bold">{d.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Depoimentos" title="O que dizem os clientes">
            Espaços preparados para avaliações reais. Nenhum depoimento foi inventado.
          </SectionTitle>
          <DemoTag>Aguardando avaliações reais</DemoTag>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <blockquote
              key={n}
              className="rounded-3xl border-2 border-dashed border-border bg-card/60 p-7"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                “Depoimento de cliente — substituir por avaliação real.”
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="size-9 rounded-full bg-muted" />
                <span className="text-sm font-semibold text-muted-foreground">Nome do cliente</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* HORÁRIO + LOCALIZAÇÃO */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div id="horario" className="rounded-3xl bg-card p-8 shadow-card sm:p-10">
            <SectionTitle eyebrow="Visite" title="Horário de funcionamento" />
            {/* TODO (proprietário): preencher os horários reais da unidade da Asa Norte. */}
            <p className="mt-6 rounded-2xl bg-muted px-5 py-4 text-sm font-semibold text-muted-foreground">
              Horários — confirmar com o estabelecimento
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Segunda a sexta", "Sábado", "Domingo"].map((dia) => (
                <li
                  key={dia}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0"
                >
                  <span className="font-medium text-ink">{dia}</span>
                  <span className="text-muted-foreground">a confirmar</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="localizacao" className="rounded-3xl bg-card p-8 shadow-card sm:p-10">
            <SectionTitle eyebrow="Onde estamos" title="Localização" />
            <p className="mt-6 font-display text-xl font-bold text-ink">
              CLN 202, Asa Norte, Brasília - DF
            </p>
            <div className="mt-6 flex h-44 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/60 text-sm text-muted-foreground">
              Espaço reservado para o mapa
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              Ver localização
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-brand px-6 py-14 text-center text-primary-foreground shadow-float sm:px-12 sm:py-20">
          <h2 className="text-3xl font-extrabold sm:text-5xl">Quer conhecer o Asaí Bar?</h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/85">
            Passe na loja, siga o perfil e acompanhe as novidades.
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            {/* TODO (proprietário): inserir telefone e WhatsApp reais. */}
            <div className="rounded-2xl border border-primary-foreground/25 px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                Telefone
              </p>
              <p className="mt-1 text-sm font-semibold">a confirmar</p>
            </div>
            <div className="rounded-2xl border border-primary-foreground/25 px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                WhatsApp
              </p>
              <p className="mt-1 text-sm font-semibold">a confirmar</p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-primary-foreground/25 px-5 py-4 transition-colors hover:bg-primary-foreground/10"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                Instagram
              </p>
              <p className="mt-1 text-sm font-semibold">@asai_bar</p>
            </a>
            <div className="rounded-2xl border border-primary-foreground/25 px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                Endereço
              </p>
              <p className="mt-1 text-sm font-semibold">CLN 202, Asa Norte, Brasília - DF</p>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div>
            <Wordmark />
            <p className="mt-4 text-sm text-muted-foreground">
              CLN 202 · Asa Norte · Brasília - DF
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {secoes.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-border px-4 py-5 sm:px-6">
          <p className="mx-auto max-w-6xl text-xs leading-relaxed text-muted-foreground">
            Site conceito / demonstração. Cardápio, preços, horários e contatos são exemplos e
            precisam ser confirmados pelo Asaí Bar. Imagens ilustrativas.
          </p>
        </div>
      </footer>
    </div>
  );
}
