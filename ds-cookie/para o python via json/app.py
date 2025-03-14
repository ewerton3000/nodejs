from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/receber-cookies', methods=['POST'])
def receber_cookies():
    cookies = request.json  # Recebe cookies como dicionário JSON

    print("Cookies recebidos do navegador:")
    for nome, valor in cookies.items():
        print(f"{nome} = {valor}")

    # Aqui você pode salvar os cookies ou usá-los em uma requisição
    return "Cookies recebidos com sucesso!"

if __name__ == "__main__":
    app.run(debug=True)