import { Trainer } from './Trainer';

export class Member {
  id?: number;
  name?: string;
  age?: number;
  height?: number;
  weight?: number;
  imc?: number;
  rank?: string;
  trainer = new Trainer();
}
