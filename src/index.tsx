import { Hono } from 'hono'
import { renderer } from './renderer'
import { getByKata, row2Entri } from './d1/db';
import { Fragment } from 'hono/jsx/jsx-runtime';
import { BandZZTop } from './ui/band-zz-top';
import { BandZZBottom } from './ui/band-zz-bottom';
import { HomeNav, KatraHeader, KatraKanan, KatraNav } from './ui/katra-header';

export type Bindings = { Bindings: Cloudflare.Env };

const app = new Hono<{ Bindings: Cloudflare.Env }>()

app.use(renderer)

app.get('/', async (c) => {
  const db = c.env.DB;
  const rs = await db.prepare("select * from kbbi where etimologi is not null limit 5").all();
  return c.render(
    <Fragment>
      <KatraHeader nav={<HomeNav />} extra={<KatraKanan />} />
      <main>
        <section class="valley">
          <div style="min-height:40vh">
            <div style="max-width:1050px;margin:0 auto;padding:4rem 1.5rem;">
              <div style="margin:3rem 0">
                <button
                  class="btn-rec"
                  onclick="document.documentElement.style.setProperty('--accent-color', 'red');"
                >
                  Declare Void
                </button>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        <section class="page fancy-zz-up" style="height:100vh">
          <div class="katra-space">
            <div style="padding:4rem 0;text-align:center;">
              <h1 class="ibm-plex-sans" style="font-size:3rem;font-weight:600;">
                &lt;&nbsp;Katrakan dengan data&nbsp;/&gt;
              </h1>
              <h2 class="inter" style="font-size:2rem;">Bukan rasa. Sebentaaar saja.</h2>
              <h2 class="inter" style="font-size:2rem;">Boleh juga datra. Yang benaaar saja.</h2>
              <h2 class="inter" style="font-size:2rem;">Ayo jaga datra diri.</h2>
              <h2 class="inter" style="font-size:2rem;">Apa itu datra? Temukan di sini.</h2>
              <h2 class="inter" style="font-size:2rem;">Beyond data, ada bahasa.</h2>
              <h2 class="inter" style="font-size:2rem;">
                Dan lebih elegan, gunakan peribahasa.
              </h2>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </Fragment>,
  );
})

const btop = (
  <svg
    width="100%"
    height="100%"
    viewBox="10 10 240 240"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
    xmlns:serif="http://www.serif.com/"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
  >
    <g transform="matrix(1,0,0,1,-50,-290)">
      <path
        d="M310,290L50,290L50,339.343L177.226,424.16C178.906,425.28 181.094,425.28 182.774,424.16L310,339.343L310,290Z"
        style={`fill:rgba(120,120,120,1);`}
      />
      <path
        d="M310,290L310,327.324L180,413.991L50,327.324L50,290L310,290Z"
        style={`fill:rgb(255,255,255);`}
      />
    </g>
  </svg>
);

const band = (
  <svg
    width="100%"
    height="100%"
    viewBox="10 -117 240 240"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
    xmlns:serif="http://www.serif.com/"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
  >
    <g transform="matrix(1,0,0,1,-50,-407.324)">
      <g transform="matrix(1,0,0,1,0,80)">
        <path
          d="M310,470L310,327.324L180,413.991L50,327.324L50,470L310,470Z"
          style={`fill:red;`}
        />
      </g>
      <g transform="matrix(1,0,0,1,0,80)">
        <path
          d="M310,470L50,470L50,339.343L177.226,424.16C178.906,425.28 181.094,425.28 182.774,424.16L310,339.343L310,470Z"
          style={`fill:white;`}
        />
      </g>
    </g>
  </svg>
);
const bandEncoded = encodeURI(band.toString());

export default app
