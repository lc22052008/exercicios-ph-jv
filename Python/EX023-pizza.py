import math
print("Vamos calcular nossos vendas!")
quantidade_pizzas_vendas = int(input("Quantas pizzas já vendidas?"))
valor_venda_pizza = float(input("Qual valor de Venda de cada Pizza:R$"))
custo_pizza = float(input("Qual o custo da produção R$"))
liquido = valor_venda_pizza /custo_pizza
print(F"O valor do lucro é de: R$ {liquido:.2F}")
meta_financeira_liquida = float(input("qual a meta de lucro desejada?"))
if liquido<=0:
    print("\n erro:Valor preço errado")
    print("Ajuste os valores novamente")
else:
    lucro_acumulado = quantidade_pizzas_vendas*liquido
    lucro_faltante = meta_financeira_liquida-lucro_acumulado
    print("\n em resumo teremos:")
if lucro_faltante <= 0:
    print(f"Meta antiga, Parabéns! Chegamos a R$ {meta_financeira_liquida:.2f}")
else:
    pizza_para_vender = lucro_faltante/liquido
    pizza_necessarias = math.ceil(pizza_para_vender)
print(F" Para, meta falta R$ {meta_financeira_liquida:.2F}")
print(F" você precisa vender R$ {pizza_necessarias:}pizzas")
print(F" o lucro liquido é R$ {lucro_acumulado:.2F}")
print(F" lucro liquido faltante é R$ {lucro_faltante:.2F}")



