import React from "react";
import { ArrowUpRight, BookOpen, Github, Microscope, Dna, ChartNoAxesCombined, ShieldAlert, ExternalLink } from "lucide-react";
import styles from "./_index.module.css";

const classResults = [
  { name: "Ascaris (ASC.)", ap50: 95.39, ap: 76.73 },
  { name: "Hookworm (HKW.)", ap50: 55.06, ap: 46.38 },
  { name: "Schistosoma (SCH.)", ap50: 62.68, ap: 40.02 },
  { name: "Trichuris (TRI.)", ap50: 80.78, ap: 60.21 },
];
const metrics = [
  { label: "Precision", value: "0.776", detail: "77.56%" },
  { label: "Recall", value: "0.639", detail: "63.89%" },
  { label: "mAP @ 0.50", value: "0.735", detail: "73.48%" },
  { label: "mAP @ 0.50:0.95", value: "0.558", detail: "55.84%" },
];

export default function HomePage() {
  return <main className={styles.site}>
    <header className={styles.header}>
      <a className={styles.brand} href="#top"><span className={styles.brandMark}><Microscope size={19}/></span><span>HELMINTH<span className={styles.brandLight}> / RESEARCH</span></span></a>
      <nav className={styles.nav}><a href="#study">Study</a><a href="#results">Results</a><a href="#method">Methodology</a><a href="#limitations">Limitations</a></nav>
      <a className={styles.repoButton} href="https://github.com/rayyan-anwar/helminth-egg-detection-yolo11" target="_blank" rel="noreferrer">Repository <ArrowUpRight size={15}/></a>
    </header>
    <section className={styles.hero} id="top">
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}><span className={styles.liveDot}/> COMPUTATIONAL PARASITOLOGY · RESEARCH PROJECT</div>
        <h1>Detecting the<br/><em>unseen</em> in microscopy.</h1>
        <p className={styles.lead}>A YOLO11n-based computer vision study exploring automated detection of helminth eggs in faecal-smear microscopy images.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="#results">Explore findings <ArrowUpRight size={16}/></a><a className={styles.textButton} href="https://doi.org/10.5281/zenodo.13843815" target="_blank" rel="noreferrer">Dataset source <ExternalLink size={14}/></a></div>
        <div className={styles.byline}><span>Rayyan Anwar</span><i/> <span>Riza Tasleem</span><i/> <span>2026 research showcase</span></div>
      </div>
      <div className={styles.heroVisual} aria-label="Illustrative microscopy-inspired visual">
        <div className={styles.visualTop}><span>MICROSCOPY / FIELD 04</span><span>40×</span></div>
        <div className={styles.microscopeField}><div className={`${styles.egg} ${styles.eggOne}`}><span/></div><div className={`${styles.egg} ${styles.eggTwo}`}><span/></div><div className={`${styles.egg} ${styles.eggThree}`}><span/></div><div className={styles.scanLine}/><div className={styles.crosshair}>+</div></div>
        <div className={styles.visualBottom}><span>ILLUSTRATIVE MICROSCOPY MOTIF</span><span className={styles.visualScale}><i/> <i/> <i/> <i/> <i/></span></div>
        <div className={styles.visualNote}>Conceptual visual only<br/>not a study specimen</div>
      </div>
    </section>
    <section className={styles.factStrip}><div><strong>400</strong><span>image–annotation pairs</span></div><div><strong>4</strong><span>egg classes</span></div><div><strong>280 / 60 / 60</strong><span>train / validation / test</span></div><div><strong>YOLO11n</strong><span>detector architecture</span></div></section>
    <section className={styles.section} id="study">
      <div className={styles.sectionIntro}><div className={styles.kicker}>01 / THE STUDY</div><h2>From visual patterns<br/>to measurable signals.</h2></div>
      <div className={styles.studyText}><p className={styles.bodyLarge}>This project investigates whether a compact object-detection model can localize four helminth egg categories in microscopy imagery.</p><p>The analysis uses a selected subset of a publicly available dataset. The work is presented as an exploratory computer-vision study—not as a clinically validated diagnostic system.</p><a className={styles.textButton} href="https://doi.org/10.1038/s41598-025-02755-9" target="_blank" rel="noreferrer">Read the source dataset publication <ArrowUpRight size={14}/></a></div>
    </section>
    <section className={styles.resultsSection} id="results">
      <div className={styles.resultsHeading}><div><div className={styles.kicker}>02 / HELD-OUT TEST RESULTS</div><h2>Performance, in context.</h2></div><div className={styles.resultTag}>REPORTED PROJECT METRICS</div></div>
      <p className={styles.resultsIntro}>Evaluation on 60 test images containing 147 annotated instances. Values below reflect the documented evaluation run (confidence threshold 0.001; NMS IoU 0.45).</p>
      <div className={styles.metricGrid}>{metrics.map((m) => <article className={styles.metricCard} key={m.label}><span>{m.label}</span><strong>{m.value}</strong><small>{m.detail}</small></article>)}</div>
      <div className={styles.classPanel}><div className={styles.panelHeading}><div><span className={styles.kicker}>CLASS-WISE PERFORMANCE</span><h3>Average precision by category</h3></div><div className={styles.legend}><span><i className={styles.legendA}/> AP @ 0.50</span><span><i className={styles.legendB}/> AP @ 0.50:0.95</span></div></div>
        <div className={styles.barChart}>{classResults.map((c) => <div className={styles.barRow} key={c.name}><div className={styles.barLabel}>{c.name}</div><div className={styles.barTrack}><div className={styles.barPrimary} style={{width: `${c.ap50}%`}}/><div className={styles.barSecondary} style={{width: `${c.ap}%`}}/></div><div className={styles.barNumbers}><b>{c.ap50.toFixed(1)}</b><span>{c.ap.toFixed(1)}</span></div></div>)}</div>
        <div className={styles.scale}><span>0</span><span>25</span><span>50</span><span>75</span><span>100 AP</span></div>
        <p className={styles.chartNote}>Class-wise AP values are percentages converted from the reported per-class metrics. Lower scores for Hookworm and Schistosoma indicate categories where further investigation is warranted.</p>
      </div>
    </section>
    <section className={styles.section} id="method">
      <div className={styles.sectionIntro}><div className={styles.kicker}>03 / EXPERIMENTAL DESIGN</div><h2>A compact, reproducible<br/>starting point.</h2></div>
      <div className={styles.methodGrid}>
        <article><div className={styles.methodIcon}><Dna size={20}/></div><h3>Dataset & classes</h3><p>400 selected image–annotation pairs from the Zenodo helminth egg dataset. Four categories: ASC., HKW., SCH. and TRI.</p></article>
        <article><div className={styles.methodIcon}><ChartNoAxesCombined size={20}/></div><h3>Data partition</h3><p>280 training, 60 validation and 60 test images. The documented split used random seed 42.</p></article>
        <article><div className={styles.methodIcon}><Microscope size={20}/></div><h3>Model configuration</h3><p>YOLO11n, image size 320, batch size 4 and 15 training epochs. The recorded run used CPU execution.</p></article>
      </div>
      <div className={styles.pipeline}><span>IMAGE + ANNOTATION</span><b>→</b><span>TRAIN / VALIDATE</span><b>→</b><span>YOLO11n</span><b>→</b><span>HELD-OUT EVALUATION</span></div>
    </section>
    <section className={styles.limitSection} id="limitations"><div className={styles.limitIcon}><ShieldAlert size={22}/></div><div><div className={styles.kicker}>04 / INTERPRETATION & LIMITATIONS</div><h2>What these results do—and do not—say.</h2><p>These metrics describe model performance on the documented dataset split. They do not establish diagnostic accuracy in clinical practice, patient-level generalization, or readiness for deployment.</p><ul><li><b>Dataset scale:</b> the study uses a selected subset of 400 pairs; broader and external evaluation is needed.</li><li><b>Independence:</b> patient- or slide-level independence of the split has not been established.</li><li><b>Test-set reuse:</b> exploratory evaluations were performed on test data; interpret the reported test results with this caveat.</li><li><b>Reproducibility:</b> training records contain an optimizer / learning-rate metadata discrepancy that requires reconciliation.</li><li><b>Annotations:</b> annotation quality has not been independently adjudicated; external clinical validation has not been performed.</li></ul></div></section>
    <section className={styles.resources} id="resources"><div><div className={styles.kicker}>05 / OPEN MATERIALS</div><h2>Inspect the work.</h2><p>Code, experiment materials and the source dataset are linked below. Consult the repository for the current project files and reproducibility notes.</p></div><div className={styles.resourceLinks}><a href="https://github.com/rayyan-anwar/helminth-egg-detection-yolo11" target="_blank" rel="noreferrer"><span className={styles.resourceIcon}><Github size={20}/></span><span><b>GitHub repository</b><small>Code, notebooks & project documentation</small></span><ArrowUpRight size={17}/></a><a href="https://doi.org/10.5281/zenodo.13843815" target="_blank" rel="noreferrer"><span className={styles.resourceIcon}><BookOpen size={20}/></span><span><b>Zenodo dataset</b><small>Source dataset · DOI: 10.5281/zenodo.13843815</small></span><ArrowUpRight size={17}/></a></div></section>
    <section className={styles.authors}><div className={styles.kicker}>RESEARCH CONTRIBUTORS</div><div className={styles.authorGrid}><div><span>01</span><h3>Rayyan Anwar</h3><p>Independent Researcher<br/>Corresponding author</p></div><div><span>02</span><h3>Riza Tasleem</h3><p>M.Sc. Zoology candidate<br/>Haldaur Degree College</p></div></div><p className={styles.contact}>Correspondence: <a href="mailto:anwarrayyan8979@gmail.com">anwarrayyan8979@gmail.com</a></p></section>
    <footer className={styles.footer}><a className={styles.brand} href="#top"><span className={styles.brandMark}><Microscope size={17}/></span> HELMINTH <span className={styles.brandLight}>/ RESEARCH</span></a><span>Research communication page · Not a clinical diagnostic tool</span><span>© 2026</span></footer>
  </main>;
}
