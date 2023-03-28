<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="detail.css" rel = "stylesheet">

    <!-- jsquery 표시  -->
    <script 
            src="https://code.jquery.com/jquery-3.6.4.min.js"
            integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
            crossorigin="anonymous"></script>

    <title>Bootstrap</title>

  </head>
  <body>
    <div class="card-group container">
        <div class="card">
          <img src="https://via.placeholder.com/600">
          <div class="card-body">
            <h5 class = 'ct'>Card title</h5>
            <p class = 'cp'>가격 : 70000</p>
            <button class="btn btn-danger">주문하기</button>
          </div>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/600">
          <div class="card-body">
            <h5 class ='ct'>Card title</h5>
            <p class = 'cp'>가격 : 70000</p>
            <button class="btn btn-danger">주문하기</button>
          </div>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/600">
          <div class="card-body">
            <h5 class = 'ct'>Card title</h5>
            <p class = 'cp'>가격 : 70000</p>
            <button class="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
      
      <script>
        var products = [
          { id : 0, price : 70000, title : 'Blossom Dress' },
          { id : 1, price : 50000, title : 'Springfield Shirt' },
          { id : 2, price : 60000, title : 'Black Monastery' }
        ];  

        for( let i =0; i < products.length; i++ ) {
            $('.ct').eq(i).html(products[i].title);
            $('.cp').eq(i).html(products[i].price);
        }
        
      </script> 

      

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    
  </body>
</html>
