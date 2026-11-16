export type MediaItem = { src: string; alt: string; label: string; ratio: '1:1' | '2:3' | '3:2' | '3:4' }
export type ProductItem = MediaItem & { eyebrow: string; title: string; description: string }

export const pageContent = {
  urgencyBar: {
    enabled: true,
    text: 'V�lido s� hoje dia',
  },
  hero: {
    image: '/images/hero-larissa.webp',
    imageAlt: 'Larissa com os materiais do Curso Avan�ado de Brow Lamination',
    headline: 'Conquiste uma renda extra aprendendo a transformar sobrancelhas finas e falhadas em sobrancelhas cheias e volumosas com um passo a passo que voc� pode aplicar em at� 7 dias!',
    headlineHighlight: 'Conquiste uma renda extra',
    body: 'Seja voc� iniciante ou profissional da �rea da beleza, aprenda do zero o passo a passo para criar sobrancelhas mais cheias, encorpadas e alinhadas, conquiste uma renda extra e descubra como cobrar de R$ 130 a R$ 180 por procedimento, com meu suporte direto!',
    ctaLabel: 'QUERO APRENDER AGORA',
    securityImage: '/images/selos-seguranca-compra.svg',
    securityImageAlt: 'Selos de compra segura, satisfa��o garantida e privacidade protegida',
  },
  results: {
    title: 'Olha o que acontece quando voc� aprende a fazer Brow Lamination do jeito certo!',
    items: Array.from({ length: 6 }, (_, index) => ({
      src: '',
      alt: `Placeholder: Depoimento ${index + 1} 400�600`,
      label: `Depoimento ${index + 1} 400�600`,
      ratio: '2:3' as const,
    })),
  },
  modulesSection: { title: 'Tudo o que voc� precisa aprender para parar de fazer Brow lamination' },
  modules: [
  {
    "src": "/images/modulo1.webp",
    "alt": "Capa do m�dulo 1: A Origem da T�cnica",
    "label": "M�dulo 01",
    "ratio": "1:1",
    "eyebrow": "M�dulo 01",
    "title": "A Origem da T�cnica",
    "description": "Descubra a origem da t�cnica, como ela funciona e por que � t�o procurada para transformar a apar�ncia de sobrancelhas finas e falhadas em sobrancelhas mais cheias, alinhadas e volumosas."
  },
  {
    "src": "/images/modulo2.webp",
    "alt": "Capa do m�dulo 2: Os Materiais da Minha T�cnica Exclusiva",
    "label": "M�dulo 02",
    "ratio": "1:1",
    "eyebrow": "M�dulo 02",
    "title": "Os Materiais da Minha T�cnica Exclusiva",
    "description": "Tenha acesso � lista dos produtos e materiais que utilizo na minha t�cnica avan�ada e personalizada, com orienta��es para voc� saber o que precisa antes de come�ar."
  },
  {
    "src": "/images/modulo3.webp",
    "alt": "Capa do m�dulo 3: Meu Passo a Passo na Pr�tica",
    "label": "M�dulo 03",
    "ratio": "1:1",
    "eyebrow": "M�dulo 03",
    "title": "Meu Passo a Passo na Pr�tica",
    "description": "Aprenda minha sequ�ncia de aplica��o personalizada, do preparo dos fios at� o acabamento final, com fotos demonstrativas para acompanhar cada etapa e entender os detalhes que fazem diferen�a no resultado."
  },
  {
    "src": "/images/modulo-4.webp",
    "alt": "Capa do m�dulo 4: Resultados Reais da Criadora",
    "label": "M�dulo 04",
    "ratio": "1:1",
    "eyebrow": "M�dulo 04",
    "title": "Resultados Reais da Criadora",
    "description": "Veja fotos reais dos meus pr�prios atendimentos e descubra o efeito que minha t�cnica proporciona em diferentes sobrancelhas, com acabamentos naturais, alinhados e visualmente mais volumosos."
  }
] as ProductItem[],
  bonusesSection: { title: 'E para voc� n�o ficar perdida na hora de come�ar, preparei 3 b�nus especiais!' },
  bonuses: [
  {
    "src": "/images/bonus-1.webp",
    "alt": "Capa do b�nus 1: Guia Brow Sem Erros",
    "label": "B�nus 01",
    "ratio": "1:1",
    "eyebrow": "B�nus 01",
    "title": "Guia Brow Sem Erros",
    "description": "Um checklist para consultar antes dos atendimentos, organizar seus materiais, conferir os cuidados necess�rios e evitar esquecer etapas importantes do procedimento.",
    "benefit": "Mais organiza��o e seguran�a na sua rotina profissional.",
    "value": "R$ 39,00"
  },
  {
    "src": "/images/bonus-2.webp",
    "alt": "Capa do b�nus 2: Quanto Cobrar Pelo Seu Brow?",
    "label": "B�nus 02",
    "ratio": "1:1",
    "eyebrow": "B�nus 02",
    "title": "Quanto Cobrar Pelo Seu Brow?",
    "description": "Um guia pr�tico para calcular seus custos, entender quanto precisa cobrar e evitar trabalhar muito sem saber quanto realmente est� ganhando.",
    "benefit": "Aprenda a valorizar seu servi�o e organizar seus pre�os.",
    "value": "R$ 29,00"
  },
  {
    "src": "/images/bonus-3.webp",
    "alt": "Capa do b�nus 3: Primeiras Clientes Brow",
    "label": "B�nus 03",
    "ratio": "1:1",
    "eyebrow": "B�nus 03",
    "title": "Primeiras Clientes Brow",
    "description": "Modelos de mensagens para WhatsApp, ideias de divulga��o e sugest�es de conte�dos para mostrar seu trabalho e despertar o interesse de poss�veis clientes.",
    "benefit": "Saiba por onde come�ar a divulgar sua nova habilidade.",
    "value": "R$ 29,00"
  }
] as (ProductItem & { benefit: string; value: string })[],
  offersSection: {
    title: 'Quanto vale aprender uma t�cnica que voc� pode usar para oferecer um novo servi�o na �rea da beleza?',
    paymentSecurityImage: '/images/metodos-pagamento-seguranca.svg',
    paymentSecurityAlt: 'M�todos de pagamento e selos de compra segura, satisfa��o garantida e privacidade protegida',
  },
  offers: {
  "simple": {
    "title": "OFERTA SIMPLES",
    "items": [
      {
        "label": "Curso Avan�ado de Brow Lamination em e-book"
      },
      {
        "label": "Passo a passo da t�cnica personalizada"
      },
      {
        "label": "Acesso vital�cio ao material"
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
        "label": "Curso Avan�ado de Brow Lamination"
      },
      {
        "label": "Passo a passo da t�cnica"
      },
      {
        "label": "Acesso vital�cio ao material"
      },
      {
        "label": "B�NUS 01: Guia Brow",
        "value": "R$ 19,90"
      },
      {
        "label": "B�NUS 02: Quanto Cobrar",
        "value": "R$ 19,90"
      },
      {
        "label": "B�NUS 03: Primeiras Clientes",
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
    "eyebrow": "ESPERA! VOC� VAI DEIXAR OS 3 B�NUS PARA TR�S?",
    "message": "J� que voc� decidiu aprender minha t�cnica de Brow Lamination, quero te dar uma condi��o especial para levar o pacote completo.\n\nEm vez de pagar R$ 49,90, voc� pode aproveitar agora o curso com os tr�s b�nus por apenas:",
    "title": "Voc� leva:",
    "previousPrice": "R$ 49,90",
    "installmentCount": 0,
    "installmentValue": "",
    "cashValue": "R$ 39,90",
    "priceLabel": "Tudo isso por apenas",
    "note": "Tudo isso por apenas R$ 10 a mais que a Oferta Simples.",
    "ctaLabel": "SIM, QUERO APROVEITAR O DESCONTO",
    "secondaryLabel": "N�O, QUERO APENAS O CURSO"
  }
},
  guarantee: {
    image: '/images/selo-garantia-7-dias.svg',
    imageAlt: 'Selo de garantia de 7 dias',
    days: 7,
    title: 'Voc� tem 7 dias para conhecer o material sem ficar com medo de perder seu dinheiro!',
    body: 'Eu quero que voc� tenha tranquilidade para conhecer meu curso.\n\nPor isso, sua compra conta com 7 dias de garantia.\n\nSe nesse per�odo voc� perceber que o conte�do n�o � para voc�, poder� solicitar o reembolso dentro das condi��es da garantia.\n\nSeu dinheiro protegido. Seu aprendizado pode come�ar agora.',
  },
  faqSection: { title: 'Ainda ficou alguma d�vida? Eu te respondo!' },
  faq: [
  {
    "question": "Nunca fiz Brow Lamination. Vou conseguir aprender?",
    "answer": "Sim! O material apresenta o procedimento desde a prepara��o dos materiais at� a finaliza��o. Voc� pode estudar mesmo come�ando do zero. Para realizar atendimentos com seguran�a, � importante praticar, conhecer as contraindica��es e dominar cada etapa antes de atender clientes."
  },
  {
    "question": "Em quanto tempo consigo aprender a t�cnica?",
    "answer": "Voc� pode estudar o passo a passo em apenas 1 dia, no seu pr�prio ritmo. O tempo para dominar a aplica��o e come�ar a atender depende da sua pr�tica e prepara��o."
  },
  {
    "question": "Vou aprender a deixar sobrancelhas fininhas mais cheias?",
    "answer": "Voc� vai conhecer minha forma de avaliar, alinhar e direcionar os fios para criar um efeito visual de mais volume e defini��o, respeitando o formato natural de cada sobrancelha. O resultado varia conforme a quantidade e as caracter�sticas dos fios."
  },
  {
    "question": "O curso � em v�deo ou preciso participar de aulas ao vivo?",
    "answer": "O curso principal � entregue em formato de e-book digital, com explica��es, imagens e orienta��es do procedimento. Voc� pode acessar o material e estudar quando quiser, sem precisar participar de aulas ao vivo."
  },
  {
    "question": "E se eu comprar e n�o gostar do conte�do?",
    "answer": "Voc� conta com uma garantia de 7 dias para solicitar o reembolso, conforme as condi��es informadas na compra. Assim, pode conhecer o material com mais tranquilidade."
  }
],
  footer: { brand: 'Larissa Beauty', copyright: '� 2026 Larissa Beauty' },
}

