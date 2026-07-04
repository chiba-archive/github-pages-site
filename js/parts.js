/* ================================================================
   以下、Builder で選択したパーツのJS（自動連結）
   ================================================================ */

/* ---- masonry（ui-tools-masonary1） (ui-tools-masonary1) ---- */
//===============================================================
// Masonry + Fancybox + 動画ホバー処理
//===============================================================
$(function () {
  var $grid = $('.ui-tools-maronry1-parts');

  if (!$grid.length) return;

  // iOSで頑固にサムネが出ない場合の「強制描画」処理
  $grid.find('.thumb-video').each(function () {
    var v = this;

    // 1. 属性の強制セット（これがないとJSでの操作が拒否されることがあります）
    $(v).attr({
      'muted': true,       // 必須：音ありだと自動再生とみなされブロックされる
      'playsinline': true, // 必須：全画面にならずに再生する
      'preload': 'metadata'
    });
    
    // 2. 「一瞬だけ再生して、即止める」
    // これを行うと、iOSは必ず映像データを読み込み、描画します。
    var playPromise = v.play();

    if (playPromise !== undefined) {
      playPromise.then(function() {
        // 再生成功（＝読み込み開始）直後にここに来ます
        v.pause();           // 即停止
        v.currentTime = 0.1; // 0.1秒地点を表示
        
        // 動画の高さが確定したはずなので、Masonryレイアウトを再計算
        // （これをしないと動画と次の要素が重なることがあります）
        setTimeout(function(){
            if ($grid.data('masonry')) {
                $grid.masonry('layout');
            }
        }, 100);

      }).catch(function(error) {
        // 省電力モードなどで自動再生が完全にブロックされた場合はここに来ます
        console.log('Autoplay was prevented:', error);
      });
    }
  });

  // 画像(img)の読み込み完了を待ってから Masonry 初期化
  // ※ videoタグはこのimagesLoadedでは感知されないため、上のJS内で layout を呼んでいます
  $grid.imagesLoaded(function () {
    $grid.masonry({
      itemSelector: '.list-parts',
      columnWidth: '.masonry1-size-parts',
      percentPosition: true,
      gutter: 16
    });
  });

  // 画像が1枚ずつ読み込まれたときもレイアウト調整
  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });

  // Fancybox 初期化
  $('[data-fancybox]').fancybox({
    loop: true,
    smallBtn: true,
    toolbar: false
  });

  // マウスホバー時の挙動
  $grid.on('mouseenter', '.is-video video', function () {
    this.play();
  });

  $grid.on('mouseleave', '.is-video video', function () {
    this.pause();
  });
});

/* ---- masonry（ui-tools-masonary1） (ui-tools-masonary1) ---- */
//===============================================================
// Masonry + Fancybox + 動画ホバー処理
//===============================================================
$(function () {
  var $grid = $('.ui-tools-maronry1-parts');

  if (!$grid.length) return;

  // iOSで頑固にサムネが出ない場合の「強制描画」処理
  $grid.find('.thumb-video').each(function () {
    var v = this;

    // 1. 属性の強制セット（これがないとJSでの操作が拒否されることがあります）
    $(v).attr({
      'muted': true,       // 必須：音ありだと自動再生とみなされブロックされる
      'playsinline': true, // 必須：全画面にならずに再生する
      'preload': 'metadata'
    });
    
    // 2. 「一瞬だけ再生して、即止める」
    // これを行うと、iOSは必ず映像データを読み込み、描画します。
    var playPromise = v.play();

    if (playPromise !== undefined) {
      playPromise.then(function() {
        // 再生成功（＝読み込み開始）直後にここに来ます
        v.pause();           // 即停止
        v.currentTime = 0.1; // 0.1秒地点を表示
        
        // 動画の高さが確定したはずなので、Masonryレイアウトを再計算
        // （これをしないと動画と次の要素が重なることがあります）
        setTimeout(function(){
            if ($grid.data('masonry')) {
                $grid.masonry('layout');
            }
        }, 100);

      }).catch(function(error) {
        // 省電力モードなどで自動再生が完全にブロックされた場合はここに来ます
        console.log('Autoplay was prevented:', error);
      });
    }
  });

  // 画像(img)の読み込み完了を待ってから Masonry 初期化
  // ※ videoタグはこのimagesLoadedでは感知されないため、上のJS内で layout を呼んでいます
  $grid.imagesLoaded(function () {
    $grid.masonry({
      itemSelector: '.list-parts',
      columnWidth: '.masonry1-size-parts',
      percentPosition: true,
      gutter: 16
    });
  });

  // 画像が1枚ずつ読み込まれたときもレイアウト調整
  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });

  // Fancybox 初期化
  $('[data-fancybox]').fancybox({
    loop: true,
    smallBtn: true,
    toolbar: false
  });

  // マウスホバー時の挙動
  $grid.on('mouseenter', '.is-video video', function () {
    this.play();
  });

  $grid.on('mouseleave', '.is-video video', function () {
    this.pause();
  });
});
