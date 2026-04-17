# Imagem base oficial do Python
FROM python:3.11-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências primeiro (melhor para cache)
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o resto do código fonte
COPY src/ ./src/
COPY tests/ ./tests/

# Expõe a porta (se sua aplicação for uma API/Web)
# EXPOSE 8000

# Comando para executar quando o container iniciar
CMD ["python", "-c", "from src.main import soma, subtracao, multiplicacao, divisao; print('✅ Aplicação carregada com sucesso!'); print(f'Teste: 10 + 5 = {soma(10, 5)}')"]
