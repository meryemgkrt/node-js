
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

const urunlerData = [
  {
    id: 1,
    name: "Iphone 12",
    price: 25000,
    isActive: true,
    isHome:true,
    img: "12.jpeg",
  },
  {
    id: 2,
    name: "Iphone 11",
    price: 21000,
    isActive: true,
    isHome:true,
    img: "11.jpeg",
  },
  {
    id: 3,
    name: "Iphone 10",
    price: 13000,
    isHome:false,
    isActive: false,
    img: "10.jpeg",
  },
];

app.use("/products/:id", function (req, res) {
  const urun = urunlerData.find((u) => u.id == req.params.id);
  res.render("urun-details", urun);
});

app.use("/products", function (req, res) {
  res.render("products", { urunler: urunlerData });
});

app.use("/", function (req, res) {
  res.render("index",  { urunler: urunlerData });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});