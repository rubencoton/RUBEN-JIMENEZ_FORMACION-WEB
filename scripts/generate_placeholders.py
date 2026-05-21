"""
Genera imagenes placeholder para el curso Revit con anotaciones de las zonas.
Cuando el profesor abra Revit, sustituimos estos PNG por capturas reales.
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

ROOT = Path(__file__).parent.parent
OUT = ROOT / "public" / "imagenes" / "revit"
OUT.mkdir(parents=True, exist_ok=True)

COLORES = {
    "rojo": "#C8102E",
    "amarillo": "#FFC72C",
    "azul": "#1565C0",
    "verde": "#2E7D32",
    "naranja": "#EF6C00",
    "morado": "#6A1B9A",
    "turquesa": "#00838F",
    "gris": "#37474F",
    "crema": "#FFF8E1",
    "carbon": "#1A1A1A",
}


def font(size: int, bold: bool = False):
    name = "arialbd.ttf" if bold else "arial.ttf"
    try:
        return ImageFont.truetype(name, size)
    except Exception:
        return ImageFont.load_default()


def interfaz_completa() -> Image.Image:
    """Maqueta de la interfaz Revit con 6 zonas numeradas."""
    W, H = 1600, 900
    img = Image.new("RGB", (W, H), COLORES["crema"])
    d = ImageDraw.Draw(img)

    # Banda titulo
    d.rectangle([(0, 0), (W, 70)], fill=COLORES["rojo"])
    d.text((30, 18), "REVIT  ·  Anatomia de la interfaz", fill="white", font=font(28, True))
    d.text((W - 540, 28), "Profesor Ruben Jimenez Gonzalez", fill="white", font=font(16))

    # 1. Barra acceso rapido
    d.rectangle([(0, 70), (W, 115)], fill="#E8EAED", outline=COLORES["rojo"], width=3)
    d.text((20, 82), "Guardar  Deshacer  Vista 3D  Sincronizar nube", fill=COLORES["carbon"], font=font(16))
    d.ellipse([(15, 75), (55, 110)], fill=COLORES["rojo"], outline="white", width=3)
    d.text((26, 78), "1", fill="white", font=font(20, True))

    # 2. Ribbon (cinta)
    d.rectangle([(0, 115), (W, 215)], fill="#F5F5F5", outline=COLORES["azul"], width=3)
    pestanas = ["Arquitectura", "Estructura", "Sistemas", "Insertar", "Anotar", "Vista", "Gestionar"]
    x = 20
    for p in pestanas:
        d.rectangle([(x, 125), (x + 110, 155)], fill="#1976D2")
        d.text((x + 8, 132), p, fill="white", font=font(13, True))
        x += 120
    d.text((20, 175), "Muro   Puerta   Ventana   Suelo   Cubierta   Pilar   Viga   Cota   Texto", fill=COLORES["carbon"], font=font(16))
    d.ellipse([(W - 60, 120), (W - 20, 160)], fill=COLORES["azul"], outline="white", width=3)
    d.text((W - 51, 124), "2", fill="white", font=font(20, True))

    # 3. Navegador (izquierda)
    d.rectangle([(0, 215), (250, H)], fill="white", outline=COLORES["verde"], width=3)
    d.text((15, 230), "Navegador de Proyectos", fill=COLORES["verde"], font=font(13, True))
    items = ["▾ Vistas (todo)", "  ▾ Planta", "    Nivel 1", "    Nivel 2", "  ▾ Alzados", "    Norte", "    Sur", "  ▾ 3D", "    3D - Vista 1", "▾ Planos", "  P-101 Planta", "▾ Familias", "▾ Grupos"]
    for i, it in enumerate(items):
        d.text((20, 260 + i * 25), it, fill=COLORES["carbon"], font=font(13))
    d.ellipse([(255, 220), (295, 260)], fill=COLORES["verde"], outline="white", width=3)
    d.text((266, 224), "3", fill="white", font=font(20, True))

    # 4. Propiedades (derecha superior)
    d.rectangle([(W - 280, 215), (W, 540)], fill="white", outline=COLORES["naranja"], width=3)
    d.text((W - 270, 230), "Propiedades", fill=COLORES["naranja"], font=font(13, True))
    propiedades = [
        ("Muro basico:", "Genérico 200mm"),
        ("Restricciones", ""),
        ("Altura desconectada", "3000.0"),
        ("Restriccion base", "Nivel 1"),
        ("Restriccion superior", "Nivel 2"),
        ("Construccion", ""),
        ("Habilitar analitico", "Si"),
        ("Cotas", ""),
        ("Longitud", "5200.0"),
        ("Area", "15.6 m²"),
        ("Volumen", "3.12 m³"),
    ]
    y = 260
    for k, v in propiedades:
        d.text((W - 270, y), k, fill=COLORES["carbon"], font=font(12, True))
        if v:
            d.text((W - 130, y), v, fill="#5F6368", font=font(12))
        y += 24
    d.ellipse([(W - 320, 220), (W - 280, 260)], fill=COLORES["naranja"], outline="white", width=3)
    d.text((W - 309, 224), "4", fill="white", font=font(20, True))

    # 5. Area de trabajo (centro)
    cx, cy = 700, 500
    d.rectangle([(260, 220), (W - 290, H - 50)], fill="#FAFAFA")
    # planta esquematica
    d.rectangle([(450, 320), (1050, 700)], outline=COLORES["carbon"], width=4)
    d.line([(450, 480), (1050, 480)], fill=COLORES["carbon"], width=3)  # tabique
    d.line([(750, 320), (750, 700)], fill=COLORES["carbon"], width=3)
    # puerta
    d.arc([(550, 460), (610, 520)], 0, 90, fill=COLORES["azul"], width=3)
    d.line([(580, 460), (580, 490)], fill=COLORES["azul"], width=3)
    # ventana
    d.rectangle([(680, 315), (730, 325)], fill=COLORES["turquesa"])
    d.rectangle([(900, 695), (950, 705)], fill=COLORES["turquesa"])
    # cotas
    d.line([(450, 270), (1050, 270)], fill=COLORES["rojo"], width=2)
    d.text((720, 245), "6.00 m", fill=COLORES["rojo"], font=font(15, True))
    d.text((450, 305), "Vista: Planta · Nivel 1", fill=COLORES["carbon"], font=font(14, True))
    d.ellipse([(W // 2 - 20, 230), (W // 2 + 20, 270)], fill=COLORES["morado"], outline="white", width=3)
    d.text((W // 2 - 9, 234), "5", fill="white", font=font(20, True))

    # 6. Barra estado (abajo)
    d.rectangle([(260, H - 50), (W - 290, H)], fill="#E0F2F1", outline=COLORES["turquesa"], width=3)
    d.text((275, H - 35), "Muro : Generico 200mm  ·  Filtro: Sin filtro  ·  Escala 1:100", fill=COLORES["carbon"], font=font(13))
    d.ellipse([(265, H - 65), (305, H - 25)], fill=COLORES["turquesa"], outline="white", width=3)
    d.text((278, H - 60), "6", fill="white", font=font(20, True))

    # Footer
    d.rectangle([(0, H - 25), (W, H)], fill=COLORES["amarillo"])
    d.text((20, H - 21), "Diagrama esquematico · No es captura real · Profesor Ruben Jimenez Gonzalez", fill=COLORES["carbon"], font=font(13, True))

    return img


def navegador_proyectos() -> Image.Image:
    """Detalle ampliado del navegador."""
    W, H = 1200, 800
    img = Image.new("RGB", (W, H), COLORES["crema"])
    d = ImageDraw.Draw(img)
    d.rectangle([(0, 0), (W, 70)], fill=COLORES["verde"])
    d.text((30, 18), "REVIT  ·  Navegador de Proyectos", fill="white", font=font(28, True))
    d.text((W - 540, 28), "Profesor Ruben Jimenez Gonzalez", fill="white", font=font(16))

    # Panel grande izq
    d.rectangle([(50, 100), (550, H - 80)], fill="white", outline=COLORES["verde"], width=3)

    items = [
        ("▾ Vistas (todas)", True, 0),
        ("  ▾ Plantas de construcción", True, 1),
        ("      Nivel 1 - Planta baja", False, 2),
        ("      Nivel 2 - Primera", False, 2),
        ("      Cubierta", False, 2),
        ("  ▾ Alzados (Edificacion)", True, 1),
        ("      Norte", False, 2),
        ("      Sur", False, 2),
        ("      Este", False, 2),
        ("      Oeste", False, 2),
        ("  ▾ Secciones", True, 1),
        ("      Seccion A-A", False, 2),
        ("      Seccion B-B", False, 2),
        ("  ▾ 3D", True, 1),
        ("      Vista 3D", False, 2),
        ("▾ Planos (todos)", True, 0),
        ("    P-101 Planta Baja", False, 1),
        ("    P-102 Planta Primera", False, 1),
        ("    A-201 Alzados", False, 1),
        ("▾ Familias", True, 0),
        ("    > Muros", False, 1),
        ("    > Puertas", False, 1),
        ("    > Ventanas", False, 1),
        ("    > Sistemas estructurales", False, 1),
        ("▾ Grupos", True, 0),
        ("    Baño tipo (4 ejemplares)", False, 1),
    ]
    y = 115
    for txt, expandido, nivel in items:
        if nivel == 0:
            d.text((65, y), txt, fill=COLORES["carbon"], font=font(16, True))
        elif nivel == 1:
            d.text((85, y), txt, fill="#37474F", font=font(15))
        else:
            d.text((105, y), txt, fill="#546E7A", font=font(14))
        y += 24

    # Flechas explicativas
    d.line([(550, 145), (700, 145)], fill=COLORES["rojo"], width=3)
    d.polygon([(700, 145), (690, 138), (690, 152)], fill=COLORES["rojo"])
    d.text((715, 130), "VISTAS: planos del modelo", fill=COLORES["rojo"], font=font(17, True))
    d.text((715, 155), "Doble clic abre la vista", fill="#5F6368", font=font(13))

    d.line([(550, 460), (700, 460)], fill=COLORES["azul"], width=3)
    d.polygon([(700, 460), (690, 453), (690, 467)], fill=COLORES["azul"])
    d.text((715, 445), "PLANOS: hojas para imprimir", fill=COLORES["azul"], font=font(17, True))
    d.text((715, 470), "Arrastras vistas sobre cada plano", fill="#5F6368", font=font(13))

    d.line([(550, 580), (700, 580)], fill=COLORES["morado"], width=3)
    d.polygon([(700, 580), (690, 573), (690, 587)], fill=COLORES["morado"])
    d.text((715, 565), "FAMILIAS: catalogo del proyecto", fill=COLORES["morado"], font=font(17, True))
    d.text((715, 590), "Aqui ves todo lo cargado", fill="#5F6368", font=font(13))

    d.line([(550, 685), (700, 685)], fill=COLORES["naranja"], width=3)
    d.polygon([(700, 685), (690, 678), (690, 692)], fill=COLORES["naranja"])
    d.text((715, 670), "GRUPOS: piezas repetidas", fill=COLORES["naranja"], font=font(17, True))
    d.text((715, 695), "Editas uno, cambian todos", fill="#5F6368", font=font(13))

    # Footer
    d.rectangle([(0, H - 25), (W, H)], fill=COLORES["amarillo"])
    d.text((20, H - 21), "Diagrama esquematico · No es captura real · Profesor Ruben Jimenez Gonzalez", fill=COLORES["carbon"], font=font(13, True))

    return img


def main():
    print("Generando placeholders Revit...")
    interfaz_completa().save(OUT / "interfaz-completa.png", optimize=True)
    print(f"  OK interfaz-completa.png")
    navegador_proyectos().save(OUT / "navegador-proyectos.png", optimize=True)
    print(f"  OK navegador-proyectos.png")
    print(f"\nGuardado en: {OUT}")


if __name__ == "__main__":
    main()
