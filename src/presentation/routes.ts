import { Router } from "express";
import { BeaconCreationRoutes } from "./beaconCreation/beaconCreationRoutes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/beaconCreation/', BeaconCreationRoutes.routes);

    return router;
  }
}
