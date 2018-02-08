const sample = require('../samples/sample_issue');

const createContact = (z, bundle) => {
  var eloquaUrl = 'https://secure.p03.elqqa01.com/API/REST/2.0/data/contact';
  const responsePromise = z.request({
    headers: {
      "content-type": "application/json"
    },
    method: 'POST',
    url: eloquaUrl,
    auth: {
      'user': 'uac470\\Admin.User',
      'pass': 'Eloqua123'
    },
    body: JSON.stringify({
      emailAddress: bundle.inputData.contactEmail
    })
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'contact',
  noun: 'Contact',
  display: {
    label: 'Create or Update Contact',
    description: 'Triggers on a new contact.'
  },

  operation: {
    inputFields: [
      {
        key: 'contactEmail',
        label: 'Contact Email',
        required: true
      },
      {
        key: 'contactName',
        label: 'Contact Name',
        required: true
      }
    ],
    perform: createContact
  }
};
