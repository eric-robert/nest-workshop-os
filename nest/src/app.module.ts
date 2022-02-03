import { Module, UseFilters} from '@nestjs/common';
import { UsersModule } from 'users/users.module';

@Module({
    imports: [
        UsersModule,
    ]
})
export class ApplicationModule {}

