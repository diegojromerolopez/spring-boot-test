import { Teacher } from '../teachers/teacher';

export class Course {
  id: number;
  title: string;
  description: string;
  level: string;
  numberOfHours: number;
  active: boolean;
  teacher: Teacher;
}