import { Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';

@Resolver()
export class UserResolver {
  @Query(returns => UserModel)
  async user(): Promise<UserModel> {
    return { id: 'a', email: 'test' };
  }
}
