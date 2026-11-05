# Single-image validation inference diagnostic — 5 November 2026

## Purpose

This record documents a targeted inference diagnostic on one labelled validation image. It supplements the project’s aggregate evaluation records; it does not replace them.

## Reproducibility details

| Item | Recorded value |
|---|---|
| Model | YOLO11n |
| Checkpoint | `models/best.pt` |
| Checkpoint SHA-256 | `a35c2bdf2cca16f7c6f1c2b685920237f6b11e07ac75be8f6da468cec74529df` |
| Ultralytics | 8.4.181 |
| Split | Validation |
| Image | `val_0000_image_09515.png` |
| Image dimensions | 2028 × 1520 pixels |
| Inference image size | 320 |
| Confidence threshold | 0.001 (diagnostic candidate inspection) |
| NMS IoU threshold | 0.45 |

## Observed result

The image annotation contained one ground-truth object: class ID 1 (`HKW.`, Hookworm).

The model produced 26 candidate predictions at confidence threshold 0.001. The highest-IoU candidate matching the annotated object was also classified as `HKW.`:

| Measure | Result |
|---|---:|
| Candidate class | HKW. |
| Candidate confidence | 0.02787 (2.787%) |
| IoU with ground-truth box | 0.81799 (81.799%) |
| Predictions retained at confidence 0.25 | 0 |

The candidate therefore showed strong spatial overlap and the correct class on this image, but its confidence was too low to pass a 0.25 threshold.

## Interpretation and limitations

This is evidence that the checkpoint can produce a correctly classified, well-localized low-confidence candidate on this particular validation image. It does **not** establish that the model is generally well localized, that its confidence scores are calibrated, or that its aggregate performance has changed.

The 26 low-threshold candidates are not 26 confirmed eggs; they may include false positives. This single-image diagnostic must not be combined with, or substituted for, the documented held-out test metrics. No test-set threshold tuning was performed as part of this diagnostic.

The JSON companion file, [`single_image_inference_diagnostic_20261105.json`](single_image_inference_diagnostic_20261105.json), stores the structured result.

## Output provenance

The prediction output was saved in the user's Google Drive inference-smoke-test folder. That local Drive path is environment-specific and is not represented as a repository asset.
