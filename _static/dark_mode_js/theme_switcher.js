const createThemeSwitcher = () => {
  let btn = document.createElement('BUTTON');
  btn.className = 'theme-switcher';
  btn.id = 'themeSwitcher';
  btn.innerHTML =
    '<i id="themeMoon" class="fa fa-moon-o"></i><i id="themeSun" class="fa fa-sun-o"></i>';
  document.body.appendChild(btn);

  applyInitialTheme();
};

const applyInitialTheme = () => {
  let savedTheme = localStorage.getItem('theme');
  let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (!savedTheme) {
    savedTheme = prefersDark ? 'dark' : 'light';
    localStorage.setItem('theme', savedTheme);
  }

  document.documentElement.setAttribute('data-theme', savedTheme);
  toggleIcons(savedTheme);
};

const switchTheme = () => {
  let newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
  toggleIcons(newTheme);
};

const toggleIcons = (theme) => {
  if (theme === 'dark') {
    $('#themeSun').fadeOut(200, () => {
      $('#themeMoon').fadeIn(200);
    });
  } else {
    $('#themeMoon').fadeOut(200, () => {
      $('#themeSun').fadeIn(200);
    });
  }
};

$(document).ready(() => {
  createThemeSwitcher();
  $('#themeSwitcher').click(switchTheme);
});
