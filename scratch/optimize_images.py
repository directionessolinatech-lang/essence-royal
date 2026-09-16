import os
import glob
from PIL import Image

def process_images():
    for folder in ['assets/images', 'assets/images/fragrances']:
        print(f"--- Processing {folder} ---")
        for ext in ('*.jpg', '*.jpeg', '*.png'):
            for p in glob.glob(os.path.join(folder, ext)):
                if not os.path.isfile(p):
                    continue
                if p.endswith('.webp'):
                    continue
                
                try:
                    with Image.open(p) as img:
                        # Max dimension
                        max_dim = 600 if 'logo' in p or 'brand' in p or 'hero' in p else 420
                        
                        w, h = img.size
                        if max(w, h) > max_dim:
                            if w >= h:
                                new_w = max_dim
                                new_h = int(h * (max_dim / w))
                            else:
                                new_h = max_dim
                                new_w = int(w * (max_dim / h))
                            img_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
                        else:
                            img_resized = img.copy()
                        
                        # Save WebP version
                        webp_path = os.path.splitext(p)[0] + '.webp'
                        if img_resized.mode in ("RGBA", "P"):
                            img_resized.save(webp_path, 'WEBP', quality=75, method=6)
                        else:
                            img_resized.convert("RGB").save(webp_path, 'WEBP', quality=75, method=6)
                        
                        # Save JPG version
                        jpg_path = os.path.splitext(p)[0] + '.jpg'
                        if img_resized.mode in ("RGBA", "P"):
                            bg = Image.new("RGB", img_resized.size, (255, 255, 255))
                            bg.paste(img_resized, mask=img_resized.split()[3] if img_resized.mode=='RGBA' else None)
                            bg.save(jpg_path, 'JPEG', quality=75, optimize=True)
                        else:
                            img_resized.convert("RGB").save(jpg_path, 'JPEG', quality=75, optimize=True)
                            
                        print(f"Processed {os.path.basename(p)} -> WebP: {os.path.getsize(webp_path)/1024:.1f} KB, JPG: {os.path.getsize(jpg_path)/1024:.1f} KB")
                except Exception as e:
                    print(f"Error processing {p}: {e}")

if __name__ == '__main__':
    process_images()
