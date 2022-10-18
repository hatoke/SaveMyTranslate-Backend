import mongoose from "mongoose";

class Mongo {
  dbUri: any;

  constructor(url: any) {
    this.dbUri = url;
  }

  connection() {
    try {
      mongoose.connect(this.dbUri, { ssl: true, sslValidate: false, tlsInsecure: true });
      console.log("Mongo connected");
    } catch (error) {
      console.error("Could not connection db -> ", error);
    }
  }
}

export default Mongo;
