def situacao(nota1, nota2, nota3):
    media = (nota1 + nota2 + nota3) / 3

    
    if media >= 60:
        return "Aprovado"
    elif 50 <= media < 60:
        return "Recuperação"
    else:
        return "Reprovado"

nota1 = int(input("Digite a primeira nota: "))
nota2 = int(input("Digite a segundo nota: "))
nota3 = int(input("Digite a terceira nota: "))
resultado =situacao(nota1, nota2, nota3)

print(f'O aluno está {resultado}')