module.exports = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  deployWebhook: process.env.DEPLOY_WEBHOOK,
  herokuDashboard: process.env.HEROKU_DASHBOARD,
};
