var app = angular.module('myApp', [])
app.controller('myCtrl', function ($scope) {
  $scope.searchItems = [
    {
      section: 'boys T-shirts',
      id: 1,
      name: 'Product : Blue T-shirt',
      desc: 'Description :Good Looking ',
      Image: 'images/blueshirt.jpg',
      price: 'Price : 30,000',
    },
    {
      section: 'boys T-shirts',
      id: 2,
      name: 'Product : Black T-shirt',
      desc: 'Description : Good Looking',
      Image: 'images/bkacktshirt.jpg',
      price: 'Price : 20,000',
    },
    {
      section: 'boys T-shirts',
      id: 3,
      name: 'Product : Thik Red T-shirt',
      desc: 'Description : good looking',
      Image: 'images/red t shirt.jpg',
      price: 'Price : 15,000',
    },
    

    {
      section: 'boys T-shirts',
      id: 4,
      name: 'Product :orange T-shirt',
      desc: 'Description : Good Looking',
      Image: 'images/orange.jpg',
      price: "1,80,000",
    },
    {
      section: 'boys T-shirts',
      id: 5,
      name: 'Product : T-shirt',
      desc: 'Desp : Good looking ',
      Image: 'images/brown t shirt.jpg',
      price: 'Price : 2,00,000',
    },
    {
      section: 'boys T-shirts',
      id: 6,
      name: 'Product : T-shirt ',
      desc: ' Desp : Good looking',
      Image:'images/yellow t shirt.jpg',
      price: ' Price : 1,50,000',
    },
    
   
    {
      section: 'boys T-shirts',
      id: 8,
      name: 'Product : Meroon T-shirt',
      desc: ' Desp : Good looking',
      Image: 'images/me.jpg',
      price: ' Price : 32,000',
    },
    {
      section: 'boys T-shirts',
      id: 9,
      name: 'Product : Purpool T-shirt',
      desc: ' Desp : Good looking',
      Image: 'images/purpool t shirt.jpg',
      price: ' Price :15,999',
    },
    {
      section: 'pillows',
      id: 10,
      name: 'Product :Pillow ',
      desc: ' Description : Good looking',
      Image: 'images/pillow purpool.jpg',
      price: ' Price : 32,000',
    },
    {
      section: 'pillows',
      id:11,
      name: 'Product : Pillow',
      desc: ' Desp:Good looking ',
      Image: 'images/pillow blue.jpg',
      price: ' Price : 32,000',
    },
      {
        section: 'pillows',
        id: 12,
        name: 'Product : Pillow',
        desc: ' Desp:Good looking ',
        Image: 'images/green pillow.jpg',
        price: ' Price : 32,000',
      },
      {
        section: 'pillows',
        id: 13,
        name: 'Product : Pillow',
        desc: ' Desp : Good looking',
        Image: 'images/red pillow.jpg',
        price: ' Price : 32,000',
      },
    
    {
      section: 'pillows',
      id: 14,
      name: 'Product : Pillow',
      desc: ' Desp : Good looking',
      Image: 'images/black pillow.jpg',
      price: ' Price : 32,000',
    },
    {
      section: 'pillows',
      id: 15,
      name: 'Product : Pillow',
      desc: ' Desp : Good looking',
      Image: 'images/orange pillow.jpg',
      price: ' Price : 32,000',
    },
    {
      section: 'pillows',
      id: 16,
      name: 'Product : Pillow',
      desc: ' Desp : Good looking',
      Image: 'images/pink pillow.jpg',
      price: ' Price : 32,000',
    },
    {
      section: 'pillows',
      id: 17,
      name: 'Product: Pillows',
      desc: ' Desp: Good looking',
      Image: 'images/yellow pillow.jpg',
      price: ' Price : 32,000',
    },
   
    {
      section: 'college bags',
      id: 19,
      name: 'Product : Bag',
      desc: ' Desp : Good looking',
      Image: 'images/yellow bag.jpg',
      price: ' Price : 32,000',
    },
    {
      section: 'college bags',
      id: 20,
      name: 'Product : Bag',
      desc: ' Desp : Good looking',
      Image: 'images/red bag.jpg',
      price: ' Price : 32,000',
    },
    {
      section: 'college bags',
      id: 21,
      name: 'Product :  Bag',
      desc: ' Despcription : Good looking',
      Image: 'images/pink bag.jpg',
      price: ' Price : 32,000',
    },
    {
      section: 'college bags',
      id: 22,
      name: 'Product : Bag',
      desc: ' Despcription : Good looking',
      Image: 'images/black bag.jpg',
      price: ' Price : 32,000',
    },
    {
      section: 'college bags',
      id: 23,
      name: 'Product : Bag',
      desc: ' Desp : Good looking',
      Image: 'images/brown bag.jpg',
      price: ' Price : 32,000',
    },
    {
      section: 'college bags',
      id: 24,
      name: 'Product : Bag',
      desc: ' Desp: Good looking',
      Image: 'images/ash bag.jpg',
      price: ' Price : 32,000',
    },
  
  ]
  $scope.foundList = [];
  $scope.message = '';
  $scope.isVisible = false;
  $scope.show = function (item) {
    $scope.isVisible = true;
  }
  $scope.add = function (item) {

    if (item) {

      $scope.foundList.push({

        name: item.name,
        desc: item.desc,

        price: item.price,

        Image: item.Image,
      });
      $scope.Items += 1;

    }

  };
  $scope.heart = function (event) {



    event.currentTarget.style.color = event.currentTarget.style.color == 'red' ? 'black' : 'red';

  };


  $scope.logPage = true;

  $scope.ContactPage = function () {
    $scope.logPage = true;
  };

  $scope.rocky = { $: undefined };
  $scope.Data = false;

  $scope.womenWatch = function () {
    // $scope.Data= true;
    $scope.isVisible = true;
    $scope.searchText = "boys T-shirts";
  }

  $scope.bikes = function () {
    // $scope.Data= true;

    $scope.isVisible = true;
    $scope.searchText = "college bags";
  }
  $scope.menWatch = function () {
    // $scope.Data= true;

    $scope.isVisible = true;
    $scope.searchText = "pillows";
  }
  $scope.setFilter = function () {
    if ($scope.searchText != "") {
      $scope.Data = true;
      $scope.rocky = $scope.searchText;
    } else {
      $scope.Data = false;
    }
  };





  $scope.remove = function (add) {
    if (add)

      $scope.foundList.splice($scope.foundList.indexOf(add), 1)
    $scope.Items -= 1;
  }


  $scope.rockers = false;
  $scope.openMahesh = function () {
    $scope.rockers = true;
  };
  $scope.backToCart = function () {
    $scope.rockers = false;

};

$scope.in = function(cart){

  cart.quantity++;

};
$scope.de = function(cart){
  if(cart.quantity>0){
    cart.quantity--;
  }
  
};




});