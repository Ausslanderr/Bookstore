// Importe a biblioteca do Selenium WebDriver para JavaScript
const { Builder, By, Key, until } = require('selenium-webdriver');

// Função async para poder usar comandos await

//Tudo Ok.
async function realizarCadastro() {
  // Crie um novo driver para o navegador (Chrome, nesse caso)
  let driver = await new Builder().forBrowser('chrome').build();

  try {

    await driver.get("http://localhost:3000/signup")
    await driver.sleep(2000);
    await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[1]/input")).sendKeys("Antonio Maria")
    await driver.sleep(1000);
    await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[2]/input")).sendKeys("antonio@gmail.com")
    await driver.sleep(1000);
    await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[3]/input")).sendKeys("38219117")
    await driver.sleep(1000);
    /*
    await driver.executeScript ("document.getElementById('dateofbirth').removeAttribute('readonly',0);");    const inputField = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[4]/label"));
    const date = "1975-09-09"; // Format: yyyy-mm-dd

    await inputField.clear(); // Clear any existing value
    await inputField.sendKeys(date);
*/
    await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[5]/input")).sendKeys("12345678911")
    await driver.sleep(1000);
    await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[6]/input")).sendKeys("teste");
    await driver.sleep(2000);
    await driver.findElement(By.xpath("/html/body/div/div[2]/form/button")).click()
    await driver.sleep(3000);

    // Feche o navegador
    await driver.quit();
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

// Chame a função para fazer a consulta usando o Selenium
realizarCadastro();