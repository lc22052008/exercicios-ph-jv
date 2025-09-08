print("*********************************")
print("Bem-vindo ao jogo de Adivinhação!")
print("*********************************")

numero_secreto = 40

chute = int(input("Digite seu número: "))
print("Você digitou ", chute)

if(numero_secreto == chute):
    print("Você acertou ")

else:
    if (chute > numero_secreto):
        print("Você errou! O seu chute foi MAIOR que o número secreto.")


    else:
        print("Você errou! O seu chute foi MENOR que o número secreto.")


print("Fim do Jogo")