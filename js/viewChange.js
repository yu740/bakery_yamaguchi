$(function(){
    $('.category').change(function () {
      //選択したoptionのvalueを取得
      var val = $(this).val();
      //先頭に#を付けてvalueの値をidに変換
      var selectPhotoId = '#' + val;
      //一度すべてのブロックを非表示にする
      $('.item-list .none-select').hide();
      //選択したブロックのみを表示
      $(selectPhotoId).show();
    });
});