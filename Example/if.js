//if 조건문 예시
<script>
    function 공인중개사합격스카우터(개론, 민법){
        if((개론>100 || 개론<0) || (민법 >100|| 개론<0)){
            console.log('장난치지마라');
        }
        else if(개론<40 || 민법 <40){
            console.log('불합격');
        }
        else if(개론 + 민법 <120){
            console.log('불합격');
        }else{
            console.log('합격');
        }
        
    }
</script>
