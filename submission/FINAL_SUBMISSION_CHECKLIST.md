# Final pre-submission checklist

**Project:** YOLO11n-Based Detection of Four Helminth Egg Categories in Faecal-Smear Microscopy Images  
**Audit date:** 20 November 2026  
**Repository:** https://github.com/rayyan-anwar/helminth-egg-detection-yolo11

## A. Scientific and reporting checks

- [x] Main aggregate test metrics match the documented final evaluation record: precision 77.56%, recall 63.89%, mAP@0.50 73.48%, mAP@0.50–0.95 55.84%.
- [x] Class-wise AP values are consistent with the retained 5 November 2026 results record.
- [x] The separate error-analysis counts (TP 107, FP 37, FN 40) are described separately from the principal test metrics and their different thresholds are stated.
- [x] Exploratory reuse of the test subset is disclosed.
- [x] The optimizer/learning-rate provenance discrepancy is disclosed rather than guessed.
- [x] No claim of clinical readiness, clinical utility, or independent external validation is made.
- [x] Ethics wording is aligned with the source dataset record and distinguishes the original study's approval/consent from this secondary analysis.
- [x] References 1–7 checked for DOI/title/publication or software-release metadata; see `REFERENCE_VERIFICATION.md`.

## B. Figures and repository paths

- [x] Manuscript Figure 1 path exists: `research_figures/01_baseline_validation_performance.png`.
- [x] Manuscript Figure 2 path exists: `research_figures/02_baseline_loss_curves.png`.
- [x] Manuscript Figure 3 path exists: `research_figures/03_baseline_learning_rate.png`.
- [x] Manuscript Figure 4 path exists: `research_figures/04_sch_validation_precision_recall.png`.
- [x] Manuscript Figure 5 path exists: `research_figures/05_corrected_classwise_error_analysis.png`.
- [x] Manuscript Figure 6 path exists: `research_figures/07_validation_missed_detection_confidence_comparison.png`.
- [ ] Decide whether the additional file `research_figures/06_publication_classwise_error_analysis.png` should be retained as supplementary material or removed from the final curated package. It is not currently referenced by a figure legend.
- [ ] Inspect final exported figure resolution, font size, axis labels, and legibility in the actual DOCX/PDF at normal page size. Repository path existence does not establish print quality.

## C. Repository publication readiness

- [x] Repository is public and the default branch is `main`.
- [x] Repository contains a `v0.1.0` preliminary prototype release and a full-project backup release.
- [x] README and manuscript both describe the same study title, dataset sample/split, principal metrics, test-set reuse caveat, and training-provenance caveat.
- [x] README distinguishes the standard `figures/` directory from manuscript assets in `research_figures/`.
- [ ] Choose and add an explicit repository licence if the code/checkpoint are intended for reuse. No licence file is currently present; do not assume the source dataset's CC BY 4.0 licence automatically licenses this project's code or trained weights.
- [ ] Add a `CITATION.cff` or equivalent citation metadata after confirming the preferred citation and author metadata.
- [ ] Decide whether automated tests/continuous integration are needed; no GitHub Actions workflow was found in the current repository tree.
- [ ] Confirm that every redistributed dataset-derived file and model artifact complies with the source dataset and software terms.

## D. Final document and submission materials

- [ ] Apply the verified manuscript text to the final DOCX and check pagination, tables, equations, references, figure placement, and author details.
- [ ] Export a PDF from the final DOCX and inspect all pages.
- [ ] Confirm both authors have reviewed and approved the exact final manuscript version before sending it.
- [ ] Insert the preferred contact email and identify a suitable Oxford academic recipient or research group in the covering letter.
- [ ] Confirm the final attachments: manuscript DOCX, manuscript PDF, six publication figures as separate files if requested, covering letter, and repository link.
- [ ] Keep the reference-verification record and this checklist in the archive; they are internal preparation records and need not be sent unless requested.

## E. Scope of the current package

This repository folder contains the covering-letter draft, reference-verification record, this checklist, and a package index. It is a **pre-DOCX academic enquiry package**, not a completed journal submission. It does not imply Oxford University has agreed to review or publish the work. No journal has been selected, so journal-specific formatting, declarations, and submission portal requirements remain unassessed.
