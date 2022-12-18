// pra aparecer a quantidade de notificações
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

// calculando a quantidade de notificações
interface CountRecipientNotificationsRequest {
  recipientId: string;
}

// devolvendo como resposta um count com o número de notificações
interface CountRecipientNotificationsResponse {
  count: number;
}

@Injectable()

// o execute precisa receber os parâmetros do CountRecipientNotificationsRequest acima --- depois, vai devoler (com a promise) a notificação
export class CountRecipientNotifications {
  // recebendo o repositório
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
