# artlimited.net
* URL format: `https://www.artlimited.net/user/{user id parts}/{some kind of id}/{image file name}.webp`
* Block at no less than `https://www.artlimited.net/user/{user id parts}/`
* Make sure other users aren't accidently included (append regex `[AEIMQUYcgk][^v]`, which is 2 characters)

Eg:
1. Raw: `https://www.artlimited.net/user/1/0/6/1/0/7/6/11887540/digital-art-tower06-no3-computer-graphic-3d-construction-edifice-medium-open.webp`
2. To encode: `https://www.artlimited.net/user/1/0/6/1/0/7/6/0`
3. Remove the final character of the base 64
Note: the `/0` is needed to make sure the `/` after `{user id parts}` is included when the final character of the base 64 is removed

## Brave search with artlimited.net example
1. Source: `https://imgs.search.brave.com/qrRrIQ3WkGvoUGd4Wi6tfXI6KvNYEBZgHnRXsknOYz4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXJ0bGltaXRlZC5u/ZXQvdXNlci8xLzAv/Ni8xLzAvNy82LzEx/ODg3NTQwL2RpZ2l0/YWwtYXJ0LXRvd2Vy/MDYtbm8zLWNvbXB1/dGVyLWdyYXBoaWMt/M2QtY29uc3RydWN0/aW9uLWVkaWZpY2Ut/bWVkaXVtLW9wZW4u/d2VicA`
2. Base 64 part: `aHR0cHM6Ly93d3cu/YXJ0bGltaXRlZC5u/ZXQvdXNlci8xLzAv/Ni8xLzAvNy82LzEx/ODg3NTQwL2RpZ2l0/YWwtYXJ0LXRvd2Vy/MDYtbm8zLWNvbXB1/dGVyLWdyYXBoaWMt/M2QtY29uc3RydWN0/aW9uLWVkaWZpY2Ut/bWVkaXVtLW9wZW4u/d2VicA`
3. Slashes removed: `aHR0cHM6Ly93d3cuYXJ0bGltaXRlZC5uZXQvdXNlci8xLzAvNi8xLzAvNy82LzExODg3NTQwL2RpZ2l0YWwtYXJ0LXRvd2VyMDYtbm8zLWNvbXB1dGVyLWdyYXBoaWMtM2QtY29uc3RydWN0aW9uLWVkaWZpY2UtbWVkaXVtLW9wZW4ud2VicA`
4. Decoded: `https://www.artlimited.net/user/1/0/6/1/0/7/6/11887540/digital-art-tower06-no3-computer-graphic-3d-construction-edifice-medium-open.webp`
5. Encode at: `https://www.artlimited.net/user/1/0/6/1/0/7/6/0`
6. Encoded: `aHR0cHM6Ly93d3cuYXJ0bGltaXRlZC5uZXQvdXNlci8xLzAvNi8xLzAvNy82LzA`
7. Remove final character: `aHR0cHM6Ly93d3cuYXJ0bGltaXRlZC5uZXQvdXNlci8xLzAvNi8xLzAvNy82Lz`
8. Add the regex: `aHR0cHM6Ly93d3cuYXJ0bGltaXRlZC5uZXQvdXNlci8xLzAvNi8xLzAvNy82Lz[AEIMQUYcgk][^v]`
9. Insert slashes every 16 characters: `aHR0cHM6Ly93d3cu/YXJ0bGltaXRlZC5u/ZXQvdXNlci8xLzAv/Ni8xLzAvNy82Lz[AEIMQUYcgk][^v]`
10. Escape the slashes for adblock syntax: `aHR0cHM6Ly93d3cu\\/YXJ0bGltaXRlZC5u\\/ZXQvdXNlci8xLzAv\\/Ni8xLzAvNy82Lz[AEIMQUYcgk][^v]`
11. Add the rule: `search.brave.com##.image-result:has(img:matches-attr(src="/aHR0cHM6Ly93d3cu\\/YXJ0bGltaXRlZC5u\\/ZXQvdXNlci8xLzAv\\/Ni8xLzAvNy82Lz[AEIMQUYcgk][^v]/"))`
