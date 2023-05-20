# URL Source Code Retrieval API

This Node.js API service is built using `express`, `cors`, `image-to-base64`, and `node-fetch`. It retrieves the source code of a website as a response by taking a URL parameter. However, it is restricted to only accept requests from specific URLs.

## Installation

1. Clone or download this project.
2. In the terminal, navigate to the project directory and run `npm install`.
3. Start the application by running `node app.js`.

## Usage

This API service only accepts requests from specific URLs. The allowed URLs are:

- https://eksishot.emre.run
- https://eksishot.vercel.app
- http://localhost:5173

If a request is made from a URL that is not in this list, the service will respond with an error message.

### `GET /getEntry?url=<URL>`

- `<URL>`: The URL of the website whose source code will be retrieved.

Example request:

```bash
GET /getEntry?url=https://www.eksisozluk.com
```

Example response:

```html
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <title>ekşi sözlük - kutsal bilgi kaynağı</title>
    ...
  </head>
</html>
```

- `<JPG-URL>?ekstat`: This API server supports to convert `.JPG` image files to base64 format.

Example request:

```bash
GET /getEntry?url=https://www.shutterstock.com/image-vector/colorful-design-icon-jpg-file-260nw-2010625445.jpg?ekstat
```

Example response:

```
data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoH...
```

## License

This project is licensed under the MIT License. See the **LICENSE** file for more information.
