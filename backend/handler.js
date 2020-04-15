//  https://www.npmjs.com/package/serverless-postgres

const client = new ServerlessClient({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});
 
const handler = async(event, context) => {
    await client.sconnect();
    const result = await client.query(`SELECT NOW()`);
    await client.clean();
    return {
      body: JSON.stringify({message: result}),
      statusCode: 200
    }
}