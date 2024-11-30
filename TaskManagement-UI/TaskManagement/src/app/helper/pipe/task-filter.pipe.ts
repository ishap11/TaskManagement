import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: any[], searchQuery: string, selectedFilter: string): any[] {
    if (!tasks) return [];
    if (!searchQuery && selectedFilter === 'All') return tasks;

    return tasks.filter(task => {
      const matchesSearch = searchQuery
        ? task.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      const matchesFilter = selectedFilter === 'All' || task.status === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }
}
