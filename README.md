# password-generator-project

## Description

Our week 3 homework assignment tasked us with taking a template for a random password generator and adding code in a javascript file so that when the generate password button was clicked it would generate a random password with the value of the selected criteria as part of the password. There were certain criteria including the length of password as well as whether to include uppercase/lowercase/numbers/special characters that the user should be able to select or confirm. 

## What I did

I created a function that would include all the code I needed to create a basic random password. Within this function I created variables for each criteria. I then created a second set of variables for the confirmation of the criteria. With these variables I made 'if' statements which would then add or ignore the criteria when a user would select confirm. 

The variables for the criteria were attached to strings which I split into arrays and used Math.random to get a random value from the array and add it to the finalpassword. To ensure each criteria had at least one value in the password I first added each criteria selected to the final password, then I used another set of 'if' statements to add the total array of each criteria to a new variable which then used another mathRandom and for loop to select random characters to complete the final password.

I also had error validation in the code to ensure the password length was appropriate and that at least one criteria was selected.

## Finished Product

Here is a screenshot and link to the finished Password Generator:
[Link to webpage](https://phalenh.github.io/password-generator-project/index.html)

![Password Generator pase with a red button to click genrate password.](./password-generator.png)