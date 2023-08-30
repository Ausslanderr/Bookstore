// Importe a biblioteca do Selenium WebDriver para JavaScript
const { Builder, By, Key, until } = require('selenium-webdriver');

// Função async para poder usar comandos await

//Tudo Ok
async function acessarGerenciamentos() {
  // Crie um novo driver para o navegador (Chrome, nesse caso)
  let driver = await new Builder().forBrowser('chrome').build();

  try {

    await driver.get("http://localhost:3000")
    await driver.sleep(2000);
    await driver.findElement(By.xpath("/html/body/div/div[1]/nav/div/div/form/a[1]/button")).click()
    await driver.sleep(1000);
    await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[1]/input")).sendKeys("admin@gmail.com")
    await driver.sleep(1000);
    await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[2]/input")).sendKeys("teste")
    await driver.sleep(1000);
    await driver.findElement(By.xpath("/html/body/div/div[2]/form/button")).click()
    await driver.sleep(7000);
    //gerenciar pedidos
    await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[1]/a")).click();
    await driver.sleep(3000);
    //gerenciar usuario
    await driver.findElement(By.xpath("/html/body/div/div[1]/nav/div/div/form/a[1]/button")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/a")).click()
    await driver.sleep(2000);
    //gerenciar estoque
    
    await driver.findElement(By.xpath("/html/body/div/div[1]/nav/div/div/form/a[1]/button")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/a")).click();
    
    // Feche o navegador
    //await driver.quit();
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

// Chame a função para fazer a consulta usando o Selenium
acessarGerenciamentos();