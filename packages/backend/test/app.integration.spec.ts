import fs from "fs";
import path from "path";
import supertest from 'supertest';
import {NestFactory} from "@nestjs/core";
import {AppModule} from "../src/app.module";
import {INestApplication} from "@nestjs/common";


describe('AppController', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await NestFactory.create(AppModule, {
            cors: true
        });
        await app.listen(3123);

        fs.appendFileSync(path.resolve(__dirname, './test.txt'), 'content', {flag: 'w'});
    });

    describe('App', () => {
        it('POST /files', (done) => {
            const file = fs.createReadStream(path.resolve(__dirname, './test.txt'), 'utf8');

            supertest(app.getHttpServer())
                .post('/files')
                .attach('files', file, {filename: 'test.txt', contentType: 'text/plain'})
                .expect(201)
                .expect(['test.txt'])
                .end(() => {
                    done();
                });
        });
    });

    afterAll(() => {
        fs.unlinkSync(path.resolve(__dirname, './test.txt'));
    });
});
