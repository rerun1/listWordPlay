


$(document).ready(function(){

$("div#userSentence").empty();

  $("form#items").submit(function(event){
    event.preventDefault();

    $("div#userSentenceIntro").show();

    var userWords = $("textarea#sentence").val().split(", ");

    var userWordsStrip = userWords.map(function(word){
      return word.trim(this);
    });

    var threeCharacterWords = userWordsStrip.filter(word => word.length >= 3);

    threeCharacterWords.reverse();

    var sentenceAlter = threeCharacterWords.join(" ");

    console.log(sentenceAlter);

    $("ul#userSentence").append("<li><i>" + sentenceAlter + "</i></li>");

    userWords.sort();

    userWords.forEach(function(word){
      $("ul#userList").append("<li>" + word + "</li>");
    });

  });

});
