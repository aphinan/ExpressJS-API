exports.read = async (req, res) => {
  try {
    res.send("Controllre Read");
  } catch {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.list = async (req, res) => {
  try {
    res.send("Controllre List");
  } catch {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.create = async (req, res) => {
  try {
    res.send("Controllre Create");
  } catch {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    res.send("Controllre Updata");
  } catch {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.remove = async (req, res) => {
  try {
    res.send("Controllre Remove");
  } catch {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
