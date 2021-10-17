/* eslint-disable import/prefer-default-export */
import { SizeEnum } from '../enums/size.enum';

export class StockDTO {
    id: string;

    nomeProduto: string;

    tamanho: SizeEnum;

    dataCadastro: Date;

    dataSaida?: Date;

    empenho: number;

    costureiro: string;

    obs?: string;
}
