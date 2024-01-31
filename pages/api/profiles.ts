import profilesRepo from './profilesRepo';

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const getProfiles = () => {
    const profiles = profilesRepo.getAll();
    return res.status(200).json(profiles);
  }

  const createProfile = () => {
    try {
      profilesRepo.create(req.body);
      return res.status(200).json({});
    } catch (error: any) {
      return res.status(400).json({ message: error });
    }
  }

  switch (req.method) {
    case 'GET':
      return getProfiles();
    case 'POST':
      return createProfile();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
