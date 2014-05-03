/**
 * @overview
 *
 * @author
 * @version 2014/04/26
 */

var http = require("http");
var port = Number(process.env.PORT || 1337);
var request = require("request");
var fs = require("fs");
var url = "http://graph.facebook.com/Boo/photos?type=uploaded";

http.createServer(function (req, res) {
  console.log("receive a request.");
  res.writeHeader(200, {"Content-Type": "text/html"});
  
  var data = "";
  var pic = [];

  fs.readFile('./index.html', function(err, indData){
    data = indData;
    data += "var data = [";

    request.get(url, function (err, body, response) {

      response = JSON.parse(response);
      response.data.forEach(function (val, idx) {
        pic.push(val.images[2].source);
      });
      
      for(i = 0; i < pic.length-1; i+=1){
        data += "'" + pic[i] + "', ";
      }
      data += "'" + pic[pic.length-1] + "'];";
      data += "$('<img class=\"myimg\">').appendTo($('.pic')).attr('src', data[0]);"
      data += "</script></body></html>";
      res.end(data);
    });
  });

}).listen(port);

console.log("start server port: " + port);


