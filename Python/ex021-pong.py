import turtle

# Configuração da tela
win = turtle.Screen()
win.title("Pong em Python")
win.bgcolor("black")
win.setup(width=800, height=600)
win.tracer(0)

# Placar
score_a = 0
score_b = 0

# Raquete A
raquete_a = turtle.Turtle()
raquete_a.speed(0)
raquete_a.shape("square")
raquete_a.color("white")
raquete_a.shapesize(stretch_wid=5, stretch_len=1)
raquete_a.penup()
raquete_a.goto(-350, 0)

# Raquete B
raquete_b = turtle.Turtle()
raquete_b.speed(0)
raquete_b.shape("square")
raquete_b.color("white")
raquete_b.shapesize(stretch_wid=5, stretch_len=1)
raquete_b.penup()
raquete_b.goto(350, 0)

# Bola
bola = turtle.Turtle()
bola.speed(0)
bola.shape("circle")
bola.color("white")
bola.penup()
bola.goto(0, 0)
bola.dx = 0.25
bola.dy = 0.25

# Texto de placar
placar = turtle.Turtle()
placar.speed(0)
placar.color("white")
placar.penup()
placar.hideturtle()
placar.goto(0, 260)
placar.write("Jogador A: 0  Jogador B: 0", align="center", font=("Courier", 24, "normal"))

# Funções
def raquete_a_cima():
    y = raquete_a.ycor()
    if y < 250:
        raquete_a.sety(y + 20)

def raquete_a_baixo():
    y = raquete_a.ycor()
    if y > -240:
        raquete_a.sety(y - 20)

def raquete_b_cima():
    y = raquete_b.ycor()
    if y < 250:
        raquete_b.sety(y + 20)

def raquete_b_baixo():
    y = raquete_b.ycor()
    if y > -240:
        raquete_b.sety(y - 20)

# Teclas
win.listen()
win.onkeypress(raquete_a_cima, "w")
win.onkeypress(raquete_a_baixo, "s")
win.onkeypress(raquete_b_cima, "Up")
win.onkeypress(raquete_b_baixo, "Down")

# Loop principal
while True:
    win.update()

    # Movimento da bola
    bola.setx(bola.xcor() + bola.dx)
    bola.sety(bola.ycor() + bola.dy)

    # Colisão com a parede
    if bola.ycor() > 290:
        bola.sety(290)
        bola.dy *= -1

    if bola.ycor() < -290:
        bola.sety(-290)
        bola.dy *= -1

    # Pontuação
    if bola.xcor() > 390:
        bola.goto(0, 0)
        bola.dx *= -1
        score_a += 1
        placar.clear()
        placar.write(f"Jogador A: {score_a}  Jogador B: {score_b}", align="center", font=("Courier", 24, "normal"))

    if bola.xcor() < -390:
        bola.goto(0, 0)
        bola.dx *= -1
        score_b += 1
        placar.clear()
        placar.write(f"Jogador A: {score_a}  Jogador B: {score_b}", align="center", font=("Courier", 24, "normal"))

    # Colisão com raquetes
    if (340 < bola.xcor() < 350) and (raquete_b.ycor() - 50 < bola.ycor() < raquete_b.ycor() + 50):
        bola.setx(340)
        bola.dx *= -1

    if (-350 < bola.xcor() < -340) and (raquete_a.ycor() - 50 < bola.ycor() < raquete_a.ycor() + 50):
        bola.setx(-340)
        bola.dx *= -1
