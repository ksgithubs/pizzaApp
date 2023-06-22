const express = require("express");
const productController = require("../controller/productController");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const router = express.Router();

cloudinary.config({
  cloud_name: "media-files", 
  api_key: "618313553453971",
  api_secret: "1yVFVaqRKWOJa3Zg0iPmwLY3Aio",
});
const cloudStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "productImages",
    // format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => file.fieldname + "-" + Date.now(),
  },
});

const upload = multer({ storage: cloudStorage });

router
  .route("/")
  .post(upload.single("productPic"), productController.createProduct);
router.route("/").get(productController.getProduct);

router.route("/sorting").get(productController.sortedProducts);

module.exports = router;
