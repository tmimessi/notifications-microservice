// quais métodos devem existir no repositório, mas não os implementa

import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>; // void pq eu já tô enviando a notificação, não preciso enviá-la de volta
  abstract findById(notificationId: string): Promise<Notification | null>; // buscando a notificação ou vendo se ela é inexistente
  abstract save(notification: Notification): Promise<void> 
  abstract countManyByRecipientId(recipientId: string): Promise<number>
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>
}
