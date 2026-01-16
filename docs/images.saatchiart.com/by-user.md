# images.saatchiart.com 
* URL format: `https://images.saatchiart.com/saatchi/{artist id}/art/{portfolio id}/{image filename}.jpg`
* Block at no less than `https://images.saatchiart.com/saatchi/{artist id}/`

Eg:
1. Raw: `https://images.saatchiart.com/saatchi/1694596/art/8033053/7100149-HSC00001-6.jpg`
2. To encode: `https://images.saatchiart.com/saatchi/1694596/a`
3. Remove the final character of the base 64
Note: the `/a` is needed to make sure the `/` after `{author id}` is included when the final character of the base64 is removed

## Brave search with images.saatchiart.com example
1. Source: `https://imgs.search.brave.com/1Fo5ghThy5juhKorhOaaBAOYiQlBQcAlMt03vn1XAxQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2FhdGNoaWFy/dC5jb20vc2FhdGNo/aS8xNjk0NTk2L2Fy/dC84MDMzMDUzLzcx/MDAxNDktSFNDMDAw/MDEtNi5qcGc`
2. Base 64 part: `aHR0cHM6Ly9pbWFn/ZXMuc2FhdGNoaWFy/dC5jb20vc2FhdGNo/aS8xNjk0NTk2L2Fy/dC84MDMzMDUzLzcx/MDAxNDktSFNDMDAw/MDEtNi5qcGc`
3. Slashes removed: `aHR0cHM6Ly9pbWFnZXMuc2FhdGNoaWFydC5jb20vc2FhdGNoaS8xNjk0NTk2L2FydC84MDMzMDUzLzcxMDAxNDktSFNDMDAwMDEtNi5qcGc`
4. Decoded: `https://images.saatchiart.com/saatchi/1694596/art/8033053/7100149-HSC00001-6.jpg`
5. Encode at: `https://images.saatchiart.com/saatchi/1694596/a`
6. Encoded: `aHR0cHM6Ly9pbWFnZXMuc2FhdGNoaWFydC5jb20vc2FhdGNoaS8xNjk0NTk2L2E`
7. Remove final character: `aHR0cHM6Ly9pbWFnZXMuc2FhdGNoaWFydC5jb20vc2FhdGNoaS8xNjk0NTk2L2`
8. Insert slashes every 16 characters: `aHR0cHM6Ly9pbWFn/ZXMuc2FhdGNoaWFy/dC5jb20vc2FhdGNo/aS8xNjk0NTk2L2`
9. Add the rule: `search.brave.com##.image-result:has(img[src^="https://imgs.search.brave.com"][src*="/aHR0cHM6Ly9pbWFn/ZXMuc2FhdGNoaWFy/dC5jb20vc2FhdGNo/aS8xNjk0NTk2L2"])`
