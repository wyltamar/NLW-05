//prettier-ignore
import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryColumn
} from 'typeorm';

import { v4 as uuid } from 'uuid';

//prettier-ignore
@Entity("settings")
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn({name: "updated_et"})
  updated_at: Date;

  @CreateDateColumn({name: "created_et"})
  created_at: Date;

  constructor(){
    if(!this.id) this.id = uuid();
  }

}

export { Setting };
