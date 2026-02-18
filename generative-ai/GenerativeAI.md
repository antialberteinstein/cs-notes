# Generative AI Notes

## 1. Introduction

Generative AI refers to deep learning models that can generate high-quality text, images, and other content based on the data they were trained on.

## 2. Core Technologies

- **GANs (Generative Adversarial Networks)**: Two neural networks contest with each other in a game.
- **VAEs (Variational Autoencoders)**: Probabilistic generative models based on neural networks.
- **Diffusion Models**: Generate data by reversing a gradual noise addition process (e.g., Stable Diffusion).

## 3. Example: Stable Diffusion Concept

Stable Diffusion works by:
1.  **Forward Diffusion**: Adding noise to an image until it is random noise.
2.  **Reverse Diffusion**: Learning to remove noise to recover the image.
3.  **Text Conditioning**: Using CLIP to guide the denoising process based on a text prompt.

## 4. Tools and Libraries

- **Hugging Face Diffusers**: A library for state-of-the-art pretrained diffusion models.
- **Midjourney**: Proprietary generative AI service.
- **DALL-E 3**: OpenAI's image generation model.

```python
from diffusers import StableDiffusionPipeline
import torch

model_id = "runwayml/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
image = pipe(prompt).images[0]  
image.save("astronaut_rides_horse.png")
```
