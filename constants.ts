import { MenuSectionType, NavItem } from './types';

export const BRAND_NAME = "Bar do Bira";
export const ADDRESS = "Rua Muniz de Sousa, 713 - Aclimação, SP";
export const WHATSAPP_LINK = "https://wa.me/5511917477832";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Almoço', href: '#almoco' },
  { label: 'Petiscos', href: '#petiscos' },
  { label: 'Bebidas', href: '#bebidas' },
];

export const MENU_SECTIONS: MenuSectionType[] = [
  {
    id: "almoco",
    title: "O Almoço da Firma (PF)",
    icon: "fa-utensils",
    items: [
      {
        id: 1,
        name: "Virado à Paulista (Seg)",
        description: "O clássico paulistano. Bisteca suína, linguiça, ovo frito, couve, banana à milanesa, arroz, torresmo e tutu de feijão.",
        price: "R$ 32,90",
        highlight: true
      },
      {
        id: 2,
        name: "Feijoada Completa (Qua/Sáb)",
        description: "Servida na cumbuca, bem caprichada. Acompanha arroz branco, couve refogada, farofa da casa, torresmo e laranja.",
        price: "R$ 45,90",
        highlight: true
      },
      {
        id: 3,
        name: "Filé de Peixe (Sexta)",
        description: "Filé de Pescada sequinho, purê de batatas cremoso e arroz com brócolis.",
        price: "R$ 36,90"
      },
      {
        id: 4,
        name: "Picadinho do Bira (Todo Dia)",
        description: "Cubos de carne ao molho madeira, arroz soltinho, feijão carioca, farofa e ovo pochê.",
        price: "R$ 34,90"
      }
    ]
  },
  {
    id: "petiscos",
    title: "Para Petiscar",
    icon: "fa-drumstick-bite",
    items: [
      {
        id: 5,
        name: "Coxinha de Frango",
        description: "Massa de batata, recheio cremoso e casquinha crocante. Frita na hora. (Unidade)",
        price: "R$ 9,50"
      },
      {
        id: 6,
        name: "Bolinho de Bacalhau",
        description: "Receita de família. Bacalhau de verdade, batata e tempero verde. Porção com 6 unidades.",
        price: "R$ 42,00",
        highlight: true
      },
      {
        id: 7,
        name: "Frango a Passarinho",
        description: "Crocante e coberto com alho frito artesanal. Acompanha limão.",
        price: "R$ 48,00"
      },
      {
        id: 8,
        name: "Porção de Pastéis",
        description: "Misto de Carne e Queijo. Massa sequinha e recheio generoso. (6 unidades)",
        price: "R$ 38,00"
      },
      {
        id: 9,
        name: "Calabresa Acebolada",
        description: "Fatiada e acebolada na chapa, servida com cestinha de pão francês.",
        price: "R$ 39,00"
      }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    icon: "fa-beer-mug-empty",
    items: [
      {
        id: 10,
        name: "Cerveja 600ml",
        description: "Original, Brahma, Serramalte ou Heineken. Estupidamente gelada (véu de noiva).",
        price: "R$ 18,00"
      },
      {
        id: 11,
        name: "Caipirinha Tradicional",
        description: "Limão, açúcar e cachaça ou vodka. Batida na hora.",
        price: "R$ 25,00"
      },
      {
        id: 12,
        name: "Refrigerante e Água",
        description: "Coca-Cola, Guaraná, Tônica e Água (com/sem gás).",
        price: "R$ 7,00"
      }
    ]
  }
];