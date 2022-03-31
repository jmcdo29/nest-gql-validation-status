import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBooleanString, IsString } from 'class-validator';

@ObjectType()
export class App {
  @Field()
  key: string;
}

@InputType()
export class AppInput {
  @IsBooleanString()
  @Field()
  key: string;
}
