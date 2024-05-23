import { Response } from "express";
import { BeaconCreationDto } from "../dtos/beaconCreationDto/beacon-creation.dto";
import { UploadedFile } from "express-fileupload";

export class CustomResponses {
  constructor() {}

  static successMessageUploadImages(res: Response, message: BeaconCreationDto, images: any[]) {
    return res
      .status(200)
      .json({
        type: "Success",
        message: message,
        imagesStatus: images,
      });
  }

  static badRequest(res: Response, message: string) {
    return res.status(400).json({ type: "Error", message: message });
  }

  static internalServerError(res: Response, message: string) {
    return res.status(500).json({ type: "Error", message: message });
  }
}
