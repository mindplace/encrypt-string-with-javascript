function attachEncryptForm(){
  $("#encrypt-set").on("submit", function(e){
    e.preventDefault();

    var stringToEncrypt = $("#encrypt-plain-string").val();
    var password = $("#encrypt-password").val();

    if (stringToEncrypt.length && password.length) {
      var encryptedResult = CryptoJS.AES.encrypt(stringToEncrypt, password);
      var encryptedString = encryptedResult.toString();
      $("#encrypted-result").text(encryptedString);
    }
  });
}

function attachDecryptForm(){
  $("#decrypt-set").on("submit", function(e){
    e.preventDefault();

    var stringToDecrypt = $("#decrypt-plain-string").val();
    var password = $("#decrypt-password").val();

    if (stringToDecrypt.length && password.length) {
      var decryptedResult = CryptoJS.AES.decrypt(stringToDecrypt, password);
      var decryptedString = decryptedResult.toString(CryptoJS.enc.Utf8);
      $("#decrypted-result").text(decryptedString);
    }
  });
}

function attachClearForm(){
  $("#clear-form").on("click", function(e){
    e.stopImmediatePropagation();
    $(this).parent().find(".input-string").val("");
  });
}

$(document).ready(function(e){
  attachEncryptForm();
  attachDecryptForm();
  attachClearForm();
});
