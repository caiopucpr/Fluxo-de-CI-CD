Fluxo-de-CI-CD/
├── src/
│   └── main.py
├── tests/
│   └── test_example.py
└── requirements.txt

  def soma(a, b):
    return a + b

from src.main import soma

def test_soma():
    assert soma(2, 3) == 5
