export type MediaItem = { src: string; alt: string; label: string; ratio: '1:1' | '2:3' | '3:2' | '3:4' }
export type ProductItem = MediaItem & { eyebrow: string; title: string; description: string }

export const pageContent = {
  urgencyBar: {
    enabled: true,
    text: 'Válido só hoje dia',
  },
  hero: {
    image: '/images/hero-larissa.webp',
    imageAlt: 'Larissa com os materiais do Curso Avançado de Brow Lamination',
    headline: 'Conquiste uma renda extra aprendendo a transformar sobrancelhas finas e falhadas em sobrancelhas cheias e volumosas com um passo a passo que você pode aplicar em até 7 dias!',
    headlineHighlight: 'Conquiste uma renda extra',
    body: 'Seja você iniciante ou profissional da área da beleza, aprenda do zero o passo a passo para criar sobrancelhas mais cheias, encorpadas e alinhadas, conquiste uma renda extra e descubra como cobrar de R$ 130 a R$ 180 por procedimento, com meu suporte direto!',
    ctaLabel: 'QUERO APRENDER AGORA',
    securityImage: '/images/selos-seguranca-compra.svg',
    securityImageAlt: 'Selos de compra segura, satisfação garantida e privacidade protegida',
  },
  results: {
    title: 'Olha o que acontece quando você aprende a fazer Brow Lamination do jeito certo!',
    items: Array.from({ length: 6 }, (_, index) => ({
      src: '',
      alt: `Placeholder: Depoimento ${index + 1} 400×600`,
      label: `Depoimento ${index + 1} 400×600`,
      ratio: '2:3' as const,
    })),
  },
  modulesSection: { title: 'Tudo o que você precisa aprender para parar de fazer Brow lamination' },
  modules: [
  {
    "src": "/images/modulo1.webp",
    "alt": "Capa do módulo 1: A Origem da Técnica",
    "label": "Módulo 01",
    "ratio": "1:1",
    "eyebrow": "Módulo 01",
    "title": "A Origem da Técnica",
    "description": "Descubra a origem da técnica, como ela funciona e por que é tão procurada para transformar a aparência de sobrancelhas finas e falhadas em sobrancelhas mais cheias, alinhadas e volumosas."
  },
  {
    "src": "/images/modulo2.webp",
    "alt": "Capa do módulo 2: Os Materiais da Minha Técnica Exclusiva",
    "label": "Módulo 02",
    "ratio": "1:1",
    "eyebrow": "Módulo 02",
    "title": "Os Materiais da Minha Técnica Exclusiva",
    "description": "Tenha acesso à lista dos produtos e materiais que utilizo na minha técnica avançada e personalizada, com orientações para você saber o que precisa antes de começar."
  },
  {
    "src": "/images/modulo3.webp",
    "alt": "Capa do módulo 3: Meu Passo a Passo na Prática",
    "label": "Módulo 03",
    "ratio": "1:1",
    "eyebrow": "Módulo 03",
    "title": "Meu Passo a Passo na Prática",
    "description": "Aprenda minha sequência de aplicação personalizada, do preparo dos fios até o acabamento final, com fotos demonstrativas para acompanhar cada etapa e entender os detalhes que fazem diferença no resultado."
  },
  {
    "src": "/images/modulo-4.webp",
    "alt": "Capa do módulo 4: Resultados Reais da Criadora",
    "label": "Módulo 04",
    "ratio": "1:1",
    "eyebrow": "Módulo 04",
    "title": "Resultados Reais da Criadora",
    "description": "Veja fotos reais dos meus próprios atendimentos e descubra o efeito que minha técnica proporciona em diferentes sobrancelhas, com acabamentos naturais, alinhados e visualmente mais volumosos."
  }
] as ProductItem[],
  bonusesSection: { title: 'E para você não ficar perdida na hora de começar, preparei 3 bônus especiais!' },
  bonuses: [
  {
    "src": "/images/bonus-1.webp",
    "alt": "Capa do bônus 1: Guia Brow Sem Erros",
    "label": "Bônus 01",
    "ratio": "1:1",
    "eyebrow": "Bônus 01",
    "title": "Guia Brow Sem Erros",
    "description": "Um checklist para consultar antes dos atendimentos, organizar seus materiais, conferir os cuidados necessários e evitar esquecer etapas importantes do procedimento.",
    "benefit": "Mais organização e segurança na sua rotina profissional.",
    "value": "R$ 39,00"
  },
  {
    "src": "/images/bonus-2.webp",
    "alt": "Capa do bônus 2: Quanto Cobrar Pelo Seu Brow?",
    "label": "Bônus 02",
    "ratio": "1:1",
    "eyebrow": "Bônus 02",
    "title": "Quanto Cobrar Pelo Seu Brow?",
    "description": "Um guia prático para calcular seus custos, entender quanto precisa cobrar e evitar trabalhar muito sem saber quanto realmente está ganhando.",
    "benefit": "Aprenda a valorizar seu serviço e organizar seus preços.",
    "value": "R$ 29,00"
  },
  {
    "src": "/images/bonus-3.webp",
    "alt": "Capa do bônus 3: Primeiras Clientes Brow",
    "label": "Bônus 03",
    "ratio": "1:1",
    "eyebrow": "Bônus 03",
    "title": "Primeiras Clientes Brow",
    "description": "Modelos de mensagens para WhatsApp, ideias de divulgação e sugestões de conteúdos para mostrar seu trabalho e despertar o interesse de possíveis clientes.",
    "benefit": "Saiba por onde começar a divulgar sua nova habilidade.",
    "value": "R$ 29,00"
  }
] as (ProductItem & { benefit: string; value: string })[],
  offersSection: {
    title: 'Quanto vale aprender uma técnica que você pode usar para oferecer um novo serviço na área da beleza?',
    paymentSecurityImage: '/images/metodos-pagamento-seguranca.svg',
    paymentSecurityAlt: 'Métodos de pagamento e selos de compra segura, satisfação garantida e privacidade protegida',
  },
  offers: {
  "simple": {
    "title": "OFERTA SIMPLES",
    "items": [
      {
        "label": "Curso Avançado de Brow Lamination em e-book"
      },
      {
        "label": "Passo a passo da técnica personalizada"
      },
      {
        "label": "Acesso vitalício ao material"
      }
    ],
    "previousPrice": "R$ 97,00",
    "installmentCount": 4,
    "installmentValue": "R$ 8,49",
    "cashValue": "R$ 29,90",
    "priceLabel": "Hoje por apenas",
    "ctaLabel": "QUERO A OFERTA SIMPLES"
  },
  "complete": {
    "badge": "MAIS VENDIDO",
    "title": "OFERTA COMPLETA",
    "items": [
      {
        "label": "Curso Avançado de Brow Lamination"
      },
      {
        "label": "Passo a passo da técnica"
      },
      {
        "label": "Acesso vitalício ao material"
      },
      {
        "label": "BÔNUS 01: Guia Brow",
        "value": "R$ 19,90"
      },
      {
        "label": "BÔNUS 02: Quanto Cobrar",
        "value": "R$ 19,90"
      },
      {
        "label": "BÔNUS 03: Primeiras Clientes",
        "value": "R$ 19,90"
      }
    ],
    "previousPrice": "R$ 89,60",
    "installmentCount": 6,
    "installmentValue": "R$ 9,49",
    "cashValue": "R$ 49,90",
    "priceLabel": "Hoje por apenas",
    "ctaLabel": "QUERO A OFERTA COMPLETA"
  },
  "popup": {
    "eyebrow": "ESPERA! VOCÊ VAI DEIXAR OS 3 BÔNUS PARA TRÁS?",
    "message": "Já que você decidiu aprender minha técnica de Brow Lamination, quero te dar uma condição especial para levar o pacote completo.\n\nEm vez de pagar R$ 49,90, você pode aproveitar agora o curso com os três bônus por apenas:",
    "title": "Você leva:",
    "previousPrice": "R$ 49,90",
    "installmentCount": 0,
    "installmentValue": "",
    "cashValue": "R$ 39,90",
    "priceLabel": "Tudo isso por apenas",
    "note": "Tudo isso por apenas R$ 10 a mais que a Oferta Simples.",
    "ctaLabel": "SIM, QUERO APROVEITAR O DESCONTO",
    "secondaryLabel": "NÃO, QUERO APENAS O CURSO"
  }
},
  guarantee: {
    image: '/images/selo-garantia-7-dias.svg',
    imageAlt: 'Selo de garantia de 7 dias',
    days: 7,
    title: 'Você tem 7 dias para conhecer o material sem ficar com medo de perder seu dinheiro!',
    body: 'Eu quero que você tenha tranquilidade para conhecer meu curso.\n\nPor isso, sua compra conta com 7 dias de garantia.\n\nSe nesse período você perceber que o conteúdo não é para você, poderá solicitar o reembolso dentro das condições da garantia.\n\nSeu dinheiro protegido. Seu aprendizado pode começar agora.',
  },
  faqSection: { title: 'Ainda ficou alguma dúvida? Eu te respondo!' },
  faq: [
  {
    "question": "Nunca fiz Brow Lamination. Vou conseguir aprender?",
    "answer": "Sim! O material apresenta o procedimento desde a preparação dos materiais até a finalização. Você pode estudar mesmo começando do zero. Para realizar atendimentos com segurança, é importante praticar, conhecer as contraindicações e dominar cada etapa antes de atender clientes."
  },
  {
    "question": "Em quanto tempo consigo aprender a técnica?",
    "answer": "Você pode estudar o passo a passo em apenas 1 dia, no seu próprio ritmo. O tempo para dominar a aplicação e começar a atender depende da sua prática e preparação."
  },
  {
    "question": "Vou aprender a deixar sobrancelhas fininhas mais cheias?",
    "answer": "Você vai conhecer minha forma de avaliar, alinhar e direcionar os fios para criar um efeito visual de mais volume e definição, respeitando o formato natural de cada sobrancelha. O resultado varia conforme a quantidade e as características dos fios."
  },
  {
    "question": "O curso é em vídeo ou preciso participar de aulas ao vivo?",
    "answer": "O curso principal é entregue em formato de e-book digital, com explicações, imagens e orientações do procedimento. Você pode acessar o material e estudar quando quiser, sem precisar participar de aulas ao vivo."
  },
  {
    "question": "E se eu comprar e não gostar do conteúdo?",
    "answer": "Você conta com uma garantia de 7 dias para solicitar o reembolso, conforme as condições informadas na compra. Assim, pode conhecer o material com mais tranquilidade."
  }
],
  footer: { brand: 'Larissa Beauty', copyright: '© 2026 Larissa Beauty' },
}

