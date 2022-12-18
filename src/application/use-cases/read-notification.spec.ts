import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { ReadNotification } from './read-notification';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    // criando a notificação
    const notification = makeNotification();
    // adicionando a notificação no banco de dados
    await notificationsRepository.create(notification);

    // executando o use case que marca ela como lida
    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  // teste pra se caso a notificação não existir, criar um erro
  it('should not be able to read a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    // espera que retorne um erro 'notificationNotFound'
    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});

// nesse teste, criei uma notificação, adicionei no meu bd 'fake', e depois eu mandei cancelar a notificação, eu espero que seja igual a qlqr objeto do tipo 'date'
