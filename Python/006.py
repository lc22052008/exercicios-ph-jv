def situacao(valor1):
     if valor1 <= 1000:
        return "Viavel a compra."
     else:
        return "Inviavel a compra."

valor1 = float(input("Diga o valor: "))


resultado = situacao (valor1)
print(f"O valor da Compra é, {resultado}")
