import { Context } from "hono";
import { Bindings } from "..";

function fixEncoding(str: string) {
  // 1. Encode the "exploded" UTF-8 string into a binary array
  // (Treating it as if each character is a single byte)
  const bytes = Uint8Array.from(str, (c) => c.charCodeAt(0));

  // 2. Decode those bytes correctly as UTF-8
  const rs =  new TextDecoder("utf-8").decode(bytes);
  console.log(rs);
  return rs;
}

function recoverUtf8(garbledString: string) {
  // 1. Force the string into a byte array by taking each char code as 1 byte
  const bytes = new Uint8Array(garbledString.length);
  for (let i = 0; i < garbledString.length; i++) {
    bytes[i] = garbledString.charCodeAt(i) & 0xff;
  }

  // 2. Properly decode that byte array as UTF-8
  return new TextDecoder("utf-8").decode(bytes);
}

export function row2Entri(row: Record<string, unknown>) {
  const e = row;
  e.kelas_kata = JSON.parse("" + row.kelas_kata);
  e.makna = JSON.parse("" + row.makna);
  e.kata_turunan = JSON.parse("" + row.kata_turunan);
  e.gabungan_kata = JSON.parse("" + row.gabungan_kata);
  e.peribahasa = JSON.parse("" + row.peribahasa);
  e.peribahasa_dan_makna = JSON.parse("" + row.peribahasa_dan_makna);
  e.idiom = JSON.parse("" + row.idiom);
  if (row.etimologi) {
    // const recovered = fixDoubleEncoding("" + row.etimologi);
    const recovered = fixEncoding("" + row.etimologi);
    console.log(recovered);
    // e.etimologi = JSON.parse("" + row.etimologi);
    // e.etimologi = JSON.parse(recovered);
    // Temporary return raw
    e.etimologi = row.etimologi;
  }
  return e as EntriKBBI;
};

export async function getByKata(c: Context<Bindings>, kata: string) {
  const db = c.env.DB;
  const stm = "select * from kbbi where kata=?";
  const rs = await db.prepare(stm).bind(kata).all();
  return rs.results.map(row => row2Entri(row));
}