import sys
from PIL import Image
import pillow_avif

# Try importing ColorThief for dominant colors
try:
    from colorthief import ColorThief
    ct = ColorThief('discover_logo.avif')
    dominant_color = ct.get_color(quality=1)
    palette = ct.get_palette(color_count=5)
    print("ColorThief Dominant Color:", dominant_color)
    print("ColorThief Palette:", palette)
except Exception as e:
    print("ColorThief failed:", e)

    # Fallback to pure Pillow
    img = Image.open('discover_logo.avif')
    img = img.convert("RGB")
    colors = img.getcolors(1000000)
    # Sort by count
    colors.sort(key=lambda x: x[0], reverse=True)
    # Filter out very light/dark colors if we just want the blue
    for count, color in colors[:20]:
        print(f"Color: {color}, Count: {count}")
