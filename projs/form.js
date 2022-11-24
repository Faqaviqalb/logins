var edits;
$(document).ready(() =>{
    getList()
    $('#save').on('click' , ()=>{
        let value=getCookie('form');
        value += $('#name').val()+','+$('#code').val()+','+$('input[type=radio]:checked').val()+','+$('#phone').val()+','+$('#money').val()+'@'
        setCookie('form' , value , 2);
        getList()
    }) 
    
    $(document).on("click",'.delete',function(){
      let codez = $(this).closest('tr').find('td:eq(1)').text()
      delList(codez)
    });


 $(document).on("click",'#editIt',function(){
  editList(edits)
 })

  $(document).on("click",'.btn-close',function(){
    $('#theModal').css({display: 'none'})
  });

  getList()

})

function getList(){
  $.ajax({
    method: 'POST',
    dataType: 'json'
  }).done(function(data){
    let rows =data.split('@'); 
    let cols =[];
    for(i in rows){
        cols.push(rows[i].split(','));   
    }
    let table ='';
    for(i=0 ; i<rows.length-1 ;i++){
        table += '<tr>'
        for(j=0 ; j<cols[i].length ;j++){
            table += '<td>'+cols[i][j]+'</td>'
        }
        table+='<td><button type="button" class="delete btn btn-danger">'+'حذف'+'</button>'+'<button type="button" class="edit btn btn-success me-2">'+'ویرایش'+'</button></td>'+'</tr>'
    }
    $('tbody').html(table)

  })
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring0(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function getList(){
    let names = getCookie('form');
    let rows =names.split('@'); 
    let cols =[];
    for(i in rows){
        cols.push(rows[i].split(','));   
    }
    let table ='';
    for(i=0 ; i<rows.length-1 ;i++){
        table+='<tr>'
        for(j=0 ; j<cols[i].length ;j++){
            table+='<td>'+cols[i][j]+'</td>'
        }
        table+='<td><button type="button" class="delete btn btn-danger">'+'حذف'+'</button>'+'<button type="button" class="edit btn btn-success me-2">'+'ویرایش'+'</button></td>'+'</tr>'
    }
    $('tbody').html(table)
}

$(document).on("click",'.edit',function(){
  $('#theModal').modal('show')
  let nam = $(this).closest('tr').find('td:eq(0)').text()
  $('#name').attr('value', nam);
  let codmelli = $(this).closest('tr').find('td:eq(1)').text()
  $('#code').attr('value', codmelli);
  let jens = $(this).closest('tr').find('td:eq(2)').text()
  $("input[name=optradio][value=" + jens + "]").prop('checked', true);
  let tel = $(this).closest('tr').find('td:eq(3)').text()
  $('#phone').attr('value', tel);
  let mojudi = $(this).closest('tr').find('td:eq(4)').text()
  $('#money').attr('value', mojudi);
  edits = $(this).closest('tr').find('td:eq(1)').text()

});

function delList(codezz){
  let names = getCookie('form');
  let rows =names.split('@'); 
  let cols =[];
  let tens = [];
  for(i in rows){
      cols.push(rows[i].split(','));   
  }
  console.log(rows)
  for(i=0 ; i<rows.length ;i++){
      if(cols[i][1]!= codezz){
        tens.push(cols[i]);
      }  
  }
  console.log(tens)
  let newStr=tens.join('@')
  console.log(newStr)
  setCookie('form',newStr,2);
  getList()
}
function editList(editss){
  let names = getCookie('form');
  let rows =names.split('@'); 
  let cols =[];
  let tens = [];
  for(i in rows){
      cols.push(rows[i].split(','));   
  }
  console.log(rows)
  for(i=0 ; i<rows.length ;i++){
      if(cols[i][1]!= editss){
        tens.push(cols[i]);
      }
      else{
        let value='';
        value += $('#name').val()+','+$('#code').val()+','+$('input[type=radio]:checked').val()+','+$('#phone').val()+','+$('#money').val()
        let after=value.split(',');
        tens.push(after)
      }  
  }

  console.log(tens)
  let newStr=tens.join('@')
  console.log(newStr)
  setCookie('form',newStr,2);
  getList()
}