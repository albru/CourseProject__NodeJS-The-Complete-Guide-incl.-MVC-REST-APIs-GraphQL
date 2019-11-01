const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>my app</title></head>");
    res.write("<body><h1>Hello to my super node app!:)</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/users") {
    res.write("<html>");
    res.write(
      "<ul><li>John</li><li>Petr</li><li>Sergey</li><li>Mark</li></ul>"
    );
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='create-user'><button type='submit'/>Create User</button></form>"
    );
    res.write("</html>");
    return res.end();
  } else if (url === "/create-user" && method === "POST") {
    const user = [];
    req.on("data", chunk => {
      user.push(chunk);
    });
    return req.on("end", () => {
      const parsed = Buffer.concat(user).toString();
      console.log("New user was created! His name: ", parsed.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

// module.exports = { handler: requestHandler, smth: "smth" };
exports.handler = requestHandler;
