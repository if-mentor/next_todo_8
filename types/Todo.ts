import {
  Timestamp,
} from 'firebase/firestore';

export type Todo = {
  id: number;
  createdAt: Timestamp;
  detail: string;
  priority: string;
  status: string;
  text: string;
  updateAt: Timestamp;
};
