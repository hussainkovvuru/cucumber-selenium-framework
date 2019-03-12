package com.gyanweiser.cucumber.starter.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class LoginStepDefinition {
	WebDriver driver;

	@Given("^I am on the home page$")
	public void i_am_on_the_home_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "/home/hussain/Downloads/chromedriver");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://classic.crmpro.com/index.html");

	}

	@Then("^Enter the username \"([^\"]*)\" and password \"([^\"]*)\" credentials$")
	public void enter_the_username_as_username_and_password_as_abc(int arg1) throws Throwable {
		driver.findElement(By.id("username")).sendKeys("hussain01");
		driver.findElement(By.id("password")).sendKeys("hussen@123");

	}

	@Then("^click on the login button$")
	public void click_on_the_login_button() throws Throwable {

		driver.findElement(By.xpath("//*[@id=\"loginForm\"]/div/div/input")).click();

	}

	@Then("^successful message is displayed$")
	public void successful_message_is_displayed() throws Throwable {
		String exp_message = "CRMPRO";
		String Stringactual = driver
				.findElement(By.xpath("/html/body/table[1]/tbody/tr[2]/td[1]/div/table/tbody/tr/td[1]")).getText();
		Assert.assertEquals(exp_message, Stringactual.toString());

	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.quit();

	}

}
