// pra aparecer a quantidade de notificações
import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

// calculando a quantidade de notificações
interface GetRecipientNotificationsRequest {
  recipientId: string;
}

// retornando uma lista de notificações
interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()

// o execute precisa receber os parâmetros do GetRecipientNotificationsRequest acima --- depois, vai devoler (com a promise) a notificação
export class GetRecipientNotifications {
  // recebendo o repositório
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
