import { requestUploadAttachment } from '@/apis/server/attachment';
import { getHeadersFromRequest } from '@/apis/server/request';
import _reduce from 'lodash/reduce'
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const data = _reduce(req.body.split('&'), (r, i) => {
        const [key, data] = i.split('=')
        r[key] = decodeURIComponent(data)
        return r
      }, {})
      const result = await requestUploadAttachment(data, getHeadersFromRequest(req))
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
}