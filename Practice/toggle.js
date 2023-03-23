<body>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand">Navbar</span>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> 
    
      
        <ul class="list-group">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>

          <script>
            document.querySelector('.list-group')

            document.getElementsByClassName('navbar-toggler')
            [0].addEventListener('click', function(){
                
                document.getElementsByClassName("list-group")[0].classList.toggle('show');
            })
            
          </script>
