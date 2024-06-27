/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ReturnRequest as PrismaReturnRequest } from "@prisma/client";

export class ReturnRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ReturnRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.returnRequest.count(args);
  }

  async returnRequests(
    args: Prisma.ReturnRequestFindManyArgs
  ): Promise<PrismaReturnRequest[]> {
    return this.prisma.returnRequest.findMany(args);
  }
  async returnRequest(
    args: Prisma.ReturnRequestFindUniqueArgs
  ): Promise<PrismaReturnRequest | null> {
    return this.prisma.returnRequest.findUnique(args);
  }
  async createReturnRequest(
    args: Prisma.ReturnRequestCreateArgs
  ): Promise<PrismaReturnRequest> {
    return this.prisma.returnRequest.create(args);
  }
  async updateReturnRequest(
    args: Prisma.ReturnRequestUpdateArgs
  ): Promise<PrismaReturnRequest> {
    return this.prisma.returnRequest.update(args);
  }
  async deleteReturnRequest(
    args: Prisma.ReturnRequestDeleteArgs
  ): Promise<PrismaReturnRequest> {
    return this.prisma.returnRequest.delete(args);
  }
}
