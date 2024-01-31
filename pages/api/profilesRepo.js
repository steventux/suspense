const fs = require('fs');

let profiles = require('./../../data/profiles.json');

const getAll = () => {
  return profiles;
}

const getById = (id) => {
  return profiles.find(x => x.id.toString() === id.toString());
}

const create = ({ name, forkPsi, forkSag, forkHsc, forkLsc, forkHsr, forkLsr, shockPsi, shockSag, shockHsc, shockLsc, shockHsr, shockLsr }) => {
  const profile = { name, forkPsi, forkSag, forkHsc, forkLsc, forkHsr, forkLsr, shockPsi, shockSag, shockHsc, shockLsc, shockHsr, shockLsr };

  // validate
  if (profiles.find(x => x.name === profile.name))
    throw `Profile with the name ${profile.name} already exists`;

  // generate new profile id
  profile.id = profiles.length ? Math.max(...profiles.map(x => x.id)) + 1 : 1;

  // set date created and updated
  profile.dateCreated = new Date().toISOString();
  profile.dateUpdated = new Date().toISOString();

  // add and save profile
  profiles.push(profile);
  saveData();
}

const update = (id, { name, forkPsi, forkSag, forkHsc, forkLsc, forkHsr, forkLsr, shockPsi, shockSag, shockHsc, shockLsc, shockHsr, shockLsr }) => {
  const params = { name, forkPsi, forkSag, forkHsc, forkLsc, forkHsr, forkLsr, shockPsi, shockSag, shockHsc, shockLsc, shockHsr, shockLsr };
  const profile = profiles.find(x => x.id.toString() === id.toString());

  // validate
  if (params.name !== profile.name && profiles.find(x => x.name === params.name))
    throw `Profile with the name ${params.name} already exists`;

  // set date updated
  profile.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(profile, params);
  saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
const _delete = (id) => {
  // filter out deleted profile and save
  profiles = profiles.filter(x => x.id.toString() !== id.toString());
  saveData();

}

// private helper functions

const saveData = () => {
  fs.writeFileSync('data/profiles.json', JSON.stringify(profiles, null, 4));
}

const profilesRepo = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

export default profilesRepo;
