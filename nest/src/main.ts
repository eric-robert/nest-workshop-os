import { NestFactory } from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common';
import { json } from 'express';

import { ApplicationModule } from './app.module';

async function start() {

    // Start nest application
    const app = await NestFactory.create(ApplicationModule);

    // add json parser
    app.use(json())
    app.useGlobalPipes(new ValidationPipe());

    // start listening for requests
    await app.listen(3000);
}

// kick off the application
start()