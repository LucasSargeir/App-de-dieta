export interface Alimento{
    nome: string,
    porcao: string,
    pontuacao: string,
    cor:"Y"|"G"|"R",
}

export interface Dia{
    data: Date,
    alimentos: Alimento[],
}

export interface Semana{
    numero: number,
    inicio: Date,
    fim: Date,
    peso: string,
    dias: Dia[]
}
