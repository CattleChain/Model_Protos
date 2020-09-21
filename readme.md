# Cattlechain Data Model (protobufs)
[![NPM](https://nodei.co/npm/cattlechain_protos.png)](https://nodei.co/npm/cattlechain_protos/) 
[![NPM](https://nodei.co/npm/cattlechain_protos.png?mini=true)](https://nodei.co/npm/cattlechain_protos/)

## Background
Cattlechain 4.0 uses hyperledger sawtooth for a blockchain layer. and the this repository is smart contract definition is written in [protobufs](https://developers.google.com/protocol-buffers).
Protobuf is a binary encoding format that allows you to specify a schema for your data using a specification language.

## Animal Identification
For the Animal Identification the data model is used

```sh
https://github.com/FIWARE/data-models/tree/master/specs/AgriFood/Animal
```
and the related protos can be found in:

```sh
/protos/animalIdentity.proto
```

### Model definition

The proposed animal data model has been made from a more general point of view, trying to adjust it to the information coming from the devices and sensors used in the UC.
The proposed model for the animal entity has the following properties:
-   id: unique identifier
-   type: Entity type. It must be equal to “Animal”
-   species: Species to which the animal belongs
    -   Attribute type: Property. [Text](https://schema.org/Text)
    -   Allowed values: (dairy cattle, beef cattle, sheep, goat, horse, pig)
    -   Mandatory
-   relatedSource: ID of the animal in external applications (For the testing and currelty device are connected here)
    -   Attribute type: List of StructuredValue
    -   Values:
        -   application: ID of the particular AgriApp entity
            -   Type: URI
        -   applicationEntityId: ID of the animal in the external application
            -   Type: Text
    -   Optional
-   legalID: Legal ID of the animal:
    -   Attribute type: Property. [Text](https://schema.org/Text)
    -   Mandatory
-   birthdate: Animal’s birthdate
    -   Attribute type: Property. [DateTime](https://schema.org/DateTime)
    -   Mandatory
-   sex: Sex of the animal
    -   Attribute type: Property. [Text](https://schema.org/Text)
    -   Allowed values: (female, male)
    -   Mandatory
-   breed: Breed of the animal
    -   Attribute type: Property. [Text](https://schema.org/Text)
    -   Optional
-   calvedBy: Mother of the animal
    -   Attribute type: Relationship
    -   Optional
-   siredBy: Father of the animal
    -   Attribute type: Relationship
    -   Optional
-   location: Location of the animal represented by a GeoJSON geometry.
    -   Attribute type: GeoProperty. `geo:json`.
    -   Normative References:
        [https://tools.ietf.org/html/rfc7946](https://tools.ietf.org/html/rfc7946)
    -   Attribute metadata:
        -   timestamp: optional timestamp for the observed value.
            -   Type: DateTime
    -   Optional
-   weight: The weight of the animal as a number
    -   Attribute type: Number
    -   Default unit: kg
    -   Attribute metadata:
        -   timestamp: optional timestamp for the observed value.
            -   Type: DateTime
    -   Optional
-   ownedBy: The owner of the animal:
    -   Attribute type: Relationship
    -   Attribute metadata:
        -   timestamp: optional timestamp for the observed value.
            -   Type: DateTime
    -   Optional
-   locatedAt: AgriParcel relationship:
    -   Attribute type: Relationship
    -   Attribute metadata:
        -   timestamp: optional timestamp for the observed value.
            -   Type: DateTime
    -   Optional
-   phenologicalCondition: Phenological condition of the animal
    -   Attribute type: Property. [Text](https://schema.org/Text)
    -   Attribute metadata:
        -   timestamp: optional timestamp for the observed value.
            -   Type: DateTime
    -   Optional
-   reproductiveCondition: Reproductive condition of the animal
    -   Attribute type: Property. [Text](https://schema.org/Text)
    -   Attribute metadata:
        -   timestamp: optional timestamp for the observed value.
            -   Type: DateTime
    -   Optional
-   healthCondition: Health condition of the animal
    -   Attribute type: Property. [Text](https://schema.org/Text)
    -   Attribute metadata:
        -   timestamp: optional timestamp for the observed value.
            -   Type: DateTime
    -   Optional
-   fedWith: Food used for the animal
    -   Attribute type: Relationship
    -   Attribute metadata:
        -   timestamp: optional timestamp for the observed value.
        -   Type: DateTime
    -   Optional
-   welfareCondition: Indicator of the animal welfare
    -   Attribute type: Property. [Text](https://schema.org/Text)
    -   Attribute metadata:
        -   timestamp: optional timestamp for the observed value.
            -   Type: DateTime
    -   Optional

## Farm Identification
For the Animal Identification the data model is used

```sh
https://github.com/FIWARE/data-models/tree/master/specs/AgriFood/AgriFarm
```
and the related protos can be found in:

```sh
/protos/dairyIdentity.proto
```

## Device Identification
For the Device Identification the data model is temparory and still need to be defined with the help of Alberto.
for now the definition is as below

```json
 {
     "id": "urn:device:1333-3213-321-321",
     "monitoring": [
        "json-payload"
     ],
     "indicators": [
        "json-payload"
     ]
 }
```

### pending
  [x] - Animal Identification
  [x] - Farm Identification
  [ ] - Device Identification and relationship
  [ ] - NGSI-LD 
  
**FIWARE Foundation e.V @ 2020**