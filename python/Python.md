# Python for Computer Science

## 1. Why Python?

Python is the dominant language in Data Science, AI, and backend development due to its simplicity and vast ecosystem.

## 2. Advanced Python Concepts

### List Comprehensions
Concise way to create lists.
```python
squares = [x**2 for x in range(10)]
```

### Decorators
Modifying functions or methods.
```python
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_whee():
    print("Whee!")
```

### Generators
Iterators that yield results one by one.
```python
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1
```

## 3. Essential Libraries

- **NumPy**: Numerical computing.
- **Pandas**: Data manipulation and analysis.
- **Matplotlib / Seaborn**: Data visualization.
- **Scikit-learn**: Machine learning algorithms.
- **PyTorch / TensorFlow**: Deep learning frameworks.

## 4. Type Hinting (Modern Python)

```python
def greeting(name: str) -> str:
    return 'Hello ' + name
```
