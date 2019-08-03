// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const crypto = require('crypto');

const gavatarUrl = 'https://s.gravatar.com/avatar';

const query = 's=60';

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const { email } = context.data;

    const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

    context.data.avatar = `${gavatarUrl}/${hash}?${query}`;

    return context;
  };
};
