# Computer Vision Notes

## 1. Introduction to Computer Vision

Computer Vision (CV) is a field of artificial intelligence that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs.

### Key Concepts
- **Image Processing**: Manipulation of digital images through algorithms.
- **Object Detection**: Identifying and locating objects in an image.
- **Image Segmetation**: Partitioning an image into multiple segments (sets of pixels).

## 2. Basic Image Operations with Python (OpenCV)

```python
import cv2
import matplotlib.pyplot as plt

# Load an image
img = cv2.imread('image.jpg')

# Convert to RGB (OpenCV uses BGR by default)
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Display
plt.imshow(img_rgb)
plt.show()
```

## 3. Deep Learning for CV

Modern CV relies heavily on Convolutional Neural Networks (CNNs).

### Common Architectures
- **ResNet**: Introduces residual learning to train deeper networks.
- **YOLO (You Only Look Once)**: Real-time object detection.
- **U-Net**: Biomedical image segmentation.

## 4. Practical Example: Face Detection

```python
import cv2

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
img = cv2.imread('face.jpg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

faces = face_cascade.detectMultiScale(gray, 1.1, 4)

for (x, y, w, h) in faces:
    cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)

cv2.imshow('img', img)
cv2.waitKey()
```
