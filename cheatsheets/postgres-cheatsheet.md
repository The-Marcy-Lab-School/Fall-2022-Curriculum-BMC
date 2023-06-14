# Postgres Setup

**Table of Contents**

- [Important Commands](#important-commands--configuration)
- [Windows Setup](#windows-setup)
- [Mac Setup](#mac-setup)
- [Video Walkthrough](#video-walkthrough)
- [Troubleshooting](#troubleshooting)

## Important Commands / Configuration

In your terminal:

- `sudo service postgresql status` - to see if your server is running
- `sudo service postgresql start` - to start your postgresql server
- `sudo service postgresql restart` - to restart your postgresql server
- `sudo -u postgres psql` / `psql` - to connect to your postgresql server

In your `psql` terminal:

- `\du` to see a list of users
- `\q` to quit
- `\l` to see a list of databases
- `\c database_name` to connect to a database
- `ALTER USER username WITH ENCRYPTED PASSWORD 'password';` (use single quotes, remember the semicolon)

Tableplus Postgres Server Connection Configuration

- Host/Socket: `127.0.0.1` or `localhost`
- Port: `5432`
- User: Enter your username or `postgres`
- Database: `postgres` (the default will be the same as the user value)

## Windows Setup

#### Postgres

1. Open up your Ubuntu Terminal
2. Update your Ubuntu packages: `sudo apt update`
3. Now, type `sudo apt install postgresql postgresql-contrib`. You may have to type in `Y`, to allow it to proceed. This will install postgres on your Ubuntu machine.
4. Confirm installation and get the version number: `psql --version`
5. Afterwards, you'll probably have to start the postgres database. You can do so by running `sudo service postgresql start`. Afterwards, you can check the status by running `sudo service postgresql status`.
6. Afterwards, you'll need to set up a password for the postgres user so you can log into the database. You can do this by running `sudo passwd postgres`. NOTE: make this something very easy to remember. You won't see anything in terminal but rest assured, it's taking in your input.
7. Close and reopen your terminal.
8. Now, connect to the postgres service and open the psql shell: `sudo -u postgres psql`
9. Once you have successfully entered the psql shell, you will see your command line change to look like this: `postgres=#`
10. Now we'll add a password for the `postgres` user: `alter user postgres with encrypted password '[password]';`. Replace the password with something short and memorable (e.g. `'123'` is fine). NOTE: Keep the quotation marks around your password!
11. You can now exit your psql shell by typing in `\q` and hitting enter

#### Tableplus

14. You will download a GUI application called [tableplus](https://tableplus.com/) from their website. Make sure to download the corresponding version for your OS.
15. After installing and opening the application, click the "Create A New Connection..." towards the bottom of the window. You will see a prompt to select your database type. Select Postgresql.
16. Now you'll enter the credetials to access your database. Enter the name as "postgres". For Host, enter "localhost" or "127.0.0.1". For Port, enter "5432". For the user field enter `postgres`. In the password field, enter the password you created for user `postgres` in step 10. Lastly, enter the name of the database as "postgres". Click the test button and if everything is successful, all of the fields should be highlighted green! At that point click connect and you should be able to see view the GUI client for you database. If you want, you can click the `SQL` button and write your own sql queries.
17. **Note:** If you get a `Could not connect to server: Connection refused` error, this means you have to first start your postgres server in the terminal using the command `sudo service postgresql start`.

## Mac Setup

1. Go to [https://postgresapp.com/](https://postgresapp.com/)
2. Click on the downloads tab
3. You should see something like "Postgres.app with PostgreSQL [version]". Click on this link to download Postgres to your mac.
4. After it's finish downloading, install the program, and run it.
5. Now you'll have to initialize your database. Click the Initialize button on the right hand side.
6. Open up a terminal window (hint: you can press `command` + `space` and type in terminal) and paste this inside `sudo mkdir -p /etc/paths.d &&
echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
7. To test that this command works, you'll have to restart your terminal.
8. In your terminal type in `createdb example`. You should not get an error after the command runs. Now let's see it in action!
9. You will download a GUI application called [tableplus](https://tableplus.com/) from their website. Make sure to download the corresponding version for your OS.
10. After installing and opening the application, click the "Create A New Connection..." towards the bottom of the window. You will see a prompt to select your database type. Select Postgresql.
11. Now you'll enter the credetials to access your database. Enter the name as "postgres". For the user field enter "postgres" and in the database field enter "example". The Host and Port fields should be autopopulated, but if not, for Host, enter "localhost" or "127.0.0.1". For Port, enter "5432". Click the test button and if everything is successful, all of the fields should be highlighted green! At that point click connect and you should be able to view the GUI client for you database. If you want, you can click the `SQL` tab and write your own sql queries.
12. **Note:** If you get a `Could not connect to server: Connection refused` error, this means you have to first start your postgres server in the menu bar. Click the Start button so that the Red X turns into a Green checkmark.

<img width="234" alt="Screen Shot 2022-10-11 at 4 19 14 PM" src="https://user-images.githubusercontent.com/30392423/195190310-8f4ed82c-bebd-4fb5-bc96-3fcaa2ed9848.png">

## Video Walkthrough

If you'd like, you can follow along using this [video](https://us02web.zoom.us/rec/play/U0ghC07ndSiayEEc1D86cvrNIiBIQhmyT7JU8sqrYJ928FHhZhKfq7OeYK73u1aRp6Qjb34kf32xoARm.7BAFARTMcCax8YDy?continueMode=true&_x_zm_rtaid=euzsucDSTBKnY0bdQQBC5A.1648070136259.165c763c787813cfbdcf7752e530272c&_x_zm_rhtaid=405).

- For Windows users, start at 1 hour and 9 minutes time stamp 01:09:00.
- For Mac users, start at 1 hour and 27 minutes time stamp 01:27:00.

## Troubleshooting

1. If you can't connect to your database because of `FATAL: password authentication failed for user <username>`, ask your instructor for help. They will do the following:

- Find and edit your `pg_hba.conf` using `vim`: `sudo vim /etc/postgresql/12/main/pg_hba.conf` (where `12` is the version number)
- Alternately, find notepad or notepad++ in your start menu, right click, choose "Run as administrator", then use File->Open to open `pg_hba.conf` that way.
- Update the `"host"` line for user `"postgres"` on host `"127.0.0.1/32"` from `"md5"` to `"trust"`.
  - You can add the line if it isn't there; just insert `host all postgres 127.0.0.1/32 trust` before any other lines. (You can ignore comments, lines beginning with #).
- Restart the PostgreSQL service: `sudo service postgresql restart`
- Connect using `sudo -u postgres psql` / `psql`
- Run `ALTER USER postgres PASSWORD 'fooBarEatsBarFoodBareFoot';` (don't forget the `;`!)
- Remove the line you added to `pg_hba.conf` or change it back
- Restart PostgreSQL again to bring the changes to effect.
- Try connecting again
