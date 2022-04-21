readme.md 

Pseudo for calculator



# User presses number 
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
                style of operator button changes
            if operator is = 
                operator assigned to operator variable
                check if num1 and num2 are not empty
                    run operate() function
                if num 1 or num 2 are empty, do nothing
    User presses number after operator
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














    equation object gets passed to operator function

    all number buttons in object
    all operator buttons in another object
    