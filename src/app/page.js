"use client";
import { useState } from "react";
import styles from "./styles.css";
import { FaCheck, FaRegCopy } from "react-icons/fa6";

export default function Home() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [blur, setBlur] = useState(15);
  const [spread, setSpread] = useState(-3);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(0.1);
  const [inset, setInset] = useState(false);
  const [copied, setCopied] = useState(false);

  // função para o seletor de cores ficar RGBA
  const rgbaColor = () => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    return `
    rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  //função para copiar o shadow box
  const copyToClipboard = () => {
    const code = `box-shadow: ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgbaColor()};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  console.log(offsetX, offsetY, blur, spread, color, opacity, inset);

  return (
    <div>
      <h1>Gerador de Box-shadow</h1>
      <main className="container">
        <div className="controls">
          <div className="control-group">
            <label htmlFor="offsetX">Deslocamento horizontal</label>
            <input
              type="range"
              id="offsetX"
              min={-100}
              max={100}
              value={offsetX}
              onChange={(e) => setOffsetX(e.target.value)}
            />
          </div>

          <div className="control-group">
            <label htmlFor="offsetY">Deslocamento vertical</label>
            <input
              type="range"
              id="offsetY"
              min={-100}
              max={100}
              value={offsetY}
              onChange={(e) => setOffsetY(e.target.value)}
            />
          </div>

          <div className="control-group">
            <label htmlFor="blur">Desfoque (Blur)</label>
            <input
              type="range"
              id="blur"
              min={0}
              max={100}
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
            />
          </div>

          <div className="control-group">
            <label htmlFor="spread">Tamanho (Spread)</label>
            <input
              type="range"
              id="spread"
              min={-50}
              max={50}
              value={spread}
              onChange={(e) => setSpread(e.target.value)}
            />
          </div>

          <div className="control-group">
            <label htmlFor="color">Cor</label>
            <input
              type="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <div className="control-group">
            <label htmlFor="opacity">Opacidade</label>
            <input
              type="range"
              id="opacity"
              min={0}
              max={1}
              step={0.01}
              value={opacity}
              onChange={(e) => setOpacity(e.target.value)}
            />
          </div>

          <div className="inline-group">
            <label htmlFor="inset">Sombra interna (Inner shadow)</label>
            <input
              type="checkbox"
              id="inset"
              checked={inset}
              onChange={(e) => setInset(e.target.checked)}
            />
          </div>
        </div>

        <div className="result">
          <div
            className="output-box"
            id="box"
            style={{
              boxShadow: `${
                inset ? "inset" : ""
              } ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgbaColor()}`,
            }}
          ></div>

          <div className="code-output" id="code">
            <div className="code-header">
              <p>Css</p>

              <button id="codeBtn" onClick={copyToClipboard}>
                {copied ? <FaCheck /> : <FaRegCopy />}
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>

            <p className="code-line">
              <span>box-shadow: </span>
              {`${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgbaColor()};`}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
