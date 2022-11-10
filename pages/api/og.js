// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Resvg } from '@resvg/resvg-js';

export default async function handler(req, res) {
  const opts = {
    background: '#fff',
    fitTo: {
      mode: 'width',
      value: 1200
    }
  }

  const resvg = new Resvg(`<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 193">
  <defs>
    <linearGradient x1="49.4%" y1="49.5%" x2="50.3%" y2="50.4%" id="a">
      <stop offset="0%"/>
      <stop stop-opacity="0" offset="100%"/>
    </linearGradient>
    <linearGradient x1="50.1%" y1="49.9%" x2="49.9%" y2="50.1%" id="b">
      <stop offset="0%"/>
      <stop stop-opacity="0" offset="100%"/>
    </linearGradient>
    <linearGradient x1="81.5%" y1="46.5%" x2="93.7%" y2="50.2%" id="c">
      <stop stop-color="#C37A44" offset="0%"/>
      <stop stop-color="#BB713D" offset="44.4%"/>
      <stop stop-color="#A05728" offset="64.1%"/>
      <stop stop-color="#964E23" offset="100%"/>
    </linearGradient>
    <linearGradient x1="63.5%" y1="61.3%" x2="41.4%" y2="43.4%" id="d">
      <stop stop-color="#E9B880" offset="0%"/>
      <stop stop-color="#E4AF76" offset="100%"/>
    </linearGradient>
    <linearGradient x1="50.9%" y1="51.1%" x2="49.2%" y2="49.3%" id="e">
      <stop stop-color="#C37A45" stop-opacity="0" offset="0%"/>
      <stop stop-color="#C37A45" offset="13.3%"/>
      <stop stop-color="#D08D55" offset="29.4%"/>
      <stop stop-color="#DEA167" offset="50.2%"/>
      <stop stop-color="#E8AF73" offset="69.7%"/>
      <stop stop-color="#ECB477" offset="86.3%"/>
      <stop stop-color="#ECB477" stop-opacity="0" offset="100%"/>
    </linearGradient>
    <linearGradient x1="47.4%" y1="28.9%" x2="22.3%" y2="77.5%" id="f">
      <stop stop-color="#AF6938" offset="8.8%"/>
      <stop stop-color="#9A5227" offset="48.3%"/>
      <stop stop-color="#8D4520" offset="77.9%"/>
    </linearGradient>
    <linearGradient x1="41.1%" y1="57.3%" x2="56.6%" y2="45%" id="g">
      <stop stop-color="#E4AF76" offset="3.3%"/>
      <stop stop-color="#E9B880" offset="100%"/>
    </linearGradient>
    <linearGradient x1="49.6%" y1="50.5%" x2="50.7%" y2="49.2%" id="h">
      <stop stop-color="#AF6A38" stop-opacity="0" offset="0%"/>
      <stop stop-color="#AF6A38" offset="8.6%"/>
      <stop stop-color="#B87542" offset="19.8%"/>
      <stop stop-color="#D59C66" offset="58.3%"/>
      <stop stop-color="#E4AF76" offset="77.7%"/>
      <stop stop-color="#E4AF76" stop-opacity="0" offset="92.4%"/>
    </linearGradient>
    <linearGradient x1="8.2%" y1="50%" x2="93.2%" y2="50%" id="i">
      <stop stop-color="#743F1A" stop-opacity="0" offset="0%"/>
      <stop stop-color="#743F1A" stop-opacity=".9" offset="49.3%"/>
      <stop stop-color="#743F1A" stop-opacity=".9" offset="50%"/>
      <stop stop-color="#743F1A" stop-opacity=".8" offset="53%"/>
      <stop stop-color="#743F1A" stop-opacity="0" offset="100%"/>
    </linearGradient>
    <linearGradient x1="49.9%" y1="50.1%" x2="50%" y2="50%" id="j">
      <stop stop-color="#322214" offset="0%"/>
      <stop stop-color="#322314" offset="24%"/>
      <stop stop-color="#322214" stop-opacity="0" offset="100%"/>
    </linearGradient>
    <linearGradient x1="51.4%" y1="48.2%" x2="48.7%" y2="51.6%" id="k">
      <stop stop-color="#C69866" offset="4.8%"/>
      <stop stop-color="#BA8C5E" offset="41.6%"/>
      <stop stop-color="#B5875B" offset="81.3%"/>
    </linearGradient>
    <linearGradient x1="63%" y1="46.8%" x2="25%" y2="8.9%" id="l">
      <stop stop-color="#845F35" offset="0%"/>
      <stop stop-color="#91673C" offset="43.1%"/>
      <stop stop-color="#976A40" offset="44.1%"/>
      <stop stop-color="#986B40" offset="87.4%"/>
      <stop stop-color="#AB8157" offset="100%"/>
    </linearGradient>
    <linearGradient x1="50%" y1="50%" x2="50.1%" y2="50.1%" id="m">
      <stop stop-color="#322214" stop-opacity="0" offset="0%"/>
      <stop stop-color="#322214" offset="100%"/>
    </linearGradient>
    <linearGradient x1="45.7%" y1="62.6%" x2="50.5%" y2="33.5%" id="n">
      <stop stop-color="#A9794B" offset="0%"/>
      <stop stop-color="#AE7F53" offset="38.6%"/>
      <stop stop-color="#AC7D50" offset="45.6%"/>
      <stop stop-color="#A9794B" offset="62.4%"/>
      <stop stop-color="#B2875D" offset="100%"/>
    </linearGradient>
  </defs>
  <path d="m140.5 191.3 70.3-44.4c.2-.2.6 0 .7.2.2.2.1.6-.1.7l-70.5 44.6h-.3v-1Z" fill="url(#a)"/>
  <path d="M140.6 192.5h-.2l-95.8-35.7a.5.5 0 0 1-.3-.7c.1-.3.4-.5.7-.4l95.5 35.6v1.2Z" fill="url(#b)"/>
  <path d="m241.1 21.8-11 18.3-44.5 19-2.5 1-39.9 37.3c-.8.8-1.3 1.9-1.4 2.5 0 .2-.2.1-.4 0-.1 0-.4.1-.4 0 0-.9-.1-1.8-1.4-2.6l-20-13L105 75 63.9 64.4l-34.4-8.8L7.7 21.7l.3-.4L90 0h.1L118 42l.5.8c.6.9.7 1.4.7 1.8h.5V43.8l.1-.4v-.2l.2-.5.1-.2a4.6 4.6 0 0 1 .5-.9l25.2-36.6s0-.1.2 0l95 16.3.1.4Z" fill="#E8B67F"/>
  <path fill="url(#c)" d="M119.6 84.4 105 74.9 63.9 64.4l55.3-19.9.1-.3v.3z"/>
  <path d="M119.2 44.5 63.9 64.4l-5-1.3-29.4-7.6L7.7 21.7l.4-.4L89.9 0h.1L118 42l.5.8c.6.9.7 1.4.7 1.8Z" fill="url(#d)"/>
  <path d="M119.4 46.6 67 65.4l-8.1-2L118 42l.5.8c.6.9.7 1.4.7 1.8h.1v2Z" fill="url(#e)"/>
  <path fill="#D2A679" d="m30.2 55.7-.7-.2L7.7 21.7l.3-.4z"/>
  <path d="m185.6 59-2.5 1-39.9 37.4c-.8.8-1.3 1.9-1.4 2.5 0 .2-.2.1-.4 0-.1 0-.4.1-.4 0 0-.9-.1-1.8-1.4-2.6l-20-13-.3-39.8v-.3l.4.3 66 14.5Z" fill="url(#f)"/>
  <path d="m241.1 21.8-11 18.3-40.5 17.2-4 1.7-66-14.5a6.2 6.2 0 0 1 1-2.8l25.2-36.6s0-.1.2 0l95 16.2.1.5Z" fill="url(#g)"/>
  <path d="m189.6 57.3-6.4 2.7-.9.8-63-13.9.3-2.4c0-.5.4-1.7.8-2.4l69.2 15.2Z" fill="url(#h)"/>
  <path fill="url(#i)" opacity=".8" d="M121.1 44.8v40.5l-1.5-.9-2-1.3V45l1.6-.5h.5z"/>
  <path d="m140.2 191.8-95.9-35.7c-.5-.3-.6-.8-.6-1.4L39.5 73c0-.2.3-.3.3-.5 0-.3-.7-1.5-.9-1.6L0 49l.3-.8L105 74.9l34.6 22.4c1.3.8 1.4 1.7 1.4 2.5 0 .2.3.2.4.2l.4-.1c.1-.6.6-1.7 1.4-2.5l40-37.3 72.3-30.8.5.6-39.1 34.3c-.8.8-1.1 1.7-1 2.1l-4 80c0 .6-.3.7-.8 1l-70 44.4c-.3.2-.6.3-1 .1Z" fill="#BF9064"/>
  <path d="m141.4 100-.7 91.9h-.5L44.3 156c-.5-.2-.6-.8-.6-1.4L39.5 73v-.1h.1v-.1l.1-.2L141 99.9c0 .1.3 0 .4 0Z" fill="#BD8F63"/>
  <path d="M140.8 191.6v.3h-.6L44.3 156c-.4-.2-.5-.5-.6-.9l97 36.4Z" fill="url(#j)" opacity=".5"/>
  <path d="m97.4 135.9 37.1 12.1v36.2L98 170.8l-.6-35Zm18.6 24.3.1 16.8 18 6.6v-17.1l-18-6.3Zm5.3 5.4 3.7 5.8 3.5-3.1.6.7-3.6 3.2 3.6 5.8-.5.4-3.6-5.8-3.6 3.1-.6-.7 3.7-3.2-3.7-5.9.5-.3Zm10.7 6.5v1.7l1 .3v1.8l-1-.3v1.5l-2-3.2 2-1.8Zm-3.2-2 .7.2v6.6l-.7-.2V170ZM98.1 154l.3 16.5 17.2 6.3-.1-16.8-17.4-6Zm26.9 19.7 1.9 3-3.8-1.4 1.9-1.6Zm2.9-2.8v4.3l-2-2.8 2-1.5Zm-7.4-3.9.7.3v6.6l-.7-.3V167Zm1.6 1.8 1.8 2.9-1.8 1.4v-4.3Zm-15.6-8 .7.3v.4c2.2.8 4.2 3 5.3 6.3-.7-1.1-1.3-1.4-2.3-1-.4-.8-1.5-1.2-2.2-.8a2 2 0 0 0-.7-.8v6.3c0 .6-.4 1.1-1.4.9-.9-.2-1.3-1-1.2-2h.5c0 .8.1 1.2.7 1.4.5 0 .7-.1.7-.6V165a1 1 0 0 0-.8.2c-.2-.6-1.3-1.3-2-.8-.7-.9-1.8-1.2-2.4-.6.8-2.3 3-3.1 5.1-2.5v-.5ZM118 167l2 3.2-2 1.6v-1.5l-.9-.3v-1.8l1 .4V167Zm5.2.7 3.8 1.3-2 1.7-1.8-3Zm-7.1-25.2v17l18 6.4v-17.5l-18-6Zm3.3 14.7 10.8 3.7v2.2l-10.8-3.7v-2.2Zm-9.3 4.1c.1 0 .1.8-.1 1h-.4c-.2-.2-.3-.3-.2-.6 0-.2.7-.5.7-.4Zm1-1.7c.1 0 .1.8-.1 1h-.4c-.2-.2-.3-.3-.2-.6 0-.2.7-.5.7-.4Zm-2.8 0c.1 0 .1.8-.1 1l-.4-.1c-.2-.1-.3-.3-.2-.5 0-.3.7-.5.7-.5Zm-2.8-.5c.1 0 .1.8-.1 1h-.5c-.1-.1-.2-.3-.1-.5 0-.3.6-.5.7-.5Zm22.3-11.2 2.6 5.2-1.8-.7v7.5l-1.8-.6V152l-1.7-.6 2.7-3.4Zm-29.9-11.4.3 16.9 17.4 6-.2-17.1-17.5-5.8Zm24 9.4 2.6 5.2-1.8-.6v7.5l-1.8-.7V150l-1.8-.6 2.8-3.4Zm-20.1-6 1.4.5.7 2.4-.8-.1 2.1 5.1-1-4.2h.6l-.7-3 7.4 2.5v4c0 1.5-1.7 3.5-4 2.5v4l3.3 2.2-8-2.8 3.2.2v-4c-2.4-.7-4-3.5-4-5.2l-.2-4.1Z" fill="#322214"/>
  <path d="M141.4 100c-.4 0-.7.5-.7 1L39.4 73c0-.2.2-.3.3-.4l-.9-1.7L0 49l.3-.8L105 74.9l34.6 22.4c1.3.8 1.4 1.7 1.4 2.5 0 .2.3.2.4.2Z" fill="url(#k)"/>
  <path d="M216.9 64.2c-.8.8-1.1 1.7-1 2.1l-73.6 34.8h-.1c0-.7-.4-1-.7-1.1l.3-.1a2.7 2.7 0 0 1 .3-.9c.2-.4.5-1 1-1.4l.1-.2 40-37.4 72.4-30.7.4.6-39.1 34.3Z" fill="#CD9C6B"/>
  <path d="M96 109.1h.1l-.3-20.4c0-.6-.2-2-1-2.6l-37-22.4-17.2-4.4L78 81.7c.9.6 1 1.8 1 2.6l.6 19.8v.1l16.3 5Z" fill="url(#l)"/>
  <path d="M141.4 100c-.4 0-.7.5-.7 1-.1-1-.6-2.3-1.2-2.7l-34.9-22.5.4-.9 34.6 22.4c1.3.8 1.4 1.7 1.4 2.5 0 .2.3.2.4.2Z" fill="#D4A271"/>
  <path fill="#DEB37E" d="m105 74.9-.4.9L0 48.8l.3-.7z"/>
  <path d="m216 66.3-4 80c-.1.6-.3.7-.9 1l-70 44.4a1 1 0 0 1-.3.2l.6-92c.2 0 .4.2.4 0v-.1L216 66.2v.1Z" fill="#DBAD77"/>
  <path d="M212 146.3c-.1.6-.3.7-.9 1l-70 44.4a1 1 0 0 1-.3.2v-.3l71.2-45.3Z" fill="url(#m)" opacity=".5"/>
  <path d="m210.6 111.5-1.6 32.6-23.3 14.5 1.2-34 23.7-13.1Zm-12.4 23.6-11.6 6.8-.5 16 11.5-7.1.6-15.7Zm-5.5 6.9v.5c1.3-.7 2.6-.2 3.2 2.1-.4-.5-1.1-.3-1.6.8-.2-.5-1.2-.1-1.4.8l-.4-.2-.3 6.2c0 .6 0 1.1-.7 1.5-.3.2-1.1.3-1-.9l.4-.3c0 .8.1 1 .5.7.5-.2.4-.7.5-1.1l.2-5.9c-.3.2-.6.5-.6.9-.2-.4-1.3-.1-1.5.9-.3-.5-1.2 0-1.5 1 .6-2.8 2.2-5.2 3.7-6.2v-.5l.5-.3Zm16.9-13.6-11 6.5-.7 15.7 11-6.8.7-15.4Zm-3.5 5.3.4.3-2.4 5.4 2 2.8-.4.7-2-2.8-2.3 5.4-.4-.3 2.5-5.4-2.1-2.9.4-.6 2 2.7 2.3-5.3Zm-6.7 6.2 1.3 1.6-1.4 2.8v-1.2l-.5.3v-1.6l.6-.4V140Zm2.2-2-.3 6-.4.4.2-6 .5-.3Zm2 3.2 1.2 1.4-2.3 1.4 1.2-2.8Zm-12.2.5-.1 1-.3.2v-.3c0-.3.4-1 .4-1Zm10.7-2.8 1 1.3-1.2 2.4.2-3.7Zm-7.6 1.5s0 .7-.2 1c0 .2-.1.3-.2.3s-.2-.1-.1-.4l.5-.9Zm4.4-21.8-11.7 6.5-.6 16.4 11.6-6.8.7-16.1Zm7.7 16.4-.2 6-.4.3.2-6 .4-.3Zm-13.2 5s0 .6-.2 1l-.2.2c-.1 0-.2 0-.1-.3 0-.3.4-1 .5-1Zm12.2-3.3-.2 3.9-1-1.3 1.2-2.6Zm2.5-1.8v1.5l.5-.3v1.6l-.6.3v1.4l-1.3-1.5 1.4-3Zm-12.8 3s0 .8-.2 1.1l-.3.3v-.4l.5-1Zm9.7-2.2-1.2 2.8-1-1.5 2.2-1.3Zm-8.8-13.7-.1 4.2c-.1 1.4-1.2 4-2.9 5l-.2 3.9 2.3-.5-5.5 3.1 2.3-2.1.1-3.9c-1.4.9-2.6-.7-2.5-2.2v-3.8l1-.5.4 1.8-.5.4 1.1 3.4-.4-3 .4-.5-.3-2.5 4.8-2.8Zm14.2-9.8-11.2 6.2-.7 16.1 11.1-6.6.8-15.7Zm-3 13.9v1.9l-6.6 3.8v-1.9l6.7-3.8Zm-4.6-8.3 1.5 3-1.1.7-.3 6.8-1 .6.1-6.8-1 .6 1.8-4.9Zm3.7-2 1.4 3-1.2.6-.2 6.9-1.1.6.3-6.9-1 .6 1.8-4.8Z" fill="#322214"/>
  <path d="m183.7 60.8-39.6 36.8c-1 1.1-1.8 2.7-1.8 3.5 0 0-.1.1-.1 0 0-.6-.4-1-.7-1.1l.3-.1a2.7 2.7 0 0 1 .3-.9c.2-.5.6-1.1 1.1-1.6l40-37.3.5.7Z" fill="#D7AA77"/>
  <path d="m175 105.5.1.1 12-6v-.2l.6-19.5c0-1 .6-2 1.5-2.8l39.4-35.5-12 5.1-39.7 36c-1 1-1.3 2.2-1.4 3.2l-.5 19.6Z" fill="url(#n)"/>
  <path fill="#F8CE93" d="M183.7 60.8 256 29.9l-.4-.6L183.1 60z"/>
</svg>
`, opts);

  const pngData = resvg.render()
  const pngBuffer = pngData.asPng()

  res.setHeader('Content-Type', 'image/png');
  res.status(200).send(pngBuffer);
}
