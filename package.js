
Package.describe({
  name    : 'semantic:ui-dropdown-minimized',
  summary : 'Semantic UI - Dropdown Minimizad: Single component release',
  version : '2.2.11',
  git     : 'git://github.com/behzadba/UI-Dropdown.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'dropdown.css',
    'dropdown.js'
  ], 'client');
});
