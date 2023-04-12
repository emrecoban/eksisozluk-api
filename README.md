# URL Source Code Retrieval API
This Node.js API service is built using `express`, `cors` and `node-fetch`. It retrieves the source code of a website as a response by taking a URL parameter.

## Installation
1. Clone or download this project.
2. In the terminal, navigate to the project directory and run `npm install`.
3. Start the application by running `node app.js`.

## Usage
- `<URL>`: The URL of the website whose source code will be retrieved.

Example request:
```bash
GET /getEntry?url=https://www.eksisozluk.com
```

Example response:
```html
<!doctype html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>ekşi sözlük - kutsal bilgi kaynağı</title>
...
```

## License
This project is licensed under the MIT License. See the **LICENSE** file for more information.