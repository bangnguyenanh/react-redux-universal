import { Device } from 'models';

export default function add(req) {
  return new Promise((resolve, reject) => {
    let newDevice = new Device({
      registrationId: req.body.registrationId
    })

    newDevice.save((err, device) => {
      if (err) {
        reject(err.message);
      }

      console.log("Added device: " + device.registrationId);

      resolve({
        insertedDevice: device
      });
    })
  })
}