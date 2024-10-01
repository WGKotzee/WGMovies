document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const movieContainer = document.getElementById('movie-container');
    const movieList = document.getElementById('movie-list');
    const videoPlayer = document.getElementById('video-player');
    const correctPassword = '1234';
    const loggedInKey = 'loggedIn';
  
    movieContainer.style.display = 'none';
    loginContainer.style.display = 'block';

  // Check if already logged in
  const isLoggedIn = localStorage.getItem(loggedInKey);

  if (isLoggedIn) {
    handleLogin();
  }
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

  loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      testLogin();
  });

  // Populate movie list
  function populateMovieList() {
    const movieFiles = [
    { complexName: '10,000.B.C.2008.720p.BrRip.x264.YIFY.mp4', simpleName: '10,000 BC' },
    { complexName: '65.2023.mp4', simpleName: '65' },
    { complexName: '1917_(2019)_BluRay_high_(fzmovies.net)_b1cf082b5963af96036479ea31a18432.mp4', simpleName: '1917' },
    { complexName: 'A.Goofy.Movie.1995.1080p.BluRay.x264-[YTS.AM].mp4', simpleName: 'A Goofy Movie' },
    { complexName: 'After.Ever.Happy.2022.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'After Ever Happy' },
    { complexName: 'After.We.Collided.2020.1080p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'After We Collided' },
    { complexName: 'After.We.Fell.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'After We Fell' },
    { complexName: 'Alc.n.Wndld.2010-scOrp.mkv', simpleName: 'Alice in wonderland' },
    { complexName: 'American.Assassin.2017.mp4', simpleName: 'American Assassin' },
    { complexName: 'Ant-Man and the Wasp (2018) 720p.mp4', simpleName: 'Ant-Man and the Wasp' },
    { complexName: 'Aquaman.And.The.Lost.Kingdom.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Aquaman and the Lost Kingdom' },
    { complexName: 'Avatar (2009) 1080p @BenUF1.ia.mp4', simpleName: 'Avatar' },
    { complexName: 'Avatar.The.Way.of.Water.2022.20230328.mp4', simpleName: 'Avatar The Way Of Water' },
    { complexName: 'Beautiful.Disaster.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Beautiful Disaster' },
    { complexName: 'Beautiful.Wedding.2024.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Beautiful Wedding' },
    { complexName: 'Black.Adam.2022.REPACK.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Black Adam' },
    { complexName: 'Bloodshot.2020.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Bloodshot' },
    { complexName: 'Code.8.Part.II.2024.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Code 8 Part 2' },
    { complexName: 'Crawl.2019.20191014.mp4', simpleName: 'Crawl' },
    { complexName: 'Crazy.Rich.Asians.2018.720p.BluRay.x264-[YTS.AM].mp4', simpleName: 'Crazy Rich Asians' },
    { complexName: 'Damsel.2024.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Damsel' },
    { complexName: 'Dinosaur.2000.1080p.BrRip.x264.YIFY.mp4', simpleName: 'Dinosaur' },
    { complexName: 'Divergent.2014.mp4', simpleName: 'Divergent' },
    { complexName: 'Dune.2021.720p.BluRay.x264.AAC-[YTS.MX].mp4', simpleName: 'Dune' },
    { complexName: 'Dune.Part.Two.2024.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Dune Part 2' },
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
    { complexName: 'Godzilla.X.Kong.The.New.Empire.2024.REPACK.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Godzilla X Kong: The New Empire' },
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
    { complexName: 'Indiana.Jones.And.The.Dial.Of.Destiny.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Indiana Jones And The Dial Of Destiny' },
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
    { complexName: 'Kingdom.Of.The.Planet.Of.The.Apes.2024.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Kingdom Of The Planet Of The Apes' },
    { complexName: 'Kung.Fu.Panda.4.2024.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Kung Fu Panda 4' },
    { complexName: 'Life.2017.1080p.BluRay.x264-[YTS.AG].mp4', simpleName: 'Life' },
    { complexName: 'Lilo.and.Stitch.2002.1080p.BluRay.x264.YIFY.mp4', simpleName: 'Lilo and Stitch' },
    { complexName: 'Logan.2017.720p.BluRay.x264-[YTS.AG].mp4', simpleName: 'Logan' },
    { complexName: 'Midway_(2019)_BluRay_high_(fzmovies.net)_a7b32c07fb677b61cb75dfc61546c85a.mp4', simpleName: 'Midway' },
    { complexName: 'Migration.2023.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Migration' },
    { complexName: 'Millers.Girl.2024.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Millers Girl' },
    { complexName: 'Mother.Of.The.Bride.2024.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Mother Of The Bride' },
    { complexName: 'No.Hard.Feelings.2023.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'No Hard Feelings'},
    { complexName: 'Nobody.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Nobody' },
    { complexName: 'Operation.Fortune.Ruse.De.Guerre.2023.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Operation Fortune: Ruse De Guerre' },
    { complexName: 'Pay.It.Forward.2000.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Pay It Forward' },
    { complexName: 'Pearl Harbor 2001 Directors Cut.720p.BrRip.x264.YIFY.mp4', simpleName: 'Pearl Harbor' },
    { complexName: 'Phineas.and.Ferb.The.Movie.2011.mp4', simpleName: 'Phineas and Ferb The Movie' },
    { complexName: 'Pirates.of.the.Caribbean.Curse.of.the.Black.Pearl.2003.720p.BrRip.x264.Deceit.YIFY.mp4', simpleName: 'Pirates Of The Caribbean: Curse of the Black Pearl' },
    { complexName: 'Pride.And.Prejudice.And.Zombies.2016.mp4', simpleName: 'Pride and Prejudice and Zombies' },
    { complexName: 'Prince.Of.Persia.The.Sands.Of.Time.2010.mp4', simpleName: 'Prince of Persia: The Sands of Time' },
    { complexName: 'Push.2009.mp4', simpleName: 'Push' },
    { complexName: 'Puss.In.Boots.The.Last.Wish.2022.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Puss In Boots: The Last Wish' },
    { complexName: 'Ready.Player.One.2018.720p.BluRay.x264-[YTS.AM].mp4', simpleName: 'Ready Player One' },
    { complexName: 'Real.Steel.2011.1080p.BluRay.x264.YIFY.mp4', simpleName: 'Real Steel' },
    { complexName: 'Retribution.2023.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'Retribution' },
    { complexName: 'Riddick.2013.1080p.BluRay.x264.YIFY.mp4', simpleName: 'Riddick' },
    { complexName: 'Road.House.2024.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Road House' },
    { complexName: 'Samson.2018.1080p.BluRay.x264-[YTS.AM].mp4', simpleName: 'Samson' },
    { complexName: 'Season.Of.The.Witch.2011.720p.BluRay.x264.AAC-[YTS.MX].mp4', simpleName: 'Season Of The Witch' },
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
    { complexName: 'Tag.2018.1080p.BluRay.x264-[YTS.AM].mp4', simpleName: 'Tag' },
    { complexName: 'Taken.2008.1080pBrRip.x264.YIFY.mp4', simpleName: 'Taken' },
    { complexName: 'The.Avengers.2012.mp4', simpleName: 'The Avengers' },
    { complexName: 'The.Beekeeper.2024.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'The Beekeeper' },
    { complexName: 'The.Beverly.Hillbillies.1993.720p.WEBRip.x264-[YTS.LT].mp4', simpleName: 'The Beverly Hillbillies' },
    { complexName: 'The.Chronicles.Of.Riddick.2004.1080p.BluRay.x264-[YTS.AM].mp4', simpleName: 'The Chronicles of Riddick' },
    { complexName: 'The.Conjuring.2.2016.720p.BluRay.x264-[YTS.AG].mp4', simpleName: 'The Conjuring 2' },
    { complexName: 'The.Conjuring.The.Devil.Made.Me.Do.It.2021.720p.BluRay.x264.AAC-[YTS.MX].mp4', simpleName: 'The Conjuring: The Devil Made Me Do It' },
    { complexName: 'The.Covenant.2006.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'The Covenant' },
    { complexName: 'The.Darkest.Minds.2018.mp4', simpleName: 'The Darkest Minds' },
    { complexName: 'The.Fall.Guy.2024.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'The Fall Guy' },
    { complexName: 'The.Flash.2023.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4', simpleName: 'The Flash' },
    { complexName: 'The.Forbidden.Kingdom.2008.mp4', simpleName: 'The Forbidden Kingdom' },
    { complexName: 'The.Golden.Compass.2007.720p.BluRay.x264.YIFY.mp4', simpleName: 'The Golden Compass' },
    { complexName: 'The.Gray.Man.2022.mp4', simpleName: 'The Gray Man' },
    { complexName: 'The.Hitchhikers.Guide.to.The.Galaxy.2005.mp4', simpleName: 'The Hitchhikers Guide to the Galaxy' },
    { complexName: 'The.Humger.Games.2012.mp4', simpleName: 'The Hunger Games' },
    { complexName: 'The.Hunger.Games.Catching.Fire.2013.mp4', simpleName: 'The Hunger Games: Catching Fire' },
    { complexName: 'The.Idea.Of.You.2024.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'The Idea Of You' },
    { complexName: 'The.Martian.2015.mp4', simpleName: 'The Martian' },
    { complexName: 'The.Mechanic.2011.mp4', simpleName: 'The Mechanic' },
    { complexName: 'The.Medallion.2003.mp4', simpleName: 'The Medallion' },
    { complexName: 'The.Meg.2018.1080p.WEBRip.x264-[YTS.AM].mp4', simpleName: 'The Meg' },
    { complexName: 'Meg.2.The.Trench.2023.720p.WEBRip.x264.AAC-[YTS.MX]', simpleName: 'The Meg 2: The Trench' },
    { complexName: 'The.Mummy.Tomb.of.The.Dragon.Emperor.2008.1080p.BRrip.x264.GAZ.YIFY.mp4', simpleName: 'The Mummy: Tomb of the Dragon Emperor' },
    { complexName: 'The.Roommate.2011.720p.BrRip.x264.YIFY.mp4', simpleName: 'The Roommate' },
    { complexName: 'The.Super.Mario.Bros..Movie.2023.REPACK.720p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'The Super Mario Bros Movie' },
    { complexName: 'the.tomorrow.war.2021.mp4', simpleName: 'The Tomorrow War' },
    { complexName: 'The_Chronicles_of_Riddick.mp4', simpleName: 'The Chronicles of Riddick (version2)' },
    { complexName: 'Thor.Love.and.Thunder.2022.1080p.WEB-DL.DDP5.1.Atmos.H.264-CM.mkv', simpleName: 'Thor Love and Thunder' },
    { complexName: 'Top.Gun.Maverick.2022.1080p.WEBRip.x264.AAC-[YTS.MX].mp4', simpleName: 'Top Gun Maverick' },
    { complexName: 'Van.Helsing.2004.1080p.BrRip.x264.YIFY.mp4', simpleName: 'Van Helsing' },
    { complexName: 'WALL-E.2008.720p.BrRip.x264.YIFY.mp4', simpleName: 'WALL-E' },
    { complexName: 'Wrath.of.the.Titans.2012.mp4', simpleName: 'Wrath of the Titans' },
    { complexName: 'X-Men.Origins.Wolverine.2009.720p.BrRip.x264.YIFY..mp4', simpleName: 'X-men Origins: Wolverine' },
    { complexName: 'Zombieland.2009.mp4', simpleName: 'Zombieland' },
    { complexName: 'Zombieland.Double.Tap.2019.20200102.mp4', simpleName: 'Zombieland: Double Tap' }
  ];

  movieList.innerHTML = '';
    movieFiles.forEach(movie => {
      const listItem = document.createElement('li');
      listItem.textContent = movie.simpleName;
      listItem.addEventListener('click', () => {
        videoPlayer.src = `movies/${encodeURIComponent(movie.complexName)}`;
        videoPlayer.load(); // Ensure the new source is loaded
        videoPlayer.play().catch(error => {
          console.error('Error playing video:', error);
        });
      });
      movieList.appendChild(listItem);
    });
  }

// Search Functionality
function myFunction() {
    const filter = document.getElementById('mySearch').value.toLowerCase();
    const movies = movieList.getElementsByTagName('li');
    for (let i = 0; i < movies.length; i++) {
      const txtValue = movies[i].textContent || movies[i].innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        movies[i].style.display = '';
      } else {
        movies[i].style.display = 'none';
      }
    }
  }

  window.myFunction = myFunction;
});
