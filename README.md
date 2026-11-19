# YOLO11n-Based Detection of Four Helminth Egg Categories in Faecal-Smear Microscopy Images

[![Research project](https://img.shields.io/badge/Research-computational%20microscopy-blue)](https://github.com/rayyan-anwar/helminth-egg-detection-yolo11)

A research project exploring deep-learning-based object detection of four helminth egg categories in faecal-smear microscopy images using **YOLO11n**.

> **Research status:** Preliminary computational study. The reported results should not be interpreted as evidence of clinical diagnostic performance or readiness for routine laboratory use.

## Authors

- **Rayyan Anwar** — Independent Researcher, India
- **Riza Tasleem** — M.Sc. Zoology student, Haldaur Degree College, Haldaur, affiliated with Guru Jambheshwar University, India

## Project at a glance

| Item | Description |
|---|---|
| Task | Object detection in microscopy images |
| Model | YOLO11n (pretrained) |
| Target categories | Four helminth egg categories |
| Dataset sample | 400 image–annotation pairs |
| Data split | 280 train / 60 validation / 60 test |
| Input resolution | 320 × 320 pixels |
| Training duration | 15 configured epochs |
| Training hardware | CPU |
| Evaluation framework | Ultralytics 8.4.181 |

## Dataset

This project uses a selected subset of the **Soil-transmitted Helminths and *Schistosoma mansoni* Eggs Image Dataset**.

- **Dataset record:** [Zenodo record 13843815](https://zenodo.org/records/13843815)
- **Dataset DOI:** [10.5281/zenodo.13843815](https://doi.org/10.5281/zenodo.13843815)
- **Selected sample:** 400 image–annotation pairs
- **Split:** 280 training, 60 validation and 60 test images
- **Split seed:** 42

The project uses the dataset's existing annotations. The biological correctness of those annotations has not been independently established in this project.

### Detection categories

| Code | Category |
|---|---|
| ASC | *Ascaris lumbricoides* |
| HKW | Hookworm |
| SCH | *Schistosoma mansoni* |
| TRI | *Trichuris trichiura* |

## Model training

The detector was trained using pretrained YOLO11n weights with the following recorded configuration:

- Image size: 320 × 320
- Configured epochs: 15
- Batch size: 4
- Device: CPU
- Random seed: 42
- Deterministic mode: enabled
- Optimizer setting in training YAML: automatic selection
- Evaluation software: Ultralytics 8.4.181

**Training-provenance note:** The saved checkpoint metadata records AdamW and a learning-rate value of 0.00125, while the training configuration records automatic optimizer selection and an initial learning-rate value of 0.01. The effective optimizer and learning-rate settings have not been independently verified. This discrepancy is retained transparently rather than resolved by assumption.

The Python and PyTorch versions shown in the final evaluation environment are not presented as verified versions of the original training environment.

## Test-set evaluation

The final documented evaluation used the project's designated test split of **60 images containing 147 annotated instances**.

| Evaluation setting | Value |
|---|---:|
| Image size | 320 × 320 |
| Confidence threshold | 0.001 |
| NMS IoU threshold | 0.45 |
| Evaluation framework | Ultralytics 8.4.181 |

### Aggregate performance

| Metric | Result |
|---|---:|
| Precision | 77.56% |
| Recall | 63.89% |
| mAP@0.50 | 73.48% |
| mAP@0.50–0.95 | 55.84% |

### Class-wise average precision

| Category | AP@0.50 | AP@0.50–0.95 |
|---|---:|---:|
| *Ascaris* (ASC) | 95.39% | 76.73% |
| Hookworm (HKW) | 55.06% | 46.38% |
| *Schistosoma mansoni* (SCH) | 62.68% | 40.02% |
| *Trichuris* (TRI) | 80.78% | 60.21% |

The class-wise values are taken from the retained 5 November 2026 class-wise results record and the publication-readiness audit.

**Interpretation:** Performance varies across categories. In particular, the lower AP values for Hookworm and *S. mansoni* indicate that detection performance is not uniform across the four classes. These results should be interpreted in the context of the small selected dataset and the evaluation protocol.

### Separate error analysis

A separate error-analysis run reported:

- True positives (TP): 107
- False positives (FP): 37
- False negatives (FN): 40
- Images analysed: 60

This analysis used confidence threshold 0.25, NMS IoU threshold 0.70 and ground-truth matching IoU threshold 0.50. Because these settings differ from the principal evaluation settings, these counts are reported separately and must not be combined with the aggregate test metrics above.

## Repository contents

The repository includes the following key project files and records:

| Path | Description |
|---|---|
| `models/best.pt` | Trained model checkpoint |
| `predict.py` | Prediction script |
| `dataset.yaml` | Dataset configuration |
| `results/final_documented_test_metrics.json` | Documented aggregate test metrics |
| `results/classwise_test_results_20261105.csv` | Class-wise AP results |
| `results/training_history.csv` | Recorded training history |
| `results/training_args.yaml` | Recorded training configuration |
| `figures/` | Evaluation plots |

## Reproducibility

The recorded configuration specifies random seed 42 and deterministic mode enabled. Exact reproduction may still depend on software versions, hardware, data files, and library behaviour.

The original training data path is environment-specific. Before running the project in another environment, configure the dataset path for that environment. Preserve the archived configuration and provenance records; do not silently overwrite the original settings.

The reported checkpoint and metric files should be interpreted alongside the training-provenance note above. The effective optimizer and learning-rate settings have not been independently verified.

## Limitations and responsible interpretation

This work is a preliminary experiment based on a selected sample of 400 image–annotation pairs. Important limitations include:

1. **Sample size and representativeness:** The selected dataset subset is relatively small and may not represent the full range of microscopy conditions encountered in practice.
2. **Patient- or slide-level independence:** Exact duplicate checks found no cross-split duplicates, but patient-level or slide-level independence has not been established.
3. **Annotation verification:** The original biological annotations have not been independently verified in this project.
4. **Test-set reuse:** Exploratory evaluations using different settings were performed during the project. Possible test-set reuse should therefore be considered when interpreting the final estimates.
5. **External validation:** Independent validation on additional datasets and microscopy settings has not been performed.
6. **Clinical applicability:** The reported metrics do not establish clinical diagnostic accuracy, clinical utility, or readiness for routine laboratory deployment.

Further work should include stronger baseline comparisons, repeated experiments, source-level data-leakage assessment, expert review of annotations, and independent external validation.

## Ethics and data use

This project is a secondary computational analysis of an existing publicly available dataset. No new human participants were recruited and no new biological specimens were collected for this project. The original dataset documentation reports ethics approval and informed consent for the underlying study. No new ethics approval was obtained for this secondary analysis. The project relies on the original dataset documentation and does not claim to have independently audited the original ethics records.

## Funding and competing interests

The current project received no specific funding. Any funding acknowledged by the original dataset-generating study relates to that underlying study and should not be interpreted as funding for the present project.

The authors declare no specific financial or non-financial competing interests.

## Data availability

The source dataset is available through [Zenodo record 13843815](https://doi.org/10.5281/zenodo.13843815), subject to its stated licence and terms. Project-specific code, configuration files, model checkpoint and retained evaluation outputs are provided in this repository, subject to applicable third-party dataset and software terms.

## How to cite the source dataset

Oyibo et al. (2025). *Scientific Reports*. [https://doi.org/10.1038/s41598-025-02755-9](https://doi.org/10.1038/s41598-025-02755-9)

**Dataset:** [Soil-transmitted Helminths and Schistosoma mansoni Eggs Image Dataset](https://doi.org/10.5281/zenodo.13843815).

---

*This repository documents a research experiment and its computational artefacts. It is not a medical device and must not be used as a substitute for expert microscopy or clinical diagnosis.*
