export default {
  dev:{
    PORT:'3003',
    sql:{
      host: "localhost",
      port: 3306,
      user: "root",
      password: "1234",
      database: 'zhdj',
    },
    redis:{
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0
    }
  },
  pro:{
    PORT:'3000',
    sql:{
      host: "localhost",
      port: 3306,
      user: "root",
      password: "1234",
      database: 'zhdj',
    },
    redis:{
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0
    }
  }
};
