export default {
  jwt: {
    secret: process.env.APP_SECRET || 'aaa',
    expiresIn: '2d',
  },
};
