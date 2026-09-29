function checkPassword() {
    //const password2 = document.getElementById("password2");
    /*
    at least one upper case, one number, one symbol and minimum length of 8
    ^: asserts the start of the string.
    (?=.*[A-Z]): lookahead to ensure that the string contains at least one uppercase letter.
    (?=.*\d): lookahead to ensure that the string contains at least one digit.
    (?=.*[^\w\s]): lookahead to ensure that the string contains at least one symbol that is not a word character or whitespace.
    .{8,}: ensures that the string has a minimum length of 8 characters.
    $: asserts the end of the string.
    */

    /*
      \w (lowercase) matches any "word character" (letters, numbers, and the underscore _).
      \W (uppercase) is the exact opposite (negation). It matches anything that is NOT a word character (symbols, punctuation, and spaces).
      [\W_] Includes underscores and spaces
      [^\w\s] Strict symbols only

      ^: Inside square brackets at the start: it means "NOT" (Negate)
      ^: Outside of square brackets (at the very beginning): "Start of string"
      (?=...) (Lookahead): It checks ahead in the string to see if a pattern exists, without actually consuming any characters.
    */


    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    if (!regex.test(password2.value)){
      message = "Your password must have at least one upper case, one number, one symbol and minimum length of 8";
      //alert(message);
      document.getElementById("message").innerHTML = message;
    }
    else
      document.getElementById("message").innerHTML = "Success";

}
// Option1
window.addEventListener("load", ()=> {
  document.getElementById("password2").addEventListener('change',checkPassword);
});
/*
// Option2
window.addEventListener('load', function(event) {
  document.getElementById("password2").addEventListener("change",checkPassword);
});
*/
/*
// Option3
window.addEventListener('load', function() {
  document.getElementById("password2").addEventListener("change",checkPassword);
});
*/


