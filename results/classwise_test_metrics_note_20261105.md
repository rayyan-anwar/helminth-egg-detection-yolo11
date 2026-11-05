# Class-wise Test Metrics — 5 November 2026

## Provenance
These class-wise values were extracted from the already completed Ultralytics validation result object `r_cm` in the user's Colab session. The extraction did not retrain the model or rerun evaluation. The user supplied the resulting console output and confirmed that the CSV and JSON were saved under the project `results/` directory.

Evaluation context from the documented 5 November run:
- Split: held-out test split
- Images: 60
- Instances: 147
- Image size: 320
- Confidence: 0.001
- NMS IoU: 0.45
- Ultralytics: 8.4.181
- Aggregate precision: 77.5608%
- Aggregate recall: 63.8883%
- Aggregate mAP50: 73.4772%
- Aggregate mAP50-95: 55.8358%

## Class-wise metrics

| Class | AP50 | AP50-95 |
|---|---:|---:|
| ASC. — Ascaris lumbricoides | 95.39% | 76.73% |
| HKW. — Hookworm | 55.06% | 46.38% |
| SCH. — Schistosoma mansoni | 62.68% | 40.02% |
| TRI. — Trichuris trichiura | 80.78% | 60.21% |

## Consistency check
The unrounded class AP50 values supplied from `r_cm` have a four-class arithmetic mean of approximately 73.4772%, consistent with the documented aggregate mAP50. The mean class AP50-95 is approximately 55.8358%, consistent with the documented aggregate mAP50-95. This supports internal numerical consistency between the per-class and aggregate metrics; it is not an independent rerun.

## Interpretation
- ASC has the strongest AP50 (95.39%) and AP50-95 (76.73%).
- HKW has the lowest AP50 (55.06%).
- SCH has the lowest AP50-95 (40.02%), indicating weaker localization-sensitive performance across IoU thresholds.
- TRI AP50 is 80.78%, with AP50-95 of 60.21%.

## Reporting cautions
- These values belong only to the 5 November 2026 evaluation configuration (NMS IoU 0.45). Do not combine them with the 23 October class-wise metrics, which came from a different NMS IoU setting.
- AP values are ranking/area-under-curve metrics and should not be confused with fixed-confidence precision or recall.
- Describe the data as a held-out test split. Specimen/slide-level independence has not been established.
- This is a research model evaluation, not clinical validation or evidence of diagnostic readiness.

## Files
- `results/classwise_test_results_20261105.csv`
- `results/classwise_test_results_20261105.json`
