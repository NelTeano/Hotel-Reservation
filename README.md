# Hotel Reservation

Client side hotel reservation/booking web application.

## **Requirements**

- NodeJS.
- MySQL or MariaDB.

## Set up and test run the server in your local device.

1. **Download the project**

    Open a terminal and `cd` to the directory where you want to clone
    the project repository, then copy-paste the commands below in the
    terminal command line.

    ```cmd
    git clone https://github.com/NelTeano/Hotel-Reservation.git
    cd Hotel-Reservation
    cd server
    npm install
    cd ../my-react-app
    npm install
    ```

2. Create a file called `.env` in the
`server` folder.

3. Paste this values inside `.env` file :

    ```js
    MYSQL_HOST="<DATABASE HOST ADDRESS>"
    MYSQL_USER="<DATABASE USERNAME>"
    MYSQL_PASSWORD="<DATABASE USER PASSWORD>"
    MYSQL_DATABASE="<DATABASE NAME>"

    PORT="<PORT NUMBER TO USE>"
    ```

    Here are some fixed `.env` values that this project uses:

    - `MYSQL_HOST="127.0.0.1"`
    - `MYSQL_USER="root"`
    - `MYSQL_DATABASE="hoteldb"`
    - `PORT="3001"`

    User defined `.env` values:

    - `MYSQL_PASSWORD=""` - The password you created for the root user during the installation of MySQL/MariaDB server.


4. **Database set up** - In your MySQL/MariaDB create a database named `hoteldb`, then import all the necessary
tables for the project.

    - [EXPORTED TABLES](https://github.com/sj-cantos/SQL-Exports/tree/master) 
    - Raw Link: https://github.com/sj-cantos/SQL-Exports/tree/master

5. **Run the application**

    1. Open two terminal command lines.
    2. Open the project's **root** directory for each terminal.
    3. In the first terminal enter the command `cd server && node app`.
    4. In the second terminal enter the command `cd my-react-app && npm run start`.
    5. Wait for both terminals to finish setting up.

6. **Access the application**

    Open the address `localhost:3000` on a browser.