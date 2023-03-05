function validatePassword(password) {
  // Проверка за дължина между 6 и 10 символа
  const lengthIsValid = password.length >= 6 && password.length <= 10;

  // Проверка за наличие само на букви и цифри
  const containsOnlyLettersAndNumbers = password.split("").every((char) => {
    const charCode = char.charCodeAt(0);
    // Методът charCodeAt() връща числовата стойност на ASCII кода на символа на дадена позиция в низа.
    //  За символа 'a', който е на първа (единствена) позиция в низа 'a', методът 'a'.charCodeAt(0) ще
    // върне числото 97. В случая, тъй като в низа има само един символ, позиция 0 сочи към този символ.
    // В общия случай, когато имаме низ от много символи, можем да използваме charCodeAt() с подходяща позиция в низа,
    //  за да вземем ASCII кода на желания символ. Например, ако имаме низа 'hello' и искаме да вземем ASCII кода на
    // символа на втора позиция (индекс 1), можем да използваме 'hello'.charCodeAt(1), което ще върне числото 101, което
    // е ASCII кодът на символа 'e'.

    const isLetter =
      (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
    const isNumber = charCode >= 48 && charCode <= 57;
    return isLetter || isNumber;
    //     Да, return isLetter || isNumber; означава, че изразът ще върне стойност true, ако поне една от променливите
    //     isLetter или isNumber е истина (true), и false в противен случай. Това се дължи на логическия оператор "или"
    //     (||), който връща true, ако поне един от операндите му е true.

    // В случая, ако isLetter е true, значи символът е буква и методът ще върне true, без значение каква е стойността на
    //  isNumber. Ако isLetter е false, то isNumber ще бъде проверено. Ако и isNumber е false, методът ще върне false,
    //  защото символът не е нито буква, нито цифра. Ако isNumber е true, то символът е цифра и методът ще върне true.
  });

  // Проверка за наличие на поне 2 цифри
  const hasAtLeastTwoDigits =
    password
      .split("")
      .filter((char) => char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
      .length >= 2;

  // Връщане на резултат от валидацията
  // return lengthIsValid && containsOnlyLettersAndNumbers && hasAtLeastTwoDigits;
  if (lengthIsValid && containsOnlyLettersAndNumbers && hasAtLeastTwoDigits) {
    console.log("Password is valid");
  }
  if (lengthIsValid == false) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (containsOnlyLettersAndNumbers == false) {
    console.log("Password must consist only of letters and digits");
  }
  if (hasAtLeastTwoDigits == false) {
    console.log("Password must have at least 2 digits");
  }
}

// Примери за използване
validatePassword("MyPass123"); // true
validatePassword("logIn"); // false
validatePassword("Pa$s$s"); // false
