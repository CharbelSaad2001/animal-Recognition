import numpy as np
import tensorflow as tf
from PIL import Image
from io import BytesIO
from fastapi.responses import JSONResponse
from dictionary import get_animal_info


def preprocess_image(image_data):
    image = Image.open(BytesIO(image_data)).convert('RGB')
    image = image.resize((180, 180))  # Resize to match model input
    image_array = np.array(image) / 255.0  # Normalize the image
    return np.expand_dims(image_array, axis=0)

#TODO: No se si las predicciones empiezane en 0 o en 1
CLASSES = {
    0: "armadillo_gigante",
    1: "capibara",
    2: "coati_de_nariz_blanca",
    3: "jaguar",
    4: "mono_ardilla",
    5: "ocelote",
    6: "oso_hormiguero gigante",
    7: "pecari_de_labios_blancos",
    8: "puma",
    9: "tamandua",
    10: "tapir_amazonico",
}

classes2 = {
    0: "armadillo_gigante",
    1: "capibara",
    2: "jaguar",
    3: "tapir_amazonico",
}

async def classify_image(img_file):
    print("Classifying image...", img_file)

    model = tf.keras.models.load_model("animal_classifier_modelv3.h5")
    
    image_data = await img_file.read()
    processed_image = preprocess_image(image_data)
    
    predictions = model.predict(processed_image)
    
    predicted_classes = np.argmax(predictions, axis=1)

    predicted_class_names = [classes2[i] for i in predicted_classes]

    # Print results
    for i, class_name in enumerate(predicted_class_names):
        print(f"Image {i}: Predicted class: {class_name}, Probabilities: {predictions[i]}")
        
    return JSONResponse(content={"animal": get_animal_info(predicted_class_names[0]), "prediction": predicted_class_names[0], "confidence": round(float(np.max(predictions[0]* 100)), 2)})
     
    #prediction = model.predict(processed_image)[0]
    
    #score = (-prediction).argsort()[:5]
    
    #predicted_class_name = CLASSES[np.argmax(score)]
    
    #print("Prediction:", predicted_class_name, score)

    #return JSONResponse(content={"animal": get_animal_info(predicted_class_name), "prediction": predicted_class_name, "confidence": float(np.max(score))})