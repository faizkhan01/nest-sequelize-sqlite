import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.model';
import { CreateTaskDto } from './dtos/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll();
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskModel.create({ ...createTaskDto });
  }

  async update(id: number, updateData: Partial<Task>): Promise<Task> {
    const task = await this.taskModel.findByPk(id);
    if (task) {
      return task.update(updateData);
    }
    return null;
  }

  async remove(id: number): Promise<void> {
    const task = await this.taskModel.findByPk(id);
    if (task) {
      await task.destroy();
    }
  }
}
