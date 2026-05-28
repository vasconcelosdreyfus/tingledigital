export interface Client {
  name: string;
  url?: string;
  category?: string;
}

export const clients: Client[] = [
  { name: "Casa Brasil", category: "Principal Parceiro" },
  { name: "Equatorial Energia", category: "P&D" },
  { name: "QBANHO", category: "Energia & Tech" },
  { name: "5EC", category: "Energia & Tech" },
  { name: "Hubz", category: "Inovação & P&D" },
  { name: "FIXER", category: "Telecom" },
  { name: "Agência Nel", category: "Marketing" },
  { name: "BurgerNight", category: "Consultoria" },
  { name: "Governo do Estado do RJ", category: "Cultura" },
];
