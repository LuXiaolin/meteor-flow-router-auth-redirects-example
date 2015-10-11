# Flow Router Auth Example + Redirects

[DEMO](http://frar.meteor.com/)

Two parts:

- main
  - restrictions to some pages
- admin
  - restrictions to the layout

The routes we have:

- **/**
  - simple page, no restrictions
- **/login**
  - after you log in, redirect to profile
  - if you are already logged in - redirect to profile
- **/profile**
  - if you are logged in, show the profile page
  - if not, redirect to login page
- **/logout**
  - log out and redirect to home page
- **/admin**
  - has restricted layout, all pages will be checked for logged in user
  - restricted dashboard page
  - if not logged in, redirect to login page
- **/admin/users**
  - restricted users page
  - if not logged in, redirect to login page