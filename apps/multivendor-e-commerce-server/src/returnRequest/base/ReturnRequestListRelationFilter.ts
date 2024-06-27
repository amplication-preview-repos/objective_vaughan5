/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReturnRequestWhereInput } from "./ReturnRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ReturnRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ReturnRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => ReturnRequestWhereInput)
  @IsOptional()
  @Field(() => ReturnRequestWhereInput, {
    nullable: true,
  })
  every?: ReturnRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReturnRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => ReturnRequestWhereInput)
  @IsOptional()
  @Field(() => ReturnRequestWhereInput, {
    nullable: true,
  })
  some?: ReturnRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReturnRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => ReturnRequestWhereInput)
  @IsOptional()
  @Field(() => ReturnRequestWhereInput, {
    nullable: true,
  })
  none?: ReturnRequestWhereInput;
}
export { ReturnRequestListRelationFilter as ReturnRequestListRelationFilter };
