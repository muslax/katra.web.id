-- Migration number: 0002 	 2026-03-14T22:11:17.212Z
create table kbbi (
  id integer primary key,
  _id text,
  nama text,
  kata text,
  jenis text,
  akar_kata text,
  kelas_kata text,
  makna text,
  etimologi text,
  kata_turunan text,
  gabungan_kata text,
  peribahasa text,
  idiom text,
  peribahasa_dan_makna text,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);
CREATE TRIGGER update_kbbi AFTER UPDATE ON kbbi
BEGIN UPDATE kbbi SET updated = (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')) WHERE id=NEW.id; END;
