import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';
import { Module } from "@nestjs/common";
import { NotificationsRepository } from "@application/repositories/notification-repositories";
import { PrismaService } from "./prisma/prisma.service";

@Module({
    providers: [PrismaService, {
        provide: NotificationsRepository,
        useClass: PrismaNotificationsRepository
    }],
    exports: [NotificationsRepository]
})

export class DatabaseModules {}