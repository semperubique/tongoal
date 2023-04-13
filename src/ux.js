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
        description: "Please be respectful and arrive early",
        maxNumberOfPlayersPerTeam: "6",
        team1Status: "user1, user2, user3",
        team2Status: "user4, user7",
      },
      {
        date: "23/09/2023",
        time: "10:00",
        stadium: "Bina Stadium",
        region: "Baku",
        country: "Afghanistan",
        description: "No description available",
        team1Status: "",
        team2Status: "",
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
