## Problem name
Multiple Synchronized Inputs with Common State

## Problem statement
You are provided with a SliderInput component that includes three interactive elements:

1. Slider Input
2. Number Input
3. Submit Button

#### Goal
Ensure the Slider and Number Input are synchronized

#### Requirements
1. Slider Input: Changing the slider should update the number input value.
2. Number Input:
If the value is within the valid range, update the slider to match.
If the value is out of range, the slider should retain its previous valid value.
3. Submit Button:
If the number input value is out of range, disable the submit button.
If the value is within range, enable the submit button. On submission, pass the value to the onSubmit callback.
Refer to the sample.test.js file for further details

## Submission Instructions
1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.

To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.