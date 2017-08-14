var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 80;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method


  if(path === '/'){   
    var string = fs.readFileSync('./llz.html', 'utf8')  
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  
    response.end(string)   
  }else if(path === '/llz'){   
    var string = fs.readFileSync('./llz.html', 'utf8')  
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  
    response.end(string)   
  }else  if(path === '/llj'){   
    var string = fs.readFileSync('./llj.html', 'utf8')  
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  
    response.end(string)   
  }else  if(path === '/llz_private'){   
    var string = fs.readFileSync('./llz_private.json')  
    response.setHeader('Access-Control-Allow-Origin','http://llj.com')
    //在http://llj.com/llj的网址里向和它不同的域名http://llz.com/llz_private发出请求，
    //属于跨域，要在服务端添加上面一行代码
    response.setHeader('Access-Control-Allow-Methods','POST, GET, OPTIONS, PATCH, DELETE, HEAD')
    //当发出GET、POST之外方式的请求时，（一般是第二次请求，第一次是GET请求）
    //要在服务器上添加上面一行代码
    response.setHeader('Content-Type', 'application.json')  
    response.end(string)   
  }else  if(path === '/style.css'){   
    var string = fs.readFileSync('./style.css', 'utf8')
    response.setHeader('Content-Type', 'text/css')
    response.end(string)
  }else if(path === '/main.js'){  
    var string = fs.readFileSync('./main.js', 'utf8')
    response.setHeader('Content-Type', 'application/javascript')
    response.end(string)
  }else{  
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8') 
    response.end('找不到对应的路径，你需要自行修改 index.js')
  }

  console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://llz.com:' + port)
