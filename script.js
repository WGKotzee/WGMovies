    document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const passwordInput = document.getElementById('password');
    const movieContainer = document.getElementById('movie-container');
    const movieList = document.getElementById('movie-list');
    const videoPlayer = document.getElementById('video-player');
  
    const correctPassword = 'Movies123';
    const loggedInKey = 'loggedIn';

    movieContainer.style.display = 'none';
    loginContainer.style.display = 'block';
    
    //Check if already logged in
    const isLoggedIn = localStorage.getItem(loggedInKey);

    //Function to handle successful login
    function handleLogin(){
        localStorage.setItem(loggedInKey, 'true');
        movieContainer.style.display = 'block';
        loginContainer.style.display = 'none';
    }

    //Function to handle login error
    function handleLoginError() {
        alert('Incorrect password! Please try again.');
        passwordInput.value = '';
    }

    function testLogin(){
        const enteredPassword = passwordInput.value.trim();
        if (enteredPassword === correctPassword){
            handleLogin();
        }else {
            handleLoginError();
        }
        }
    
        loginForm.addEventListener('submit', (enter) => {
        enter.preventDefault();
        testLogin();
    });
    

    const movieFiles = [
      '65.2023.mp4',
      '1917_(2019)_BluRay_high_(fzmovies.net)_b1cf082b5963af96036479ea31a18432.mp4',
      'A.Goofy.Movie.1995.1080p.BluRay.x264-[YTS.AM].mp4',
      'American.Assassin.2017.mp4',
      'Ant-Man and the Wasp (2018) 720p.mp4',
      'Avatar.The.Way.of.Water.2022.20230328.mp4',
      'Black.Adam.2022.REPACK.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4',
      'Bloodshot.2020.720p.WEBRip.x264.AAC-[YTS.MX].mp4',
      'Crawl.2019.20191014.mp4',
      'Dinosaur.2000.1080p.BrRip.x264.YIFY.mp4',
      'Divergent.2014.mp4',
      'Dungeons.Dragons.Honor.Among.Thieves.2023.mp4',
      'Evolution.2001.720p.BrRip.x264.YIFY.mp4',
      'Fast_and_Furious_Presents_-_Hobbs_and_Shaw_(2019)_BluRay_high_(fzmovies.net)_88dfe5971acbebc29b5cdb0d888dd58b.mp4',
      'Flubber.1997.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4',
      'Ford_v_Ferrari_(2019)_BRRip_high_(fzmovies.net)_6ded023830a81a9a321ea7be85c88277.mp4',
      'ghosted.2023.mp4',
      'Gladiator.EXTENDED.2000.1080.BrRip.264.YIFY.mp4',
      'Gnomeo.Juliet.2011.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4',
      'Godzilla.Vs..Kong.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4',
      'Guardians.of.the.Galaxy.Vol.3.2023.720p.WEBRip.900MB.x264-GalaxyRG.mkv',
      'Harry.Potter.and.the.Chamber.of.Secrets.2002.mp4',
      'Harry.Potter.and.the.Deathly.Hallows.Part.1.mp4',
      'Harry.Potter.And.The.Deathly.Hallows.Part.2.2011.mp4',
      'Harry.Potter.and.the.Goblet.of.Fire.2005.mp4',
      'Harry.Potter.and.the.Half-Blood.Prince.2009.mp4',
      'Harry.Potter.and.the.Order.of.the.Phoenix.2007.mp4',
      'Harry.Potter.and.the.Prisoner.of.Azkaban1.2004.mp4',
      'Harry.Potter.And.The.Sorcerers.Stone.200.mp4',
      'Hercules.2014.mp4',
      'Hypnotic.2023.mp4',
      'I.am.legend.720p.450mbmu.mkv',
      'Ice.Age.Continental.Drift.2012.mp4',
      'Insurgent.2015.mp4',
      'Into.the.Blue.2005.mp4',
      'John.Wick.2014.720p.BluRay.x264-[YTS.AG].mp4',
      'John.Wick.Chapter.4.2023.20230523.mp4',
      'Jumanji_The_Next_Level_(2019)_WEB-DL_high_(fzmovies.net)_064a03eb71d6838d68bc07663c3dfccf.mp4',
      'Jupiter.Ascending.2015.mp4',
      'Jurassic.Park.1993.mp4',
      'Jurassic.World.Dominion.2022.REPACK.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4',
      'Kick.Ass.2010.720p.BrRip.264.YIFY.mp4',
      'Kick-Ass.2.2013.720p.BluRay.x264.YIFY.mp4',
      'Midway_(2019)_BluRay_high_(fzmovies.net)_a7b32c07fb677b61cb75dfc61546c85a.mp4',
      'Nobody.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4',
      'Phineas.and.Ferb.The.Movie.2011.mp4',
      'Pride.And.Prejudice.And.Zombies.2016.mp4',
      'Prince.Of.Persia.The.Sands.Of.Time.2010.mp4',
      'Push.2009.mp4',
      'Puss.In.Boots.The.Last.Wish.2022.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4',
      'Ready.Player.One.2018.720p.BluRay.x264-[YTS.AM].mp4',
      'Real.Steel.2011.1080p.BluRay.x264.YIFY.mp4',
      'Riddick.2013.1080p.BluRay.x264.YIFY.mp4',
      'Samson.2018.1080p.BluRay.x264-[YTS.AM].mp4',
      'Shazam_(2019)_BluRay_high_(fzmovies.net).mp4',
      'Sherlock.Holmes.A.Game.Of.Shadows.2011.720p.BrRip.x264.YIFY.mp4',
      'sinbad_legends_of_the_7_seas_(full_movie) (Original).mp4',
      'Sky.High.2005.720p.BrRip.x264.YIFY.mp4',
      'Spider_Man_Far_from_Home_(2019)_BluRay_high_(fzmovies.net)_43f1620e4e0e96f8091434603a73d35d.mp4',
      'star.wars.episode.i.the.phantom.menace.1999.mp4',
      'Star.Wars.Episode.ii.Attack.Of.The.Clones.2002.mp4',
      'Star.Wars.Episode.III.Revenge.of.the.Sith.2005.mp4',
      'Stardust.2007.mp4',
      'Taken.2008.1080pBrRip.x264.YIFY.mp4',
      'The.Avengers.2012.mp4',
      'The.Chronicles.Of.Riddick.2004.1080p.BluRay.x264-[YTS.AM].mp4',
      'The.Darkest.Minds.2018.mp4',
      'The.Forbidden.Kingdom.2008.mp4',
      'The.Gray.Man.2022.mp4',
      'The.Hitchhikers.Guide.to.The.Galaxy.2005.mp4',
      'The.Humger.Games.2012.mp4',
      'The.Hunger.Games.Catching.Fire.2013.mp4',
      'The.Martian.2015.mp4',
      'The.Mechanic.2011.mp4',
      'The.Medallion.2003.mp4',
      'The.Meg.2018.1080p.WEBRip.x264-[YTS.AM].mp4',
      'The.Super.Mario.Bros.Movie.2023.mp4',
      'the.tomorrow.war.2021.mp4',
      'The_Chronicles_of_Riddick.mp4',
      'Thor.Love.and.Thunder.2022.1080p.WEB-DL.DDP5.1.Atmos.H.264-CM.mkv',
      'Top.Gun.Maverick.2022.1080p.WEBRip.x264.AAC-[YTS.MX].mp4',
      'Van.Helsing.2004.1080p.BrRip.x264.YIFY.mp4',
      'WALL-E.2008.720p.BrRip.x264.YIFY.mp4',
      'Wrath.of.the.Titans.2012.mp4',
      'Zombieland.2009.mp4',
      'Zombieland.Double.Tap.2019.20200102.mp4',
    ];
  
    // Function to create and populate the list of movies.
    function populateMovieList() {
      movieFiles.forEach((movieFile) => {
        const listItem = document.createElement('li');
        listItem.textContent = movieFile;
        listItem.addEventListener('click', () => playMovie(movieFile));
        movieList.appendChild(listItem);
      });
    }
  
    // Function to play selected movie.
    function playMovie(movieFile) {
      const moviePath = `movies/${movieFile}`;
      videoPlayer.setAttribute('src', moviePath);
      videoPlayer.load();
      videoPlayer.play();
    }
  
    // Populate the movie list on page load.
    populateMovieList();
  });
  