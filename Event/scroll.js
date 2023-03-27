<div class = 'lorem' style = 'width: 200px; height:100px; overflow-y: scroll'>
jawtlialwddwladwliadjilwjlijtilwjljila dawjli j idlawd jil dajwlidwj li ajdlwi dwjli
djawlidj wli jdilwaadwj lidajwlidwaj li jilad jiwlad jil jadilj wlia dji
jdawlidj ialwdj ildjilwd jwliadjladjilaw jialm ilmlgln tlan ilan il
jilg sl jagj lajw  qqopw qop op fpoqfmxpolmfq jqopwj eopqm qfmklsgoiweajgals;m ;n
jiwwond wai ns j my favaorriwtnat ssecret numegver j</div>

<script>
$('.lorem').on('scroll', function(){
    var 스크롤양 = document.querySelector('.lorem').scrollTop;
    // 현재 스크롤바 위치 (내린 양)
    var 실제높이 = document.querySelector('.lorem').scrollHeight;
    // 스크롤 가능한 실제높이 
    var 화면높이 = document.querySelector('.lorem').clientHeight;
    // 화면에 보이는 부분 높이
    if(실제높이 -10 < 스크롤양 + 화면높이){
      alert('끝입니다');
    }
  })

</script>

      
