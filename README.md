# Helminth Egg Detection Using YOLO11n

## Project overview
A preliminary object-detection experiment for four helminth egg classes in microscopy images using YOLO11n.

## Co-authors
- Rayyan Anwar
- Riza Tasleem

## Dataset
- Name: Soil-transmitted Helminths and Schistosoma mansoni Eggs Image Dataset
- Source: https://zenodo.org/records/13843815
- DOI: https://doi.org/10.5281/zenodo.13843815
- Selected sample: 400 image–annotation pairs
- Split: 280 training, 60 validation, 60 test images
- Split seed: 42

## Model and training
- Architecture: YOLO11n, pretrained weights
- Input size: 320 × 320
- Epochs configured: 15
- Batch size: 4
- Device: CPU
- Optimizer setting in training YAML: automatic selection
- Evaluation software: Ultralytics 8.4.181

The Python and PyTorch versions shown in the final evaluation environment are not asserted here as verified training-environment versions.

**Training provenance caveat:** the saved checkpoint metadata records AdamW and a learning-rate value of 0.00125, whereas the training configuration records automatic optimizer selection and an initial learning-rate value of 0.01. The effective optimizer and learning-rate settings have not been independently verified.

## Classes
- ASC. — Ascaris lumbricoides
- HKW. — Hookworm
- SCH. — Schistosoma mansoni
- TRI. — Trichuris trichiura

## Held-out test results

The final documented YOLO11n evaluation was performed on 60 held-out test images containing 147 annotated instances. Settings: image size 320 × 320 pixels, confidence threshold 0.001, NMS IoU threshold 0.45, Ultralytics 8.4.181.

**Overall performance**
- Precision: 77.56%
- Recall: 63.89%
- mAP@0.50: 73.48%
- mAP@0.50:0.95: 55.84%

**Class-wise average precision**

| Class | AP@0.50 | AP@0.50:0.95 |
|---|---:|---:|
| Ascaris (ASC) | 95.39% | 76.73% |
| Hookworm (HKW) | 55.06% | 46.38% |
| Schistosoma mansoni (SCH) | 62.68% | 40.02% |
| Trichuris (TRI) | 80.78% | 60.21% |

These class-wise values are taken from the retained 5 November 2026 class-wise results record and the publication-readiness audit.

## Separate error analysis
A separate error-analysis output reported 107 true positives, 37 false positives, and 40 false negatives across 60 test images. This run used a confidence threshold of 0.25, NMS IoU threshold of 0.70, and ground-truth matching IoU threshold of 0.50. These counts are reported separately and must not be combined with the principal test metrics because the settings differ.

## Project contents
- `models/best.pt`: trained model weights
- `predict.py`: prediction script
- `dataset.yaml`: dataset configuration
- `results/final_documented_test_metrics.json`: documented aggregate test metrics
- `results/classwise_test_results_20261105.csv`: class-wise AP results
- `results/training_history.csv`: training history
- `results/training_args.yaml`: training configuration
- `figures/`: evaluation plots

## Reproducibility notes
The training configuration records random seed 42 and deterministic mode enabled. Exact reproduction can still depend on software versions, hardware, data files, and library behaviour. The training data path in the original configuration is environment-specific; update a local dataset configuration for your own environment before evaluation or prediction. Do not overwrite the archived configuration or its recorded provenance when adapting paths.

## Limitations
This is a preliminary experiment on a selected 400-image sample. The results do not establish clinical diagnostic performance. Although exact duplicate checks found no cross-split duplicates, patient- or slide-level independence has not been established. The biological correctness of the original annotations has not been independently verified. Exploratory test evaluations under different settings occurred during the project, so possible test-set reuse should be considered. Further source-level leakage assessment, stronger baseline comparisons, repeated experiments, and independent external validation are needed before making generalisation claims.

## Citation
Oyibo et al. (2025), Scientific Reports:
https://doi.org/10.1038/s41598-025-02755-9

Dataset DOI:
https://doi.org/10.5281/zenodo.13843815
