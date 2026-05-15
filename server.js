// import
const express = require('express');
const redis = require('redis');
// express app
const app = express();
// middleware
app.use(express.json());
// redis connection
const client = redis.createClient({
    url: 'redis://redis-server:6379'
});
// crud routes (ici)
app.put("/employee", async (req, res) => {
    try {
        const employee = {
            id: 1,
            name: req.body.name,
            job: req.body.job
        };

        await client.set("employee", JSON.stringify(employee));

        res.send("Employee updated");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get("/employee", async (req, res) => {
    try {
        const employee = await client.get("employee");

        if (!employee) {
            return res.status(404).send("No employee found");
        }

        res.json(JSON.parse(employee));
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.delete("/employee", async (req, res) => {
    try {
        await client.del("employee");

        res.send("Employee deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

async function startServer() {
    await client.connect();
    console.log('Redis connected');
// app.listen
    app.listen(3000, () => {
        console.log("Server running");
    });
}
startServer();