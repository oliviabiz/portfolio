from PIL import Image
from os import listdir

# folders = ["resources/img/portrait", "resources/img/places"]
folders = ["resources"]

max_dim = 1920

for folder in folders:
    print(folder)
    files = listdir(folder)
    for file in files:
        full = f"{folder}/{file}"
        try:
            image = Image.open(full)
            prev_w, prev_y = image.size
            min_dim = min(prev_w, prev_y)

            if prev_w > max_dim:
                new_w = max_dim
                scaling = new_w / prev_w
                new_y = int(prev_y * scaling)
                print((prev_w, prev_y), "-->", (new_w, new_y))
                new_image = image.resize((new_w, new_y))
                new_image.save(full)
            elif prev_y > max_dim:
                new_y = max_dim
                scaling = new_y / prev_y
                new_w = int(prev_w * scaling)
                print((prev_w, prev_y), "-->", (new_w, new_y))
                new_image = image.resize((new_w, new_y))
                new_image.save(full)

        except:
            print("ERROR")