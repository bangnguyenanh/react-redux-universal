import gcm from 'node-gcm';
import { CronJob } from 'cron';
import { Device } from 'models';

export default new CronJob({
  cronTime: '*/30 * * * * *',
  onTick: function () {
    var message = new gcm.Message({
      data: { 
        name: 'Card1',
        description: 'This is my first card'
      }
    });

    // Set up the sender with you API key, prepare your recipients' registration tokens. 
    var sender = new gcm.Sender('AIzaSyAc1D6lBrvCmJkjmFPSjYiEFRNC6f3Zzys');

    Device
      .find({})
      .exec((err, devices) => {
        console.log("Number of Devices: " + devices.length);

        var regTokens = devices.map(d => d.registrationId);

        sender.send(message, { registrationTokens: regTokens }, function (err, response) {
          if (err) {
            console.error(err);
          }

          console.log(response);
        });
      })
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
