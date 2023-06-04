### Description

Simple User, Game relation and CRUD example of Node.js Rest APIs with Express, PostgreSQL & Prisma

**Get start ✨**

1. Clone the repository:

   ```zsh
   git clone https://github.com/tugu-tmrbtr/server-postgres.git
   cd server-postgres
   ```

2. Install the dependencies:

   ```zsh
   # Using npm
   npm i
   # Using Yarn
   yarn
   ```

3. Start the Postgres server:

   ```zsh
   # Using brew
   brew services start postgresql@14
   ```

4. Connect the created server:

   ```
   DATABASE_URL="postgresql://<username>:<password>@<host_name>:<port>/<database_name>?schema=public"
   ```
   Create a .env file at the root of the project populate it with the url of your database.

5. Start the development server:

   ```zsh
   # Using npm
   npm run server
   # Using Yarn
   yarn run server
   ```
   Now you should be able to see the project running at localhost:8080.

6. Open `./server.js` in your editor and start experimenting!

### Prisma

1. Migrate the SQL schema

   ```
   npx prisma migrate dev
   ```
   Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)

2. Launch Prisma Studio

   ```
   npx prisma studio
   ```
   Now you should be able to see the studio running at localhost:5555.

3. Database Pull

   ```
   npx prisma db pull
   ```
   Pull the schema from an existing database, updating the Prisma schema.

4. Database Push

   ```
   npx prisma db push
   ```
   Push the Prisma schema state to the database.
