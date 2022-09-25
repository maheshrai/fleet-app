// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const InspectionState = {
  "INSPECTED": "INSPECTED",
  "REQUIRES_ATTENTION": "REQUIRES_ATTENTION",
  "NOT_APPLICABLE": "NOT_APPLICABLE"
};

const { VehicleInspection } = initSchema(schema);

export {
  VehicleInspection,
  InspectionState
};