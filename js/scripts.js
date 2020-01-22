function stringReplace(string){
  var regex = /[.,?!\s]/g;
  var newString = string.replace(regex, "");
  return newString;
}

function stringReverse(string){
  var revString = string.split("");
  revString = revString.reverse();
  revString = revString.join("");
  return revString;
}

function checkStrings(forward, backward){
  if(forward === backward){
    return true;
  }else{
    return false;
  }
}

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var initialString = $("#sentence").val().toLowerCase();
    var cleanString = stringReplace(initialString);
    console.log(cleanString);

    var reverseString = stringReverse(cleanString);
    console.log(reverseString);

    var isPalindrome = checkStrings(cleanString, reverseString);
    console.log(isPalindrome);

    $("#results").show();
    if (!isPalindrome){
      $(".not").append("not");
    } else{
      $(".not").text("");
    }
  });
});