
<div align="center">

# HELMINTH EGG DETECTION

### YOLO11n · Microscopy Image Analysis

<p>
  <strong>A Preliminary Four-Class Object Detection Experiment</strong>
</p>

<img src="https://img.shields.io/badge/YOLO11n-Object%20Detection-00D9FF?style=for-the-badge&logo=target&logoColor=white" />
<img src="https://img.shields.io/badge/Research-Preliminary-172B4D?style=for-the-badge" />
<img src="https://img.shields.io/badge/Python-3.13-00B8D9?style=for-the-badge&logo=python&logoColor=white" />

<br/>

**Made by Rayyan Anwar**

*Deep learning · Microscopy · Scientific reproducibility*

</div>

---

<div align="center">

### RESEARCH AT A GLANCE

</div>

<table>
<tr>
<td width="50%" align="center">

<strong>400</strong>

<br/>Selected image–annotation pairs

</td>
<td width="50%" align="center">

<strong>4</strong>

<br/>Detection classes

</td>
</tr>
<tr>
<td width="50%" align="center">

<strong>YOLO11n</strong>

<br/>Lightweight detection model

</td>
<td width="50%" align="center">

<strong>320 × 320</strong>

<br/>Configured input size

</td>
</tr>
</table>

> **Research note:** This project is a preliminary object-detection experiment. It is not a clinically validated diagnostic system.

---

## 01 — Animated Research Workflow

<div align="center">

![Animated research workflow](assets/workflow.gif)

*Dataset → Training → Validation → Held-out testing*

</div>

## 02 — Microscopy-Inspired Visualization

<div align="center">

![Illustrative microscopic motion](assets/microscopic_motion.gif)

*An illustrative synthetic visualization inspired by microscopy imagery; not experimental microscopy footage.*

</div>

## 03 — Illustrative Prediction Demo

<div align="center">

![Illustrative YOLO detection demo](assets/prediction_demo.gif)

*Illustrative detection-style animation, not a verified prediction from the trained checkpoint.*

</div>

---

## 04 — Project Overview

This project explores YOLO11n for detecting four helminth egg classes in microscopy images using a selected sample of 400 image–annotation pairs.

The goal is to establish a transparent baseline, document the evaluation process, and identify areas requiring further investigation.

### Dataset source

- **Dataset:** Soil-transmitted Helminths and Schistosoma mansoni Eggs Image Dataset
- **Repository:** [Helminth Egg Detection — YOLO11](https://github.com/rayyan-anwar/helminth-egg-detection-yolo11)
- **Dataset record:** [Zenodo](https://zenodo.org/records/13843815)
- **DOI:** [10.5281/zenodo.13843815](https://doi.org/10.5281/zenodo.13843815)

### Dataset split

<table>
<tr><th>Split</th><th>Images</th><th>Purpose</th></tr>
<tr><td>Training</td><td>280</td><td>Model fitting</td></tr>
<tr><td>Validation</td><td>60</td><td>Development and model selection</td></tr>
<tr><td>Held-out test</td><td>60</td><td>Final evaluation</td></tr>
<tr><th>Total</th><th>400</th><th>Selected sample</th></tr>
</table>

Recorded split seed: `42`.

### Detection classes

| ID | Label | Organism |
|---:|---|---|
| 0 | ASC. | *Ascaris lumbricoides* |
| 1 | HKW. | Hookworm |
| 2 | SCH. | *Schistosoma mansoni* |
| 3 | TRI. | *Trichuris trichiura* |

---

## 05 — Model & Training Configuration

<table>
<tr><th>Parameter</th><th>Recorded value</th></tr>
<tr><td>Architecture</td><td>YOLO11n</td></tr>
<tr><td>Initial weights</td><td><code>yolo11n.pt</code></td></tr>
<tr><td>Image size</td><td>320 × 320</td></tr>
<tr><td>Configured epochs</td><td>15</td></tr>
<tr><td>Batch size</td><td>4</td></tr>
<tr><td>Training device</td><td>CPU</td></tr>
<tr><td>Optimizer setting</td><td>Ultralytics auto</td></tr>
<tr><td>Ultralytics</td><td>8.4.181</td></tr>
<tr><td>Python</td><td>3.13.16</td></tr>
<tr><td>PyTorch</td><td>2.11.0+cpu</td></tr>
<tr><td>Random seed</td><td>42</td></tr>
<tr><td>Deterministic mode</td><td>Enabled in recorded configuration</td></tr>
</table>

The effective optimizer and learning-rate settings should be checked against the original training logs before claiming exact reproduction.

---

## 06 — Mathematical Foundations

These equations describe standard object-detection concepts. They are explanatory formulas, not a claim that the original training code manually implemented them.

### 6.1 Bounding box

A bounding box may be represented as:

\[
B = (x_c, y_c, w, h)
\]

where \(x_c,y_c\) represent the center coordinates, and \(w,h\) represent width and height.

### 6.2 Intersection over Union (IoU)

IoU measures overlap between a predicted bounding box and its ground-truth annotation.

\[
IoU = \frac{|B_p \cap B_{gt}|}{|B_p \cup B_{gt}|}
\]

A larger IoU indicates greater overlap.

### 6.3 Precision

\[
Precision = \frac{TP}{TP+FP}
\]

### 6.4 Recall

\[
Recall = \frac{TP}{TP+FN}
\]

Where:

- \(TP\): true-positive detections
- \(FP\): false-positive detections
- \(FN\): false-negative detections

### 6.5 Average Precision

\[
AP = \int_0^1 P(R)\,dR
\]

Average Precision summarizes the precision–recall curve for an individual class.

### 6.6 Mean Average Precision

\[
mAP = \frac{1}{C}\sum_{c=1}^{C}AP_c
\]

- **mAP@50:** evaluated at IoU 0.50.
- **mAP@50–95:** averaged across IoU thresholds from 0.50 to 0.95 in increments of 0.05.

These metrics measure object-detection performance, not clinical diagnostic sensitivity or specificity.

---

## 07 — Held-Out Test Results

Recorded evaluation: **60 test images and 147 annotated instances.**

<div align="center">

| Metric | Recorded result |
|---|---:|
| Precision | **74.77%** |
| Recall | **64.40%** |
| mAP@50 | **72.50%** |
| mAP@50–95 | **55.26%** |

</div>

### Class-wise AP@50

| Class | AP@50 |
|---|---:|
| *Ascaris lumbricoides* | 95.32% |
| Hookworm | 54.93% |
| *Schistosoma mansoni* | 58.90% |
| *Trichuris trichiura* | 80.85% |

### Interpretation

Performance differs across classes. Hookworm and *Schistosoma mansoni* show lower recorded AP@50 than the other classes and require further investigation.

**Evaluation caveat:** Separate evaluation records have reported slightly different aggregate metrics. The checkpoint, software version, thresholds, image size, and saved outputs must be reconciled before claiming exact metric reproducibility.

The results apply only to this selected test split and do not establish generalization to independent specimens or clinical populations.

---

## 08 — Python Inference Example

The following example illustrates how to load the trained checkpoint and run inference on an image.

```python
from ultralytics import YOLO

# Load trained weights
model = YOLO("models/best.pt")

# Run detection on a microscopy image
results = model.predict(
    source="sample_microscopy.jpg",
    imgsz=320,
    conf=0.25,
    save=True
)

# Display predicted classes, confidence, and coordinates
for result in results:
    for box in result.boxes:
        class_id = int(box.cls.item())
        confidence = float(box.conf.item())
        coordinates = box.xyxy[0].tolist()

        print(
            f"Class ID: {class_id}, "
            f"Confidence: {confidence:.3f}, "
            f"Box: {coordinates}"
        )
```

The image path must point to a real image. The confidence threshold `0.25` is an example inference setting and is not claimed to be the threshold used for the reported test metrics.

### Class mapping

```python
CLASS_NAMES = {
    0: "ASC.",
    1: "HKW.",
    2: "SCH.",
    3: "TRI."
}
```

The class IDs must match the annotations and dataset configuration.

---

## 09 — Dataset YAML Example

```yaml
path: /path/to/your/dataset

train: images/train
val: images/val
test: images/test

names:
  0: ASC.
  1: HKW.
  2: SCH.
  3: TRI.
```

This is a template. Update the root path and split locations for the actual dataset layout.

---

## 10 — Evaluation Example

```python
from ultralytics import YOLO

model = YOLO("models/best.pt")

metrics = model.val(
    data="dataset.yaml",
    split="test",
    imgsz=320,
    batch=4,
    device="cpu"
)

print(f"Precision: {metrics.box.mp:.4f}")
print(f"Recall: {metrics.box.mr:.4f}")
print(f"mAP@50: {metrics.box.map50:.4f}")
print(f"mAP@50–95: {metrics.box.map:.4f}")
```

This is an illustrative evaluation example. Confirm support for the specified split and parameters in the installed Ultralytics version before using it.

**Evaluation protocol**

1. Train on the training split.
2. Use validation data for development and model selection.
3. Keep the test split out of threshold tuning and model selection.
4. Record the checkpoint hash, software version, image size, thresholds, and evaluation outputs.
5. Investigate differences between evaluation runs instead of silently replacing earlier metrics.

---

## 11 — Repository Structure

Intended structure; confirm every path exists in GitHub.

```text
helminth-egg-detection-yolo11/
├── assets/
│   ├── workflow.gif
│   ├── microscopic_motion.gif
│   └── prediction_demo.gif
├── models/
│   └── best.pt
├── results/
│   ├── test_metrics.json
│   ├── classwise_test_results.csv
│   ├── training_history.csv
│   └── training_args.yaml
├── figures/
├── dataset.yaml
├── predict.py
└── README.md
```

---

## 12 — Reproducibility

- The recorded configuration specifies seed `42` and deterministic mode.
- Exact reproduction can depend on hardware, software, data files, and library behavior.
- Update `dataset.yaml` for the local environment before evaluation or prediction.
- Preserve the original checkpoint and record its SHA-256 hash.
- Save the exact evaluation settings alongside the metrics.
- Keep validation-based model selection separate from held-out test evaluation.

A fixed seed supports reproducibility but does not guarantee identical results across environments.

---

## 13 — Limitations

1. The experiment uses a selected sample of 400 image–annotation pairs.
2. Duplicate checks do not establish microscopy-slide or specimen-level independence.
3. Performance varies between classes.
4. Evaluation records require reconciliation before exact repeatability can be claimed.
5. Further baseline comparisons and repeated experiments are needed.
6. Independent external validation is required to assess generalization.
7. The model has not been established as a clinically validated diagnostic system.

---

## 14 — Research Citation

**Dataset:** [Soil-transmitted Helminths and Schistosoma mansoni Eggs Image Dataset — Zenodo](https://doi.org/10.5281/zenodo.13843815)

**Related publication:** Oyibo et al. (2025), *Scientific Reports*.

[Publication DOI](https://doi.org/10.1038/s41598-025-02755-9)

Consult the original publication and dataset record for the complete author list and citation requirements.

---

<div align="center">

### BUILT WITH SCIENTIFIC RIGOR

**Made by Rayyan Anwar**

*Computer Vision · Microscopy · Reproducible Research*

[GitHub Repository](https://github.com/rayyan-anwar/helminth-egg-detection-yolo11) · [Dataset DOI](https://doi.org/10.5281/zenodo.13843815)

</div>
