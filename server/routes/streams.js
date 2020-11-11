import express from 'express';

import {
  getStreams,
  createStream,
  updateStream,
  getStream,
  deleteStream,
} from '../controllers/streams.js';

const router = express.Router();

router.get('/', getStreams);
router.get('/:id', getStream);
router.post('/', createStream);
router.patch('/:id', updateStream);
router.delete('/:id', deleteStream);

export default router;
