<!-- 다크모드 -->
          <span class="badge bg-dark">Dark 🔄</span>
          
          <script>
           // badge클릭 시 내부 글자를 Light로 변경
              var count = 0;
              $('.badge').on('click', function(){
                count = count +1;
                if(count % 2 ==1){
                  $('.badge').html('Light🔄')
                }else{ 
                  $('.badge').html('Dark🔄')

                }
              })
          </script>
