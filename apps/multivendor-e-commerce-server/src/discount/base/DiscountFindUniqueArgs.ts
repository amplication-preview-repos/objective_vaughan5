/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscountWhereUniqueInput } from "./DiscountWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DiscountFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => DiscountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscountWhereUniqueInput)
  @Field(() => DiscountWhereUniqueInput, { nullable: false })
  where!: DiscountWhereUniqueInput;
}

export { DiscountFindUniqueArgs as DiscountFindUniqueArgs };
