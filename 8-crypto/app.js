const password = "passwor";

const passwordEncoder = (password) => {
  arrayOfPassword = password.split("");
  firstPartOfArrayOfPassword = arrayOfPassword.slice(
    0,
    arrayOfPassword.length / 2
  );
  secondPartOfArrayOfPassword = arrayOfPassword.slice(
    arrayOfPassword.length / 2
  );
  firstPartOfArrayOfPassword.reverse();
  secondPartOfArrayOfPassword.reverse();
  itog = firstPartOfArrayOfPassword
    .concat(secondPartOfArrayOfPassword)
    .join("");
  return itog;
};

const isCorrespondsToTheCipher = (password, passwordEncoder) => {
  return password === passwordEncoder;
};

console.log(
  isCorrespondsToTheCipher(password, passwordEncoder(passwordEncoder(password)))
);
