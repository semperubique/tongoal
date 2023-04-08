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

    logoImage.src = "assets/images/logo.svg";
    logIn.textContent = "Log in";
    register.textContent = "Create a free account";
    logIn.href = "#";
    register.href = "#";

    logo.appendChild(logoImage);
    logInAndRegister.appendChild(logIn);
    logInAndRegister.appendChild(register);

    header.appendChild(logo);
    header.appendChild(logInAndRegister);
  };
  const loadLandingPageMain = () => {
    const main = document.querySelector("main");
    const overview = document.createElement("div");
    const info1 = document.createElement("div");
    const info2 = document.createElement("div");
    const info3 = document.createElement("div");
    const info1Info = document.createElement("div");
    const info2Info = document.createElement("div");
    const info3Info = document.createElement("div");
    const info1Image = document.createElement("div");
    const info2Image = document.createElement("div");
    const info3Image = document.createElement("div");
    const info1InfoH2 = document.createElement("h2");
    const info1InfoP = document.createElement("p");
    const info1ImageImg = document.createElement("img");
    const info2InfoH2 = document.createElement("h2");
    const info2InfoP = document.createElement("p");
    const info2ImageImg = document.createElement("img");
    const info3InfoH2 = document.createElement("h2");
    const info3InfoP = document.createElement("p");
    const info3ImageImg = document.createElement("img");

    overview.classList.add("overview");
    info1Info.classList.add("info");
    info2Info.classList.add("info");
    info3Info.classList.add("info");

    info1InfoH2.textContent = "A platform that brings flamboyance to football";
    info1InfoP.textContent =
      "Find games near you and play with strangers, or create your own team and compete";
    info2InfoH2.textContent = "Unleash the beast";
    info2InfoP.textContent =
      "Compete and earn points to rank up your profile and be seen by everybody";
    info3InfoH2.textContent = "Football has never been this easy";
    info3InfoP.textContent = "Achieve your dreams in three steps";
    info1ImageImg.src = "assets/images/info-1.jpg";
    info2ImageImg.src = "assets/images/info-2.jpg";
    info3ImageImg.src = "assets/images/info-3.jpg";

    info1Info.appendChild(info1InfoH2);
    info1Info.appendChild(info1InfoP);
    info1Image.appendChild(info1ImageImg);
    info2Info.appendChild(info2InfoH2);
    info2Info.appendChild(info2InfoP);
    info2Image.appendChild(info2ImageImg);
    info3Info.appendChild(info3InfoH2);
    info3Info.appendChild(info3InfoP);
    info3Image.appendChild(info3ImageImg);
    info1.appendChild(info1Info);
    info1.appendChild(info1Image);
    info2.appendChild(info2Image);
    info2.appendChild(info2Info);
    info3.appendChild(info3Info);
    info3.appendChild(info3Image);
    overview.appendChild(info1);
    overview.appendChild(info2);
    overview.appendChild(info3);

    main.appendChild(overview);
  };
  const loadLandingPageFooter = () => {};

  const updateHeader = (isLogged) => {
    if (isLogged == false) {
      loadLandingPageHeader();
    }
  };
  const updateMain = (isLogged) => {
    if (isLogged == false) {
      loadLandingPageMain();
    }
  };
  const updateFooter = (isLogged) => {
    if (isLogged == false) {
      loadLandingPageFooter();
    }
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
