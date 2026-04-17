from src.main import soma, subtracao, multiplicacao, divisao
import pytest

def test_soma():
    assert soma(2, 3) == 5
    assert soma(-1, 1) == 0
    assert soma(0, 0) == 0

def test_subtracao():
    assert subtracao(5, 3) == 2
    assert subtracao(10, 7) == 3

def test_multiplicacao():
    assert multiplicacao(4, 3) == 12
    assert multiplicacao(0, 5) == 0

def test_divisao():
    assert divisao(10, 2) == 5
    assert divisao(9, 3) == 3
    
def test_divisao_por_zero():
    with pytest.raises(ValueError):
        divisao(10, 0)
