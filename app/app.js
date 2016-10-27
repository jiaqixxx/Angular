(function () {
   var app = angular.module('shop', ['store-directives']);

   app.controller('StoreController', function () {
      this.products = phones;
   });

   var phones = [
      {
         name: 'iPhone6',
         price: 1000,
         description: 'New iPhone6',
         height: '138.3mm',
         width: '67.1mm',
         weight: '143grams',
         canPurchase: true,
         images: [
            {
               full: "image-shop/iphone6.jpg"
            }
         ],
         reviews: [
            {
               stars: 5,
               comment: "Nice phone ever!",
               author: "Jerry@gmail.com",
               createdOn: 1397490980837
            }
         ]
      },
      {
         name: 'iPhone7',
         price: 1200,
         height: '138.3mm',
         width: '67.1mm',
         weight: '138grams',
         description: 'New iPhone7',
         canPurchase: true,
         images: [
            {
               full: "image-shop/iphone-7-plus.jpg"
            }
         ],
         reviews: [
            {
               stars: 5,
               comment: "Nice phone ever!",
               author: "Frank@gmail.com",
               createdOn: 1397490980837
            }
         ]
      }
   ];
   app.controller("ReviewController", function ($scope, $http) {
      this.review = {};
      this.addReview = function (product) {
         this.review.createdOn = Date.now();
         product.reviews.push(this.review);
         this.review = {};
      };

      $scope.insertdata = function (product) {
         $http.post("insert.php",{
            stars: $scope.reviews.review.stars,
            comments: $scope.reviews.review.comment,
            author: $scope.reviews.review.author,
            date: 0,
            productid: product.name
         }).then(function(response){
            console.log("Data Inserted Successfully");
         },function(error){
            alert("Sorry! Data Couldn't be inserted!");
            console.error(error);
         });
      }
   });

   app.controller("Getdata", function ($scope, $http) {
      $http.get("getdata.php").success(function (data) {
         $scope.data = data;
      }).error(function () {
         $scope.data = "error in fetching data";
      });
   })

})();
