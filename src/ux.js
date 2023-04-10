const updateUX = (() => {
  const getLoginStatus = () => {
    return true;
  };

  const getGames = () => {
    const games = [
      {
        date: "20 September 2023",
        time: "10:00",
        stadium: "Yeni Surakhani Stadium",
        region: "Baku",
        country: "Azerbaijan",
      },
      {
        date: "23 September 2023",
        time: "10:00",
        stadium: "Bina Stadium",
        region: "Baku",
        country: "Azerbaijan",
      },
    ];
    return games;
  };

  return { getLoginStatus, getGames };
})();

export { updateUX };
