import { IsNotEmpty, IsUUID, Length } from 'class-validator';

// criando os campos do corpo da requisição pra criar uma notificação
export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}
