  </head>
  <body>    
    <form class="container my-5 form-group">
        <p>상품선택</p>
        <select class="form-select mt-2">
          <option>모자</option>
          <option>셔츠</option>
          <br>
          <br>

        </select>

    <form class="container my-5 form-group">
        <select class = 'form-select mt-2 form-hide'>
            <option>95</option>
            <option>100</option>
            <option>105</option>
        </select>
    </form>
    
    <script>
        $('.form-select').eq(0).on('click', function(){ 
            var 상품선택 = $('.form-select').eq(0).val();
            if(상품선택 == '셔츠'){
            $('.form-select').eq(1).removeClass('form-hide')
        }
        });
        // Select에서 셔츠와 모자 중 셔츠를 선택 했을 때, 셔츠의 option들이 나오도록 
        

        $('.form-select').eq(0).on('click', function(){
            var 상품선택 = $('.form-select').eq(0).val();
            if(상품선택 == '모자'){
                $('.form-select').eq(1).addClass('form-hide')
            }
        })
        // Select에서 모자를 선택 했을 때, 셔츠의 option이 사라지도록 
    </script>
