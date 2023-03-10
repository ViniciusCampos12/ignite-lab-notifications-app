import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { Notification as rowNotification } from '@prisma/client';

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        }
    }

    static toDomain(raw: rowNotification): Notification {
        return new Notification({
            content: new Content(raw.content),
            category: raw.category,
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            canceledAt: raw.canceledAt,
            createdAt: raw.createdAt,
        }, raw.id)
    }
}