// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Services } from "../../data";
import { IService } from "../../types";

// type Data = {
//   name: string
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ Services });
}
