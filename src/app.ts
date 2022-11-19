export default class Todo {
  id: number | string;
  done: boolean;
  constructor(public task: string) {
    this.id = Date.now()
    this.done = false;
  }
}