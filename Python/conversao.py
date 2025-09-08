num = int(input("Digite um numero a ser convertido: \n"))
base = int(input('''Escolha a base da conversão:
Para Binario digite 1
Para octal digite 2
Para hexadecimal digite 3
Sua escolha: \n'''))
if base == 1:
    print("Conversão para binario")
    print(" {} Convertido para binario: {}. ".format(num, bin(num)[2:]))
elif base == 2:
    print("Conversão para octal")
    print(" {} Convertido para octal: {}. ".format(num, bin(num)[2:]))
elif base == 3:
    print("Conversão para hexadecimal")
    print(" {} Convertido para hexadecimal: {}. ".format(num, bin(num)[2:]))
else:
    print("Escolha 1,2 ou 3 por gentileza")