s = str(input("Digite   M ou F: \n")).strip().upper()[0] # s é VARIAVEL, str - string, a variavel recebe um valor, M ou F
# \n - pula linha, strip() - corta espaço, upper()
# - coloca em maiusculo, [0] - primeira letra da palavra.

while s not in "NnFf": #while é enqunto, s é variavel.
    # \\ o codigo diz, enquanto s nao for "n ou f:".

    s = str(input("Caro asno, digite M ou F: \n")).strip().upper()[0] # s e str ja foi explicado na primeira linha, \n explicado na segunda linha
    # O SIMBOLO [ É CHAMADO DE COLCHETE ESQUERDO

print("Sexo do féla é {} ".format(s)) #print é mostrar na tela, o .format(s) é trazer o resultado digitado pelo usuario

print(f"sexo do(a) féla é {s}.") #print foi ensinado na linha a cima, o f"" é o format explicado a cima. a diferença entre os dois códigos é que o format vem resumido em F.
# O SIMBOLO { É CHAMADO DE CHAVE ESQUERDA
