import { Hono } from 'hono'
import { renderer } from './renderer'
import { getByKata, row2Entri } from './d1/db';
import { Fragment } from 'hono/jsx/jsx-runtime';
import { BandZZTop } from './ui/band-zz-top';
import { BandZZBottom } from './ui/band-zz-bottom';
import { HomeNav, KatraHeader, KatraKanan, KatraNav } from './ui/katra-header';
import { html } from 'hono/html';

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

app.get("/home", async (c) => {
  return c.render(
    <Fragment>
      <KatraHeader nav={<HomeNav />} extra={<KatraKanan />} />
      <main style="--valley-color:white">
        {html`<style>
          .elevated {
            display: inline-block;
            font-weight: inherit;
            background-image: linear-gradient(
              to right,
              oklch(0% 0 0),
              /* oklch(60% 0.3 20), */ oklch(90% 0 0)
            );
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        </style>`}
        <section class="valley">
          <div
            class="katra-space"
            style="padding-bottom:clamp(1rem, 10vw, 110px);"
          >
            <div style="padding-top:136px;">
              <p
                style={`
              font-size: clamp(2rem, 6cqi, 3.75rem);
              font-family: IBM Plex Sans;
              font-weight: 600;
              text-align:center;
              line-height: 1.1;
              letter-spacing: -0.0125em;
              white-space: nowrap;
              max-inline-size: max-content;
              margin-inline:auto;
              padding-right: 0.25em;
                `}
              >
                &lt;&nbsp;Katrakan dengan data&nbsp;/&gt;
              </p>
              <p
                style={`
              font-size: clamp(1.5rem, 4cqi, 2.5rem);
              font-family: InterVariable;
              font-weight: 500;
              text-align: center;
              margin-bottom: 1em;
                `}
              >
                Usah rasa. <span class="elevated">Sebentaaar</span> saja.
              </p>
              {/*  */}
              <div
                style={`
              width: 100%;
              max-width: 900px;
              aspect-ratio: 9 / 6;
              margin: 0 auto;
              background-color: lightblue;
                `}
              ></div>
            </div>
          </div>
        </section>

        <section
          style={`padding:clamp(1rem, 6vw, 110px) 0;border-top:1px solid #eeeeee`}
        >
          <div class="katra-space">
            <p
              style={`
              font-size: clamp(1.25rem, 3cqi, 2.25rem);
              font-family: InterVariable;
              font-weight: 500;
              text-align: center;
              color: #777777`}
            >
              Katra
            </p>
            <p
              style={`
            font-size: clamp(2rem, 5.25cqi, 3.75rem);
              font-family: IBM Plex Sans;
              font-weight: 600;
              text-align:center;
              line-height: 1.1;
              letter-spacing: -0.0125em;
              max-inline-size: max-content;
              margin-inline:auto;
              padding-right: 0.25em;
              margin-bottom: .8rem;
              `}
            >
              Eksplorasi bahasa perekat
              <br />
              Nusantara.
            </p>
            <p
              style={`
            font-size: clamp(0.875rem, 3.75cqi, 1.5rem);
            font-weight: 500;
            line-height: 1.3;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
              `}
            >
              The A18 Pro chip helps you run your go-to apps, fly through
              everyday tasks, tap into your creativity, and play action-packed
              games. So whatever your day brings, you can move at the speed of
              inspiration.
            </p>
            <div style={`height:40vh`}></div>
          </div>
        </section>

        <section
          style={`background-color:oklch(from mintcream calc(l - 0.025) c h );padding:clamp(1rem, 6vw, 110px)`}
        >
          <div class="katra-space">
            <p
              style={`
              font-size: clamp(1.25rem, 3cqi, 2.25rem);
              font-family: InterVariable;
              font-weight: 500;
              text-align: center;
              color: #33bb33`}
            >
              Regina
            </p>
            <p
              style={`
            font-size: clamp(2rem, 5.25cqi, 3.75rem);
              font-family: IBM Plex Sans;
              font-weight: 600;
              text-align:center;
              line-height: 1.1;
              letter-spacing: -0.0125em;
              max-inline-size: max-content;
              margin-inline:auto;
              padding-right: 0.25em;
              margin-bottom: .8rem;
              `}
            >
              Petualangan mengenal seluruh nama desa di Indonesia.
            </p>
            <p
              style={`
            font-size: clamp(0.875rem, 3.75cqi, 1.5rem);
            font-weight: 500;
            line-height: 1.3;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
              `}
            >
              The A18 Pro chip helps you run your go-to apps, fly through
              everyday tasks, tap into your creativity, and play action-packed
              games. So whatever your day brings, you can move at the speed of
              inspiration.
            </p>
            <div style={`height:40vh`}></div>
          </div>
        </section>

        <section style={`padding:clamp(1rem, 6vw, 110px) 0;`}>
          <div class="katra-space">
            <p
              style={`
              font-size: clamp(1.25rem, 3cqi, 2.25rem);
              font-family: InterVariable;
              font-weight: 500;
              text-align: center;
              color: #777777`}
            >
              Nama
            </p>
            <p
              style={`
            font-size: clamp(2rem, 5.25cqi, 3.75rem);
              font-family: IBM Plex Sans;
              font-weight: 600;
              text-align:center;
              line-height: 1.1;
              letter-spacing: -0.025em;
              max-inline-size: max-content;
              margin-inline:auto;
              padding-right: 0.25em;
              margin-bottom: .8rem;
              `}
            >
              {/* Perwakilan pertama dari diri&nbsp;kita. */}
              Hasil utama algoritma budaya.
            </p>
            <p
              style={`
            font-size: clamp(0.875rem, 3.75cqi, 1.5rem);
            font-weight: 500;
            line-height: 1.3;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
              `}
            >
              The A18 Pro chip helps you run your go-to apps, fly through
              everyday tasks, tap into your creativity, and play action-packed
              games. So whatever your day brings, you can move at the speed of
              inspiration.
            </p>
            <div style={`padding:3rem 0;text-align:center;`}>
              <p style={`font-family:IBM Plex Sans;font-weight:300;font-size:13px;text-transform:uppercase`}>Selamat datang di</p>
              <div
                style={`
              display:flex;gap:0px;align-items:center;justify-content:center;
              font-family:IBM Plex Mono;font-size:1.8rem;font-weight:600;line-height:45px;
              margin-bottom:1.5rem;
              `}
              >
                <div
                  style={`position:relative;overflow:hidden;width:30px;height:45px;font-weight:700;background--color:beige;`}
                >
                  <span
                    style={`display:block;position:absolute;left:55%;cursor:default;color:mediumseagreen`}
                  >
                    &lt;
                  </span>
                </div>
                <div style={`display:flex;padding:0 7px 0 7px;cursor:default;`}>
                  <span>katra</span>
                  <span
                    style={`font-size:1.25rem;line-height:40px;padding-top:5px;color:lightcoral`}
                  >
                    &bull;
                  </span>
                  <span>web</span>
                  <span
                    style={`font-size:1.25rem;line-height:40px;padding-top:5px;color:hotpink`}
                  >
                    &bull;
                  </span>
                  <span>id</span>
                </div>
                <div
                  style={`position:relative;overflow:hidden;width:40px;height:45px;background--color:beige;`}
                >
                  <div
                    style={`position:absolute;left:-18px;cursor:default;color:salmon`}
                  >
                    <span style="font-weight:500;margin-right:-3px;">/</span>
                    <span style={`font-weight:700`}>&gt;</span>
                  </div>
                </div>
              </div>

              {/*  */}
              <div style={`display:flex;justify-content:center;margin:2rem 0`}>
                <table
                  style={`border-collapse:collapse;font-family:IBM Plex Mono;font-size:14px;font-weight:500;`}
                >
                  <tr>
                    <td style={`border:1px solid #333;`}>
                      <span
                        style={`display:block;padding:0 .5em .125em;font-weight:600;line-height:1.5;text-decoration:none;color:#333;cursor:default;`}
                      >
                        &lt;
                      </span>
                    </td>
                    <td style={`border:1px solid #333;`}>
                      <a
                        href="/"
                        style={`display:block;padding:0 .875em .125em;line-height:1.6;text-decoration:none;color:#333;`}
                      >
                        katra
                      </a>
                    </td>
                    <td style={`border:1px solid #333;`}>
                      <a
                        href="/"
                        style={`display:block;padding:0 .875em .125em;line-height:1.6;text-decoration:none;color:#333;`}
                      >
                        regina
                      </a>
                    </td>
                    <td style={`border:1px solid #333;`}>
                      <a
                        href="/"
                        style={`display:block;padding:0 .875em .125em;line-height:1.6;text-decoration:none;color:#333;`}
                      >
                        nama
                      </a>
                    </td>
                    <td style={`border:1px solid #333;`}>
                      <span
                        style={`display:block;padding:0 .35em .125em;font-weight:600;line-height:1.5;letter-spacing:-0.05rem;text-decoration:none;color:#333;cursor:default;`}
                      >
                        /&gt;
                      </span>
                    </td>
                  </tr>
                </table>
              </div>

              <div style={`display:flex;justify-content:center;margin:2rem 0`}>
                <table
                  style={`border-collapse:collapse;font-family:IBM Plex Mono;font-size:14px;font-weight:500;`}
                >
                  <tr>
                    <td style={`border:1px solid #333;`}>
                      <span
                        style={`display:block;padding:0 .5em .125em;font-weight:600;line-height:1.5;text-decoration:none;color:#333;cursor:default;`}
                      >
                        &lt;
                      </span>
                    </td>
                    <td style={`border:1px solid #333;`}>
                      <a
                        href="/"
                        style={`display:block;padding:0 .875em .125em;line-height:1.6;text-decoration:none;color:#333;`}
                      >
                        katra
                      </a>
                    </td>
                    <td style={`border:1px solid #333;`}>
                      <a
                        href="/"
                        style={`display:block;padding:0 .875em .125em;line-height:1.6;text-decoration:none;color:#333;`}
                      >
                        regina
                      </a>
                    </td>
                    <td style={`border:1px solid #333;`}>
                      <span
                        style={`display:block;padding:0 1.25em .125em .875em;line-height:1.6;text-decoration:none;color:#333;background-color:lightblue`}
                      >
                        :flex-nama-desa
                      </span>
                    </td>
                    <td style={`border:1px solid #333;`}>
                      <a
                        href="/"
                        style={`display:block;padding:0 .875em .125em;line-height:1.6;text-decoration:none;color:#333;`}
                      >
                        nama
                      </a>
                    </td>
                    <td style={`border:1px solid #333;`}>
                      <span
                        style={`display:block;padding:0 .35em .125em;font-weight:600;line-height:1.5;letter-spacing:-0.05rem;text-decoration:none;color:#333;cursor:default;`}
                      >
                        /&gt;
                      </span>
                    </td>
                  </tr>
                </table>
              </div>

              <div style={`display:flex;justify-content:center;margin:2rem 0`}>
                <table
                  style={`border-collapse:collapse;font-family:IBM Plex Mono;font-size:20px;font-weight:500;`}
                >
                  <tr>
                    <td style={`border:1.5px solid #333;`}>
                      <span
                        style={`display:block;padding:0 .5em .125em;font-weight:600;line-height:1.5;text-decoration:none;color:#333;cursor:default;`}
                      >
                        &lt;
                      </span>
                    </td>
                    <td style={`border:1.5px solid #333;`}>
                      <a
                        href="/"
                        style={`display:block;padding:0 .875em .125em;line-height:1.6;text-decoration:none;color:#333;`}
                      >
                        katra
                      </a>
                    </td>
                    <td style={`border:1.5px solid #333;`}>
                      <a
                        href="/"
                        style={`display:block;padding:0 .875em .125em;line-height:1.6;text-decoration:none;color:#333;`}
                      >
                        regina
                      </a>
                    </td>
                    <td style={`border:1.5px solid #333;`}>
                      <a
                        href="/"
                        style={`display:block;padding:0 .875em .125em;line-height:1.6;text-decoration:none;color:#333;`}
                      >
                        nama
                      </a>
                    </td>
                    <td style={`border:1.5px solid #333;`}>
                      <span
                        style={`display:block;padding:0 .35em .125em;font-weight:600;line-height:1.5;letter-spacing:-0.05rem;text-decoration:none;color:#333;cursor:default;`}
                      >
                        /&gt;
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        style={`
      height:400px;
      text-align: center;
      background: linear-gradient(to top, #666371 75px, ghostwhite 85px);
        `}
      ></footer>
    </Fragment>,
  );
})
export default app
