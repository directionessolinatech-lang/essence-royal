import os
import glob
from PIL import Image

def optimize_image(filepath, max_dim=600, quality=80):
    try:
        with Image.open(filepath) as img:
            # Convert RGBA to RGB for JPEG if needed
            if img.mode in ("RGBA", "P"):
                if filepath.lower().endswith(('.jpg', '.jpeg')):
                    img = img.convert("RGB")
            
            # Calculate resize aspect ratio
            w, h = img.size
            if max(w, h) > max_dim:
                if w >= h:
                    new_w = max_dim
                    new_h = int(h * (max_dim / w))
                else:
                    new_h = max_dim
                    new_w = int(w * (max_dim / h))
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            orig_size = os.path.getsize(filepath) / 1024
            
            if filepath.lower().endswith(('.jpg', '.jpeg')):
                img.save(filepath, "JPEG", quality=quality, optimize=True)
            elif filepath.lower().endswith('.png'):
                img.save(filepath, "PNG", optimize=True)
                
            new_size = os.path.getsize(filepath) / 1024
            print(f"Optimized {os.path.basename(filepath)}: {w}x{h} -> {img.size[0]}x{img.size[1]} ({orig_size:.1f} KB -> {new_size:.1f} KB)")
    except Exception as e:
        print(f"Error optimizing {filepath}: {e}")

folders = ['assets/images', 'assets/images/fragrances']
for folder in folders:
    print(f"Processing folder: {folder}")
    for ext in ('*.jpg', '*.jpeg', '*.png'):
        for p in glob.glob(os.path.join(folder, ext)):
            if os.path.isfile(p):
                # For logo or small png keep higher resolution if needed
                max_dim = 800 if 'logo' in p or 'brand' in p or 'hero' in p else 500
                optimize_image(p, max_dim=max_dim, quality=82)
