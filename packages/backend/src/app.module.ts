import {Module} from '@nestjs/common';
import {FilesController} from './app.controller';
import {MulterModule} from "@nestjs/platform-express";


@Module({
    imports: [MulterModule.register()],
    controllers: [FilesController]
})
export class AppModule {
}
