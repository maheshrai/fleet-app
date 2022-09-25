import { FormControl, Radio, Stack } from "native-base";
import React from "react";

interface InspectionRadioGroupModel {
  title: string;
  name: string;
  onInspectionSelect: any;
}

const InspectionRadioGroup = (props: InspectionRadioGroupModel) => {
  return (
    <FormControl>
      <FormControl.Label
        _text={{
          bold: true,
        }}
      >
        {props.title}
      </FormControl.Label>
      <Radio.Group
        name={props.name}
        defaultValue="INSPECTED"
        accessibilityLabel="pick a size"
        onChange={(nextValue) => {
          props.onInspectionSelect({ name: props.name, value: nextValue });
        }}
      >
        <Stack
          direction={{
            base: "row",
            md: "row",
          }}
          alignItems={{
            base: "flex-start",
            md: "center",
          }}
          space={4}
          w="75%"
          maxW="300px"
        >
          <Radio value="INSPECTED" colorScheme="green" size="sm" my={1}>
            Ins
          </Radio>
          <Radio
            value="REQUIRES_ATTENTION"
            colorScheme="green"
            size="sm"
            my={1}
          >
            R/A
          </Radio>
          <Radio value="NOT_APPLICABLE" colorScheme="green" size="sm" my={1}>
            N/A
          </Radio>
        </Stack>
      </Radio.Group>
    </FormControl>
  );
};

export default InspectionRadioGroup;
