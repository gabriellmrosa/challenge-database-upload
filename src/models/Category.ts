import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories')
class Category {
  find(arg0: { where: { title: import("typeorm").FindOperator<any>; }; }) {
    throw new Error('Method not implemented.');
  }
  save(newCategories: any) {
    throw new Error('Method not implemented.');
  }
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
  create: any;
}

export default Category;
