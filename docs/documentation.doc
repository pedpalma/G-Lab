  G-Lab Telecom
  Landing Page - Versão 1.0
  Data: Março de 2026

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                                ÍNDICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Visão Geral do Projeto
  2. Estrutura de Arquivos
  3. Dependências Externas
  4. Arquitetura CSS - Módulos e Responsabilidades
  5. Arquitetura JavaScript - Módulos e API Pública
  6. Sistema de Design
  7. Componentes HTML - Referência Completa
  8. Sistema de Responsividade
  9. Convenções de Nomenclatura (BEM)
  10. Fluxo de Dados e Estado (JS)
  11. Performance e Acessibilidade
  12. Pontos de Extensão


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    1. VISÃO GERAL DO PROJETO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Projeto  : G-Lab Telecom - Landing Page
  Stack    : HTML5 + CSS3 (modular) + JavaScript ES Modules (vanilla)
  Tipo     : Single Page (SPA sem framework)
  Requisitos: Navegador moderno com suporte a ES Modules, CSS Custom
              Properties e IntersectionObserver API.
  Sem build : O projeto não utiliza bundler.
              O sistema de módulos JS é resolvido nativamente pelo
              navegador via <script type="module">.

  Propósito: Landing page comercial para apresentação de planos de
             internet fibra óptica, com seções de benefícios, planos
             com abas interativas, contato e FAQ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        2. ESTRUTURA DE ARQUIVOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  /
  ├── index.html                        Ponto de entrada da aplicação
  ├── logo-white-big.png                Logotipo principal (usado no header e footer)
  ├── background-portrait.jpg           Imagem de fundo do Hero
  ├── background-blue-woman.jpg         Imagem de fundo do Banner CTA
  ├── content-gamer.jpg                 Foto contextual - seção Diferenciais
  ├── content-couple-using-laptop.jpg   Foto contextual - Use Case 1
  ├── content-teen-smiling.jpg          Foto contextual - Use Case 2
  │
  └── assets/
      ├── css/                          Estilos modulares (17 arquivos)
      │   ├── base.css                  Reset, variáveis CSS, tipografia, container
      │   ├── buttons.css               Sistema de botões (variantes e tamanhos)
      │   ├── topbar.css                Faixa de contato acima do header
      │   ├── header.css                Barra de navegação sticky
      │   ├── mobile-menu.css           Overlay de navegação mobile
      │   ├── hero.css                  Seção hero (fundo, card, stats)
      │   ├── diferenciais.css          Seção de benefícios / diferenciais
      │   ├── banner-cta.css            Faixa intermediária com CTA
      │   ├── planos.css                Abas e cards de planos
      │   ├── use-cases.css             Cards de casos de uso
      │   ├── sobre.css                 Seção institucional
      │   ├── contato.css               Cards de canais de atendimento
      │   ├── faq.css                   Accordion de FAQ
      │   ├── footer.css                Rodapé
      │   ├── whatsapp.css              Botão flutuante WhatsApp
      │   ├── reveal.css                Animação de scroll reveal
      │   └── responsive.css            Todos os media queries
      │
      └── js/                           Módulos JavaScript (10 arquivos)
          ├── main.js                   Entry point - importa e inicializa tudo
          ├── headerScroll.js           Sombra no header ao rolar
          ├── mobileMenu.js             Toggle do menu mobile
          ├── scrollSpy.js              Link ativo na nav ao rolar
          ├── smoothScroll.js           Rolagem suave para âncoras
          ├── scrollReveal.js           Fade-in de elementos via IntersectionObserver
          ├── tabs.js                   Abas de planos (Internet / Streaming)
          ├── streamTabs.js             Sub-abas de streaming (WatchBR+Max / WatchBR)
          ├── faq.js                    Accordion de FAQ
          └── statsCounter.js           Animação de contagem nos números do hero


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    3. DEPENDÊNCIAS EXTERNAS (CDN)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  a) Google Fonts
     URL   : https://fonts.googleapis.com
     Fontes: Sora (300, 400, 500, 600, 700) - UI, títulos e botões
             Barlow (300, 400, 600, italic 300) - corpo de texto
     Import: index.html linhas 15

  b) Phosphor Icons v2.1.1
     URL   : https://unpkg.com/@phosphor-icons/web@2.1.1/src/index.js
     Uso   : Ícones injetados via classes CSS (ex: <i class="ph ph-phone">)
     Import: index.html linha 18

  c) Imagens externas (logos de streaming)
     Max    : https://g-labtelecom.com.br/wp-content/uploads/...Max_Primary_BLUE...png
     WatchBR: https://www.dbnet.com.vc/wp-content/uploads/...logo_watchbr.webp
     Uso    : index.html linhas 458–463 (sub-tabs) e 468–523 (cards)
     NOTA   : Dependem de servidores de terceiros. Recomenda-se hospedar
              localmente para garantir disponibilidade.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            4. ARQUITETURA CSS - MÓDULOS E RESPONSABILIDADES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  A ordem de carregamento no <head> é intencional e deve ser mantida.
  Cada módulo é autossuficiente: editar um arquivo não quebra os outros,
  desde que as variáveis de base.css permaneçam intactas.

  ┌─────────────────────────────────────────────────────────────────────┐
  │ ARQUIVO          │ ESCOPO                  │ CLASSES PRINCIPAIS     │
  ├─────────────────────────────────────────────────────────────────────┤
  │ base.css         │ Global                  │ :root, html, body,     │
  │                  │                         │ .container,            │
  │                  │                         │ .section-header,       │
  │                  │                         │ .section-label,        │
  │                  │                         │ .section-title         │
  ├─────────────────────────────────────────────────────────────────────┤
  │ buttons.css      │ Global (reutilizável)   │ .btn, .btn--primary,   │
  │                  │                         │ .btn--ghost,           │
  │                  │                         │ .btn--outline-nav,     │
  │                  │                         │ .btn--outline-light,   │
  │                  │                         │ .btn--white,           │
  │                  │                         │ .btn--sm, .btn--lg,    │
  │                  │                         │ .btn--full             │
  ├─────────────────────────────────────────────────────────────────────┤
  │ topbar.css       │ .topbar                 │ .topbar__inner,        │
  │                  │                         │ .topbar__item,         │
  │                  │                         │ .topbar__item--hide-sm │
  ├─────────────────────────────────────────────────────────────────────┤
  │ header.css       │ .header                 │ .header.is-scrolled,   │
  │                  │                         │ .header__inner,        │
  │                  │                         │ .header__logo,         │
  │                  │                         │ .header__logo-img,     │
  │                  │                         │ .header__actions,      │
  │                  │                         │ .nav, .nav__list,      │
  │                  │                         │ .nav__link.is-active,  │
  │                  │                         │ .hamburger,            │
  │                  │                         │ .hamburger.is-open,    │
  │                  │                         │ .hamburger__line       │
  ├─────────────────────────────────────────────────────────────────────┤
  │ mobile-menu.css  │ .mobile-menu            │ .mobile-menu.is-open,  │
  │                  │                         │ .mobile-menu__list,    │
  │                  │                         │ .mobile-menu__link,    │
  │                  │                         │ .mobile-menu__actions  │
  ├─────────────────────────────────────────────────────────────────────┤
  │ hero.css         │ .hero                   │ .hero__bg,             │
  │                  │                         │ .hero__overlay,        │
  │                  │                         │ .hero__grid,           │
  │                  │                         │ .hero__content,        │
  │                  │                         │ .hero__text,           │
  │                  │                         │ .hero__title,          │
  │                  │                         │ .hero__title--accent,  │
  │                  │                         │ .hero__sub,            │
  │                  │                         │ .hero__actions,        │
  │                  │                         │ .hero__card-wrap,      │
  │                  │                         │ .speed-card (e filhos),│
  │                  │                         │ .badge,                │
  │                  │                         │ .hero__stats,          │
  │                  │                         │ .hero__stats-grid,     │
  │                  │                         │ .stat                  │
  ├─────────────────────────────────────────────────────────────────────┤
  │ diferenciais.css │ .diferenciais           │ .diferenciais__layout, │
  │                  │                         │ .diferenciais__grid,   │
  │                  │                         │ .dif-card,             │
  │                  │                         │ .dif-card__icon,       │
  │                  │                         │ .dif-card__text,       │
  │                  │                         │ .diferenciais__visual, │
  │                  │                         │ .diferenciais__img,    │
  │                  │                         │ .diferenciais__badge   │
  ├─────────────────────────────────────────────────────────────────────┤
  │ banner-cta.css   │ .banner-cta             │ .banner-cta__bg,       │
  │                  │                         │ .banner-cta__overlay,  │
  │                  │                         │ .banner-cta__inner,    │
  │                  │                         │ .banner-cta__title,    │
  │                  │                         │ .banner-cta__sub       │
  ├─────────────────────────────────────────────────────────────────────┤
  │ planos.css       │ .planos                 │ .planos__bg,           │
  │                  │                         │ .planos__tabs,         │
  │                  │                         │ .tab-btn,              │
  │                  │                         │ .tab-btn--active,      │
  │                  │                         │ .is-hidden,            │
  │                  │                         │ .streaming__tabs,      │
  │                  │                         │ .stream-tab,           │
  │                  │                         │ .stream-tab--active,   │
  │                  │                         │ .planos__grid,         │
  │                  │                         │ .plano-card,           │
  │                  │                         │ .plano-card--featured, │
  │                  │                         │ .plano-card__badge,    │
  │                  │                         │ .plano-card__*         │
  ├─────────────────────────────────────────────────────────────────────┤
  │ use-cases.css    │ .use-cases              │ .use-cases__grid,      │
  │                  │                         │ .use-case-card,        │
  │                  │                         │ .use-case-card__*      │
  ├─────────────────────────────────────────────────────────────────────┤
  │ sobre.css        │ .sobre                  │ .sobre__inner,         │
  │                  │                         │ .sobre__text,          │
  │                  │                         │ .sobre__tagline,       │
  │                  │                         │ .sobre__visual,        │
  │                  │                         │ .sobre__stats-grid,    │
  │                  │                         │ .sobre__stat-box       │
  ├─────────────────────────────────────────────────────────────────────┤
  │ contato.css      │ .contato                │ .contato__bg,          │
  │                  │                         │ .contato__grid,        │
  │                  │                         │ .contato-card,         │
  │                  │                         │ .contato-card__icon,   │
  │                  │                         │ .contato-card__cta     │
  ├─────────────────────────────────────────────────────────────────────┤
  │ faq.css          │ .faq                    │ .faq__list,            │
  │                  │                         │ .faq__item,            │
  │                  │                         │ .faq__item.is-open,    │
  │                  │                         │ .faq__question,        │
  │                  │                         │ .faq__icon,            │
  │                  │                         │ .faq__answer           │
  ├─────────────────────────────────────────────────────────────────────┤
  │ footer.css       │ .footer                 │ .footer__top,          │
  │                  │                         │ .footer__grid,         │
  │                  │                         │ .footer__brand,        │
  │                  │                         │ .footer__logo-img,     │
  │                  │                         │ .footer__col,          │
  │                  │                         │ .footer__socials,      │
  │                  │                         │ .footer__bottom,       │
  │                  │                         │ .footer__bottom-inner  │
  ├─────────────────────────────────────────────────────────────────────┤
  │ whatsapp.css     │ .whatsapp-float         │ @keyframes pulse-wpp   │
  ├─────────────────────────────────────────────────────────────────────┤
  │ reveal.css       │ .reveal                 │ .reveal.is-visible     │
  ├─────────────────────────────────────────────────────────────────────┤
  │ responsive.css   │ Global (media queries)  │ Sobrescreve classes de │
  │                  │                         │ todos os módulos acima │
  └─────────────────────────────────────────────────────────────────────┘

  NOTA CRÍTICA - .is-hidden (classe utilitária global):
    Definida em planos.css, mas utilizada por tabs.js e streamTabs.js
    para esconder/exibir painéis e grids. Não deve ser removida de
    planos.css pois afeta o funcionamento das abas mesmo que o restante
    do arquivo seja alterado.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            5. ARQUITETURA JAVASCRIPT - MÓDULOS E API PÚBLICA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Todos os módulos seguem o padrão de exportar uma função init*()
  e são chamados exclusivamente por main.js dentro do evento
  DOMContentLoaded. Nenhum módulo executa código no nível raiz do arquivo.

  ┌─────────────────────────────────────────────────────────────────────┐
  │ ARQUIVO           │ EXPORTA               │ DEPENDÊNCIAS            │
  ├─────────────────────────────────────────────────────────────────────┤
  │ main.js           │ - (entry point)       │ Todos os módulos abaixo │
  ├─────────────────────────────────────────────────────────────────────┤
  │ headerScroll.js   │ initHeaderScroll()    │ #header (DOM)           │
  ├─────────────────────────────────────────────────────────────────────┤
  │ mobileMenu.js     │ initMobileMenu()      │ #hamburger, #mobileMenu │
  ├─────────────────────────────────────────────────────────────────────┤
  │ scrollSpy.js      │ initScrollSpy()       │ section[id], .nav__link │
  ├─────────────────────────────────────────────────────────────────────┤
  │ smoothScroll.js   │ initSmoothScroll()    │ a[href^="#"], #header   │
  ├─────────────────────────────────────────────────────────────────────┤
  │ scrollReveal.js   │ initScrollReveal()    │ .reveal (DOM)           │
  │                   │ observeReveal()       │                         │
  ├─────────────────────────────────────────────────────────────────────┤
  │ tabs.js           │ initTabs()            │ .tab-btn, .planos__cont,│
  │                   │                       │ observeReveal()         │
  ├─────────────────────────────────────────────────────────────────────┤
  │ streamTabs.js     │ initStreamTabs()      │ .stream-tab, [id^=grid],│
  │                   │                       │ observeReveal()         │
  ├─────────────────────────────────────────────────────────────────────┤
  │ faq.js            │ initFaq()             │ .faq__item (DOM)        │
  ├─────────────────────────────────────────────────────────────────────┤
  │ statsCounter.js   │ initStatsCounter()    │ #heroStats,             │
  │                   │                       │ strong[data-target]     │
  └─────────────────────────────────────────────────────────────────────┘

  DEPENDÊNCIA ENTRE MÓDULOS JS:
    tabs.js       → importa { observeReveal } de scrollReveal.js
    streamTabs.js → importa { observeReveal } de scrollReveal.js
    Todos os outros módulos são independentes entre si.

  ATRIBUTOS HTML UTILIZADOS PELO JS:
    data-tab="internet|streaming"      → lido por tabs.js
    data-stream="max|watchbr"          → lido por streamTabs.js
    data-target="NÚMERO"               → lido por statsCounter.js
    data-suffix="SUFIXO"               → lido por statsCounter.js
    data-decimals="N"                  → lido por statsCounter.js
    aria-expanded="true|false"         → gerenciado por mobileMenu.js e faq.js
    aria-hidden="true|false"           → gerenciado por mobileMenu.js
    aria-selected="true|false"         → gerenciado por tabs.js e streamTabs.js
    hidden (atributo booleano)         → gerenciado por faq.js

  CLASSES DE ESTADO (adicionadas/removidas via JS):
    .is-scrolled        → header.css  (header com sombra ao rolar)
    .is-open            → header.css  (hamburguer em X) / mobile-menu.css (overlay visível)
                            faq.css     (item do accordion aberto)
    .is-active          → header.css  (link ativo na nav desktop)
    .is-visible         → reveal.css  (elemento revelado pelo scroll)
    .tab-btn--active    → planos.css (aba de plano ativa)
    .stream-tab--active → planos.css (sub-aba de streaming ativa)
    .is-hidden          → planos.css  (display:none - painéis e grids inativos)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        6. SISTEMA DE DESIGN (DESIGN TOKENS - base.css :root)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Todas as variáveis são definidas em :root em assets/css/base.css.
  Alterar qualquer variável aqui propaga a mudança para todo o projeto.

  CORES
  ─────
  --navy          #04122b    Fundo mais escuro (topbar, footer, nav)
  --navy-mid      #0a1f4a    Fundo intermediário (hero, planos)
  --navy-light    #0d2760    Azul médio (cards sobre, stat-box)
  --blue          #1045a8    Hover de botões primários
  --blue-mid      #1558d6    Cor principal de ação (botões, links ativos)
  --cyan          #00c6ff    Accent / destaque (textos em itálico, ícones)
  --cyan-dim      rgba(0,198,255,.12)    Fundo suave ciano (badge, hover)
  --glow          rgba(0,198,255,.25)    Brilho ciano
  --white         #ffffff    Superfícies claras e texto sobre escuro
  --off-white     #f4f7fe    Fundo de seções claras
  --light-gray    #e8edf8    Bordas e separadores em fundo claro
  --mid-gray      #8a97b8    Texto secundário, labels, rodapé
  --dark-text     #0f1b35    Texto principal sobre fundo claro
  --success       #10d97e    Check marks e indicadores de inclusão

  SOMBRAS
  ───────
  --shadow-sm     0 2px 8px rgba(4,18,43,.15)
  --shadow-md     0 8px 32px rgba(4,18,43,.22)
  --shadow-lg     0 20px 60px rgba(4,18,43,.30)
  --shadow-glow   0 0 40px rgba(0,198,255,.18)

  LAYOUT
  ──────
  --topbar-h      38px    Altura da topbar (usada em mobile-menu top e scroll-padding)
  --header-h      68px    Altura do header (usada em mobile-menu top e scroll-padding)

  ANIMAÇÃO
  ────────
  --ease    cubic-bezier(0.22, 1, 0.36, 1)    Curva de aceleração padrão
  --dur     0.25s                              Duração padrão de transições

  TIPOGRAFIA
  ──────────
  Sora   - h1, h2, h3, h4, botões, nav, labels, topbar
  Barlow - parágrafos (<p>), textos descritivos


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                7. COMPONENTES HTML - REFERÊNCIA COMPLETA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  A. TOPBAR (linhas 67–76 do index.html)
     Componente: .topbar > .container.topbar__inner > .topbar__item(s)
     Exibe telefone e e-mail. O item com .topbar__item--hide-sm (e-mail)
     é ocultado em telas ≤ 480px via responsive.css.

  B. HEADER + NAV (linhas 86–134)
     Componente: .header > .container.header__inner
     Contém: logo, nav desktop (.nav > .nav__list > li > .nav__link),
             botões de ação (.header__actions), botão hamburguer (.hamburger).
     Estado: .header.is-scrolled adicionado por headerScroll.js ao rolar > 50px.
     Responsividade: .nav e .header__actions ocultados em mobile (responsive.css).
                     .hamburger exibido em mobile.

  C. MENU MOBILE (linhas 143–170)
     Componente: .mobile-menu#mobileMenu
     Posicionado com position:fixed, top:68px (var(--header-h)).
     Estado: .mobile-menu.is-open adicionado por mobileMenu.js.
     Desliza de translateY(-110%) para translateY(0) via CSS transition.

  D. HERO (linhas 179–256)
     Componente: section.hero#home
     Camadas: .hero__bg (imagem), .hero__overlay (gradiente), .hero__grid (grade).
     Conteúdo: grid de 2 colunas - .hero__text (esq) e .hero__card-wrap (dir).
     Speed Card: .speed-card - card flutuante com preço inicial.
     Stats: .hero__stats > .hero__stats-grid > .stat
            Números com data-target animados por statsCounter.js.

  E. DIFERENCIAIS (linhas 263–339)
     Componente: section.diferenciais#beneficios
     Layout: .diferenciais__layout - grid 2 colunas (cards | imagem).
     Cards: .dif-card - flex row (ícone + texto). Adicionar card:
            duplicar bloco <div class="dif-card reveal">...</div>.

  F. BANNER CTA (linhas 346–366)
     Componente: section.banner-cta
     Camadas: .banner-cta__bg (imagem), .banner-cta__overlay (gradiente).
     Conteúdo: .banner-cta__inner - flex row (texto + botão).

  G. PLANOS (linhas 374–531)
     Componente: section.planos#planos
     Abas: .planos__tabs > .tab-btn[data-tab]
           Painéis: .planos__content#tab-internet e #tab-streaming
     Sub-abas: .streaming__tabs > .stream-tab[data-stream]
               Grids: #grid-max e #grid-watchbr
     Plano card: .plano-card - com modificador .plano-card--featured para destaque.
                 O card destaque recebe adicionalmente .plano-card__badge.

  H. USE CASES (linhas 538–574)
     Componente: section.use-cases
     Grid: .use-cases__grid - 2 colunas.
     Card: .use-case-card - imagem (aspect-ratio 16:9) + corpo de texto.

  I. SOBRE (linhas 581–620)
     Componente: section.sobre#sobre
     Layout: .sobre__inner - 2 colunas (texto | grid de atributos).
     Atributos: .sobre__stats-grid > .sobre__stat-box (4 boxes 2×2).

  J. CONTATO (linhas 627–666)
     Componente: section.contato#contato
     Grid: .contato__grid - 4 colunas.
     Card: .contato-card - âncora clicável com ícone, título, número e CTA.

  K. FAQ (linhas 673–723)
     Componente: section.faq#faq
     Lista: .faq__list > .faq__item
     Cada item: .faq__question (botão) + .faq__answer (div, atributo hidden).
     Estado: .faq__item.is-open adicionado por faq.js ao clicar.
     Apenas um item pode estar aberto por vez.

  L. FOOTER (linhas 729–777)
     Componente: footer.footer
     Estrutura: .footer__top > .container.footer__grid (4 colunas)
                .footer__bottom > .container.footer__bottom-inner
     Colunas: .footer__brand (logo), .footer__col × 3 (links, atendimento, redes).

  M. BOTÃO FLUTUANTE WHATSAPP (linhas 783–788)
     Componente: a.whatsapp-float (position:fixed, bottom:1.8rem, right:1.8rem)
     Animação: @keyframes pulse-wpp - pulso de sombra verde em whatsapp.css.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    8. SISTEMA DE RESPONSIVIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Todos os media queries estão centralizados em responsive.css.
  O projeto segue abordagem desktop-first.

  BREAKPOINTS
  ───────────
  ≤ 1024px (tablet)
    - .header__actions: oculta o segundo botão (Central do Assinante)
    - .diferenciais__layout: 1 coluna, imagem sobe para o topo
    - .diferenciais__grid: mantém 2 colunas
    - .contato__grid: 2 colunas (2×2)
    - .sobre__inner: 1 coluna
    - .footer__grid: 2 colunas
    - .use-cases__grid: 1 coluna

  ≤ 768px (mobile)
    - .nav e .header__actions: display:none (substituídos pelo menu overlay)
    - .hamburger: display:flex (visível)
    - .hero__content: 1 coluna (texto + card empilhados)
    - .hero__stats-grid: 2 colunas (2×2)
    - .diferenciais__grid: 1 coluna
    - .banner-cta__inner: flex-direction column
    - .planos__grid: 1 coluna
    - .contato__grid: 1 coluna
    - .footer__grid: 1 coluna
    - .hero__actions: flex-direction column (botões em 100%)
    - .sobre__stats-grid: 2 colunas
    - .use-cases__grid: 1 coluna

  ≤ 480px (mobile extra small)
    - .topbar__item--hide-sm: display:none (oculta e-mail)
    - .sobre__stats-grid: 1 coluna
    - .streaming__tabs: flex-direction column
    - .stat: padding reduzido, font-size menor


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                9. CONVENÇÕES DE NOMENCLATURA (BEM)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  O projeto segue a metodologia BEM (Block__Element--Modifier):

  .bloco                        → componente raiz
  .bloco__elemento              → parte interna do bloco
  .bloco--modificador           → variante do bloco
  .bloco__elemento--modificador → variante do elemento

  Exemplos:
    .plano-card               → bloco
    .plano-card__speed        → elemento (velocidade dentro do card)
    .plano-card__price        → elemento (preço dentro do card)
    .plano-card--featured     → modificador (card em destaque)
    .plano-card__badge        → elemento (badge "Mais Popular")

  Classes de estado (adicionadas via JS) seguem a convenção .is-*:
    .is-open, .is-active, .is-visible, .is-scrolled, .is-hidden


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    10. FLUXO DE DADOS E ESTADO (JS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  O projeto não usa store centralizado. O estado é representado
  exclusivamente por classes CSS no DOM. Não há variáveis de estado
  em memória (exceto as flags de controle abaixo).

  FLAGS DE ESTADO EM MEMÓRIA (locais aos módulos):
    statsCounter.js → let statsPlayed = false
    Impede que a animação de contagem rode mais de uma vez.

  FLUXO DO MENU MOBILE:
    Usuário clica em #hamburger
    → mobileMenu.js: setMenuOpen() alterna .is-open em #hamburger e #mobileMenu
    → CSS: hamburger transforma linhas em X; menu desliza translateY(0)
    → document.body.style.overflow = 'hidden' (bloqueia scroll)
    → Clicar em link / botão / tecla Escape chama setMenuOpen(true) que reverte tudo

  FLUXO DAS ABAS DE PLANOS:
    Usuário clica em .tab-btn
    → tabs.js: remove .tab-btn--active e .is-hidden de todos;
               aplica .tab-btn--active no clicado e remove .is-hidden do painel alvo
    → observeReveal() é chamado para animar os novos cards que apareceram

  FLUXO DO FAQ:
    Usuário clica em .faq__question
    → faq.js: fecha todos os outros itens (remove .is-open, restaura hidden)
              alterna .is-open no item clicado e remove/restaura hidden da resposta
    → CSS: max-height transiciona de 0 para 400px; .faq__icon rotaciona 180deg

  FLUXO DO SCROLL REVEAL:
    IntersectionObserver em scrollReveal.js observa .reveal
    → Elemento entra 10% no viewport → .is-visible adicionado com delay progressivo
    → CSS: opacity 0→1, translateY(28px)→0 em 0.65s
    → unobserve() chamado após animar (executa uma única vez por elemento)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    11. PERFORMANCE E ACESSIBILIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  PERFORMANCE
  ───────────
  - Imagens abaixo do fold carregadas com loading="lazy"
  - Fontes do Google carregadas com rel="preconnect" para reduzir TTFB
  - Phosphor Icons carregado com defer para não bloquear parsing do HTML
  - scroll events registrados com { passive: true } em headerScroll.js e scrollSpy.js
  - IntersectionObserver usado em vez de scroll listener para scroll reveal e stats
  - Após animar, unobserve() é chamado para liberação de memória

  ACESSIBILIDADE
  ──────────────
  - aria-label em todos os botões sem texto visível
  - aria-expanded gerenciado pelo hamburguer e pelo FAQ
  - aria-hidden gerenciado pelo menu mobile
  - aria-selected gerenciado pelas abas de planos e sub-abas
  - aria-controls linkando hamburguer ao mobileMenu
  - role="tablist" e role="tab" e role="tabpanel" nas abas de planos
  - Atributo hidden em .faq__answer (semântico, não apenas display:none)
  - Contraste: texto branco sobre fundos azul-escuro (#04122b) ≥ 7:1


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        12. PONTOS DE EXTENSÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ADICIONAR UMA NOVA SEÇÃO CSS:
    1. Criar assets/css/nome-da-secao.css
    2. Adicionar <link rel="stylesheet" href="assets/css/nome-da-secao.css">
       no index.html ANTES de responsive.css (para que os media queries
       do responsive.css possam sobrescrever os estilos da nova seção)
    3. Adicionar os media queries da nova seção em responsive.css

  ADICIONAR UM NOVO MÓDULO JS:
    1. Criar assets/js/nome-do-modulo.js com a função exportada
    2. Em main.js: adicionar import { initNome } from './nome-do-modulo.js'
    3. Em main.js: chamar initNome() dentro do DOMContentLoaded

  ADICIONAR UM NOVO PLANO (Só Internet):
    Em index.html, dentro de #tab-internet > .planos__grid,
    duplicar qualquer bloco <div class="plano-card reveal">...</div>
    e atualizar velocidade, upload, preço e features.
    Para marcar como destaque, adicionar classe plano-card--featured
    e o elemento <div class="plano-card__badge">Mais Popular</div>.

  ADICIONAR UM NOVO SERVIÇO DE STREAMING:
    1. Em index.html, adicionar novo .stream-tab[data-stream="nome"] em .streaming__tabs
    2. Adicionar novo .planos__grid#grid-nome com is-hidden (exceto o primeiro)
    3. streamTabs.js já suporta qualquer valor de data-stream sem alteração

  ADICIONAR UMA NOVA PERGUNTA NO FAQ:
    Em index.html, dentro de .faq__list, duplicar qualquer bloco
    <div class="faq__item reveal">...</div> e atualizar o texto.
    faq.js gerencia automaticamente todos os .faq__item presentes no DOM.

  ALTERAR CORES GLOBALMENTE:
    Editar as variáveis em assets/css/base.css dentro de :root.
    A mudança propaga para todo o projeto automaticamente.

  TROCAR A FONTE:
    1. Substituir o link do Google Fonts no <head> do index.html
    2. Atualizar 'Sora' e/ou 'Barlow' nas propriedades font-family
       em base.css (body e h1–h4) e nos módulos que declaram font-family
       explicitamente (buttons.css, header.css, faq.css, footer.css etc.)