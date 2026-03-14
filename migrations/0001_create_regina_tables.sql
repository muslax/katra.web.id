-- Migration number: 0001 	 2026-03-14T22:10:46.217Z
CREATE TABLE provinsi (
  id integer primary key,
  kode text not null unique,
  nama text,
  iso text,
  ibukota text,
  geografi text,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);
CREATE TABLE datidua (
  id integer primary key,
  kode_provinsi text,
  nama_provinsi text,
  tahun_data text,
  kode_daerah text,
  nama_daerah text,
  url text,
  tipe_daerah text,
  ibukota text,
  luas real,
  jml_penduduk integer,
  kepadatan real,
  kecamatan integer,
  distrik integer,
  kapanewon integer,
  kemantren integer,
  desa integer,
  kalurahan integer,
  kelurahan integer,
  kampung integer,
  gampong integer,
  nagari integer,
  jumlah_kecamatan integer GENERATED ALWAYS AS (kecamatan + distrik + kapanewon + kemantren) VIRTUAL,
  jumlah_desa integer GENERATED ALWAYS AS (desa + kalurahan + kelurahan + kampung + gampong + nagari) VIRTUAL,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text,
  CONSTRAINT unique_kode UNIQUE (kode_provinsi, kode_daerah)
);
CREATE TABLE desa (
  id integer primary key,
  kode_provinsi,
  kode_daerah,
  kode_kecamatan,
  nama,
  alias,
  kodepos,
  kecamatan,
  kabupaten,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);
CREATE TRIGGER update_provinsi AFTER UPDATE ON provinsi
BEGIN UPDATE provinsi SET updated = (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')) WHERE id=NEW.id; END;
CREATE TRIGGER update_datidua AFTER UPDATE ON datidua
BEGIN UPDATE datidua SET updated = (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')) WHERE id=NEW.id; END;
CREATE TRIGGER update_desa AFTER UPDATE ON desa
BEGIN UPDATE desa SET updated = (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')) WHERE id=NEW.id; END;
