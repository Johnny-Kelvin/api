import { differenceInCalendarDays, differenceInMonths } from 'date-fns';

// Função para calcular a idade em meses e dias
export function calcularIdade(dataNascimentoStr) {
  const partesData = dataNascimentoStr.split('/');
  const dataNascimento = new Date(partesData[2], partesData[1] - 1, partesData[0]); // Ajusta para o formato MM/DD/AAAA
  const hoje = new Date();
  const meses = differenceInMonths(hoje, dataNascimento);
  const diasDiferenca = differenceInCalendarDays(hoje, dataNascimento);
  const dias = diasDiferenca - (meses * 30); // Ajuste conforme necessário para o cálculo exato

  return { meses, dias };
}