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
    <div class="container mt-5">
        <ul class="list">
          <li class="tab-button">Products</li>
          <li class="tab-button orange">Information</li>
          <li class="tab-button">Shipping</li>
        </ul>
        <div class="tab-content">
          <p>상품설명입니다. Product</p>
        </div>
        <div class="tab-content show">
          <p>스펙설명입니다. Information</p>
        </div>
        <div class="tab-content">
          <p>배송정보입니다. Shipping</p>
        </div>
      </div> 
    
    <script>
        //// 버튼 0 누르면
        // 모든 버튼에 붙은 orange 제거
        // 버튼0에 class orange 추가
        // div에 show 제거
        // div에 show 추가 버튼 0에
        // var 버튼 = $('.tab-button'); 식으로 쓰면 빨라진다. 
    $('.tab-button').eq(0).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(0).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(0).addClass('show');
        
    });

    $('.tab-button').eq(1).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(1).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(1).addClass('show');
        
    });

    $('.tab-button').eq(2).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(2).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(2).addClass('show');
        
    });
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    
  </body>
</html>
