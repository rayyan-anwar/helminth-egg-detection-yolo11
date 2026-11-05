# Research Readiness Audit — 5 November 2026

## Scope
Read-only review of the repository's documented evaluation records, training configuration, dataset configuration, project-check report, prediction script, and README, supplemented by the 5 November evaluation code and console output supplied in the project conversation.

This report does not claim an independent rerun of training or evaluation. No model, dataset, or existing result file was changed.

## 1. 5 November held-out test evaluation

**Status: code and recorded output cross-check passed.**

The supplied evaluation call loads:
`/content/drive/MyDrive/Helminth_GitHub_Project/models/best.pt`

It evaluates `dataset.yaml` with:
- split: `test`
- image size: 320
- confidence threshold: 0.001
- NMS IoU threshold: 0.45
- Ultralytics version in console: 8.4.181
- output run: `results/controlled_cm_gpu_20261105`

The supplied console output reports 60 images and 147 instances. Its aggregate values match `results/final_documented_test_metrics.json` to the displayed precision:
- Precision: 0.7756080599550216 (77.56%)
- Recall: 0.638882739390387 (63.89%)
- mAP@50: 0.7347717854559864 (73.48%)
- mAP@50–95: 0.5583584402881157 (55.84%)

The supplied console identifies Python 3.13.16, PyTorch 2.11.0+cu130, and a Tesla T4 GPU. The evaluation cell itself calls `model.val()`; it does not call model training.

## 2. Confusion-matrix caution

The same run reports a matrix total of 1,818, 62 diagonal true positives, 1,671 background false positives, and 6 background false negatives at confidence 0.001. This very low confidence threshold yields many background detections in the displayed matrix. Do not present this matrix as ordinary operating-threshold performance or interpret its background count as the headline metric.

Keep this confusion-matrix diagnostic separate from mAP and from the separate fixed-threshold custom error analysis.

## 3. Class-wise metric provenance

**No 5 November class-wise AP table was found in the reviewed GitHub `results/` directory.**

The committed `results/classwise_test_results.csv` belongs to the separately retained 23 October evaluation with NMS IoU 0.7:
- ASC.: AP@50 95.32%
- HKW.: AP@50 54.93%
- SCH.: AP@50 58.90%
- TRI.: AP@50 80.85%

These values must not be attached to the 5 November aggregate metrics (NMS IoU 0.45). A new per-class evaluation record is needed if per-class AP for 5 November is required; do not infer it from the old CSV or confusion matrix.

## 4. Repository and provenance checks

The reviewed repository contains:
- README and dataset YAML
- model directory and prediction script
- requirements file and notebook directory
- results directory with training arguments/history, reproducibility manifest, prior standardized metrics, class-wise CSV, project-check report, and 5 November aggregate metrics JSON
- figures and visual assets directories/files

The reproducibility manifest records the expected checkpoint SHA-256 as:
`a35c2bdf2cca16f7c6f1c2b685920237f6b11e07ac75be8f6da468cec74529df`

It records the dataset YAML SHA-256 as:
`84b3f619b4aef5496ef2d51568ca3b05ec1942057d9d38a53a6d9e260ca26e2c`

The manifest reports matching train/validation/test image and label file counts (280/60/60). The older project-check report additionally reports no missing labels, extra labels, or invalid label rows in its audit. These are structural checks; they do not validate biological correctness of annotations or establish specimen-level independence.

The training arguments record 15 epochs, image size 320, batch size 4, CPU as the configured training device, seed 42, deterministic mode enabled, and optimizer set to `auto`. Saved checkpoint metadata and configured training arguments have previously shown learning-rate metadata differences; do not state a definitive effective learning rate without resolving the original training logs.

## 5. Items still limiting a publication-ready claim

1. **Specimen/slide independence:** independence across splits has not been established. Use “held-out test split,” not “independent test set.”
2. **Biological annotation validity:** file-format and label-structure checks do not establish that each egg annotation is biologically correct.
3. **External validation:** no independent external dataset/laboratory validation is documented.
4. **Baseline comparison and uncertainty:** additional appropriate baselines, repeated runs or uncertainty estimates are not documented in the reviewed repository.
5. **5 November class-wise AP:** not present in the reviewed repository records.
6. **Portable dataset configuration:** `dataset.yaml` contains an absolute Google Drive path and must be adapted for another environment.
7. **Notebook source inspection:** the connected GitHub file reader did not return usable notebook cell content in this audit, so the full notebook execution history was not independently inspected.

## 6. Reporting recommendation

For the current project report, use the 5 November aggregate metrics as the verified documented held-out test evaluation, with its exact settings and the limitations above. Keep the 23 October evaluation as a separate historical record. Do not merge their metrics. Keep the fixed-threshold custom error analysis separate from official Ultralytics mAP results.

This is a research-readiness audit, not a claim of clinical validation or journal acceptance.
