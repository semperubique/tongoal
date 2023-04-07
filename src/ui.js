import { updateUX } from "./ux";

const updateUI = (() => {
  const loadLandingPageHeader = () => {
    const header = document.querySelector("header");
    const logo = document.createElement("div");
    const logInAndRegister = document.createElement("div");
    const logIn = document.createElement("a");
    const register = document.createElement("a");
    const logoImage = document.createElement("img");

    logo.classList.add("logo");
    logInAndRegister.classList.add("logInAndRegister");
    logIn.classList.add("logIn");
    register.classList.add("register");

    logoImage.src = "../src/assets/images/logo.svg";
    logIn.textContent = "Log in";
    register.textContent = "Create a free account";

    logo.appendChild(logoImage);
    logInAndRegister.appendChild(logIn);
    logInAndRegister.appendChild(register);

    header.appendChild(logo);
    header.appendChild(logInAndRegister);
  };
  const loadLandingPageMain = () => {};
  const loadLandingPageFooter = () => {};

  const updateHeader = (isLogged) => {
    if (isLogged == false) {
      loadLandingPageHeader();
    }
  };
  const updateMain = (isLogged) => {
    console.log(isLogged);
  };
  const updateFooter = (isLogged) => {
    console.log(isLogged);
  };

  const isLogged = updateUX.isLogged();
  const updateBody = (isLogged) => {
    updateHeader(isLogged);
    updateMain(isLogged);
    updateFooter(isLogged);
  };

  return { updateBody };
})();

export { updateUI };
