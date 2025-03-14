from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# Definir o diretório onde os arquivos serão salvos
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'cookies_file' not in request.files:
        return jsonify({"error": "Nenhum arquivo enviado"}), 400
    
    file = request.files['cookies_file']
    
    if file.filename == '':
        return jsonify({"error": "Nenhum arquivo selecionado"}), 400
    
    # Salvar o arquivo
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)
    
    return jsonify({"message": "Arquivo recebido e salvo com sucesso!", "file_path": file_path})

if __name__ == '__main__':
    app.run(debug=True)