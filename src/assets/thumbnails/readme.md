# Rules

Thumbnails should follow those rules :

- Support 5 different sizes :
  - XS : 33x8px
  - S : 330x80px
  - M : 660x160px
  - L : 1320x320px
  - XL : 2640x640px
- There should be duplicates such as for each a version in jpg and the other in WEBP. The WEBP version should be the one used.
- The origin of each picture should be kept under source folder to retrieve more easily later

To generate WEBP from jpg, use the following command :

To do that on a whole folder :
```bash
for i in *.jpg; do name=$(echo "$i" | cut -f 1 -d '.');ffmpeg -i "./$i" -c:v libwebp "./$name.webp";done
```

