**YOLO11n-Based Detection of Four Helminth Egg Categories in Faecal-Smear Microscopy Images**

**Rayyan Anwar, Riza Tasleem**

**Author educational qualifications**

- **Rayyan Anwar:** B.Tech in Computer Science and M.Tech in Artificial Intelligence and Machine Learning, Mahatma Gandhi University, Kerala, India; MBA in Management, European University, Germany.
- **Riza Tasleem:** M.Sc. Zoology candidate (final year).

*Current institutional/departmental affiliations and Riza Tasleem’s university should be added by the authors if required by the target journal.*

*[Author affiliations to be confirmed and inserted]*

**Abstract**

**Background:** Helminth egg identification in faecal microscopy is an important component of parasitological examination. However, manual microscopic screening can be time-consuming and may be affected by observer variability. Deep learning-based object detection offers a potential approach for assisting the identification and localization of helminth eggs in microscopy images.

**Objective:** This study investigated the application of a lightweight YOLO11n object detection model for detecting and classifying four helminth egg categories: *Ascaris lumbricoides*, Hookworm, *Schistosoma mansoni*, and *Trichuris trichiura*.

**Methods:** A subset of 400 image–annotation pairs was selected from the publicly available Soil-transmitted Helminths and *Schistosoma mansoni* Eggs Image Dataset. The data were divided into training (280 images), validation (60 images), and testing (60 images) subsets using a fixed random seed. A pretrained YOLO11n model was trained for 15 epochs with an image size of 320 × 320 pixels and a batch size of 4. Final evaluation was performed on the held-out test subset using a confidence threshold of 0.001 and an NMS IoU threshold of 0.45.

**Results:** On the test subset comprising 60 images and 147 annotated instances, the model achieved a precision of 77.56%, recall of 63.89%, mean average precision at IoU 0.50 (mAP@50) of 73.48%, and mean average precision across IoU thresholds 0.50–0.95 (mAP@50–95) of 55.84%. Class-wise results showed variation in detection performance, with *Ascaris* achieving the highest AP@50 (95.39%), while Hookworm showed comparatively lower performance (55.06%).

**Conclusion:** The findings demonstrate the feasibility of applying a lightweight YOLO11n model to helminth egg detection in the selected microscopy image dataset. However, the limited dataset size, variation in class-wise performance, and absence of independent external validation mean that further evaluation is required before any diagnostic application can be considered.

**Keywords:** helminth eggs; faecal-smear microscopy; YOLO11n; object detection; deep learning; parasitology

**1. Introduction**

Soil-transmitted helminth (STH) infections and schistosomiasis remain important public health concerns, particularly in regions where access to timely and reliable diagnostic services is limited \[1\]. The identification of parasite eggs in stool samples is an established component of laboratory diagnosis and epidemiological surveillance. Microscopic examination enables the recognition of morphologically distinct eggs, including those of Ascaris lumbricoides, hookworms, Trichuris trichiura, and Schistosoma mansoni. However, routine microscopic screening requires trained personnel and can be time-consuming, especially when large numbers of samples must be examined. Differences in image quality, egg morphology, background debris, and observer experience may further complicate consistent identification \[2,4\].

Recent developments in computer vision and deep learning have created opportunities to support the automated analysis of microscopy images. Convolutional neural networks can learn visual representations from image data, while object-detection architectures can simultaneously localise and classify multiple objects within an image. This capability is relevant to parasitological microscopy, where an image may contain multiple eggs, overlapping structures, and visually complex background material. Previous studies have demonstrated the feasibility of applying deep-learning-based object detection to parasite egg recognition. For example, Ward et al. \[2\] reported an artificial intelligence-based digital pathology approach for detecting soil-transmitted helminth and S. mansoni eggs in Kato-Katz stool smears. Cure-Bolt et al. \[3\] also investigated artificial intelligence-based digital pathology for soil-transmitted helminth egg detection. Oyibo et al. \[4\] subsequently presented a deep-learning framework for multiclass detection using faecal-smear images. The associated image dataset used in the present study was deposited separately in Zenodo \[5\].

The You Only Look Once (YOLO) family of object-detection models is designed to perform object localisation and classification within a single inference framework. Its relatively efficient architecture has made it suitable for applications where computational resources and inference time are important considerations. Recent work has also investigated YOLO-based architectures for detecting soil-transmitted helminths and schistosomiasis in microscopy images \[6\]. Nevertheless, model performance can vary with dataset composition, annotation quality, image resolution, training configuration, and evaluation protocol. Consequently, results obtained from different datasets or experimental settings should not be interpreted as directly equivalent.

In this study, a lightweight YOLO11n model was evaluated for the detection of four helminth egg categories in publicly available faecal-smear microscopy images: *Ascaris lumbricoides* (ASC), hookworm (HKW), *Schistosoma mansoni* (SCH), and *Trichuris trichiura* (TRI). A selected subset of 400 image–annotation pairs was used, comprising 280 training images, 60 validation images, and 60 test images. The experimental objective was to establish a reproducible baseline assessment of YOLO11n under a defined training and evaluation configuration, with particular attention to overall and class-wise detection performance.

The study does not aim to establish a clinically validated diagnostic system. Rather, it examines the feasibility and limitations of a lightweight object-detection approach on a selected subset of an existing microscopy dataset. The findings are intended to provide a transparent baseline for further work involving larger and more diverse datasets, stronger validation procedures, and independent evaluation under practical laboratory conditions.

**2. Materials and Methods**

**2.1. Dataset**

The study used the publicly available Soil-transmitted Helminths and *Schistosoma mansoni* Eggs Image Dataset, deposited in Zenodo (Record ID: 13843815; DOI: 10.5281/zenodo.13843815). The dataset contains faecal-smear microscopy images annotated for the detection of helminth eggs. A selected subset of 400 image–annotation pairs was used in the present experiment.

Four target categories were considered: *Ascaris lumbricoides* (ASC), hookworm (HKW), *Schistosoma mansoni* (SCH), and *Trichuris trichiura* (TRI). The original class labels were retained in abbreviated form for model training and evaluation.

**2.2. Dataset Partitioning**

The 400 selected image–annotation pairs were divided into three subsets: 280 images for training, 60 images for validation, and 60 images for testing. This corresponds to a partition of 70%, 15%, and 15%, respectively. A fixed random seed of 42 was used during the partitioning procedure to support reproducibility.

**Table 1. Dataset distribution and partitioning**

| **Dataset subset** | **Number of image–annotation pairs** | **Percentage** |
|--------------------|--------------------------------------|----------------|
| Training           | 280                                  | 70%            |
| Validation         | 60                                   | 15%            |
| Testing            | 60                                   | 15%            |
| **Total**          | **400**                              | **100%**       |

The dataset was partitioned using a fixed random seed of 42.

The training subset was used to optimise model parameters, while the validation subset was used to monitor model performance during training. The test subset was reserved for the final documented evaluation. However, because exploratory test evaluations were also performed under different settings during the project, the possibility of test-set reuse influencing experimental decisions is acknowledged as a limitation.

**2.3. Object-Detection Model**

The YOLO11n (You Only Look Once, version 11 nano) architecture was selected as the lightweight object-detection model. The pretrained model was adapted to detect the four target helminth egg categories. The nano configuration was selected to examine the feasibility of using a comparatively compact detection architecture for microscopy-image analysis.

**2.4. Model Training**

Model training was performed using the Ultralytics implementation of YOLO11n \[7\]. The documented training configuration used 15 epochs, an input image size of 320 × 320 pixels, and a batch size of 4. Training was conducted using CPU execution. A fixed seed of 42 and deterministic settings were specified to support reproducibility.

The training configuration specified automatic optimizer selection. However, the saved checkpoint metadata records AdamW and a learning-rate value of 0.00125, whereas the training configuration file records an initial learning-rate value of 0.01. The effective optimizer and learning-rate configuration could not be independently established from the available records; therefore, these values are not treated as conclusively verified training parameters.

The best validation checkpoint corresponded to epoch 13. The checkpoint was retained for the documented evaluation rather than selecting a model on the basis of test-set performance.

**Table 2. YOLO11n baseline training configuration**

| **Parameter**                            | **Configuration** |
|------------------------------------------|-------------------|
| Model                                    | YOLO11n           |
| Initial weights                          | Pretrained        |
| Number of epochs                         | 15                |
| Image size                               | 320 × 320 pixels  |
| Batch size                               | 4                 |
| Training device                          | CPU               |
| Random seed                              | 42                |
| Deterministic setting                    | Enabled           |
| Optimizer configuration in training YAML | Auto              |
| Learning-rate value in training YAML     | 0.01              |

Note: The checkpoint metadata records AdamW and a learning rate of 0.00125, whereas the training YAML records automatic optimizer selection and an initial learning rate of 0.01. The effective settings remain unverified.

**2.5. Model Evaluation**

The retained model was evaluated on the 60-image test subset containing 147 annotated object instances. The documented evaluation used an image size of 320 pixels, a confidence threshold of 0.001, and a non-maximum suppression (NMS) intersection-over-union (IoU) threshold of 0.45. The evaluation was performed using Ultralytics version 8.4.181.

Detection performance was assessed using precision, recall, mean average precision at an IoU threshold of 0.50 (mAP@0.50), and mean average precision across IoU thresholds from 0.50 to 0.95 (mAP@0.50:0.95). Class-wise average precision was also examined to assess differences in detection performance among the four categories.

The confidence threshold of 0.001 was used for the documented evaluation protocol and should not be interpreted as a recommended operational threshold for laboratory diagnosis.

**2.6. Error Analysis**

A separate error-analysis output was generated to examine true-positive (TP), false-positive (FP), and false-negative (FN) detections. The corrected error-analysis record reports 107 true-positive detections, 37 false-positive detections, and 40 false-negative detections across the 60 test images. This analysis used a confidence threshold of 0.25, an NMS IoU threshold of 0.70, and a ground-truth matching IoU threshold of 0.50.

Because these settings differ from those used for the principal test evaluation, the error-analysis counts are reported separately and are not combined with the principal evaluation metrics.

**2.7. Reproducibility and Scope**

The dataset partition, model configuration, evaluation settings, and relevant output files were retained in the project repository to support transparency and reproducibility. The reported experiment represents a baseline evaluation on a selected subset of a publicly available microscopy dataset.

The study does not include independent clinical validation, prospective laboratory testing, or verification of the biological correctness of every original annotation. Independence of images at the patient or slide level across the training, validation, and test partitions was also not established. These considerations are important when interpreting the results and assessing the generalisability of the model.

**3. Results**

**3.1. Overall Model Performance**

The YOLO11n model was evaluated on the held-out test subset consisting of 60 microscopy images and 147 annotated object instances. Under the documented evaluation configuration (image size: 320 × 320 pixels, confidence threshold: 0.001, and NMS IoU threshold: 0.45), the model achieved a precision of 0.7756 and a recall of 0.6389. The overall mAP@0.50 was 0.7348, while mAP@0.50:0.95 was 0.5584.

These results indicate that the model detected a proportion of the annotated helminth egg instances, although its recall and stricter-IoU average precision indicate that missed detections and localisation errors remained. The difference between mAP@0.50 and mAP@0.50:0.95 also suggests that detection performance was less consistent under more stringent localisation criteria.

Table 3. Overall YOLO11n performance on the test subset.

| **Evaluation metric** | **Value** |
|-----------------------|-----------|
| Test images           | 60        |
| Annotated instances   | 147       |
| Precision             | 0.7756    |
| Recall                | 0.6389    |
| mAP@0.50              | 0.7348    |
| mAP@0.50:0.95         | 0.5584    |

**3.2. Class-wise Detection Performance**

Class-wise evaluation revealed differences in average precision among the four helminth categories. *Ascaris lumbricoides* achieved the highest AP@0.50 (0.9539) and AP@0.50:0.95 (0.7673). *Trichuris trichiura* showed the second-highest performance, with AP@0.50 of 0.8078 and AP@0.50:0.95 of 0.6021.

The model showed comparatively lower performance for *Schistosoma mansoni* and hookworm. Hookworm recorded the lowest AP@0.50 (0.5506), whereas *S. mansoni* recorded the lowest AP@0.50:0.95 (0.4002). These differences demonstrate that detection performance was not uniform across the four target categories.

Table 4. Class-wise average precision on the test subset.

| **Class**              | **AP@0.50** | **AP@0.50:0.95** |
|------------------------|-------------|------------------|
| *Ascaris lumbricoides* | 0.9539      | 0.7673           |
| Hookworm               | 0.5506      | 0.4638           |
| *Schistosoma mansoni*  | 0.6268      | 0.4002           |
| *Trichuris trichiura*  | 0.8078      | 0.6021           |

**3.3. Validation Performance**

During training, the best validation checkpoint was obtained at epoch 13. At this epoch, the recorded validation precision was 0.8737, recall was 0.7774, mAP@0.50 was 0.8750, and mAP@0.50:0.95 was 0.6842.

At the final training epoch (epoch 15), the recorded validation precision was 0.8799, recall was 0.7683, mAP@0.50 was 0.8707, and mAP@0.50:0.95 was 0.6884. The epoch-13 checkpoint was retained as the best validation checkpoint for the documented evaluation.

Table 5. Recorded validation performance at selected training epochs.

| **Metric**    | **Epoch 13 (best checkpoint)** | **Epoch 15** |
|---------------|--------------------------------|--------------|
| Precision     | 0.8737                         | 0.8799       |
| Recall        | 0.7774                         | 0.7683       |
| mAP@0.50      | 0.8750                         | 0.8707       |
| mAP@0.50:0.95 | 0.6842                         | 0.6884       |

**3.4. Error Analysis**

The corrected error-analysis record reported 107 true-positive detections, 37 false-positive detections, and 40 false-negative detections across the 60 test images. This analysis was performed using a confidence threshold of 0.25, an NMS IoU threshold of 0.70, and a ground-truth matching IoU threshold of 0.50.

The presence of false-positive and false-negative detections indicates that the model continued to produce both incorrect detections and missed objects. These error counts are reported separately from the principal evaluation metrics because the error-analysis configuration used different confidence and NMS settings.

Table 6. Detection counts from the separate corrected error analysis.

| **Error-analysis measure** | **Count** |
|----------------------------|-----------|
| True positives (TP)        | 107       |
| False positives (FP)       | 37        |
| False negatives (FN)       | 40        |
| Images analysed            | 60        |

**3.5. Summary of Findings**

The results demonstrate that the lightweight YOLO11n model achieved an overall mAP@0.50 of 0.7348 on the selected test subset. Class-wise performance varied substantially, with *A. lumbricoides* showing the highest average precision and hookworm showing the lowest AP@0.50. The separate error analysis also identified false-positive and false-negative detections.

Taken together, these findings support the feasibility of applying YOLO11n to multiclass helminth egg detection in faecal-smear microscopy images. However, the observed class-wise variation, missed detections, and limitations of the evaluation dataset indicate that further validation is required before practical diagnostic use can be considered.

**4. Discussion**

**4.1. Principal Findings**

The present study evaluated a lightweight YOLO11n object-detection model for identifying four categories of helminth eggs in faecal-smear microscopy images. On the selected test subset, the model achieved an mAP@0.50 of 0.7348 and an mAP@0.50:0.95 of 0.5584, with precision and recall values of 0.7756 and 0.6389, respectively. These findings indicate that YOLO11n can detect multiple helminth egg categories in microscopy images under the experimental conditions used in this study.

However, the difference between the two mAP measures indicates that performance decreased when stricter localisation criteria were applied. This suggests that, in addition to identifying target objects, accurately localising their boundaries remains a challenge. The recall value also indicates that a proportion of annotated objects were not detected under the documented evaluation protocol.

**4.2. Variation in Class-wise Performance**

The model demonstrated considerable variation in detection performance across the four classes. *Ascaris lumbricoides* achieved the highest AP@0.50 (0.9539) and AP@0.50:0.95 (0.7673), indicating comparatively stronger detection and localisation performance for this category. *Trichuris trichiura* also showed relatively strong performance, with an AP@0.50 of 0.8078.

In contrast, hookworm recorded the lowest AP@0.50 (0.5506), while *Schistosoma mansoni* showed the lowest AP@0.50:0.95 (0.4002). Such differences may be associated with variations in egg morphology, visual appearance, image quality, object scale, background complexity, and the representation of each category in the selected dataset. However, the current experiment does not establish which of these factors was responsible for the observed differences.

The lower performance for hookworm and *S. mansoni* highlights the importance of evaluating object-detection models separately for each parasite category rather than relying exclusively on overall performance measures.

**4.3. Implications for Microscopy-based Detection**

Automated object detection may help support the examination of faecal-smear microscopy images by highlighting candidate egg regions for subsequent review. A lightweight architecture such as YOLO11n may be worth investigating in settings where computational efficiency is important.

Nevertheless, the present results should be interpreted as a technical feasibility assessment rather than evidence of clinical diagnostic effectiveness. The model produced false-positive and false-negative detections in the separate error analysis. In a laboratory setting, false-positive detections could increase the need for manual verification, while false-negative detections could result in potentially important objects being overlooked. Therefore, any future workflow should retain qualified human review and should not rely solely on automated predictions.

**4.4. Relationship to Previous Research**

Previous research has explored deep-learning-based detection of soil-transmitted helminth and Schistosoma mansoni eggs in microscopy images. Ward et al. \[2\] investigated artificial intelligence-assisted digital pathology for parasite egg detection, while Oyibo et al. \[4\] reported a multiclass deep-learning framework using faecal-smear microscopy images.

The present work addresses the same broad research problem using a lightweight YOLO11n configuration and a selected subset of 400 image–annotation pairs. Because the datasets, model configurations, data partitions, and evaluation protocols may differ between studies, direct numerical comparisons should be made only after checking methodological equivalence. Accordingly, the current results are presented as a baseline evaluation and not as evidence that YOLO11n outperforms previously published approaches.

**4.5. Study Limitations**

Several limitations should be considered when interpreting the findings.

First, the experiment used a selected subset of 400 image–annotation pairs from a publicly available dataset. This relatively limited sample may not represent the full range of parasite morphology, microscopy conditions, specimen quality, and laboratory settings encountered in routine practice.

Second, independence at the patient or slide level across the training, validation, and test subsets was not established. If images from the same specimen or slide are distributed across different subsets, the evaluation may not fully represent performance on independent specimens.

Third, the biological correctness of all original annotations was not independently verified. The model's measured performance therefore depends partly on the quality and consistency of the available reference annotations.

Fourth, exploratory test evaluations were performed under different settings during the project. Although the final documented evaluation protocol is reported separately, repeated test-set use may affect the independence of the final performance estimate and should be considered when interpreting the findings.

Fifth, the training records contain a discrepancy between the optimizer and learning-rate information in the configuration file and the saved checkpoint metadata. The effective training configuration could not be independently confirmed from the available records.

Finally, the study did not include external validation using independently collected microscopy images, prospective laboratory testing, or assessment by multiple expert microscopists. Consequently, the model's generalisability and clinical utility remain undetermined.

**4.6. Future Directions**

Future work should evaluate the model using larger and more diverse microscopy datasets, with partitioning performed at the patient or slide level wherever the required metadata are available. Independent external validation would help determine whether the observed performance generalises to images collected under different laboratory conditions.

Additional work should investigate the reasons for lower performance in the hookworm and *S. mansoni* categories. This could include examining class representation, object size, image quality, annotation consistency, and category-specific detection errors. Comparisons with other lightweight object-detection architectures should also be conducted under identical data partitions and evaluation protocols.

Further improvements in reproducibility would require complete retention of training logs, effective optimizer settings, software versions, random seeds, model checkpoints, and evaluation scripts. Ultimately, prospective studies involving independent specimens and expert-reviewed reference annotations would be necessary before considering the approach for diagnostic support.

**4.7. Overall Interpretation**

The findings demonstrate the feasibility of using YOLO11n for multiclass helminth egg detection in a selected set of faecal-smear microscopy images. Although the model achieved measurable detection performance, substantial class-wise variation and remaining detection errors indicate that further development and independent validation are required. The study therefore provides a baseline for subsequent research rather than a clinically validated diagnostic solution.

**5. Conclusion**

This study evaluated the application of a lightweight YOLO11n object-detection model for the identification of four helminth egg categories in faecal-smear microscopy images: *Ascaris lumbricoides*, hookworm, *Schistosoma mansoni*, and *Trichuris trichiura*. Using a selected subset of 400 image–annotation pairs, the model achieved an overall test mAP@0.50 of 0.7348 and mAP@0.50:0.95 of 0.5584.

The results demonstrated variation in detection performance across parasite categories. *Ascaris lumbricoides* showed the highest class-wise average precision, whereas hookworm and *S. mansoni* presented comparatively greater detection challenges. The findings suggest that YOLO11n has potential as a lightweight approach for automated localisation of helminth eggs in microscopy images.

However, the limited dataset size, unresolved patient- or slide-level independence, possible annotation limitations, repeated exploratory test evaluations, and absence of external clinical validation restrict the generalisability of the findings. Therefore, the model should be regarded as an experimental baseline rather than a clinically validated diagnostic system.

Future research should focus on larger and independently collected datasets, specimen-level data partitioning, expert-verified annotations, systematic comparison of detection architectures, and external laboratory validation. Such investigations will be necessary to determine whether lightweight deep-learning models can provide reliable assistance in routine parasitological microscopy.

**Author Contributions**

Riza Tasleem contributed the zoological and parasitological domain work, including biological interpretation and review of helminth egg categories and morphology. Rayyan Anwar led the computational work, including the data-extraction and preprocessing workflow, preparation of the object-detection dataset, model implementation, training, evaluation, computational analysis, and preparation of the technical components of the manuscript. Both authors should review and approve the final manuscript before submission.

**Declarations**

- **Ethics approval and consent to participate:** This study involved secondary analysis of publicly available microscopy images and associated annotations from the Zenodo Soil-transmitted Helminths and Schistosoma mansoni Eggs Image Dataset (DOI: 10.5281/zenodo.13843815). The authors did not recruit human participants, collect new specimens, or access identifiable personal information. The ethics approval and consent arrangements applicable to the original dataset are those described in its source publication and dataset documentation; the authors have not independently verified the original approval documentation. No new ethics approval or participant consent was obtained for this secondary analysis.
- **Consent for publication:** Not applicable; the present study does not report identifiable individual-level information.
- **Funding:** This research received no specific grant from any funding agency in the public, commercial, or not-for-profit sectors. The work was conducted without external financial support.
- **Competing interests:** The authors declare that they have no competing financial or non-financial interests that could have influenced the work reported in this manuscript.
- **Data availability:** The source image dataset is publicly available through Zenodo (DOI: 10.5281/zenodo.13843815). The availability of the selected image subset, annotations, trained weights, and derived files is subject to the source dataset licence and the contents of the project repository.
- **Acknowledgements:** The authors acknowledge the researchers who developed and published the Soil-transmitted Helminths and Schistosoma mansoni Eggs Image Dataset and the Zenodo repository for making the dataset accessible for secondary research. The authors’ use of the dataset does not imply endorsement of this study by the original dataset creators.

**6. References**

1.  Jourdan PM, Lamberton PHL, Fenwick A, Addiss DG. Soil-transmitted helminth infections. Lancet. 2018;391(10117):252–265. doi:10.1016/S0140-6736(17)31930-X.

2.  Ward P, Dahlberg P, Lagatie O, Larsson J, Tynong A, Vlaminck J, et al. Affordable artificial intelligence-based digital pathology for neglected tropical diseases: A proof-of-concept for the detection of soil-transmitted helminths and Schistosoma mansoni eggs in Kato-Katz stool thick smears. PLoS Negl Trop Dis. 2022;16(6):e0010500. doi:10.1371/journal.pntd.0010500.

3.  Cure-Bolt N, Perez F, Broadfield LA, Levecke B, Hu P, Oleynick J, et al. Artificial intelligence-based digital pathology for the detection and quantification of soil-transmitted helminths eggs. PLoS Negl Trop Dis. 2024;18(9):e0012492. doi:10.1371/journal.pntd.0012492.

4.  Oyibo P, Meulah B, Agbana T, van Lieshout L, Oyibo W, Vdovin G, et al. Deep learning-based automated detection and multiclass classification of soil-transmitted helminths and Schistosoma mansoni eggs in fecal smear images. Sci Rep. 2025;15:21495. doi:10.1038/s41598-025-02755-9.

5.  Oyibo P, Meulah B, Agbana T, van Lieshout L, Oyibo W, Vdovin G, et al. Soil-transmitted Helminths and Schistosoma mansoni Eggs Image Dataset \[Data set\]. Zenodo. 2025. doi:10.5281/zenodo.13843815.

6.  Adamu A, Belachew E, Calpotura K, et al. Automated detection of soil transmitted helminthes and schistosomiasis using yolo based deep learning models. Parasitol Res. 2026. doi:10.1007/s00436-026-08790-3.

7.  Jocher G, Qiu J. Ultralytics YOLO11 \[software\]. Version 11.0.0. 2024. Available from: https://github.com/ultralytics/ultralytics.

**Figure Legends**

Figure 1. Baseline validation mAP across training epochs. The plot shows mAP@0.50 and mAP@0.50:0.95 over 15 epochs; the dashed vertical line marks the best logged mAP@0.50 at epoch 13.

<img src="media/image1.png" style="width:6.15in;height:3.95357in" />

Figure 2. Baseline training and validation loss curves. The three panels show box loss, classification loss, and distribution focal loss across the training epochs.

<img src="media/image2.png" style="width:6.15in;height:1.89231in" />

Figure 3. Logged learning-rate schedule during baseline training. The plot shows the learning-rate trajectory recorded across the 15 training epochs.

<img src="media/image3.png" style="width:6.15in;height:3.95357in" />

Figure 4. SCH validation precision and recall across confidence thresholds. The plot shows the change in precision and recall for the Schistosoma mansoni (SCH) class as the confidence threshold increases.

<img src="media/image4.png" style="width:6.15in;height:3.80418in" />

Figure 5. Value-labelled class-wise detection error counts. The chart shows true-positive (TP), false-positive (FP), and false-negative (FN) counts for Ascaris (ASC), Hookworm (HKW), Schistosoma mansoni (SCH), and Trichuris (TRI); numerical values are displayed above the bars.

<img src="media/image6.png" style="width:6.15in;height:3.81127in" />

Figure 6. Distribution of matched-object prediction confidence in validation images. Boxplots compare prediction-confidence distributions for Hookworm and Schistosoma mansoni detections; this figure is a confidence-distribution analysis, not a confidence-threshold comparison.

<img src="media/image7.png" style="width:6.15in;height:3.84375in" />