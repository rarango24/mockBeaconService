export class BeaconCreationDto {
  private constructor(
    public readonly licensePlate: string,
    public readonly model: string,
    public readonly beaconID: string,
    public readonly macAddress: string,
    public readonly beaconFlag: number
  ) {}

  static createBeaconDto(props: {
    [key: string]: any;
  }): [string?, BeaconCreationDto?] {
    const { licensePlate, model, beaconID, macAddress, beaconFlag } = props;

    const beaconFlagNumber = parseInt(beaconFlag);

    if (typeof licensePlate !== "string" || licensePlate.trim() === "") {
      return ["License Plate is required or must be a String", undefined];
    }

    if (typeof model !== "string" || model.trim() === "") {
      return ["model is required or must be a String", undefined];
    }

    if (typeof beaconID !== "string" || beaconID.trim() === "") {
      return ["beaconID is required or must be a String", undefined];
    }

    if (typeof macAddress !== "string" || macAddress.trim() === "") {
      return ["macAddress is required or must be a String", undefined];
    }

    if (typeof beaconFlagNumber !== "number" || isNaN(beaconFlagNumber)) {
      return ["beaconFlag must be a number", undefined];
    }

    const beacon = new BeaconCreationDto(
      licensePlate,
      model,
      beaconID,
      macAddress,
      beaconFlagNumber
    );

    return [undefined, beacon];
  }
}
