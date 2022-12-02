export interface Departamento {
    departamento: string;
    id: number;
}
export interface Provincia {
    departamento: Departamento;
    id: number;
    provincia: string;
}
export interface Distrito {
    distrito: string;
    id: number;
    provincia: Provincia;
}