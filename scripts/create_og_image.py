import os
import urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps

os.makedirs("scripts/fonts", exist_ok=True)

# Font URLs
cormorant_url = "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86GnM.ttf"
cormorant_bold_url = "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd58jDOjw.ttf"
cormorant_italic_url = "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3jmX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5XzrOjw.ttf"
cinzel_url = "https://fonts.gstatic.com/s/cinzel/v26/8vIU7ww63mVu7gtR-kwKxNvkNOjw-uTnTYo.ttf"

def download_font(url, filename):
    path = os.path.join("scripts/fonts", filename)
    if not os.path.exists(path):
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp, open(path, 'wb') as f:
            f.write(resp.read())
    return path

font_cormorant = download_font(cormorant_url, "cormorant.ttf")
font_cormorant_bold = download_font(cormorant_bold_url, "cormorant_bold.ttf")
font_cinzel = download_font(cinzel_url, "cinzel.ttf")

if os.path.exists("C:/Windows/Fonts/georgiai.ttf"):
    font_cormorant_italic = "C:/Windows/Fonts/georgiai.ttf"
elif os.path.exists("C:/Windows/Fonts/cambriai.ttf"):
    font_cormorant_italic = "C:/Windows/Fonts/cambriai.ttf"
else:
    font_cormorant_italic = font_cormorant

WIDTH, HEIGHT = 1200, 630

# Base parchment canvas
img = Image.new("RGBA", (WIDTH, HEIGHT), (247, 244, 237, 255))

# Subtle Jaali background texture
if os.path.exists("src/assets/jaali.jpg"):
    jaali = Image.open("src/assets/jaali.jpg").convert("RGBA")
    jaali_tile = Image.new("RGBA", (WIDTH, HEIGHT))
    for x in range(0, WIDTH, jaali.width):
        for y in range(0, HEIGHT, jaali.height):
            jaali_tile.paste(jaali, (x, y))
    # Blend jaali lightly
    jaali_alpha = jaali_tile.split()[3]
    jaali_tile.putalpha(18) # very subtle 7% opacity
    img = Image.alpha_composite(img, jaali_tile)

draw = ImageDraw.Draw(img)

# Colors
GOLD_DARK = (184, 134, 45, 255)
GOLD_LIGHT = (220, 185, 120, 255)
PINE_DARK = (30, 56, 42, 255)
PINE_LIGHT = (58, 86, 70, 255)
INK_MUTED = (95, 90, 80, 255)
CREAM_BG = (252, 250, 246, 255)

# Outer Borders
BORDER_PADDING = 20
draw.rectangle(
    [BORDER_PADDING, BORDER_PADDING, WIDTH - BORDER_PADDING, HEIGHT - BORDER_PADDING],
    outline=GOLD_DARK[:3],
    width=2
)
draw.rectangle(
    [BORDER_PADDING + 8, BORDER_PADDING + 8, WIDTH - (BORDER_PADDING + 8), HEIGHT - (BORDER_PADDING + 8)],
    outline=GOLD_LIGHT[:3],
    width=1
)

# Corner ornamental accents
def draw_corner(cx, cy, dx, dy):
    size = 18
    draw.line([(cx, cy), (cx + dx * size, cy)], fill=GOLD_DARK[:3], width=2)
    draw.line([(cx, cy), (cx, cy + dy * size)], fill=GOLD_DARK[:3], width=2)
    draw.rectangle([cx + dx * 6 - 2, cy + dy * 6 - 2, cx + dx * 6 + 2, cy + dy * 6 + 2], fill=GOLD_DARK[:3])

draw_corner(BORDER_PADDING + 14, BORDER_PADDING + 14, 1, 1)
draw_corner(WIDTH - (BORDER_PADDING + 14), BORDER_PADDING + 14, -1, 1)
draw_corner(BORDER_PADDING + 14, HEIGHT - (BORDER_PADDING + 14), 1, -1)
draw_corner(WIDTH - (BORDER_PADDING + 14), HEIGHT - (BORDER_PADDING + 14), -1, -1)

# Left Column: Mughal Arch Photo
arch_x, arch_y = 52, 50
arch_w, arch_h = 390, 530

if os.path.exists("src/assets/hero-arch.jpg"):
    hero_raw = Image.open("src/assets/hero-arch.jpg").convert("RGBA")
    hero_fitted = ImageOps.fit(hero_raw, (arch_w, arch_h), centering=(0.5, 0.22))
    
    # Create Arch Mask (rounded top, straight bottom)
    mask = Image.new("L", (arch_w, arch_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    # top semi-circle / arch
    mask_draw.rounded_rectangle([0, 0, arch_w, arch_h], radius=arch_w // 2, fill=255)
    # square the bottom half
    mask_draw.rectangle([0, arch_h // 2, arch_w, arch_h], fill=255)
    
    # Shadow for arch
    shadow = Image.new("RGBA", (arch_w + 30, arch_h + 30), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle([15, 15, arch_w + 15, arch_h + 15], radius=arch_w // 2, fill=(40, 30, 20, 50))
    s_draw.rectangle([15, arch_h // 2 + 15, arch_w + 15, arch_h + 15], fill=(40, 30, 20, 50))
    shadow = shadow.filter(ImageFilter.GaussianBlur(10))
    img.paste(shadow, (arch_x - 15, arch_y - 10), shadow)
    
    # Paste arch photo
    img.paste(hero_fitted, (arch_x, arch_y), mask)
    
    # Border for arch
    arch_border = Image.new("RGBA", (arch_w, arch_h), (0, 0, 0, 0))
    ab_draw = ImageDraw.Draw(arch_border)
    ab_draw.rounded_rectangle([1, 1, arch_w - 2, arch_h - 2], radius=arch_w // 2, outline=GOLD_DARK[:3], width=3)
    ab_draw.rounded_rectangle([6, 6, arch_w - 7, arch_h - 7], radius=(arch_w - 12) // 2, outline=GOLD_LIGHT[:3], width=1)
    ab_draw.line([(1, arch_h - 1), (arch_w - 2, arch_h - 1)], fill=GOLD_DARK[:3], width=3)
    img.paste(arch_border, (arch_x, arch_y), arch_border)

# Right Column: Typography & Details
center_x = 815

# Lotus at top
if os.path.exists("src/assets/lotus.png"):
    lotus = Image.open("src/assets/lotus.png").convert("RGBA")
    lotus_w, lotus_h = 56, 56
    lotus = lotus.resize((lotus_w, lotus_h), Image.Resampling.LANCZOS)
    img.paste(lotus, (center_x - lotus_w // 2, 60), lotus)

# Fonts
f_kicker = ImageFont.truetype(font_cinzel, 14)
f_names = ImageFont.truetype(font_cormorant_bold, 54)
f_ampersand = ImageFont.truetype(font_cormorant_italic, 42)
f_event = ImageFont.truetype(font_cinzel, 18)
f_date = ImageFont.truetype(font_cormorant_bold, 28)
f_time = ImageFont.truetype(font_cinzel, 14)
f_venue = ImageFont.truetype(font_cormorant_bold, 24)
f_location = ImageFont.truetype(font_cinzel, 13)
f_hashtag = ImageFont.truetype(font_cinzel, 12)

# Helper for centered spaced text
def draw_spaced_text(draw_ctx, text, y, font, fill, spacing=3):
    total_w = sum(draw_ctx.textlength(ch, font=font) + spacing for ch in text) - spacing
    start_x = center_x - total_w / 2
    cur_x = start_x
    for ch in text:
        draw_ctx.text((cur_x, y), ch, font=font, fill=fill)
        cur_x += draw_ctx.textlength(ch, font=font) + spacing
    return y

# 1. Kicker
draw_spaced_text(draw, "TOGETHER WITH THEIR FAMILIES", 132, f_kicker, PINE_LIGHT[:3], spacing=4)

# 2. Couple Names: "BHUMIKA & PIYUSH"
# Compute centered text with styled ampersand
w_bhumika = draw.textlength("BHUMIKA", font=f_names)
w_amp = draw.textlength(" & ", font=f_ampersand)
w_piyush = draw.textlength("PIYUSH", font=f_names)
total_names_w = w_bhumika + w_amp + w_piyush
names_start_x = center_x - total_names_w / 2
names_y = 172

draw.text((names_start_x, names_y), "BHUMIKA", font=f_names, fill=PINE_DARK[:3])
draw.text((names_start_x + w_bhumika, names_y + 4), " & ", font=f_ampersand, fill=GOLD_DARK[:3])
draw.text((names_start_x + w_bhumika + w_amp, names_y), "PIYUSH", font=f_names, fill=PINE_DARK[:3])

# 3. Gold Rule Divider with Diamond
rule_y = 250
rule_half = 140
draw.line([(center_x - rule_half, rule_y), (center_x - 14, rule_y)], fill=GOLD_DARK[:3], width=1)
draw.line([(center_x + 14, rule_y), (center_x + rule_half, rule_y)], fill=GOLD_DARK[:3], width=1)
# diamond in middle
diamond_s = 5
draw.polygon([
    (center_x, rule_y - diamond_s),
    (center_x + diamond_s, rule_y),
    (center_x, rule_y + diamond_s),
    (center_x - diamond_s, rule_y)
], fill=GOLD_DARK[:3])

# 4. Ceremony Subtitle
draw_spaced_text(draw, "WEDDING CEREMONY", 274, f_event, GOLD_DARK[:3], spacing=5)

# 5. Date Badge Box
date_y = 325
box_w, box_h = 360, 94
box_x = center_x - box_w // 2
draw.rounded_rectangle([box_x, date_y, box_x + box_w, date_y + box_h], radius=18, fill=CREAM_BG[:3], outline=GOLD_LIGHT[:3], width=1)

# Date Inside Box
w_date = draw.textlength("Wednesday, 25 November 2026", font=f_date)
draw.text((center_x - w_date / 2, date_y + 14), "Wednesday, 25 November 2026", font=f_date, fill=PINE_DARK[:3])

# Time Inside Box
draw_spaced_text(draw, "12:00 PM ONWARDS", date_y + 58, f_time, GOLD_DARK[:3], spacing=3)

# 6. Venue & Location
w_venue = draw.textlength("Jaypee Residency Manor", font=f_venue)
draw.text((center_x - w_venue / 2, 442), "Jaypee Residency Manor", font=f_venue, fill=PINE_DARK[:3])

draw_spaced_text(draw, "BARLOWGANJ \u2022 MUSSOORIE, UTTARAKHAND", 484, f_location, INK_MUTED[:3], spacing=3)

# 7. Bottom Hashtag
draw_spaced_text(draw, "#BHUMIKAANDPIYUSH", 535, f_hashtag, GOLD_DARK[:3], spacing=4)

# Lossless PNG save
final_png = img.convert("RGB")
final_png.save("public/og-image.png", format="PNG", optimize=True, compress_level=9)
print("Saved public/og-image.png (lossless PNG)")

# High Quality Optimized JPEG save
final_png.save("public/og-image.jpg", format="JPEG", quality=95, optimize=True, progressive=True)
print("Saved public/og-image.jpg (optimized JPEG)")
