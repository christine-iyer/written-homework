## Written Homework Questions Unit 3

**1. What is a Single Page Application?**
<details>Single Page Applications or SPAs are web applications that can access different data with the UI updating the webpages without trigger a full page refresh.

Three concepts that make this possible are:
* Client-Side Rendering
* Client-Side Routing
* AJAX Communications between client and server
     <summary>See Answer</summary>
     
</details>
 <br> </br>

**2. What is REACT?**
<details>REACT is an open-source front-end JavaScript library that is used for building user interfaces, especially SPAs.
It is used for handling view layer for web and mobile apps.
React specifically works with seperation of concerns and using props to move data amongst the page.
Another react highlight is that components used to develop page views are reusable.
     <summary>See Answer</summary>
</details>
<br> </br>


**3. What is JSX?**
<details>JSX is a way to incoporate your JavaSciprt into HTML for views. It provides syntax for the react create element function. 
     <summary>See Answer</summary>
</details>
<br> </br>

**4. What is Babel?**
<details>Babel is a toolchain that converts code into backword compatible JavaScript. So that it can be used in current and older browser environments while allowing developers access to the latest JS.  
     <summary>See Answer</summary>
</details>
<br> </br>

**5. What is Webpack?**
<details>Webpack is a module bundler that compiles JavaScript modules. It takes modules with dependancies and generates static assets representing those modules. 
     <summary>See Answer</summary>
</details>
<br> </br>

**6. What is Create React App?**
<details>CRA is a command line interface tool that allows a quick create and run React app with no configuration step.

The codes looks like:

``` create-react-app appname ```
/
     <summary></summary>
</details>
<br> </br>

**7. What are all the JavaScript Data Types?**
<details>

* String
* Booleans
* Null
* Undefined
* Object
* Symbol
* Number
* BigInt (new in 2020)

     <summary>See Answer</summary>
</details>
<br> </br>

**8. What is the Difference Between Const Let and Var? Consider Scope ... Give an example**
<details> 

### SCOPE

* Const is used to initiate immutable variables, meaning its value can not be overwritten. Their scope is local or global depending where its created.

* Let is used to declare a variable whose value that may or may not be mutated in future. Like const variables, their scope is local or global.

* Var is the OG constant. It is available in the global scope.

     <summary>See Answer</summary>

</details>
<br> </br>

**9. Pass By Value vs Pass By Reference? Why would you say a String is pass by value/ or a value type? Why is an object a reference type?**
<details>JavaScript is always Pass by Value meaing that an object's value is read as coded. If you pass an object to a function, the 'value' is really a refernce to that object, so the function can modify that objects properties but not cause the variable outside the function to point to some other object. 
     <summary>See Answer</summary>
</details>
<br> </br>

**10. What do Map , Filter and Reduce do? Do they mutate the array you call them on?**
<details>Map, Filter, and Reduce are all array mutation techiniques.
* Map is used when you are applying something to each index of the array.
* Filter will choose specfic indeces based on specific constraints.
* Reduce will apply functionality when you only want one answer.
     <summary>See Answer</summary>
</details>
<br> </br>

**11. What are all the Falsey Values in JavaScript? Why do you think this is important to know?**
<details>

* Undefined

* Null

* Boolean arguements
* When an arguement is ```+0 ,```-0 , or Nan
* Empty strings
* If an arguement is 0n in BigInt
     <summary>See Answer</summary>
</details>
<br> </br>

**12. What are Async and Await?**
<details>the async/ await functionality allows asynchronous promise based requests in a cleaner syntax than before. The promise is a guarentee that there will be a resolution, no matter the response.
     <summary>See Answer</summary>
</details>
<br> </br>

**13. What is an async function?**
<details>Its a function that doesnt immediately give a response.
     <summary>See Answer</summary>
</details>
<br> </br>

**14. What are try and catch?**
<details>The JS try/catch functionality allows developers to handle the errors that will happen. The syntax is descriptive, try this functionality, catching the error before it happens.

```
try () {

} catch () {

}
```

     <summary>See Answer</summary>
</details>
<br></br>

### Hacker Rank Unit 3

**1. Min Max Sum [problem here](https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem)**

<details>
     <summary>Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
</summary>
</details>
<br></br>

**2. Plus Minus [problem here](https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem)**

<details>
     <summary>Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
</summary>
</details>
<br></br>

**3. Time Conversion [problem here](https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem?isFullScreen=true)**

<details>Solution here
     <summary>Given a time in -hour AM/PM format, convert it to military (24-hour) time.

**Note**: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
</summary>
</details>




