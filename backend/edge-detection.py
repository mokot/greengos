import cv2
import requests
import numpy as np
from PIL import Image
from io import BytesIO  # Import BytesIO class

# Function to perform edge detection
def perform_edge_detection(image_url):
    # Download the image using the URL
    response = requests.get(image_url)
    image = Image.open(BytesIO(response.content))

    # Convert the image to grayscale
    gray_image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2GRAY)

    # Perform Canny edge detection
    edges = cv2.Canny(gray_image, threshold1=100, threshold2=200)

    # Display the edge detection result
    cv2.imshow("Edges", edges)
    cv2.waitKey(0)
    cv2.destroyAllWindows()


# Example usage
image_url = "https://cdn.weweb.io/designs/caaa120f-80a7-4012-89bf-5049ccfa6b8b/sections/Screenshot_2023-05-13_161930.png?_wwcv=1683987589493"
perform_edge_detection(image_url)
