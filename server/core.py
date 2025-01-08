import numpy as np

img = np.random.randn(3, 1280, 1280)

# Detection
# detection_model = pw_detection.MegaDetectorV5() # Model weights are automatically downloaded.
# detection_result = detection_model.single_image_detection(img)

#Classification
# classification_model = pw_classification.AI4GAmazonRainforest() # Model weights are automatically downloaded.
# classification_results = classification_model.single_image_classification(img)

def classify_image(img_array):
    # PytorchWildlife.models.classification.AI4GAmazonRainforest().single_image_classification(img_array)
    print("Hello World", img)
    print("Classifying image...", img_array)

    return {
        "result": "Hello World",
    }
