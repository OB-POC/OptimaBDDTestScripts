
var seleniumWebdriver = require('selenium-webdriver');
var By = seleniumWebdriver.By
var assert = require('assert');
var decodedpassword = require('../page-objects/encrypt.js');
// var until = require('selenium-webdriver').until;
var promise = require('selenium-webdriver').promise;
var env = require('../env.js');
// var uss = promise.until;

var AER;
var APR;
var n = 12;
class lbgoffer{

    crediential(url,username, password){
      var e =env.env(url);
        driver.get(e).then(function(){
        driver.wait(until.elementLocated(By.id('username')),20000).then(uss=>{
                uss.clear();
                uss.sendKeys(username).then(function(){
                    driver.wait(until.elementLocated(By.id('pwd')),20000).then(pwd=>{
                        pwd.clear().then(function(){

                            var decode = decodedpassword.decode(password);
                    //  console.log('decoded password', decode);
                            pwd.sendKeys(decode);
                }).then(function(){
                    driver.wait(until.elementLocated(By.xpath('//div[@class="button_background"]')),20000).then(login=>{
                   login.click();
                   console.log('clicked on button')
                    })
                    
                    })
                
                    })
                    
                })
            })
        })

    }

    VerifyHomePage(){
        let aers = [];
        let aprs = [];
        driver.wait(until.elementLocated(By.className("My-financials")),20000).then(t=>{
            t.getText().then(tex=>{
                console.log(tex);
            }).then(function(){
                driver.wait(until.elementsLocated(By.xpath("//*/b[contains(.,'AER')]")),10000).then(aer=>{
                    // console.log('aer length is',aer.length);
                    // var count = 0 ;
                   
                    
                    for(var i = 1;i<=aer.length;i++){ 
                        driver.wait(until.elementLocated(By.xpath("(//*/b[contains(.,'AER')])["+i+"]")),60*1000).then(p=>{
                                  p.getText().then(pr=>{
                                    pr= pr.replace('% AER','');
                                    // console.log('aer value is',pr)
                                    aers.push(pr);
                                }) 
                                         
                        })
            
                    }

            }).then(function(){
                AER = Math.max(...aers); 
                    //  console.log('value',AER);
                    //*/div[text()='Credit accounts']/ancestor::*//p[text()='CC' ]
                    //p[contains(text(), 'CC') and not(contains(text(), 'M'))]
                    
                    })
                
            }).then(function(){
                driver.wait(until.elementsLocated(By.xpath("//*/b[contains(.,'APR')]")),10000).then(aer=>{
                    // console.log('aer length is',aer.length);
                    // var count = 0 ;
                   
                    for(var i = 1;i<=2;i++){ 
                        driver.wait(until.elementLocated(By.xpath("(//*/b[contains(.,'APR')])["+i+"]")),60*1000).then(p=>{
                                  p.getText().then(pr=>{
                                    pr= pr.replace('% APR','');
                                    // console.log('aer value is',pr)
                                    aprs.push(pr);
                                }) 
                                         
                        })
            
                    }

            })
                
            }).then(function(){
                APR = Math.min(...aprs); 
                // console.log('assdfff',APR)
                driver.findElement(By.className("YES")).click();

            })
            
        })
    }

    VerifyPayoutpage(){
       
        driver.wait(until.elementLocated(By.className("Recommended_for_you")),20000).then(t=>{
            t.getText().then(tex=>{
                console.log(tex);
            }).then(function(){
                driver.findElement(By.className("fas fa-arrow-right")).click();
            })
    })
}

verifyoffering(){
    driver.wait(until.elementLocated(By.id("lable")),20000).then(t=>{
        t.getText().then(tex=>{
            console.log(tex);
        })
    })
}


verifyofferingsavingsnew(expected){
var expected1;
    return new Promise(function(resolve,reject){
        try{
            driver.wait(until.elementLocated(By.css("#msg > p")),20000).then(d=>{
                
                  var aer_formula= Math.pow((((1*n)+AER)/n),n)-1;
                  aer_formula=aer_formula.toFixed(2);
                  expected1 = String(aer_formula);
                //   console.log('string',expected1);

                d.getText().then(tes=>{
                // console.log(tes);
      
                var test = "Are you hoping to get the best possible return on your hard earned savings? Switch to` LGB - Club Lloyds Saver Account and enjoy a high rate of " +expected1+ " annual returns on your savings !";
                
                //  console.log("ddddefefr",test);
                assert.equal(tes, test);
                console.log("Assertion successfull");
                // if(cb){
                //  cb();
                // }
                
                resolve("Assertion successfull");
              })
      
          }) 
        }
        catch(err)
        {
            reject(err);
        }
        
    })
}

verifyofferingsavingsAPR(expected){
    
    var expected1;
    return new Promise(function(resolve,reject){
        try{
            driver.wait(until.elementLocated(By.css("#msg > p")),20000).then(d=>{
               
                var apr_formula = (n*APR)/(n+1);
                apr_formula=apr_formula.toFixed(2);

                // expected1 = String(apr_formula);
                expected1 = apr_formula.toString().substr(0,4)
                // console.log('formuls',expected1)
                d.getText().then(tes=>{
                // console.log(tes);
      
                var test = "Save more annually by Switching to LBG’s 0% Purchase and Balance Transfer, with a very low Annual Percentage Rate of " +expected1+ " !";
                
                // console.log("ddddefefr",test);
                assert.equal(tes, test);
                console.log("Assertion successfull");
                // if(cb){
                //  cb();
                // }
                
                resolve("Assertion successfull");
              })
      
          }) 
        }
        catch(err)
        {
            reject(err);
        }
        
    })

}

logout(){

        driver.wait(until.elementLocated(By.className("fas fa-sign-out-alt logout")),20000).then(d=>{
            d.click();
            console.log("loged out");
            driver.wait(until.elementLocated(By.className("Sign_in_to_your_account")),20000).then(tes=>{
                tes.isDisplayed();
            }).then(function(){
                // driver.quit();
        
             })
        }).catch(console.log);
}
}
module.exports = new lbgoffer;

