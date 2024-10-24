import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() task: Partial<Task>,
  ): Promise<Task> {
    return this.taskService.update(+id, task);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.taskService.remove(+id);
  }
}
