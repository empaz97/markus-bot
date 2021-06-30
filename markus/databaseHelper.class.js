const _ = require("lodash");

class DatabaseHelper {
  constructor(db) {
    this.db = db;
  }

  fetchCannibals(guildId) {
    const query = `SELECT * FROM cannibal WHERE server='${guildId}' ORDER BY mention DESC`;
    return new Promise((resolve, reject) => {
      this.db
        .query(query)
        .then(res => resolve(res))
        .catch(e => {
          console.error(`Error fetching cannibal entry: "${query}"`);
          console.error(e.stack);
          reject("I'm sorry! I was unable to fetch cannibal entries");
        });
    });
  }

  updateCannibals(guildId) {
    const query = `INSERT INTO cannibal(server, mention) VALUES('${guildId}', NOW())`;
    return new Promise((resolve, reject) => {
      this.db
        .query(query)
        .then(resolve)
        .catch(e => {
          console.error(`Error updating cannibal entries: "${query}"`);
          console.error(e.stack);
          reject("I'm sorry! I was unable to update cannibal entries");
        });
    });
  }

  clearCannibals(guildId) {
    const query = `DELETE FROM cannibal WHERE server='${guildId}'`;
    return new Promise((resolve, reject) => {
      this.db
        .query(query)
        .then(resolve)
        .catch(e => {
          console.error(`Error clearing cannibal entries: "${query}"`);
          console.error(e.stack);
          reject("I'm sorry! I was unable to clear cannibal entries");
        });
    });
  }

  fetchWips(userId, isActive = true, isCompleted = false) {
    let whereClause = `WHERE user_id='${userId}'`;
    if (!_.isNil(isActive)) {
      whereClause += ` AND is_active='${isActive}'`;
    }
    if (!_.isNil(isCompleted)) {
      whereClause += ` AND is_complete='${isCompleted}'`;
    }
    const query = `SELECT name, summary FROM wips ${whereClause}`;
    return new Promise((resolve, reject) => {
      this.db
        .query(query)
        .then(resolve)
        .catch(e => {
          console.error(`Error fetching wips: "${query}"`);
          console.error(e.stack);
          reject("I'm sorry! I was unable to fetch wips");
        });
    });
  }

  addWip(userId, name, summary = null) {
    let query = "";
    const params = [name];
    if (summary) {
      query = `INSERT INTO wips(user_id, name, summary) VALUES('${userId}', $1, $2)`;
      params.push(summary);
    } else {
      query = `INSERT INTO wips(user_id, name) VALUES('${userId}', $1)`;
    }
    return new Promise((resolve, reject) => {
      this.db
        .query(query, params)
        .then(resolve)
        .catch(e => {
          console.error(`Error adding wip: "${query}"`);
          console.error(e.stack);
          reject("I'm sorry! I was unable to add wip");
        });
    });
  }

  updateWip(userId, name, summary) {
    const query = `UPDATE wips SET summary=$1 WHERE user_id='${userId}' AND name=$2`;
    return new Promise((resolve, reject) => {
      this.db
        .query(query, [summary, name])
        .then(resolve)
        .catch(e => {
          console.error(`Error adding wip: "${query}"`);
          console.error(e.stack);
          reject("I'm sorry! I was unable to add wip");
        });
    });
  }

  removeWip(userId, name) {
    const query = `UPDATE wips SET is_active='f' WHERE user_id='${userId}' AND name=$1`;
    return new Promise((resolve, reject) => {
      this.db
        .query(query, [name])
        .then(resolve)
        .catch(e => {
          console.error(`Error removing wip: "${query}"`);
          console.error(e.stack);
          reject("I'm sorry! I was unable to remove wip");
        });
    });
  }

  completeWip(userId, name) {
    const query = `UPDATE wips SET is_complete='t' WHERE user_id='${userId}' AND name=$1`;
    return new Promise((resolve, reject) => {
      this.db
        .query(query, [name])
        .then(resolve)
        .catch(e => {
          console.error(`Error removing wip: "${query}"`);
          console.error(e.stack);
          reject("I'm sorry! I was unable to remove wip");
        });
    });
  }

  clearWips(userId) {
    const query = `UPDATE wips SET is_active='f' WHERE user_id='${userId}' AND is_complete='f'`;
    return new Promise((resolve, reject) => {
      this.db
        .query(query)
        .then(resolve)
        .catch(e => {
          console.error(`Error clearing wips: "${query}"`);
          console.error(e.stack);
          reject("I'm sorry! I was unable to clear wips");
        });
    });
  }
}

module.exports = DatabaseHelper;
