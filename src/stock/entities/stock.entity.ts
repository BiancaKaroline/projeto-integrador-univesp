/* eslint-disable camelcase */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SizeEnum } from '../enums/size.enum';

@Entity('tb_estoque')
export default class Stock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome_produto: string;

  @Column()
  tamanho: SizeEnum;

  @Column()
  data_cadastro: Date;

  @Column({ nullable: true })
  data_saida?: Date;

  @Column()
  empenho: number;

  @Column()
  costureiro: string;

  @Column({ nullable: true })
  obs?: string;
}
