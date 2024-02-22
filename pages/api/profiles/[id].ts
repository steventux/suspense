import profilesRepo from './../profilesRepo';

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const getProfileById = () => {
    const profile = profilesRepo.getById(Number(req.query.id));
    return res.status(200).json(profile);
  }

  const updateProfile = () => {
    try {
      profilesRepo.update(Number(req.query.id), req.body);
      return res.status(200).json({success:1});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  const deleteProfile = () => {
    profilesRepo.delete(Number(req.query.id));
    return res.status(200).json({success:1});
  }

  switch (req.method) {
    case 'GET':
      return getProfileById();
    case 'PUT':
      return updateProfile();
    case 'DELETE':
      return deleteProfile();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
