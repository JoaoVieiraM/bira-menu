# 🍺 Bar e Restaurante do Bira - Menu Digital

> "Comida honesta, cerveja trincando e tradição."

Este projeto é uma **Landing Page / Menu Digital** desenvolvida para um tradicional boteco paulistano localizado no bairro da Aclimação. O objetivo é fornecer uma presença digital simples, rápida e que capture a essência da cultura de "boteco raiz", permitindo que clientes visualizem o cardápio e façam pedidos via WhatsApp.

---

## 📋 Funcionalidades

*   **Menu Setorizado:** Navegação fluida entre "Almoço da Firma (PF)", "Petiscos" e "Bebidas".
*   **Design Responsivo:** Layout adaptável para celulares e computadores, com menu "hambúrguer" funcional no mobile.
*   **Smooth Scroll:** Navegação suave ao clicar nos itens do menu, com compensação automática para o cabeçalho fixo.
*   **Call-to-Action (CTA):** Botões estratégicos e flutuantes para pedidos diretos via WhatsApp.
*   **Identidade Visual Temática:** Uso de cores (Bordô, Dourado Cerveja, Off-white) e tipografia (Oswald, Open Sans) que remetem à estética clássica de bares.
*   **Integração com IA (Beta):** Estrutura pronta para um "Garçom Virtual" utilizando a API do Google Gemini (veja `services/gemini.ts`).

---

## 🚀 Tecnologias Utilizadas

*   **React 19:** Biblioteca JavaScript para construção da interface.
*   **TypeScript:** Para tipagem estática e segurança no código.
*   **Tailwind CSS:** Framework de utilitários CSS para estilização rápida e responsiva.
*   **FontAwesome:** Ícones vetoriais.
*   **Google Gemini AI SDK:** Para funcionalidades de inteligência artificial.

---

## 📂 Estrutura do Projeto

```text
/
├── index.html              # Ponto de entrada e configuração do Tailwind/Fontes
├── index.tsx               # Renderização da raiz React
├── App.tsx                 # Componente principal
├── types.ts                # Definições de tipos (TypeScript)
├── constants.ts            # DADOS DO MENU (Preços, Itens, Links)
├── metadata.json           # Metadados do projeto
├── components/             # Componentes reutilizáveis
│   ├── Header.tsx          # Barra de navegação fixa
│   ├── Hero.tsx            # Banner principal com CTA
│   ├── Features.tsx        # Exibição do Menu (Almoço/Petiscos/Bebidas)
│   ├── Footer.tsx          # Rodapé com informações e redes sociais
│   ├── Button.tsx          # Botão polimórfico (funciona como link ou botão)
│   ├── SectionTitle.tsx    # Títulos padronizados das seções
│   ├── AIConsultant.tsx    # Componente do Garçom Virtual (IA)
│   └── Concept.tsx         # Seção "Nossa História"
└── services/
    └── gemini.ts           # Configuração da API do Google Gemini
```

---

## ⚙️ Como Configurar e Personalizar

### 1. Alterar Itens do Menu e Preços
Todo o conteúdo do cardápio é dinâmico e centralizado no arquivo `constants.ts`. Para alterar um prato ou preço, você não precisa mexer no HTML ou CSS.

Exemplo em `constants.ts`:
```typescript
export const MENU_SECTIONS: MenuSectionType[] = [
  {
    id: "almoco",
    title: "O Almoço da Firma (PF)",
    items: [
      {
        id: 1,
        name: "Novo Prato Aqui", // Altere o nome
        description: "Descrição deliciosa do prato.",
        price: "R$ 29,90", // Altere o preço
        highlight: true // true para destacar, false para normal
      },
      // ...
    ]
  }
];
```

### 2. Alterar WhatsApp e Endereço
Ainda em `constants.ts`, atualize as constantes globais:

```typescript
export const BRAND_NAME = "Nome do Seu Bar";
export const ADDRESS = "Seu Endereço, 123 - Bairro";
export const WHATSAPP_LINK = "https://wa.me/5511999999999"; // Seu número
```

### 3. Configurar a Inteligência Artificial (Opcional)
O projeto possui integração com o Google Gemini. Para ativar o "Garçom Virtual":
1.  Obtenha uma API Key no [Google AI Studio](https://aistudio.google.com/).
2.  Adicione a chave nas variáveis de ambiente como `API_KEY`.
3.  Importe e adicione o componente `<VirtualWaiter />` no arquivo `App.tsx`.

---

## 🎨 Design System

*   **Cores Principais:**
    *   `bira-red` (#991B1B): Vermelho intenso, clássico de toalhas de mesa.
    *   `bira-gold` (#F59E0B): Amarelo queimado, cor de cerveja/tulipa.
    *   `bira-dark` (#1F2937): Cinza escuro/Preto, para contraste e elegância.
    *   `bira-bg` (#FFF7ED): Off-white quente, cor de papel antigo.

*   **Tipografia:**
    *   Títulos: *Oswald* (Impactante, condensada).
    *   Texto: *Open Sans* (Legibilidade).

---

## 📄 Licença

Este projeto foi desenvolvido para fins demonstrativos de um menu digital moderno com alma tradicional.