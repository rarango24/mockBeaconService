import { Router } from "express";
import { BeaconCreationController } from "./controller";

export class BeaconCreationRoutes {
  static get routes(): Router {
    const router = Router();
    const beaconCreationController = new BeaconCreationController();

    router.post(
      "/postTestingCreation/",
      beaconCreationController.postTestingCreation
    );

    return router;
  }
}
