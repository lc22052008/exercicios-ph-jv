numeros = [3, 1, 5]
numeros.sort()
n = len(numeros)

if n % 2 == 1:
    mediana = numeros[n // 2]
else:
    mediana = (numeros[n // 2 - 1] + numeros[n // 2]) / 2

print("Mediana:", mediana)
