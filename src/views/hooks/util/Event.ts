
export class MyEvent {
  constructor() {
  }

  save(id: string) {
    id = id + 1
    return id
  }

  save2(id: string) {
    id = id + 2
    return id
  }
}