import tensorflow as tf
import numpy as np
from PIL import Image
import requests
from io import BytesIO

# Load the pre-trained MobileNetV2 model
model = tf.keras.applications.MobileNetV2(weights='imagenet')

# Function to perform vegetable recognition
def perform_vegetable_recognition(image_url):
    # Download the image using the URL
    response = requests.get(image_url)
    image = Image.open(BytesIO(response.content))
    image = image.convert('RGB')

    # Preprocess the image
    resized_image = image.resize((224, 224))
    img_array = np.array(resized_image)
    img_array = np.expand_dims(img_array, axis=0)
    processed_image = tf.keras.applications.mobilenet_v2.preprocess_input(img_array)

    # Perform inference
    predictions = model.predict(processed_image)
    decoded_predictions = tf.keras.applications.mobilenet_v2.decodepredictions(predictions, top=3)[0]

    # Display the top predictions
    for , class_name, probability in decoded_predictions:
        print(f"{class_name}: {probability*100:.2f}%")

# Example usage
image_url = "https://cdn.weweb.io/designs/caaa120f-80a7-4012-89bf-5049ccfa6b8b/sections/onions.png?_wwcv=1683993690865"
perform_vegetable_recognition(image_url)
