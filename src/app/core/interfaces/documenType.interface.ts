export interface Welcome {
    codigo:         number;
    mensaje:        string;
    status:         string;
    tipoDocumentos: TipoDocumento[];
}

export interface TipoDocumento {
    id:            number;
    tipoDocumento: string;
    longitud:      number;
}