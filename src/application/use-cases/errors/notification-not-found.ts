export class NotificationNotFound extends Error {
  constructor() {
    // super: chamando o constructor da classe Error, que é do próprio JS
    super('notification not found!');
  }
}
