export interface Bolo {
    nome: string;
    descricao: string;
    id: string | undefined;
    categorias: string[];
    imagens: string[];
    preco: number;
    peso: number | null;


} // export e para exportar para poder usar em outro lugar. (interface ele e um tipo de dados.)
