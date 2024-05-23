import { Request, Response } from "express";
import { BeaconCreationDto } from "../../domain/dtos/beaconCreationDto/beacon-creation.dto";
import { CustomResponses } from "../../domain/customResponses/customResponses";
import { FileUploadService } from "../services/file-upload.service";
import { UploadedFile } from "express-fileupload";

export class BeaconCreationController {
  //DI
  constructor() {}

  public postTestingCreation = (req: Request, res: Response) => {
    const [error, beaconCreationFinal] = BeaconCreationDto.createBeaconDto(
      req.body
    );

    if (error) {
      return CustomResponses.badRequest(res, error);
    }

    if (!beaconCreationFinal) {
      return CustomResponses.badRequest(res, "Error creating vehicle");
    }

    if (req.files! === null) {
      return CustomResponses.badRequest(
        res,
        `Images are required to create a beacon.`
      );
    }

    const imageList = Object.values(req.files!) as UploadedFile[];

    new FileUploadService()
      .uploadMultiple(imageList, "uploads")
      .then((fileNames) => {
        return CustomResponses.successMessageUploadImages(
          res,
          beaconCreationFinal,
          fileNames
        );
      })
      .catch((error) => {
        return CustomResponses.internalServerError(
          res,
          `Server error ${error}, call an administrator`
        );
      });
  };
}
