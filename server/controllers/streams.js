import mongoose from 'mongoose';
import Stream from '../models/stream.js';

export const getStreams = async (req, res) => {
  try {
    const streams = await Stream.find();

    res.status(200).json(streams);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStream = async (req, res) => {
  try {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No post with that id');
    }

    const stream = await Stream.findById(_id);

    res.status(200).json(stream);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStream = async (req, res) => {
  const stream = req.body;

  const newStream = new Stream(stream);
  try {
    await newStream.save();

    res.status(201).json(newStream);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateStream = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const stream = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No post with that id');
    }

    const updatedStream = await Stream.findByIdAndUpdate(_id, stream, {
      new: true,
    });

    res.json(updatedStream);
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const deleteStream = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('No post with that id');
    }

    await Stream.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.log({ message: error.message });
  }
};
