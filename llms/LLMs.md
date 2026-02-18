# Large Language Models (LLMs)

## 1. Overview

Large Language Models (LLMs) are AI models designed to understand and generate human language. They are built using transformer architectures and trained on massive datasets.

## 2. Key Concepts

- **Tokenization**: Breaking text into smaller units (tokens).
- **Attention Mechanism**: Allowing the model to focus on different parts of the input sequence.
- **Pre-training & Fine-tuning**:
    - *Pre-training*: Learning general language patterns.
    - *Fine-tuning*: Adapting to specific tasks (e.g., chat, coding).

## 3. Popular Models

- **GPT-4 (OpenAI)**: Proprietary, multimodal.
- **Llama 3 (Meta)**: Open weights, highly efficient.
- **Claude 3 (Anthropic)**: Strong reasoning and large context window.
- **Gemini (Google)**: Multimodal, integrated with Google ecosystem.

## 4. Prompt Engineering

Techniques to guide LLM outputs:
- **Zero-shot**: Asking without examples.
- **Few-shot**: Providing a few examples of desired output.
- **Chain-of-Thought**: Encouraging the model to explain its reasoning.

## 5. Coding with LLMs (LangChain Example)

```python
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate

llm = OpenAI(temperature=0.9)
prompt = PromptTemplate(
    input_variables=["product"],
    template="What is a good name for a company that makes {product}?",
)

print(llm(prompt.format(product="colorful socks")))
```
