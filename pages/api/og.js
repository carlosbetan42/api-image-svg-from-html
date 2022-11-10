import { Resvg } from '@resvg/resvg-js';
import satori from "satori";
import { html } from "satori-html";

export default async function handler(req, res) {
  const opts = {
    background: '#fff',
    fitTo: {
      mode: 'width',
      value: 1200
    }
  }

  const inter = await fetch('https://midu.dev/inter.ttf').then(res => res.arrayBuffer());

  const markup = html`
  <div style="display: flex; flex-direction:column; width: 600px; height: 100vh; align-items: center; justify-content: center">
    <div id="images" style="display: flex; align-items: center; font-size: 48px">
      <img id="logo" src="https://midu.dev/images/solo-logo.png"  alt="Solo logo" style="width: 100px;" />
      <span style="padding: 0 64px">+</span>
      <img id="tag" src="https://midu.dev/images/tags/git.png"  alt="Git logo" style="width: 100px;" />
    </div>
    <h1>Cómo usar git bisect para encontrar el commit culpable de un error</h1>
    <span id="subtitle"></span>
  </div>`

  const svg = await satori(markup, {
    width: 600,
    height: 400,
    fonts: [{
      name: 'Inter',
      data: inter,
      weight: 400,
      style: 'normal',
    }]
  });

  const resvg = new Resvg(svg, opts);

  const pngData = resvg.render()
  const pngBuffer = pngData.asPng()

  res.setHeader('Content-Type', 'image/png');
  res.status(200).send(pngBuffer);
}
