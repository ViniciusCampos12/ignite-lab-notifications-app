import { GetRecipientNotificationsUseCase } from './getRecipientNotifications';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notification-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Get recipients notifications', () => {
    it('should be able to get recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const getRecipientNotificationsUseCase = new GetRecipientNotificationsUseCase(notificationsRepository)

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }));
        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }));
        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-2' }));

        const { notifications } = await getRecipientNotificationsUseCase.execute({
            recipientId: 'recipient-1'
        })

        expect(notifications).toHaveLength(2)
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-1' }),
            expect.objectContaining({ recipientId: 'recipient-1' })
        ]))
    })
})

