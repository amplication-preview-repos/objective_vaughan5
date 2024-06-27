import * as graphql from "@nestjs/graphql";
import { FileUploadService } from "./fileupload.service";

export class FileUploadResolver {
  constructor(protected readonly service: FileUploadService) {}
}
