Welcome to WDI-CONF!
====================

Code climate says our code has this grade: [![Code Climate](https://codeclimate.com/repos/55541b8ae30ba016b90111bd/badges/8f997a923138bd9bfdbe/gpa.svg)](https://codeclimate.com/repos/55541b8ae30ba016b90111bd/feed)

Code climate says out test coverage is: [![Test Coverage](https://codeclimate.com/repos/55541b8ae30ba016b90111bd/badges/8f997a923138bd9bfdbe/coverage.svg)](https://codeclimate.com/repos/55541b8ae30ba016b90111bd/coverage)

Our continuous integration (CI) server that runs tests automatically says: [ ![Codeship Status for wdi-conf/WDIConf2015](https://codeship.com/projects/d6e13420-dc1b-0132-d98c-1e3fe125131b/status?branch=master)](https://codeship.com/projects/79879)

To set up:

1. fork from wdi-conf/WDIConf2015 to your own github repo.
2. clone from your own github to your local computer.

Then set up locally:

1. configure .gitignore
2. configure your database.yml and add to .gitignore
3. bundle install
4. Do whatever mac thing you need to do "start the elephant???".
5. rake db:create
6. rake db:migrate
7. rails server (or rails s)
8. go to localhost:3000 to see if it all worked.