# calculator
## The Odin Project // Calculator app
---

![unicorn calculator](/Screen%20Shot%20as%20at%2028%20April%202022.png)
![original unicorn calculator](/originalCalculator.jpg)

### **Goals** 
Create a functional calculator using HTML, CSS & Javascript. 

    - Must be able to evaluate a pair of numbers at the same then display result on screen
    - Result must then be able to be used in a subsequent equation
    - Round answers with long decimal numbers
    - Display snarky error message when user tries to divide by 0
    - Use an event listener on the button div 
    - Create & modify README with markdown
    - Add 3D effect to emulate my real life calculator

---
### **Positives**
I really enjoyed playing with the various box shadows & borders to create a 3D effect for my calculator. I love how the screen turned out. It's fun & satisfying seeing how each piece of code can have an effect on the whole product. 

### **Challenges:**
I did struggle at the beginning trying to implement the logic. There seemed to be so many combinations that I found it overwhelming trying to 'cover my bases' for every possible case. What worked for me was stepping back to the beginning & writing the expected value of each variable at each step, then filling out other scenarios from there. 

There was also a struggle with trying to get the confetti effect to work as it was not something I have experience with but I managed to make it work after some research. 

### **To Look Into:**
- SVGs or canvas for the horn. I wasnt able to get a 3D effect on the ears due to the shape but I would like to look into alternate methods which would allow me to make them more 3D. 

* * * 

## Pseudo for calculator

User presses number: 

    check if num1 is empty, if so
        number gets assigned to num1 variable 
        num1 variable displayed on screen
        
    if num1 not empty && operator is empty
        number gets concat to num1 variable
        num1 variable displayed on screen 
                
        - if number pressed again: repeat above if user presses number again
        
        - if operator pressed
            if operator is + - * / 
                operator assigned to operator variable
            if operator is = 
                operator assigned to operator variable
                check if num1 and num2 are not empty
                    run operate() function
                if num 1 or num 2 are empty, do nothing

User presses number after operator:

        if num1 not empty, operator not empty and num2 empty,
            number gets assigned to num2 variable
            num2 displayed on screen

    User presses = 
        if num1, num2 and operator arent empty, 
            call operate() 
            display results on screen
            update num1 var with result
            clear num2 and operator


    user presses operator
        check if num1 & num 2 are empty, if so, do nothing


    user presses clear
        reset num1, num2 and operator to empty


    user presses clear entry
        if num1, operator and num 2 empty, do nothing
        if num1 not empty, and num 2 not empty, clear num 2 or clear last from screen
        if num 1 not empty, and num 2 empty, clear num 1 from screen


    WHEN DOES THE SCREEN NEED TO BE CLEARED:
    - When the CE button is clicked

    WHEN DOES THE SCREEN NEED TO BE UPDATED WITH NEW VALUE
    - When num1 is entered (concat with += until op is pressed)
    - When num2 is entered (update screen with new value of num2, concat until op pressed)
    - When op btn is pressed with num 1, num2 and op having values (display result)


### CSS TO LOOK INTO
    - outline-style: double (for eyes area), possibly for ears
    - outline-offset: 2px ( goes 2px outside box)
    - outline-offset: -2px (goes 2px inside box)
    - transform: skewX(30deg) - for horn, border radius top right and btm left corners
    or
    