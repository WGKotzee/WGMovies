document.addEventListener('DOMContentLoaded', () => {
  const loginContainer = document.getElementById('login-container');
  const loginForm = document.getElementById('login-form');
  const passwordInput = document.getElementById('password');
  const movieContainer = document.getElementById('movie-container');
  const movieList = document.getElementById('movie-list');
  const videoPlayer = document.getElementById('video-player');

  const correctPassword = 'Movies123';
  const loggedInKey = 'loggedIn';

  movieContainer.style.display = 'none';
  loginContainer.style.display = 'block';

  // Check if already logged in
  const isLoggedIn = localStorage.getItem(loggedInKey);

  // Function to handle successful login
  function handleLogin() {
      localStorage.setItem(loggedInKey, 'true');
      movieContainer.style.display = 'block';
      loginContainer.style.display = 'none';
      populateMovieList();
  }

  // Function to handle login error
  function handleLoginError() {
      alert('Incorrect password! Please try again.');
      passwordInput.value = '';
  }

  function testLogin() {
      const enteredPassword = passwordInput.value.trim();
      if (enteredPassword === correctPassword) {
          handleLogin();
      } else {
          handleLoginError();
      }
  }

  loginForm.addEventListener('submit', (enter) => {
      enter.preventDefault();
      testLogin();
  });

  const movieFiles = [
    { complexName: '65.2023.mp4', simpleName: '65' },
    { complexName: '1917_(2019)_BluRay_high_(fzmovies.net)_b1cf082b5963af96036479ea31a18432.mp4', simpleName: '1917' },
    { complexName: 'A.Goofy.Movie.1995.1080p.BluRay.x264-[YTS.AM].mp4', simpleName: 'A Goofy Movie' },
    { complexName: 'American.Assassin.2017.mp4', simpleName: 'American Assassin' },
    { complexName: 'Ant-Man and the Wasp (2018) 720p.mp4', simpleName: 'Ant-Man and the Wasp' },
    { complexName: 'Avatar.The.Way.of.Water.2022.20230328.mp4', simpleName: 'Avatar The Way Of Water' },
    { complexName: 'Black.Adam.2022.REPACK.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Black Adam' },
    { complexName: 'Bloodshot.2020.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Bloodshot' },
    { complexName: 'Crawl.2019.20191014.mp4', simpleName: 'Crawl' },
    { complexName: 'Dinosaur.2000.1080p.BrRip.x264.YIFY.mp4', simpleName: 'Dinosaur' },
    { complexName: 'Divergent.2014.mp4', simpleName: 'Divergent' },
    { complexName: 'Dungeons.Dragons.Honor.Among.Thieves.2023.mp4', simpleName: 'Dungeons and Dragons: Honor Among Thieves' },
    { complexName: 'Elemental.2023.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Elemental'},
    { complexName: 'Evolution.2001.720p.BrRip.x264.YIFY.mp4', simpleName: 'Evolution' },
    { complexName: 'Fast_and_Furious_Presents_-_Hobbs_and_Shaw_(2019)_BluRay_high_(fzmovies.net)_88dfe5971acbebc29b5cdb0d888dd58b.mp4', simpleName: 'Fast and Furious Presents - Hobbs and Shaw' },
    { complexName: 'Flubber.1997.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Flubber' },
    { complexName: 'Ford_v_Ferrari_(2019)_BRRip_high_(fzmovies.net)_6ded023830a81a9a321ea7be85c88277.mp4', simpleName: 'Ford vs Ferrari' },
    { complexName: 'ghosted.2023.mp4', simpleName: 'Ghosted' },
    { complexName: 'Gladiator.EXTENDED.2000.1080.BrRip.264.YIFY.mp4', simpleName: 'Gladiator' },
    { complexName: 'Gnomeo.Juliet.2011.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Gnomeo and Juliet' },
    { complexName: 'Godzilla.Vs..Kong.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Godzilla vs Kong' },
    { complexName: 'Guardians.of.the.Galaxy.Vol.3.2023.720p.WEBRip.900MB.x264-GalaxyRG.mkv', simpleName: 'Guardians of the Galaxy Vol 3' },
    { complexName: 'Harry.Potter.and.the.Chamber.of.Secrets.2002.mp4', simpleName: 'Harry Potter and the Chamber of Secrets' },
    { complexName: 'Harry.Potter.and.the.Deathly.Hallows.Part.1.mp4', simpleName: 'Harry Potter and the Deathly Hallows Part 1' },
    { complexName: 'Harry.Potter.And.The.Deathly.Hallows.Part.2.2011.mp4', simpleName: 'Harry Potter and the Deathly Hallows Part 2' },
    { complexName: 'Harry.Potter.and.the.Goblet.of.Fire.2005.mp4', simpleName: 'Harry Potter and the Goblet of Fire' },
    { complexName: 'Harry.Potter.and.the.Half-Blood.Prince.2009.mp4', simpleName: 'Harry Potter and the Half-Blood Prince' },
    { complexName: 'Harry.Potter.and.the.Order.of.the.Phoenix.2007.mp4', simpleName: 'Harry Potter and the Order of the Phoenix' },
    { complexName: 'Harry.Potter.and.the.Prisoner.of.Azkaban1.2004.mp4', simpleName: 'Harry Potter and the Prisoner of Azkaban' },
    { complexName: 'Harry.Potter.And.The.Sorcerers.Stone.200.mp4', simpleName: 'Harry Potter and the Sorcerers Stone' },
    { complexName: 'Hercules.2014.mp4', simpleName: 'Hercules' },
    { complexName: 'Hypnotic.2023.mp4', simpleName: 'Hypnotic' },
    { complexName: 'I.am.legend.720p.450mbmu.mkv', simpleName: 'I am legend' },
    { complexName: 'Ice.Age.Continental.Drift.2012.mp4', simpleName: 'Ice Age Continental Drift' },
    { complexName: 'Insurgent.2015.mp4', simpleName: 'Insurgent' },
    { complexName: 'Into.the.Blue.2005.mp4', simpleName: 'Into the Blue' },
    { complexName: 'John.Wick.2014.720p.BluRay.x264-[YTS.AG].mp4', simpleName: 'John Wick' },
    { complexName: 'John.Wick.Chapter.4.2023.20230523.mp4', simpleName: 'John Wick Chapter 4' },
    { complexName: 'Jumanji_The_Next_Level_(2019)_WEB-DL_high_(fzmovies.net)_064a03eb71d6838d68bc07663c3dfccf.mp4', simpleName: 'Jumanji: The Next Level' },
    { complexName: 'Jupiter.Ascending.2015.mp4', simpleName: 'Jupiter Ascending' },
    { complexName: 'Jurassic.Park.1993.mp4', simpleName: 'Jurassic Park' },
    { complexName: 'Jurassic.World.Dominion.2022.REPACK.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Jurassic World Dominion' },
    { complexName: 'Kick.Ass.2010.720p.BrRip.264.YIFY.mp4', simpleName: 'Kick-Ass' },
    { complexName: 'Kick-Ass.2.2013.720p.BluRay.x264.YIFY.mp4', simpleName: 'Kick-Ass' },
    { complexName: 'Lilo.and.Stitch.2002.1080p.BluRay.x264.YIFY.mp4', simpleName: 'Lilo and Stitch' },
    { complexName: 'Midway_(2019)_BluRay_high_(fzmovies.net)_a7b32c07fb677b61cb75dfc61546c85a.mp4', simpleName: 'Midway' },
    { complexName: 'No.Hard.Feelings.2023.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'No Hard Feelings'},
    { complexName: 'Nobody.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Nobody' },
    { complexName: 'Operation.Fortune.Ruse.De.Guerre.2023.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Operation Fortune: Ruse De Guerre' },
    { complexName: 'Phineas.and.Ferb.The.Movie.2011.mp4', simpleName: 'Phineas and Ferb The Movie' },
    { complexName: 'Pride.And.Prejudice.And.Zombies.2016.mp4', simpleName: 'Pride and Prejudice and Zombies' },
    { complexName: 'Prince.Of.Persia.The.Sands.Of.Time.2010.mp4', simpleName: 'Prince of Persia: The Sands of Time' },
    { complexName: 'Push.2009.mp4', simpleName: 'Push' },
    { complexName: 'Puss.In.Boots.The.Last.Wish.2022.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Puss In Boots: The Last Wish' },
    { complexName: 'Ready.Player.One.2018.720p.BluRay.x264-[YTS.AM].mp4', simpleName: 'Ready Player One' },
    { complexName: 'Real.Steel.2011.1080p.BluRay.x264.YIFY.mp4', simpleName: 'Real Steel' },
    { complexName: 'Riddick.2013.1080p.BluRay.x264.YIFY.mp4', simpleName: 'Riddick' },
    { complexName: 'Samson.2018.1080p.BluRay.x264-[YTS.AM].mp4', simpleName: 'Samson' },
    { complexName: 'Shazam_(2019)_BluRay_high_(fzmovies.net).mp4', simpleName: 'Shazam' },
    { complexName: 'Sherlock.Holmes.A.Game.Of.Shadows.2011.720p.BrRip.x264.YIFY.mp4', simpleName: 'Sherlock Holmes A Game Of Shadows' },
    { complexName: 'sinbad_legends_of_the_7_seas_(full_movie) (Original).mp4', simpleName: 'Sinbad: Legends of the seven seas' },
    { complexName: 'Sky.High.2005.720p.BrRip.x264.YIFY.mp4', simpleName: 'Sky High' },
    { complexName: 'Spider_Man_Far_from_Home_(2019)_BluRay_high_(fzmovies.net)_43f1620e4e0e96f8091434603a73d35d.mp4', simpleName: 'Spider-Man: Far From Home' },
    { complexName: 'Spider-Man.Across.The.Spider-Verse.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Spider-Man Across The Spider-Verse'},
    { complexName: 'star.wars.episode.i.the.phantom.menace.1999.mp4', simpleName: 'Star Wars Episode I: The Phantom Menace' },
    { complexName: 'Star.Wars.Episode.ii.Attack.Of.The.Clones.2002.mp4', simpleName: 'Star Wars Episode II: Attack Of The Clones' },
    { complexName: 'Star.Wars.Episode.III.Revenge.of.the.Sith.2005.mp4', simpleName: 'Star Wars Episode III: Revenge Of The Sith' },
    { complexName: 'Stardust.2007.mp4', simpleName: 'Stardust' },
    { complexName: 'Taken.2008.1080pBrRip.x264.YIFY.mp4', simpleName: 'Taken' },
    { complexName: 'The.Avengers.2012.mp4', simpleName: 'The Avengers' },
    { complexName: 'The.Chronicles.Of.Riddick.2004.1080p.BluRay.x264-[YTS.AM].mp4', simpleName: 'The Chronicles of Riddick' },
    { complexName: 'The.Darkest.Minds.2018.mp4', simpleName: 'The Darkest Minds' },
    { complexName: 'The.Flash.2023.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'The Flash' },
    { complexName: 'The.Forbidden.Kingdom.2008.mp4', simpleName: 'The Forbidden Kingdom' },
    { complexName: 'The.Gray.Man.2022.mp4', simpleName: 'The Gray Man' },
    { complexName: 'The.Hitchhikers.Guide.to.The.Galaxy.2005.mp4', simpleName: 'The Hitchhikers Guide to the Galaxy' },
    { complexName: 'The.Humger.Games.2012.mp4', simpleName: 'The Hunger Games' },
    { complexName: 'The.Hunger.Games.Catching.Fire.2013.mp4', simpleName: 'The Hunger Games: Catching Fire' },
    { complexName: 'The.Martian.2015.mp4', simpleName: 'The Martian' },
    { complexName: 'The.Mechanic.2011.mp4', simpleName: 'The Mechanic' },
    { complexName: 'The.Medallion.2003.mp4', simpleName: 'The Medallion' },
    { complexName: 'The.Meg.2018.1080p.WEBRip.x264-[YTS.AM].mp4', simpleName: 'The Meg' },
    { complexName: 'The.Super.Mario.Bros.Movie.2023.mp4', simpleName: 'The Super Mario Bros Movie' },
    { complexName: 'the.tomorrow.war.2021.mp4', simpleName: 'The Tomorrow War' },
    { complexName: 'The_Chronicles_of_Riddick.mp4', simpleName: 'The Chronicles of Riddick (version2)' },
    { complexName: 'Thor.Love.and.Thunder.2022.1080p.WEB-DL.DDP5.1.Atmos.H.264-CM.mkv', simpleName: 'Thor Love and Thunder' },
    { complexName: 'Top.Gun.Maverick.2022.1080p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Top Gun Maverick' },
    { complexName: 'Van.Helsing.2004.1080p.BrRip.x264.YIFY.mp4', simpleName: 'Van Helsing' },
    { complexName: 'WALL-E.2008.720p.BrRip.x264.YIFY.mp4', simpleName: 'WALL-E' },
    { complexName: 'Wrath.of.the.Titans.2012.mp4', simpleName: 'Wrath of the Titans' },
    { complexName: 'Zombieland.2009.mp4', simpleName: 'Zombieland' },
    { complexName: 'Zombieland.Double.Tap.2019.20200102.mp4', simpleName: 'Zombieland: Double Tap' }
  ];

  function populateMovieList() {
      movieFiles.forEach((movieFile) => {
          const listItem = document.createElement('li');
          listItem.textContent = movieFile.simpleName;
          listItem.classList.add("movie-item");
          listItem.addEventListener('click', () => playMovie(movieFile.complexName));
          movieList.appendChild(listItem);
      });
  }

  function playMovie(complexName) {
      const moviePath = `movies/${complexName}`;
      videoPlayer.setAttribute('src', moviePath);
      videoPlayer.load();
      videoPlayer.play();
  }
});

function myFunction() {
  var input, filter, ul, li, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("movie-list");
  li = ul.getElementsByClassName("movie-item");

  for (i = 0; i < li.length; i++) {
      const movieName = li[i].textContent || li[i].innerText;
      if (movieName.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
