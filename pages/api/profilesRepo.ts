const fs = require('fs');
import { ProfileModel } from '@/app/types/index';
let profiles = require('@/data/profiles.json');

const getAll = () => {
  return profiles;
}

const getById = (id:number) => {
  return profiles.find((x:ProfileModel) => x.id.toString() === id.toString());
}

const create = ({ name, forkPsi, forkSag, forkHsc, forkLsc, forkHsr, forkLsr, shockPsi, shockSag, shockHsc, shockLsc, shockHsr, shockLsr }:ProfileModel) => {
  const id:number = profiles.length ? Math.max(...profiles.map((x:ProfileModel) => x.id)) + 1 : 1;

  const profile = <ProfileModel>{
    id, name, forkPsi, forkSag, forkHsc, forkLsc, forkHsr, forkLsr,
    shockPsi, shockSag, shockHsc, shockLsc, shockHsr, shockLsr
  };

  // validate
  if (profiles.find((x:ProfileModel) => x.name === profile.name))
    throw `Profile with the name ${profile.name} already exists`;

  // set date created and updated
  profile.dateCreated = new Date().toISOString();
  profile.dateUpdated = new Date().toISOString();

  // add and save profile
  profiles.push(profile);
  saveData();

  return profile;
}

const update = (id:number, { name, forkPsi, forkSag, forkHsc, forkLsc, forkHsr, forkLsr, shockPsi, shockSag, shockHsc, shockLsc, shockHsr, shockLsr }:ProfileModel) => {
  const params = { name, forkPsi, forkSag, forkHsc, forkLsc, forkHsr, forkLsr, shockPsi, shockSag, shockHsc, shockLsc, shockHsr, shockLsr };
  const profile = profiles.find((x:ProfileModel) => x.id.toString() === id.toString());

  // validate
  if (params.name !== profile.name && profiles.find((x:ProfileModel) => x.name === params.name))
    throw `Profile with the name ${params.name} already exists`;

  // set date updated
  profile.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(profile, params);
  saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
const _delete = (id:number) => {
  // filter out deleted profile and save
  profiles = profiles.filter((x:ProfileModel) => x.id.toString() !== id.toString());
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
