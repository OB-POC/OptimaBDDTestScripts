var seleniumWebdriver = require('selenium-webdriver');
var By = seleniumWebdriver.By
var assert = require('assert');
var Action = seleniumWebdriver.ActionSequence
var total_balance = 0;
class merge_account{

    verify_wallet(){
        driver.wait(until.elementLocated(By.className("My-financials")),20000).then(function(){
            driver.findElement(By.xpath("//*[@id='root']/div/div/div[2]/div[1]/div[2]/a")).click();
            driver.wait(until.elementLocated(By.xpath("//h1[text()='My Accounts']")),20000).then(tes=>{
                tes.getText().then(tex=>{
                    console.log(tex);
                })
            })
        }).then(function(){
            driver.wait(until.elementsLocated(By.xpath("//div/div/div[2]/div[2]/div[1]/div[2]")),20000).then(c=>{

        for(var i=1;i<=c.length;i++){
            // driver.findElement(By.xpath("//div/div["+i+"]/div[2]/div[2]/div[1]/div[2]")).click();
            driver.findElement(By.xpath("//div/div["+i+"]/div[2]/div[2]/div[1]/div[2]")).getText().then(g=>{
                g= g.replace('£ ','');
                total_balance+=Number(g)
                // console.log('totalll',total_balance)
            })
        }        
        })

        })
    }

    optimize_screen(){
        driver.wait(until.elementLocated(By.className("tranfer_merge_button")),20000).then(optimize=>{
            optimize.click();
        }).then(function(){
            driver.wait(until.elementLocated(By.className("optimizingsModalHeader")),20000).then(tx=>{
                tx.getText().then(he=>{
                    console.log(he); 
                })
            })
        })

    }

    click_PortAccount(){

        driver.wait(until.elementLocated(By.xpath("//div[text()='Port my accounts']/following-sibling::div[1]")),20000).then(port=>{
        port.click();
        
        }).then(function(){
            driver.wait(until.elementLocated(By.xpath("//button[text()='NEXT']")),20000).then(b=>{
                b.click();
                }).then(function(){
                    driver.wait(until.elementLocated(By.xpath("//div[text()='Port my funds from ?']")),20000).then(b=>{
                        b.isDisplayed();
                    })
                })
        })
    }

merge_LBGaccount(){
    var count = 0;
    driver.wait(until.elementsLocated(By.xpath("//*/div/div/div[2]/div[2]/div[2]/div[3]/div")),20000).then(c=>{

        for(var i=1;i<=c.length;i++){
            driver.findElement(By.xpath("//*/div/div/div[2]/div[2]/div[2]/div[3]/div["+i+"]")).click();
            driver.findElement(By.xpath(" //div[2]/div[2]/div[3]/div["+i+"]/div[2]/div[2]/div/div[2]")).getText().then(g=>{
                g= g.replace('£ ','');
                count+=Number(g)
            })
        }        
        }).then(function(){
            driver.wait(until.elementLocated(By.xpath("//div[text()='NEXT']")),20000).then(b=>{
                b.click();
                }).then(function(){
                    driver.wait(until.elementLocated(By.xpath("//div[text()='Select to which account you want all your accounts to be ported']")),20000).then(b=>{
                        b.isDisplayed();
                    })
                })
        }).then(function(){
            driver.findElement(By.xpath("//div/div[2]/div[2]/div[2]/div[3]/div//following-sibling::*//div[text()='Llyods']")).click();
            driver.wait(until.elementLocated(By.xpath("//div[text()='NEXT']")),20000).then(b=>{
                b.click();

        })        
        })
        .then(function(){
            driver.wait(until.elementLocated(By.xpath("//div[text()='Confirm']")),20000).then(b=>{
                b.isDisplayed();
                driver.findElement(By.xpath("//div[text()='NEXT']")).click();
                
        })  
        })
        .then(function(){
            driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'Your accounts have been ported to ')]")),20000).then(b=>{
                b.isDisplayed();
                driver.findElement(By.xpath("//div[text()='DONE']")).click();  
                  
        })
        })
}

veriy_LBGaccount(){

    driver.wait(until.elementLocated(By.xpath("//h1[text()='My Accounts']")),20000).then(tes=>{
                tes.isDisplayed();
     }).then(function(){

        driver.wait(until.elementLocated(By.xpath("//div/div[2]/div[1]/div[1]/div[text()='LBG']")),20000).then(d=>{
            d.isDisplayed();
            driver.findElement(By.xpath("//div/div/div[2]/div[2]/div[1]/div[2]")).getText().then(g=>{
            g= g.replace('£ ','');

            assert.equal(g,total_balance);
            console.log('Assertion successfull');
            total_balance=0;
        })
        })
        

     })

}

verify_portedAccount(){
    driver.findElement(By.xpath("(//div/div[1]/div[2]/div[1]/div[1]/div[not(text()='Halifax') or text()='HSBC' or text()='Barclays'])[1]")).isDisplayed();
}

merge_Barclaysaccount(){
    var count = 0;
    driver.wait(until.elementsLocated(By.xpath("//div[3]/div/div[2]/div[1]/div[1]/div[@class='port-bankName' and not(text()='Barclays')]")),20000).then(c=>{

        for(var i=1;i<=c.length;i++){
            driver.findElement(By.xpath("//div[3]/div["+i+"]/div[2]/div[1]/div[1]/div[@class='port-bankName' and not(text()='Barclays')]")).click();
            driver.findElement(By.xpath("//div[2]/div[2]/div[3]/div["+i+"]/div[2]/div[2]/div/div[2]")).getText().then(g=>{
                g= g.replace('£ ','');
                count+=Number(g)
            })
        }        
        }).then(function(){
            driver.wait(until.elementLocated(By.xpath("//div[text()='NEXT']")),20000).then(b=>{
                b.click();
                }).then(function(){
                    driver.wait(until.elementLocated(By.xpath("//div[text()='Select to which account you want all your accounts to be ported']")),20000).then(b=>{
                        b.isDisplayed();
                    })
                })
        }).then(function(){
            driver.findElement(By.xpath("//div/div[2]/div[2]/div[2]/div[3]/div//following-sibling::*//div[text()='Barclays']")).click();
            driver.wait(until.elementLocated(By.xpath("//div[text()='NEXT']")),20000).then(b=>{
                b.click();

        })        
        })
        .then(function(){
            driver.wait(until.elementLocated(By.xpath("//div[text()='Confirm']")),20000).then(b=>{
                b.isDisplayed();
                driver.findElement(By.xpath("//div[text()='NEXT']")).click();
                
        })  
        })
        .then(function(){
            driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'Your accounts have been ported to ')]")),20000).then(b=>{
                b.isDisplayed();
                driver.findElement(By.xpath("//a[2]/img")).click();
                // driver.findElement(By.xpath("//div[text()='DONE']")).click();           
        })
        }).then(function(){
            driver.wait(until.elementLocated(By.className("weeklysaving text-style-1")),20000).then(b=>{
                b.isDisplayed();
                driver.findElement(By.xpath("//*/a/div/img")).click();
            })
        })

}

verify_Barclaysaccount(){

    driver.wait(until.elementLocated(By.xpath("//h1[text()='My Accounts']")),20000).then(tes=>{
                tes.isDisplayed();
     }).then(function(){

        driver.wait(until.elementLocated(By.xpath("//div/div[2]/div[1]/div[1]/div[text()='Barclays']")),20000).then(d=>{
            d.isDisplayed();
            driver.findElement(By.xpath("//div/div/div[2]/div[2]/div[1]/div[2]")).getText().then(g=>{
            g= g.replace('£ ','');

            assert.equal(g,total_balance);
            console.log('Assertion successfull');
            total_balance=0;
        })
        })
     })

}


click_Financial(){

    driver.wait(until.elementLocated(By.xpath("//div[text()='Financial Advisory']/following-sibling::div[1]")),20000).then(port=>{
    port.click();
    
    }).then(function(){
        driver.wait(until.elementLocated(By.xpath("//button[text()='NEXT']")),20000).then(b=>{
            b.click();
            }).then(function(){
                driver.wait(until.elementLocated(By.className("weeklysaving text-style-1")),20000).then(b=>{
                    b.isDisplayed();
                })
            })
    })
}



logout(){

    driver.wait(until.elementLocated(By.className("fas fa-sign-out-alt logout")),20000).then(d=>{
        d.click();
        console.log("loged out");
        driver.wait(until.elementLocated(By.className("Sign_in_to_your_account")),20000).then(tes=>{
            tes.isDisplayed();
        })
    }).catch(console.log);
}

}

module.exports= new merge_account;
