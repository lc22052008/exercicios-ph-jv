def calcular_situacao_aluno():
    notas = []
    """
    Função para calcular a situação do aluno com base em três notas fornecidas.
    Aprovado: média >= 60
    Recuperação: 50 <= média < 60
    Reprovado: média < 50
    """
    notas = []
    for i in range(3):
        while True:
            try:
                nota = float(input(f"Digite a nota {i + 1}: "))
                if 0 <= nota <= 100:
                    notas.append(nota)
                    break
                else:
                    print("Nota inválida. Digite uma nota entre 0 e 100.")
            except ValueError:
                print("Entrada inválida. Digite um número.")

    media = sum(notas) / len(notas)

    if media >= 60:
        return "Aprovado"
    elif 50 <= media < 60:
        return "Recuperação"
    else:
        return "Reprovado"

# Chamada da função e exibição do resultado
situacao = calcular_situacao_aluno()
print(f"O aluno está {situacao}.")