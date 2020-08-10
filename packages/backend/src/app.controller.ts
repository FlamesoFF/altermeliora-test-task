import {Controller, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FilesInterceptor} from "@nestjs/platform-express";


@Controller('files')
export class FilesController {

    @Post()
    @UseInterceptors(
        FilesInterceptor(
            'files',
            null,
            {
                limits: {fileSize: 1024 ** 2}   // KB
            }
        )
    )
    async upload(@UploadedFiles() files) {
        if (files) {
            const names = files.map(({originalname}) => originalname)
            console.log(names);

            return names;
        } else
            return new Error();
    }
}
