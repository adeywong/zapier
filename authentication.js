'use strict';

const authentication = {
  type: 'basic',
  test: {
    url: 'https://secure.p03.elqqa01.com/API/REST/2.0/system/user/current',
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  }
};

module.exports = authentication;
