import { NoteData } from "../../types";
import NoteForm from "./NoteForm";

export type CreateNoteProps = {
  onSubmit: (data: NoteData) => void;
};
const CreateNote = ({ onSubmit }: CreateNoteProps) => {
  return (
    <div className="container py-5">
      <h1>Yeni Not Oluştur</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
};

export default CreateNote;
