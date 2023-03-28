import random

palavras = ['abacaxi', 'banana', 'melancia', 'morango', 'laranja']
palavra = random.choice(palavras)
vidas = 6
letras_certas = []
letras_erradas = []

while True:
    for letra in palavra:
        if letra in letras_certas:
            print(letra, end=' ')
        else:
            print('_', end=' ')
    print('\n')

    if set(letras_certas) == set(palavra):
        print('Você venceu!')
        break

    if vidas == 0:
        print(f'Você perdeu! A palavra era {palavra}.')
        break

    letra_digitada = input('Digite uma letra: ')
    if letra_digitada in letras_certas or letra_digitada in letras_erradas:
        print('Você já digitou essa letra. Tente outra.')
    elif letra_digitada in palavra:
        letras_certas.append(letra_digitada)
    else:
        letras_erradas.append(letra_digitada)
        vidas -= 1
        print(f'Você errou! Restam {vidas} vidas.')
