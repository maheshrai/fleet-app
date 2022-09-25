export const schema = {
    "models": {
        "VehicleInspection": {
            "name": "VehicleInspection",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "vehicleNumber": {
                    "name": "vehicleNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "licensePlate": {
                    "name": "licensePlate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "mileage": {
                    "name": "mileage",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "orgOrUnit": {
                    "name": "orgOrUnit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "tires": {
                    "name": "tires",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "windshieldAndWindows": {
                    "name": "windshieldAndWindows",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "exterior": {
                    "name": "exterior",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "horn": {
                    "name": "horn",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "wipers": {
                    "name": "wipers",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "lights": {
                    "name": "lights",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "fireExtinguisherAndFirstAidKit": {
                    "name": "fireExtinguisherAndFirstAidKit",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "safetyReflectors": {
                    "name": "safetyReflectors",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "vehicleRegistrationAndInsurance": {
                    "name": "vehicleRegistrationAndInsurance",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactSheet": {
                    "name": "emergencyContactSheet",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "cleanliness": {
                    "name": "cleanliness",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "fuelTankFull": {
                    "name": "fuelTankFull",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "equipmentSecured": {
                    "name": "equipmentSecured",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "vehicleLocked": {
                    "name": "vehicleLocked",
                    "isArray": false,
                    "type": {
                        "enum": "InspectionState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "inspectionDate": {
                    "name": "inspectionDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "VehicleInspections",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "InspectionState": {
            "name": "InspectionState",
            "values": [
                "INSPECTED",
                "REQUIRES_ATTENTION",
                "NOT_APPLICABLE"
            ]
        }
    },
    "nonModels": {},
    "version": "afd84e0bf7db042e2c069032fea163dd"
};