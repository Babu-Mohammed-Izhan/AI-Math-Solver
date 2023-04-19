/* eslint-disable @typescript-eslint/no-unsafe-return */
import { AI } from "../types";
import NoteModel from "../models/note.model";

const getAI = async (): Promise<AI[]> => {
  const notes = await NoteModel.find({});
  return notes;
};

const getOneAI = async (title: string): Promise<AI> => {
  const note = await NoteModel.findOne({ title: title });
  if (!note) {
    throw Error("Note in not available");
  }
  return note;
};

export default {
  getAI,
  getOneAI,
};
