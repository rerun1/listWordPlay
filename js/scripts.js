var userWords = [];
var userWordsTrimWords = [];
var threeCharacterOrMoreWords =[];

$(document).ready(function(){

  $("div#userSentence").empty();

  $("form#items").submit(function(event){
    event.preventDefault();

    $("div#userSentenceIntro").show();

    userWords = $("textarea#sentence").val().split(", ");

    userWordsTrimWords = userWords.map(function(word){
      return word.trim(this);
    });

    threeCharacterOrMoreWords = userWordsTrimWords.filter(word => word.length >= 3);

    threeCharacterOrMoreWords.reverse();

    var sentenceAlter = threeCharacterOrMoreWords.join(" ");


    $("ul#userSentence").append("<li><i>" + sentenceAlter + "</i></li>");

    userWords.sort();

    userWords.forEach(function(word){
      $("ul#userList").append("<li>" + word + "</li>");
    });

  });

});
