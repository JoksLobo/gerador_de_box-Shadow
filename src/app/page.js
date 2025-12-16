import styles from "./styles.css";

export default function Home() {
  return (
    <div>
      <h1>Gerador de Box-shadow</h1>
      <main className="container">
        <div className="controls">
          <div className="control-group">
            <label htmlFor="offsetX">Deslocamento horizontal</label>
            <input type="range" id="offsetX" min={-100} max={100} />
          </div>

          <div className="control-group">
            <label htmlFor="offsetY">Deslocamento vertical</label>
            <input type="range" id="offsetY" min={-100} max={100} />
          </div>

          <div className="control-group">
            <label htmlFor="blur">Desfoque (Blur)</label>
            <input type="range" id="blur" min={0} max={100} />
          </div>

          <div className="control-group">
            <label htmlFor="spread">Tamanho (Spread)</label>
            <input type="range" id="spread" min={-50} max={50} />
          </div>

          <div className="control-group">
            <label htmlFor="color">Cor</label>
            <input type="color" id="color" />
          </div>

          <div className="control-group">
            <label htmlFor="opacity">Opacidade</label>
            <input type="range" id="opacity" min={0} max={1} step={0.01} />
          </div>

          <div className="inline-group">
            <label htmlFor="inset">Sombra interna (Inner shadow)</label>
            <input type="checkbox" id="inset" />
          </div>
        </div>
      </main>
    </div>
  );
}
