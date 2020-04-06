const farmIdentity_pb = require('./js/protos/farmIdentity_pb');
const animalIdentity_pb = require('./js/protos/animalIdentity_pb');

module.exports = {
    farmIdentity_pb,
    animalIdentity_pb,
}

//Example
// const payload = new animalIdentity_pb.AnimalIdentity();
// const event = new animalIdentity_pb.AnimalMonitoringEvent();

// event.setActityalert('10');
// event.setTempraturealert('10');
// event.setWeightalert('10');
// event.setDrikingbehaviouralert('10');
// event.setResttimealert('10');
// event.setDairytimealert('10');
// payload.addEvents(event);
// payload.addEvents(event);
// payload.addEvents(event);
// payload.addEvents(event);
// payload.setId(1);
// payload.setType('animal');
// payload.setLegalid('adada');
// payload.setBreed('dsdsd');
// payload.setCalvedby('me');
// payload.setSiredby('dsdas');
// payload.setSex(animalIdentity_pb.AnimalIdentity.Sex.MALE);
// const data = payload.serializeBinary();
// const info = animalIdentity_pb.AnimalIdentity.deserializeBinary(data);
// console.log(info.getSex());
// console.log(info.getEventsList());
// console.log(info.toString());

