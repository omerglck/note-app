// veri tabanına eklerken hem NoteDatanın özellikleri
// ve idyi de ekstradan eklemek istediğimiz için Note typenı
// oluşturduk ve NoteData yı miras aldık
export type Note = {
  id: string;
} & NoteData;

// form tarafında kullanılacak
export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

// verileri localde tutarken kullanacağımız veri tipi
// Verileri veri tabanlalrında tutarken dizide elemanlar genelde
// sadece idlerini tutarız
export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};
