import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { App, AppInput } from './app.dto';

@Resolver(() => App)
export class AppResolver {
  @Query(() => App)
  sayHello() {
    return { key: 'Hello World!' };
  }

  @Mutation(() => App)
  sayWhatYouWant(@Args('input') input: AppInput) {
    return { key: input.key };
  }
}
