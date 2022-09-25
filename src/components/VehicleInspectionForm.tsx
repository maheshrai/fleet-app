import { Button, FormControl, Input, VStack, ScrollView, TextArea } from "native-base";
import React from "react";
import { DataStore } from "@aws-amplify/datastore";
import { InspectionState, VehicleInspection } from "../models";
import InspectionRadioGroup from "./InspectionRadioGroup";

const VehicleInspectionForm = () => {
  interface VehicleInspectionData {
    vehicleNumber: string;
    licensePlate: string;
    mileage: number;
    orgUnit: string;
    tires: InspectionState;
    windshieldAndWindows: InspectionState;
    exterior: InspectionState;
    horn: InspectionState;
    wipers: InspectionState;
    lights: InspectionState;
    fireExtinguisherAndFirstAidKit: InspectionState;
    safetyReflectors: InspectionState;
    vehicleRegistrationAndInsurance: InspectionState;
    emergencyContactSheet: InspectionState;
    cleanliness: InspectionState;
    fuelTankFull: InspectionState;
    equipmentSecured: InspectionState;
    vehicleLocked: InspectionState;
    notes: string;
    username: string;
    inspectionDate: string;
  }
  const initalData: VehicleInspectionData = {
    vehicleNumber: "",
    licensePlate: "",
    mileage: 0,
    orgUnit: "",
    tires: InspectionState.INSPECTED,
    windshieldAndWindows: InspectionState.INSPECTED,
    exterior: InspectionState.INSPECTED,
    horn: InspectionState.INSPECTED,
    wipers: InspectionState.INSPECTED,
    lights: InspectionState.INSPECTED,
    fireExtinguisherAndFirstAidKit: InspectionState.NOT_APPLICABLE,
    safetyReflectors: InspectionState.REQUIRES_ATTENTION,
    vehicleRegistrationAndInsurance: InspectionState.INSPECTED,
    emergencyContactSheet: InspectionState.INSPECTED,
    cleanliness: InspectionState.INSPECTED,
    fuelTankFull: InspectionState.INSPECTED,
    equipmentSecured: InspectionState.INSPECTED,
    vehicleLocked: InspectionState.INSPECTED,
    notes: "",
    username: "",
    inspectionDate: new Date().toISOString().substring(0, 10),
  };

  const [formData, setData] = React.useState(initalData);
  const [errors, setErrors] = React.useState(initalData);

  const validate = () => {
    setErrors(initalData);
    let isValid = true;
    if (
      formData.vehicleNumber === undefined ||
      formData.vehicleNumber.trim() === ""
    ) {
      setErrors({ ...errors, vehicleNumber: "Vehicle Number is required" });
      isValid = false;
    }
    if (
      formData.licensePlate === undefined ||
      formData.licensePlate.trim() === ""
    ) {
      setErrors({ ...errors, licensePlate: "License Plate is required" });
      isValid = false;
    }
    return isValid;
  };

  const onSubmit = () => {
    if (validate()) {
      addVehicleInspection();
    } else {
      console.log("Validation Failed - " + formData.licensePlate);
    }
  };

  interface InspectionSelect {
    name: string;
    value: InspectionState;
  }

  const onInspectionSelect = (select: InspectionSelect) => {
    switch (select.name) {
      case "tires":
        setData({ ...formData, tires: select.value });
      case "windshieldAndWindows":
        setData({ ...formData, windshieldAndWindows: select.value });
      case "exterior":
        setData({ ...formData, exterior: select.value });
      case "horn":
        setData({ ...formData, horn: select.value });
      case "wipers":
        setData({ ...formData, wipers: select.value });
      case "lights":
        setData({ ...formData, lights: select.value });
      case "fireExtinguisherAndFirstAidKit":
        setData({ ...formData, fireExtinguisherAndFirstAidKit: select.value });
      case "safetyReflectors":
        setData({ ...formData, safetyReflectors: select.value });
      case "vehicleRegistrationAndInsurance":
        setData({ ...formData, vehicleRegistrationAndInsurance: select.value });
      case "emergencyContactSheet":
        setData({ ...formData, emergencyContactSheet: select.value });
      case "cleanliness":
        setData({ ...formData, cleanliness: select.value });
      case "fuelTankFull":
        setData({ ...formData, fuelTankFull: select.value });
      case "equipmentSecured":
        setData({ ...formData, equipmentSecured: select.value });
      case "vehicleLocked":
        setData({ ...formData, vehicleLocked: select.value });
    }
  };

  async function addVehicleInspection() {
    await DataStore.save(
      new VehicleInspection({
        vehicleNumber: formData.vehicleNumber,
        licensePlate: formData.licensePlate,
        mileage: formData.mileage,
        orgOrUnit: formData.orgUnit,
        tires: formData.tires,
        windshieldAndWindows: formData.windshieldAndWindows,
        exterior: formData.exterior,
        horn: formData.horn,
        wipers: formData.wipers,
        lights: formData.lights,
        fireExtinguisherAndFirstAidKit: formData.fireExtinguisherAndFirstAidKit,
        safetyReflectors: formData.safetyReflectors,
        vehicleRegistrationAndInsurance:
          formData.vehicleRegistrationAndInsurance,
        emergencyContactSheet: formData.emergencyContactSheet,
        cleanliness: formData.cleanliness,
        fuelTankFull: formData.fuelTankFull,
        equipmentSecured: formData.equipmentSecured,
        vehicleLocked: formData.vehicleLocked,
        notes: formData.notes,
        username: formData.username,
        inspectionDate: new Date().toISOString().substring(0, 10),
      })
    );
  }
  return (
    <ScrollView>
      <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Vehicle Number
          </FormControl.Label>
          <Input
            placeholder="1004"
            onChangeText={(value) =>
              setData({ ...formData, vehicleNumber: value })
            }
          />
          {errors.vehicleNumber.length > 0 && (
            <FormControl.ErrorMessage>
              {errors.vehicleNumber}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            License Plate
          </FormControl.Label>
          <Input
            placeholder="JTRJ112"
            onChangeText={(value) =>
              setData({ ...formData, licensePlate: value })
            }
          />
          {errors.licensePlate.length > 0 && (
            <FormControl.ErrorMessage>
              {errors.licensePlate}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <InspectionRadioGroup
          title={"Tires (Noticeably Damaged)"}
          name={"tires"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"Windshield(s), Windows (Cracked, Chipped, etc.)"}
          name={"windshieldAndWindows"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"Mirrors (Inside and Outside)"}
          name={"mirrors"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"Exterior (Clean, Dents, Scratches, Missing Trim, etc.)"}
          name={"exterior"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"Horn(s)"}
          name={"horn"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"Windshield Wipers"}
          name={"wipers"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"All Lights Functioning (Internal / External)"}
          name={"lights"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"Fire Extinguisher & First Aid Kit"}
          name={"fireExtinguisherAndFirstAidKit"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"Safety Reflectors / Flares"}
          name={"safetyReflectors"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"Vehicle Registration and Insurance"}
          name={"vehicleRegistrationAndInsurance"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={
            "Emergency Contact Sheet for Hazardous Materials (e.g. Nuclear Gauge)"
          }
          name={"emergencyContactSheet"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"INTERIOR HAS BEEN CLEANED OF ALL TRASH AND PERSONAL ITEMS"}
          name={"cleanliness"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"FUEL TANK FULL"}
          name={"fuelTankFull"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"EQUIPMENT SECURED"}
          name={"vehicleLocked"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <InspectionRadioGroup
          title={"VEHICLE LOCKED"}
          name={"vehicleLocked"}
          onInspectionSelect={onInspectionSelect}
        ></InspectionRadioGroup>
        <FormControl>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Notes
          </FormControl.Label>
          <TextArea
            placeholder="notes"
            h={20}
            onChangeText={(value) =>
              setData({ ...formData, notes: value })
            }
          />
          {errors.vehicleNumber.length > 0 && (
            <FormControl.ErrorMessage>
              {errors.vehicleNumber}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Submit
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default VehicleInspectionForm;
