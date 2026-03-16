import { html } from "hono/html";
import { JSX } from "hono/jsx/jsx-runtime";

export const KatraHeader = (props: { nav: JSX.Element; extra: JSX.Element; }) => {
  return (
    <header>
      <div class="header-wrap fancy-zz-down">
        <div class="katra-space">
          <div class="header-pad">
            <nav>
              <div class="nav-wrap" style="padding:5px 0;">
                {props.nav}
              </div>
              {props.extra}
            </nav>
            <div class="counter" style="display:none">
              <div style="">
                <div style="height:4px;background-color:rgb(180,180,180);border-radius:9px;"></div>
                <div style="margin:-2px 3px 0 3px;border-top:1px solid #555;padding:0 8px;">
                  <div style="width:200px;background-color:#ffffff;padding:1rem;z-index:11;border:1px solid #D6CeC4;">
                    ABS
                  </div>
                </div>
              </div>
            </div>
            <div class="menu-extra" data-menu="">
              <div class="menu menu-katra">
                <div class="ikon">
                  <img
                    src="/svg/Team-Chat--Streamline-Ultimate.svg"
                    style="width:44px"
                  />
                </div>
                <div class="daftar">
                  <h4>Explorasi Kamus Besar Bahasa Indonesia</h4>
                  <ul class="">
                    <li>
                      <a href="a">Sensus KBBI</a>
                    </li>
                    <li>
                      <a href="a">Nomina</a>
                    </li>
                    <li>
                      <a href="a">Verba</a>
                    </li>
                    <li>
                      <a href="a">Adjektiva</a>
                    </li>
                    <li>
                      <a href="a">Idiom &amp; Peribahasa</a>
                    </li>
                    <li>
                      <a href="a">Lainnya</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="menu menu-regina">
                <div class="ikon">
                  <img
                    src="/svg/Earth-Setting--Streamline-Ultimate.svg"
                    style="width:44px"
                  />
                </div>
                <div class="daftar">
                  <h4>Explorasi Wilayah Nusantara</h4>
                  <ul class="">
                    <li>
                      <a href="a">Flex Nama Desa</a>
                    </li>
                    <li>
                      <a href="a">Grid Nusantara</a>
                    </li>
                    <li>
                      <a href="a">Sumatra</a>
                    </li>
                    <li>
                      <a href="a">Jawa</a>
                    </li>
                    <li>
                      <a href="a">Nusa Tenggara</a>
                    </li>
                    <li>
                      <a href="a">Kalimantan</a>
                    </li>
                    <li>
                      <a href="a">Sulawesi</a>
                    </li>
                    <li>
                      <a href="a">Maluku</a>
                    </li>
                    <li>
                      <a href="a">Papua</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="menu menu-nama">
                <div class="ikon">
                  <img
                    src="/svg/Single-Neutral-Folder-Box--Streamline-Ultimate.svg"
                    style="width:44px"
                  />
                </div>
                <div class="daftar">
                  <h4>Tentang Nama</h4>
                  <ul class="">
                    <li>
                      <a href="a">Adverbia</a>
                    </li>
                    <li>
                      <a href="a">Adverbia</a>
                    </li>
                    <li>
                      <a href="a">Adverbia</a>
                    </li>
                    <li>
                      <a href="a">Adverbia</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {html`<script>
        document.querySelectorAll(".menu-item").forEach((el) => {
          const dataMenu = el.getAttribute("data-menu");
          el.addEventListener("mouseenter", () => {
            document.querySelector(".header-pad").classList.add("has-menu");
            document
              .querySelector(".menu-extra")
              .setAttribute("data-menu", dataMenu);
          });
        });

        document
          .querySelector(".menu-extra")
          .addEventListener("mouseenter", () => {
            document.querySelector(".header-pad").classList.add("has-menu");
          });

        document
          .querySelector(".menu-extra")
          .addEventListener("mouseleave", () => {
            document.querySelector(".header-pad").classList.remove("has-menu");
          });

        document
          .querySelector(".nav-wrap")
          .addEventListener("mouseenter", () => {
            document.querySelector(".header-pad").classList.add("has-menu");
          });
        document
          .querySelector(".nav-wrap")
          .addEventListener("mouseleave", () => {
            document.querySelector(".header-pad").classList.remove("has-menu");
          });
      </script>`}
    </header>
  );
};

export const HomeNav = () => {
  return (
    <ul class="header-nav">
      <li>
        <span>&lt;</span>
      </li>
      <li class="menu-item" data-menu="katra">
        <a href="/katra">katra</a>
      </li>
      {/* <li class="current">
        <span>beranda</span>
      </li> */}
      <li class="menu-item" data-menu="regina">
        <a href="/regina">regina</a>
      </li>
      {/* <li class="current">
        <span>flex-desa-nusantara</span>
      </li> */}
      <li class="menu-item" data-menu="nama">
        <a href="/nama">nama</a>
      </li>
      <li>
        <span>/</span>
        <span>&gt;</span>
      </li>
    </ul>
  );
};

export const KatraNav = () => {
  return (
    <ul class="header-nav">
      <li class="" style="">
        <span>&lt;</span>
      </li>
      <li>
        <a href="/katra">katra</a>
      </li>
      <li>
        <a href="/regina">regina</a>
      </li>
      <li class="current">
        <span>flex-desa-nusantara</span>
      </li>
      <li>
        <span>/</span>
        <span>&gt;</span>
      </li>
    </ul>
  );
};

export const KatraKanan = () => {
  return (
    <div style="flex-grow:1;display:flex;align-items:center">
      <div style="flex-grow:1;"></div>
      <div class="jetbrains" style="">
        46238
      </div>
      <div style="width:40px;height:40px;background-color:#ebebeb;border-radius:99px"></div>
    </div>
  );
};
