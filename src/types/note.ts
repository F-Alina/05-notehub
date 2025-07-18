export type NoteTag = "Todo" | "Work" | "Personal" | "Shopping" | "Meeting";

export interface Note {
  id: number;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: NoteTag;
}
