# Practical Reproducibility Checklist

This guide records what is currently reproducible from the public repository and what still requires the original data/runtime. It does not claim that the complete original training run has been independently reproduced.

## 1. Preserve the evaluated artifacts

- Checkpoint: `models/best.pt`
- Expected checkpoint SHA-256: `a35c2bdf2cca16f7c6f1c2b685920237f6b11e07ac75be8f6da468cec74529df`
- Original tracked dataset configuration: `dataset.yaml`
- Expected tracked dataset YAML SHA-256: `84b3f619b4aef5496ef2d51568ca3b05ec1942057d9d38a53a6d9e260ca26e2c`

Do not edit the original `dataset.yaml` when preparing a local run. Copy it to a separate local configuration file and adapt that copy to the local dataset root. This preserves the recorded configuration and its hash.

## 2. Dataset layout required

The selected dataset should have this structure:

```text
dataset/
├── images/
│   ├── train/   # 280 images
│   ├── val/     # 60 images
│   └── test/    # 60 images
└── labels/
    ├── train/   # 280 label files
    ├── val/     # 60 label files
    └── test/    # 60 label files
```

The expected class mapping is:

| ID | Label | Organism |
|---:|---|---|
| 0 | ASC. | *Ascaris lumbricoides* |
| 1 | HKW. | Hookworm |
| 2 | SCH. | *Schistosoma mansoni* |
| 3 | TRI. | *Trichuris trichiura* |

The repository does not redistribute the full source dataset. Obtain it from the cited Zenodo record and ensure that the selected 400-image subset and split assignments match the documented experiment before attempting exact reproduction. File counts alone do not establish image identity or specimen-level independence.

## 3. Prepare a separate local dataset YAML

Copy `dataset.example.yaml` to a new file such as `dataset.local.yaml`. Set its `path` to the absolute location of the dataset on the machine being used. Do not commit machine-specific absolute paths or overwrite the tracked `dataset.yaml`.

## 4. Environment

The requirements file currently pins Ultralytics 8.4.181 and includes pandas. The original training configuration records YOLO11n pretrained weights, 15 epochs, image size 320, batch size 4, CPU as configured training device, seed 42, deterministic mode enabled, and optimizer `auto`.

The saved checkpoint metadata and training configuration contain learning-rate metadata differences. The exact effective optimizer and learning-rate schedule have not been reconciled against original training logs. The complete original training environment is therefore not yet established.

The 5 November test evaluation console reported Python 3.13.16, PyTorch 2.11.0+cu130, CUDA 13.0, Tesla T4, and Ultralytics 8.4.181. These describe the later evaluation runtime, not proof of the original training runtime.

## 5. Inference smoke test

From the repository root, after installing dependencies and placing the checkpoint at `models/best.pt`:

```bash
python predict.py --source /path/to/a/microscopy_image.png --weights models/best.pt --imgsz 320 --conf 0.25
```

This is an inference smoke test only. The example confidence threshold is not the threshold used for the documented 5 November mAP evaluation.

## 6. Documented 5 November test evaluation

The recorded evaluation settings were:

- Split: held-out `test`
- Image size: 320
- Confidence threshold: 0.001
- NMS IoU threshold: 0.45
- Ultralytics: 8.4.181
- 60 images / 147 annotated instances
- Training performed during evaluation: no
- Test-set threshold tuning: no

Recorded aggregate metrics: precision 77.56%, recall 63.89%, mAP@50 73.48%, mAP@50–95 55.84%.

Class-wise AP@50 / AP@50–95:
- ASC.: 95.39% / 76.73%
- HKW.: 55.06% / 46.38%
- SCH.: 62.68% / 40.02%
- TRI.: 80.78% / 60.21%

These values are documented from the supplied evaluation output and subsequent extraction from the existing evaluation object. The consistency of class-wise averages with aggregate mAP is a numerical check, not an independent rerun.

## 7. Before claiming exact reproduction

- [ ] Confirm that the exact original 400 images and annotations are available.
- [ ] Confirm that split membership is identical, not merely the same file counts.
- [ ] Confirm dataset archive/source version and hashes.
- [ ] Confirm specimen/slide grouping and assess leakage at specimen level where identifiers exist.
- [ ] Reconcile the original training runtime and learning-rate metadata.
- [ ] Re-run training only as a separately named experiment; do not overwrite the baseline checkpoint.
- [ ] Keep validation-based selection separate from held-out test evaluation.
- [ ] Record all new run parameters, hashes, logs, and metrics.
- [ ] Have qualified reviewers independently verify biological annotation correctness.
- [ ] Perform external validation before making generalization or clinical claims.

## 8. Current limitations

The notebook file is present in the repository, but its full cell contents and execution history have not been independently inspected in this review. The original dataset and exact split membership have not been independently re-acquired and verified here. Biological specimen/slide independence and external validation remain unestablished.

This checklist is a practical handoff document. It does not certify full end-to-end reproducibility, clinical validity, or journal acceptance.
