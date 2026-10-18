import argparse
from pathlib import Path
from ultralytics import YOLO

def main():
    parser = argparse.ArgumentParser(
        description="Helminth egg detection using YOLO11n"
    )
    parser.add_argument("--source", required=True,
                        help="Path to an image or image folder")
    parser.add_argument("--weights", default="models/best.pt")
    parser.add_argument("--imgsz", type=int, default=320)
    parser.add_argument("--conf", type=float, default=0.25)
    parser.add_argument("--output", default="predictions")
    args = parser.parse_args()

    if not Path(args.weights).exists():
        raise FileNotFoundError(
            f"Model weights not found: {args.weights}"
        )
    if not Path(args.source).exists():
        raise FileNotFoundError(
            f"Image or folder not found: {args.source}"
        )

    model = YOLO(args.weights)
    model.predict(
        source=args.source,
        imgsz=args.imgsz,
        conf=args.conf,
        save=True,
        project=args.output,
        name="helminth_results",
        exist_ok=True
    )

    print("Prediction finished.")
    print(f"Results folder: {args.output}/helminth_results")

if __name__ == "__main__":
    main()
