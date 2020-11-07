const { response } = require("express");
const express = require("express");
const fs = require("fs")
const app = express();
app.listen(3000, ()=>console.log("Application is running on port:3000"))
app.get("/", (request, response)=>{
    response.send("<h1>This is a Home page</h1>")
})




let folderPath = "./test_folder/"
app.get("/list", (request, response)=>{
    fs.readdir(folderPath, (err, fileNames)=>{
        if(err){
           throw err;
        }
        let result = "<table>"
        fileNames.forEach((fileName)=>{
            if(fs.lstatSync(folderPath + fileName).isDirectory()){
                result += "<tr><td>" +"<td> <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAwFBMVEX////55lz+9qofISuPnrZMS0TS09V5dl7l3pzu56H17aUkJjBDRU01N0D786mDgGQrLTfTzZGyrn/c1ZclJzE7PUZkZm3OyI40Nj8qLDY/QUpGR1BLTVWMjZL39/ji4uRnZVQxMTU3ODiPjGtQUEddXE6opHpydHrq6uvOztCDhIpSU1u0tbhqaFbIwot7fIJCQz+jn3ebnKBdX2a6u75NSjU0NTA8PDFjXzt7dEDm1FibkUfRwlPn1VijmUmfoKTSL0hbAAADk0lEQVR4nO3da3PSQBSHcWQFcqFcQoDScim3ll6oQW3VqvX7fyv3BAixg0x3k50Twv95I9Oh4fwaWAIyoVBACCGEEEIIIYQQQgghhBBKp+GorNmCe/RYt4Oq0M+9uLvlFoTd3idQbKo+cCsKw05yBvWF+S42utwMMg5Kek3c9QbaZU7H4iwcYuk5Re1qj/UebaTBKBn2aYJZU1+xzq6E+4Tv3vWJbr9SS+qQXftySx0ux4ju3lcpMGQe/U24lmFasIIEj45/qsuN3fM4FrRDvJQcRXsstzZigTzIWy7FRmlNZ9u19HAzuvbKn8xX1ptd8pkFciNveRrNYVXehdhB6Opu3Y420KWnRRYIHWB1t2M0J8JdepbCClazvKUrglb0Aylrs0AaErK9bzR7otTaP/ChmiUxjn5tIkSPBUL3ks0esCdirrV8OfPduleS22ODbGaoay/DThA9zjIAsfzdg0W1rhjbmYGsxFzXUSzOxXVmINEsOl1vj3IyAAmExoq1rSWC7Z+D6andjSBjkeCIyxG99QV6ar/hhUSrl1az2fpfemoXna96b8aMhvyQqKv3HuPsy+9ov8JMHWIHSST6h5ypQ4p2on2iLUkfIh8n9bnemzFBeDCtt+iZgOhn0ep9lwNI+BKzmgdIcSmXrlxA6M0xLYifP8gswcFveiWCpPEuY1oBAoihAOkBYiZAdhBvkux1RPqdq/x/9w6SOYcQZ1oQ7qn3pQhx8gf5kKEUIQ1ATAcIIIYCJNeQJ9VnsKeMQlQdae7TlCEflQIkOeRcXt0GBBBAAAEEEEAAAQSQQ50BAggPRDVWiJWHNx8OQzgD5MghbUBMBwgghgIEEEMBAoihADlyyAUgptOAtAAxGSCAGAqQI4dUATEdIIAYChBADKUIuQTEdIAAYqhThjQBMdmpQvqAmA4QQAylC6nlCeJyDx/vlCHhKUydI4fQdyo8EsSWF8bcw8fThVjywjP38PEUIXS29fAk5S154Rv38PEUIXRy7xVB6NydKX7YNXmKkIG8ep0gdBb+79zDx1OE0Hnjw/OpTuWFH9zDx3qR8zQUIGV5fZ8+U04n7fnJPX2sVzlPXwESfvB3Kp8P6Yw7v7in3/XyLOcZqEDu5C/0PGeaqdX39ys5fKWzmi7onGfZTGmHFAp/uOf9X8pfyTLgnnhvruL+oMo3be6x39ToD3i+xQQhhBBCCCGEEEIIIYQQQmF/Aa9hrgg83MymAAAAAElFTkSuQmCC' alt = 'Folder' height = '150px', width = '150px'</img></td><td><h2>" + fileName + "</h2></td></tr>"
            }
            else{
                result += "<tr><td>" +"<td> <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAb1BMVEX///8AAAD5+flQUFDb29sjIyNXV1fi4uIYGBj6+voHBwepqambm5vS0tK/v79oaGh6enotLS1AQEASEhJjY2OhoaFFRUXt7e3h4eEcHBw0NDTGxsYPDw9vb28kJCTq6uqPj4+ysrJ/f3+SkpIyMjIwtSvtAAACzklEQVR4nO3c25aiMBAF0ADeCIJCq8hF8dL//43d0/NgVByT1CnGXtZ5V/aqYkEMJUpJJBKJ5C0Tlp1bygFQ2/OqyJ1SbxaHpow5UWFS68AjH/Uh5YOFhw8f1E+qVRMysY7+qj+w5ZZF1RUU1XfqjKOTidd5dVWwNYNrSVUFwWwNP8HiFZ317ULXK5wAWHgXhgXvo8HSdWGb++svuF4Ga5yGtmnur3VYl8kaWX8q7bkEQ/uIY0HrBWQhXUgWsI9QFq5eZJZmcZFZmw1HH8ms1ejWhagXnaU4XADWvYveRwSLoV4QFt6FYcH7CGKh64VigV0wFraPOBa0XkAW0oVkAfsIZeHqhWXBXGAWqo9oFqhecBbGhWdB+sjAQtSLgwVwsbDoLh7WratKXoN169o3A7Mm22lftll+5YrcnsaQWe34Qdorlp4Py7JNPX1Jllu5BmMFhcvZ5cea5v84/oO0GTsrXLizgh07S2XMXfRkhSf3J1izlJ2lyp2zSx/5Wao8566w9QAspbbJchI9TX1hOVy5CCylYovnMGs9OMsmibCEJSxhDcSKCWFjTc+7hXd2ibGEQbLKKKBEny4FQ7Kytu9o9vnsWFjUMaV971f9d1b/VwlLWEodqaf8ZY4RyUrHNFZ02cVFsuJ5Xs28UxXGJhv05hN3qX9G5s/n91hBCEtYwhLW72LFo8w/TWccAMkKz3vtn7Y29rqhK4gqIGVzuSu+0jKQab31oqtTYQmL61e1z5MmMzXPHkQ5IZWrPfDs2KhuvvTP6WhM1bzDrVpYwhKWsIQlLGEJS1jCElYPq8p6x4CJOVNZuno0B0zJLCCy2PP7WQrx9gzLOIwsqtNgKu0yPUzdBbHPp8toOnFuxT765KBSqtkPw4q65xYzxyFceuMw0fyTuImIkz7PU+08XqVUZofV8zFg/yzmqef/Oq1fyuIT1teHSSQSieRvvgBm6GqGbCGb7gAAAABJRU5ErkJggg==' alt = 'Folder' height = '150px', width = '150px'</img></td><td><h2>" + fileName + "</h2></td></tr>"
            }           
            
        })
        result += "</table>";
        response.send(result);
    })
})


