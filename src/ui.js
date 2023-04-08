import { updateUX } from "./ux";

const updateUI = (() => {
  const loadSocialIcons = () => {
    const head = document.querySelector("head");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css";
    head.appendChild(link);
  };

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

  const loadLandingPageFooter = () => {
    const footer = document.querySelector("footer");
    const column1 = document.createElement("div");
    const column2 = document.createElement("div");
    const column3 = document.createElement("div");
    const column1H3 = document.createElement("h3");
    const column1Links = document.createElement("div");
    const column1Link1 = document.createElement("a");
    const column1Link2 = document.createElement("a");
    const column1Link3 = document.createElement("a");
    const column2H3 = document.createElement("h3");
    const column2Links = document.createElement("div");
    const column2Link1 = document.createElement("a");
    const column2Link2 = document.createElement("a");
    const column3H3 = document.createElement("h3");
    const column3Links = document.createElement("div");
    const column3Link1 = document.createElement("a");
    const column3Link2 = document.createElement("a");
    const column3Link1Icon = document.createElement("i");
    const column3Link2Icon = document.createElement("i");

    column3Links.classList.add("social");
    column3Link1Icon.classList.add("fab");
    column3Link1Icon.classList.add("fa-whatsapp");
    column3Link2Icon.classList.add("fab");
    column3Link2Icon.classList.add("fa-instagram");

    column1H3.textContent = "Tongoal";
    column2H3.textContent = "Help";
    column3H3.textContent = "Follow us";
    column1Link1.textContent = "About us";
    column1Link1.href = "#";
    column1Link2.textContent = "Our services";
    column1Link2.href = "#";
    column1Link3.textContent = "Privacy policy";
    column1Link3.href = "#";
    column2Link1.textContent = "FAQ";
    column2Link1.href = "#";
    column2Link2.textContent = "Contact";
    column2Link2.href = "#";
    column3Link1.href = "#";
    column3Link2.href = "#";

    column3Link1.appendChild(column3Link1Icon);
    column3Link2.appendChild(column3Link2Icon);
    column1Links.appendChild(column1Link1);
    column1Links.appendChild(column1Link2);
    column1Links.appendChild(column1Link3);
    column2Links.appendChild(column2Link1);
    column2Links.appendChild(column2Link2);
    column3Links.appendChild(column3Link1);
    column3Links.appendChild(column3Link2);

    column1.appendChild(column1H3);
    column1.appendChild(column1Links);
    column2.appendChild(column2H3);
    column2.appendChild(column2Links);
    column3.appendChild(column3H3);
    column3.appendChild(column3Links);
    footer.appendChild(column1);
    footer.appendChild(column2);
    footer.appendChild(column3);
  };

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
      loadSocialIcons();
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
