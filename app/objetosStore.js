const objetosIniciais = [
  {
    id: "1",
    nome: "Fone de ouvido Bluetooth",
    categoria: "Eletrônicos",
    descricao: "Fone preto encontrado próximo à biblioteca.",
    local: "Biblioteca",
    data: "25/10/2026",
    emoji: "🎧",
    cor: "#EDE9FE",
  },
  {
    id: "2",
    nome: "Garrafa térmica",
    categoria: "Acessórios",
    descricao: "Garrafa térmica azul com tampa preta.",
    local: "Bloco de salas",
    data: "24/10/2026",
    emoji: "🧴",
    cor: "#DBEAFE",
  },
  {
    id: "3",
    nome: "Caderno universitário",
    categoria: "Outros",
    descricao: "Caderno de capa verde com anotações.",
    local: "Sala 203",
    data: "23/10/2026",
    emoji: "📒",
    cor: "#D1FAE5",
  },
  {
    id: "4",
    nome: "Carteira de documentos",
    categoria: "Documentos",
    descricao: "Carteira marrom com documentos pessoais.",
    local: "Recepção",
    data: "22/10/2026",
    emoji: "👛",
    cor: "#FEF3C7",
  },
  {
    id: "5",
    nome: "Carregador de celular",
    categoria: "Eletrônicos",
    descricao: "Carregador branco encontrado em uma sala.",
    local: "Laboratório de informática",
    data: "21/10/2026",
    emoji: "🔌",
    cor: "#FCE7F3",
  },
];

let objetos = [...objetosIniciais];
const ouvintes = new Set();

export function obterObjetos() {
  return objetos;
}

export function observarObjetos(callback) {
  ouvintes.add(callback);

  return () => {
    ouvintes.delete(callback);
  };
}

export function adicionarObjeto(novoObjeto) {
  objetos = [novoObjeto, ...objetos];

  ouvintes.forEach((callback) => callback(objetos));
}
