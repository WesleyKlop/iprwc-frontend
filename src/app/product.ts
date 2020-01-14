import { File } from './file';

export interface Product {
  id: number;
  title: string;
  description: string | null;
  file?: File;
}
