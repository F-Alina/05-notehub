export type NoteTag = "Todo" | "Work" | "Personal" | "Shopping" | "Meeting";

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTag;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: NoteTag;
}
