var express = require('express');
var router = express.Router();


function calc(num1, num2, operation) {
   var result

   // calculate num1 and num2
   if (operation == "plus")
      result = Number(num1) + Number(num2);
   else if (operation == "sub")
      result = Number(num1) - Number(num2);
   else if (operation == "mul")
      result = Number(num1) * Number(num2);
   else if (operation == "div")
      result = Number(num1) / Number(num2);

   return result
}

function isNumber(n) {
   if (n == "") return false;
   return !isNaN(n);
}

/* GET home page. */
router.get('/', function (req, res, next) {
   console.log("log:", req.query)
   const data = { ...req.query }

   try {
      number = 0

      const num1 = req.query.num1
      const num2 = req.query.num2

      if (!isNumber(num1)) number += 1
      if (!isNumber(num2)) number += 2

      if (number != 0) {
         if (num1 == undefined || num2 == undefined)
            data.announce = ""
         else if (number == 1)
            data.announce = "Giá trị nhập ở ô số Thứ Nhất không phải là số"
         else if (number == 2)
            data.announce = "Giá trị nhập ở ô số Thứ Hai không phải là số"
         else if (number == 3)
            data.announce = "Giá trị nhập ở ô số Thứ Nhất và Thứ Hai không phải là số"

         console.log(data);
         res.render('index', data);
         return
      }

      const operation = req.query.operation

      if (operation == undefined) {
         data.announce = "Chưa chọn phép tính"
         data.result = ""

         console.log(data);
         res.render('index', data)
         return
      }

      data.result = calc(num1, num2, operation)
      data.announce = ""

      console.log(data);
      res.render('index', data);

   } catch (err) {
      console.log("exception:", err);

      console.log(data);
      res.render('index', { title: "19127525" });
   }
});

module.exports = router;
