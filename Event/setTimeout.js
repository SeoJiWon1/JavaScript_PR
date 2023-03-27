<div class = 'main-bg'>
  <h4>Shirts on Sale</h4>
  <button id = "login" class = "btn btn-danger">로그인</button>
</div>


<script>
    setTimeout 
    var cnt = 5; 

    setInterval(function(){
      cnt = cnt -1; 
      if(cnt >= 0){
        $('#sec').html(cnt);
      }
    } ,1000);


    // var cnt = 5;

    //   setInterval(function(){
    //     cnt -= 1;
    //     if (cnt >= 0){
    //       document.querySelector('#sec').innerHTML = cnt;
    //     } 
    //   }, 1000);
</script>
