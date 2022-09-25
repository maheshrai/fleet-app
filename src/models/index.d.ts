import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum InspectionState {
  INSPECTED = "INSPECTED",
  REQUIRES_ATTENTION = "REQUIRES_ATTENTION",
  NOT_APPLICABLE = "NOT_APPLICABLE"
}



type VehicleInspectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class VehicleInspection {
  readonly id: string;
  readonly vehicleNumber: string;
  readonly licensePlate: string;
  readonly mileage: number;
  readonly orgOrUnit: string;
  readonly tires?: InspectionState | keyof typeof InspectionState | null;
  readonly windshieldAndWindows?: InspectionState | keyof typeof InspectionState | null;
  readonly exterior?: InspectionState | keyof typeof InspectionState | null;
  readonly horn?: InspectionState | keyof typeof InspectionState | null;
  readonly wipers?: InspectionState | keyof typeof InspectionState | null;
  readonly lights?: InspectionState | keyof typeof InspectionState | null;
  readonly fireExtinguisherAndFirstAidKit?: InspectionState | keyof typeof InspectionState | null;
  readonly safetyReflectors?: InspectionState | keyof typeof InspectionState | null;
  readonly vehicleRegistrationAndInsurance?: InspectionState | keyof typeof InspectionState | null;
  readonly emergencyContactSheet?: InspectionState | keyof typeof InspectionState | null;
  readonly cleanliness?: InspectionState | keyof typeof InspectionState | null;
  readonly fuelTankFull?: InspectionState | keyof typeof InspectionState | null;
  readonly equipmentSecured?: InspectionState | keyof typeof InspectionState | null;
  readonly vehicleLocked?: InspectionState | keyof typeof InspectionState | null;
  readonly notes?: string | null;
  readonly username?: string | null;
  readonly inspectionDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<VehicleInspection, VehicleInspectionMetaData>);
  static copyOf(source: VehicleInspection, mutator: (draft: MutableModel<VehicleInspection, VehicleInspectionMetaData>) => MutableModel<VehicleInspection, VehicleInspectionMetaData> | void): VehicleInspection;
}