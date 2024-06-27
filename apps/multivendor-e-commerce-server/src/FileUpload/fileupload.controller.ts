import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FileUploadService } from "./fileupload.service";

@swagger.ApiTags("fileUploads")
@common.Controller("fileUploads")
export class FileUploadController {
  constructor(protected readonly service: FileUploadService) {}
}
