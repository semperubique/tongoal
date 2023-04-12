const updateUX = (() => {
  const getLoginStatus = () => {
    return true;
  };

  const getGames = () => {
    const games = [
      {
        date: new Date().toLocaleDateString(),
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
        country: "Afghanistan",
      },
    ];
    return games;
  };

  const getTeams = () => {
    const teams = [
      {
        name: "Vehwiler",
        manager: "Furfur",
        country: "Azerbaijan",
      },
      {
        name: "Keleler",
        manager: "Furfur",
        country: "Azerbaijan",
      },
      {
        name: "Kelemler",
        manager: "Furfur",
        country: "Azerbaijan",
      },
    ];
    return teams;
  };
  return { getLoginStatus, getGames, getTeams };
})();

export { updateUX };
