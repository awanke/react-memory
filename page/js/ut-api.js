function gdata(ul, tb){
    $.ajax({url:ul,success:function(d){tb.bootstrapTable({data:JSON.parse(d)})}})}
function load(ul, tb){
    $.ajax({url:ul,success:function(d){tb.bootstrapTable('load',JSON.parse(d))}})}
function gdft(ul, tb){
var ul="http://127.0.0.1:7000/json?func=get_mids"
    $.ajax({url:ul,success:function(d){tb.bootstrapTable({data:JSON.parse(d)})}})}
function gauto(ul, select){
select.select2({
  tags: true,
  tokenSeparators: [',', ' '],
  minimumInputLength: 0,
  ajax: {
    url:ul,
    processResults: function (data, page) {
      var ds = JSON.parse(data);
      var arr = [];
      for(var x in ds){
         // console.log(ds[x]);
          ds[x].id = ds[x].pub_mediaid
          ds[x].text = ds[x].mname + "(" +ds[x].id + ")"
          arr.push(ds[x]); //这个应该是个json对象
      }
      console.log(arr);
      return {results:arr};
    },
  },
})
}

