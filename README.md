
<div align="center">

# HELMINTH EGG DETECTION
### YOLO11n · Microscopy Image Analysis

**A Preliminary Four-Class Object Detection Experiment**

[![YOLO11n](https://img.shields.io/badge/Model-YOLO11n-00D4FF?style=for-the-badge)](https://docs.ultralytics.com/)
[![Dataset](https://img.shields.io/badge/Dataset-Zenodo-00B4D8?style=for-the-badge)](https://doi.org/10.5281/zenodo.13843815)
[![Research](https://img.shields.io/badge/Research-Preliminary-64748B?style=for-the-badge)](#limitations)
[![Python](https://img.shields.io/badge/Python-3.13.16-14213D?style=for-the-badge)](https://www.python.org/)

*Exploring deep learning for microscopy-based helminth egg detection.*

</div>

---

## 01 · Project Overview

This project investigates YOLO11n for detecting four classes of helminth eggs in microscopy images. The experiment uses a selected sample of 400 image–annotation pairs from a publicly available dataset.

The objectives are to:

- Develop a preliminary object-detection baseline.
- Evaluate localization and classification performance.
- Document the mathematical foundations and inference workflow.
- Preserve the distinction between training, validation, and held-out testing.
- Report limitations transparently and support future reproducible research.

> **Research scope:** This is a preliminary computer-vision experiment, not a clinically validated diagnostic system.

## 02 · Animated Research Workflow

<div align="center">

![Animated research workflow](assets/workflow.gif)

*Illustrative workflow: dataset preparation → training → validation → held-out testing.*

</div>

## 03 · Microscopy-Inspired Visualization

<div align="center">

![Illustrative microscopic motion](assets/microscopic_motion.gif)

*This synthetic animation is inspired by microscopy imagery. It is not actual experimental microscopy footage.*

</div>

## 04 · Illustrative Prediction Demo

<div align="center">

![Illustrative YOLO detection demo](assets/prediction_demo.gif)

*This is an illustrative detection-style animation. Its bounding boxes and labels are not verified predictions from the trained checkpoint.*

</div>

---

## 05 · Dataset

| Property | Details |
|---|---|
| Dataset | Soil-transmitted Helminths and Schistosoma mansoni Eggs Image Dataset |
| Source | [Zenodo record](https://zenodo.org/records/13843815) |
| DOI | [10.5281/zenodo.13843815](https://doi.org/10.5281/zenodo.13843815) |
| Selected sample | 400 image–annotation pairs |
| Training split | 280 images |
| Validation split | 60 images |
| Held-out test split | 60 images |
| Recorded split seed | 42 |

### Detection classes

| Class ID | Label | Organism |
|---:|---|---|
| 0 | ASC. | *Ascaris lumbricoides* |
| 1 | HKW. | Hookworm |
| 2 | SCH. | *Schistosoma mansoni* |
| 3 | TRI. | *Trichuris trichiura* |

---

## 06 · Model Architecture and Training

The experiment uses YOLO11n, a lightweight YOLO11 object-detection model initialized with pretrained weights.

| Parameter | Recorded configuration |
|---|---|
| Architecture | YOLO11n |
| Initial weights | `yolo11n.pt` |
| Input image size | 320 × 320 |
| Configured epochs | 15 |
| Batch size | 4 |
| Training device | CPU |
| Optimizer setting | Ultralytics `auto` |
| Ultralytics | 8.4.181 |
| Python | 3.13.16 |
| PyTorch | 2.11.0+cpu |
| Random seed | 42 |
| Deterministic mode | Enabled in recorded configuration |

These are the recorded training configuration values. The effective optimizer and learning-rate settings should be confirmed against the original training logs before claiming exact training reproducibility.

## 07 · Mathematical Foundations

The following equations describe standard concepts used in object detection and evaluation. They are explanatory formulas, not a claim that the original implementation manually computes each quantity.

### 7.1 Bounding box representation

A bounding box can be represented as:

$$
B = (x_c, y_c, w, h)
$$

where:

- \(x_c, y_c\): center coordinates.
- \(w, h\): width and height.

The exact coordinate convention depends on the annotation and model interface. Predictions can also be represented using corner coordinates \((x_1,y_1,x_2,y_2)\).

### 7.2 Intersection over Union (IoU)

IoU measures the overlap between a predicted bounding box and a ground-truth box.

$$
IoU = \frac{|B_p \cap B_{gt}|}{|B_p \cup B_{gt}|}
$$

Here, \(B_p\) is the predicted box and \(B_{gt}\) is the annotated box.

An IoU closer to 1 indicates greater overlap. IoU thresholds are used in object-detection evaluation to determine whether a prediction sufficiently matches an annotation.

### 7.3 Precision

Precision measures the proportion of counted detections that are correct under the evaluation matching rules.

$$
Precision = \frac{TP}{TP+FP}
$$

### 7.4 Recall

Recall measures the proportion of annotated objects that are successfully detected.

$$
Recall = \frac{TP}{TP+FN}
$$

where:

- \(TP\): true-positive detections.
- \(FP\): false-positive detections.
- \(FN\): false-negative detections.

These are object-detection metrics and should not be interpreted as patient-level clinical diagnostic sensitivity or specificity.

### 7.5 Average Precision (AP)

Average Precision summarizes the precision–recall curve for a class.

$$
AP = \int_0^1 P(R)\,dR
$$

Here, \(P(R)\) denotes precision as a function of recall. Practical implementations estimate AP from the evaluated precision–recall curve.

### 7.6 Mean Average Precision (mAP)

For \(C\) evaluated classes:

$$
mAP = \frac{1}{C}\sum_{c=1}^{C} AP_c
$$

- **mAP@50:** AP evaluated at IoU threshold 0.50.
- **mAP@50–95:** AP averaged across IoU thresholds from 0.50 to 0.95 in increments of 0.05.

The exact evaluation settings must be held consistent when comparing results.

---

## 08 · Held-Out Test Results

The recorded evaluation covers **60 test images containing 147 annotated instances**.

### Aggregate metrics

| Metric | Recorded result |
|---|---:|
| Precision | 74.77% |
| Recall | 64.40% |
| mAP@50 | 72.50% |
| mAP@50–95 | 55.26% |

### Per-class AP@50

| Class | AP@50 |
|---|---:|
| *Ascaris lumbricoides* | 95.32% |
| Hookworm | 54.93% |
| *Schistosoma mansoni* | 58.90% |
| *Trichuris trichiura* | 80.85% |

### Interpretation

The recorded results vary across the four classes. Hookworm and *Schistosoma mansoni* have lower AP@50 than the other two classes, indicating areas that warrant further investigation.

These results describe object detection on the selected test split. They do not establish clinical diagnostic performance or generalization to independent laboratories, slides, specimens, or populations.

> **Evaluation transparency:** The standardized test evaluation reproduced the saved aggregate metrics using YOLO11n, image size 320, confidence threshold 0.001, NMS IoU threshold 0.7, and Ultralytics 8.4.181. An earlier run with a different NMS IoU setting produced different metrics; evaluation settings should therefore be reported alongside results.

---

## 09 · Python Inference Example

The following example illustrates how to load the trained checkpoint and run object detection on a microscopy image.

```python
from ultralytics import YOLO

# Load trained model weights
model = YOLO("models/best.pt")

# Run inference on an image
results = model.predict(
    source="sample_microscopy.jpg",
    imgsz=320,
    conf=0.25,
    save=True
)

# Display detected classes, confidence scores and boxes
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

**Important:**

- Replace `sample_microscopy.jpg` with the path to an available image.
- The checkpoint path must point to the actual model file.
- `conf=0.25` is an illustrative inference threshold, not a claim about the threshold used to generate the reported test metrics.
- This example demonstrates inference; it does not establish that a prediction is biologically correct.

### Class ID mapping

```python
CLASS_NAMES = {
    0: "ASC.",
    1: "HKW.",
    2: "SCH.",
    3: "TRI."
}
```

The mapping must remain consistent with the dataset annotations and `dataset.yaml`.

---

## 10 · Dataset YAML Example

A typical YOLO dataset configuration identifies the image splits and class names.

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

This is a template, not a verified copy of the original configuration. Update the root directory and split paths to match the actual dataset structure. Keep class IDs consistent with the annotations.

---

## 11 · Evaluation Code Example

The following example demonstrates a test-split evaluation using Ultralytics.

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

This is an illustrative evaluation example. Confirm that the installed Ultralytics version supports the requested split and parameters, and record the exact settings for any final evaluation.

**Evaluation protocol:**

1. Use training data to fit the model.
2. Use validation data for model selection and development decisions.
3. Keep the held-out test set separate from model and threshold tuning.
4. Record the checkpoint hash, software version, image size, confidence threshold, IoU threshold, and output files for each evaluation.
5. Do not overwrite previously recorded metrics when a new run produces different values; investigate and document the difference.

---

## 12 · Repository Structure

The intended project structure is:

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

Confirm that every listed file and directory exists in the repository before treating this structure as a verified inventory.

---

## 13 · Reproducibility Notes

- The recorded training configuration specifies random seed 42 and deterministic mode.
- Exact reproduction may depend on software versions, hardware, dataset files, and library behavior.
- The original training configuration contains a data path that may differ from the path used in another environment.
- Update `dataset.yaml` before running prediction or evaluation on a different machine.
- Preserve the original checkpoint and its SHA-256 hash when conducting additional experiments.
- Store evaluation parameters and output metrics with each run.
- Keep validation-based model selection separate from held-out test evaluation.

A fixed random seed supports reproducibility but does not, by itself, guarantee identical results across environments.

---

## 14 · Limitations

1. **Preliminary sample:** The experiment uses a selected sample of 400 image–annotation pairs.
2. **Source independence:** Duplicate checks found no exact duplicate groups or cross-split perceptual-hash matches at the tested threshold. This does not prove independence at the slide or specimen level.
3. **Class-wise performance:** The recorded results vary substantially between classes.
4. **Evaluation consistency:** Metrics can vary with evaluation settings; the reported standardized configuration should be preserved for reproducibility.
5. **Baseline comparisons:** Further comparisons with appropriate baseline models and repeated experiments are needed.
6. **External validation:** Independent data from other sources are required to assess generalization.
7. **Clinical applicability:** The model has not been established as a clinically validated diagnostic system.

---

## 15 · Dataset and Research Citation

**Dataset**

[Soil-transmitted Helminths and Schistosoma mansoni Eggs Image Dataset — Zenodo](https://doi.org/10.5281/zenodo.13843815)

**Related publication**

Oyibo et al. (2025), *Scientific Reports*.

[https://doi.org/10.1038/s41598-025-02755-9](https://doi.org/10.1038/s41598-025-02755-9)

Consult the original publication and dataset record for the complete author list, publication details, and citation requirements.

---
## 14 — Research Citation 
**Dataset:** [Soil-transmitted Helminths and Schistosoma mansoni Eggs Image Dataset — Zenodo](https://doi.org/10.5281/zenodo.13843815) 
**Related publication:** 
Oyibo et al. (2025), 
*Scientific Reports*. [Publication DOI](https://doi.org/10.1038/s41598-025-02755-9)
Consult the original publication and dataset record for the complete author list and citation requirements.
--- <div align="center"> 
### BUILT WITH SCIENTIFIC RIGOR 
**Made by Rayyan Anwar** 

*Computer Vision · Microscopy · Reproducible Research* 

[GitHub Repository](https://github.com/rayyan-anwar/helminth-egg-detection-yolo11) · 
[Dataset DOI](https://doi.org/10.5281/zenodo.13843815)

<div align="center">

### COMPUTER VISION · MICROSCOPY · RESEARCH REPRODUCIBILITY

*A preliminary research project focused on transparent evaluation, reproducibility, and responsible scientific reporting.*

</div>
