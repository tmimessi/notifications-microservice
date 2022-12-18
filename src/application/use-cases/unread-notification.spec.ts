import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { UnreadNotification } from './unread-notification';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    // pra eu marcar uma notificação como não lida, ela precisa ter sido lida primeiramente, então já vou criar com uma data de leitura
    const notification = makeNotification({
      readAt: new Date(),
    });

    // adicionando a notificação no banco de dados
    await notificationsRepository.create(notification);

    // executando o use case que marca ela como lida
    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  // teste pra se caso a notificação não existir, criar um erro
  it('should not be able to unread a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    // espera que retorne um erro 'notificationNotFound'
    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});

// nesse teste, criei uma notificação, adicionei no meu bd 'fake', e depois eu mandei cancelar a notificação, eu espero que seja igual a qlqr objeto do tipo 'date'
