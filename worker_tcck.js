const cheerio = require('cheerio'); // khai báo module cheerio

const request = require('request-promise'); // khai báo module request-promise

const puppeteer = require('puppeteer');

setInterval(function() {
    a();
    b();
    c();
}, 60000);

  function a(){
    (async () => {
      const browser = await puppeteer.launch({ headless: true, slowMo: 1000 });
      const page = await browser.newPage();
      await page.goto('https://liveboard.cafef.vn/?center=1');
       
      let electronicData = await page.evaluate(() => {
        function convertNumber(number) {
          if (number.indexOf(",") > 0) {
            var extent = 100;
            var splitNumber = number.split(",");
            switch (splitNumber) {
              case 1:
                extent = 100;
                break;
              case 2:
                extent = 100;
                break;
              case 3:
                extent = 1000;
                break;
              case 4:
                extent = 10000;
                break;
              case 5:
                extent = 100000;
                break;
              default:
                extent = 100;
                break;
            }
           return parseInt(number.replaceAll(",","")) * extent;
          } 
          else {
            if (number == "" || number == null || number == undefined) {
              return 0;
            }
            return parseInt(number) * 100;
          } 
        };
        function convertNumber1(number) {
          if (number.indexOf(".") > 0) {
            var extent = 100;
            var splitNumber = number.split(".");
            switch (splitNumber) {
              case 1:
                extent = 100;
                break;
              case 2:
                extent = 100;
                break;
              case 3:
                extent = 1000;
                break;
              case 4:
                extent = 10000;
                break;
              case 5:
                extent = 100000;
                break;
              default:
                extent = 100;
                break;
            }
           return parseInt(number.replaceAll(".","")) * extent;
          } 
          else {
            if (number == "" || number == null || number == undefined) {
              return 0;
            }
            return parseInt(number) * 100;
          } 
        };

        var formatter = new Intl.NumberFormat();
        let products = [];
        let listinfo = document.getElementById("myTable");
        let items = listinfo.querySelectorAll("tbody tr")
        items.forEach((item) => {
          let dataJson = {};
          
          try {
            let itemId = item.id;
            let gia1 = convertNumber1(item.querySelectorAll("#" + itemId +"_i")[0].textContent);
            if (gia1 < 10000 && gia1 > 2000 && itemId.length < 4) {
              let ban1 = convertNumber(item.querySelectorAll("#" + itemId +"_p")[0].textContent);
              let ban2 = convertNumber(item.querySelectorAll("#" + itemId +"_r")[0].textContent);
              let ban3 = convertNumber(item.querySelectorAll("#" + itemId +"_t")[0].textContent);
              let mua1 = convertNumber(item.querySelectorAll("#" + itemId +"_f")[0].textContent);
              let mua2 = convertNumber(item.querySelectorAll("#" + itemId +"_h")[0].textContent);
              let mua3 = convertNumber(item.querySelectorAll("#" + itemId +"_j")[0].textContent);
              var totalB = ban1 + ban2 +ban3;
              var totalM = mua1 + mua2 +mua3;
              dataJson.name = itemId;
              dataJson.total = convertNumber(item.querySelectorAll("#" + itemId +"_n")[0].textContent);
              dataJson.gia1 = formatter.format(gia1 + "");
              dataJson.totalBan = formatter.format(totalB + "");
              dataJson.totalMua = formatter.format(totalM + "");
              products.push(dataJson);
        }
           
          }
          catch (err) {
              console.log(err)
          }
        });
        products.sort(function(a, b){
          return  parseInt(b.total) - parseInt( a.total);
      });
        return products;
      });
    
       console.log(electronicData);
    
      await browser.close();
    })();
  };

  function b(){
    (async () => {
      const browser = await puppeteer.launch({ headless: true, slowMo: 1000 });
      const page = await browser.newPage();
      await page.goto('https://liveboard.cafef.vn/?center=2');
       
      let electronicData = await page.evaluate(() => {
        function convertNumber(number) {
          if (number.indexOf(",") > 0) {
            var extent = 100;
            var splitNumber = number.split(",");
            switch (splitNumber) {
              case 1:
                extent = 100;
                break;
              case 2:
                extent = 100;
                break;
              case 3:
                extent = 1000;
                break;
              case 4:
                extent = 10000;
                break;
              case 5:
                extent = 100000;
                break;
              default:
                extent = 100;
                break;
            }
           return parseInt(number.replaceAll(",","")) * extent;
          } 
          else {
            if (number == "" || number == null || number == undefined) {
              return 0;
            }
            return parseInt(number) * 100;
          } 
        };
        function convertNumber1(number) {
          if (number.indexOf(".") > 0) {
            var extent = 100;
            var splitNumber = number.split(".");
            switch (splitNumber) {
              case 1:
                extent = 100;
                break;
              case 2:
                extent = 100;
                break;
              case 3:
                extent = 1000;
                break;
              case 4:
                extent = 10000;
                break;
              case 5:
                extent = 100000;
                break;
              default:
                extent = 100;
                break;
            }
           return parseInt(number.replaceAll(".","")) * extent;
          } 
          else {
            if (number == "" || number == null || number == undefined) {
              return 0;
            }
            return parseInt(number) * 100;
          } 
        };

        var formatter = new Intl.NumberFormat();
        let products = [];
        let listinfo = document.getElementById("myTable");
        let items = listinfo.querySelectorAll("tbody tr")
        items.forEach((item) => {
          let dataJson = {};
          
          try {
            let itemId = item.id;
            let gia1 = convertNumber1(item.querySelectorAll("#" + itemId +"_i")[0].textContent);
            if (gia1 < 10000 && gia1 > 2000 && itemId.length < 4) {
              let ban1 = convertNumber(item.querySelectorAll("#" + itemId +"_p")[0].textContent);
              let ban2 = convertNumber(item.querySelectorAll("#" + itemId +"_r")[0].textContent);
              let ban3 = convertNumber(item.querySelectorAll("#" + itemId +"_t")[0].textContent);
              let mua1 = convertNumber(item.querySelectorAll("#" + itemId +"_f")[0].textContent);
              let mua2 = convertNumber(item.querySelectorAll("#" + itemId +"_h")[0].textContent);
              let mua3 = convertNumber(item.querySelectorAll("#" + itemId +"_j")[0].textContent);
              var totalB = ban1 + ban2 +ban3;
              var totalM = mua1 + mua2 +mua3;
              dataJson.name = itemId;
              dataJson.total = convertNumber(item.querySelectorAll("#" + itemId +"_n")[0].textContent);
              dataJson.gia1 = formatter.format(gia1 + "");
              dataJson.totalBan = formatter.format(totalB + "");
              dataJson.totalMua = formatter.format(totalM + "");
              products.push(dataJson);
        }
           
          }
          catch (err) {
              console.log(err)
          }
        });
        products.sort(function(a, b){
          return  parseInt(b.total) - parseInt( a.total);
      });
        return products;
      });
    
       console.log(electronicData);
    
      await browser.close();
    })();
  }
  
  function c(){
    (async () => {
      const browser = await puppeteer.launch({ headless: true, slowMo: 1000 });
      const page = await browser.newPage();
      await page.goto('https://liveboard.cafef.vn/?center=9');
       
      let electronicData = await page.evaluate(() => {
        function convertNumber(number) {
          if (number.indexOf(",") > 0) {
            var extent = 100;
            var splitNumber = number.split(",");
            switch (splitNumber) {
              case 1:
                extent = 100;
                break;
              case 2:
                extent = 100;
                break;
              case 3:
                extent = 1000;
                break;
              case 4:
                extent = 10000;
                break;
              case 5:
                extent = 100000;
                break;
              default:
                extent = 100;
                break;
            }
           return parseInt(number.replaceAll(",","")) * extent;
          } 
          else {
            if (number == "" || number == null || number == undefined) {
              return 0;
            }
            return parseInt(number) * 100;
          } 
        };
        function convertNumber1(number) {
          if (number.indexOf(".") > 0) {
            var extent = 100;
            var splitNumber = number.split(".");
            switch (splitNumber) {
              case 1:
                extent = 100;
                break;
              case 2:
                extent = 100;
                break;
              case 3:
                extent = 1000;
                break;
              case 4:
                extent = 10000;
                break;
              case 5:
                extent = 100000;
                break;
              default:
                extent = 100;
                break;
            }
           return parseInt(number.replaceAll(".","")) * extent;
          } 
          else {
            if (number == "" || number == null || number == undefined) {
              return 0;
            }
            return parseInt(number) * 100;
          } 
        };

        var formatter = new Intl.NumberFormat();
        let products = [];
        let listinfo = document.getElementById("myTable");
        let items = listinfo.querySelectorAll("tbody tr")
        items.forEach((item) => {
          let dataJson = {};
          
          try {
            let itemId = item.id;
            let gia1 = convertNumber1(item.querySelectorAll("#" + itemId +"_i")[0].textContent);
            if (gia1 < 10000 && gia1 > 2000 && itemId.length < 4) {
              let ban1 = convertNumber(item.querySelectorAll("#" + itemId +"_p")[0].textContent);
              let ban2 = convertNumber(item.querySelectorAll("#" + itemId +"_r")[0].textContent);
              let ban3 = convertNumber(item.querySelectorAll("#" + itemId +"_t")[0].textContent);
              let mua1 = convertNumber(item.querySelectorAll("#" + itemId +"_f")[0].textContent);
              let mua2 = convertNumber(item.querySelectorAll("#" + itemId +"_h")[0].textContent);
              let mua3 = convertNumber(item.querySelectorAll("#" + itemId +"_j")[0].textContent);
              var totalB = ban1 + ban2 +ban3;
              var totalM = mua1 + mua2 +mua3;
              dataJson.name = itemId;
              dataJson.total = convertNumber(item.querySelectorAll("#" + itemId +"_n")[0].textContent);
              dataJson.gia1 = formatter.format(gia1 + "");
              dataJson.totalBan = formatter.format(totalB + "");
              dataJson.totalMua = formatter.format(totalM + "");
              products.push(dataJson);
        }
           
          }
          catch (err) {
              console.log(err)
          }
        });
        products.sort(function(a, b){
          return  parseInt(b.total) - parseInt( a.total);
      });
        return products;
      });
    
       console.log(electronicData);
    
      await browser.close();
    })();
  }
