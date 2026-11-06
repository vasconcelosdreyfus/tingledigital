/**
 * Firestore de produção, consultado em 06/11/2026 por agregação de contagem.
 * Matrículas: projetos/{projeto}/alunos com statusGeral == "matriculado".
 * Respostas: documentos de projetos/{projeto}/respostasPesquisas, em todos os projetos.
 * Matrículas são registros por projeto, não pessoas únicas entre projetos.
 * A comunicação usa patamares arredondados para baixo, não contagem em tempo real.
 */
export const cognitaImpact = {
  verifiedAt: "2026-11-06",
  enrolledStudentRecords: 4463,
  surveyResponses: 31242,
} as const;

export const cognitaImpactThousands = {
  enrollments: Math.floor(cognitaImpact.enrolledStudentRecords / 1000),
  surveyResponses: Math.floor(cognitaImpact.surveyResponses / 1000),
};
