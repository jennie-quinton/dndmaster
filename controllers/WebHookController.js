const keys = require('../config/keys');
const axios = require('axios');

module.exports = {
  deploy: async (req, res) => {
    const { data } = req.body;

    let environment = '';

    switch (process.env.NODE_ENV) {
      case 'production':
        environment = 'Production';
        break;

      case 'staging':
        environment = 'Staging';
        break;

      default:
        environment = 'Test Dev';
        break;
    }

    const buildStatus = data.status === 'succeeded' ? 'Success' : 'Failure';

    const payload = {
      text: `${environment} Build ${buildStatus}. <${keys.herokuDashboard}/activity/builds/${data.id}|Released v${data.release.version}>`,
    };

    try {
      await axios.post(keys.deployWebhook, payload);

      res.send({ success: true });
    } catch (error) {
      res.status(422).send({
        error,
      });
    }
  },
};
